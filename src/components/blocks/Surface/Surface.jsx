/* eslint-disable no-new-func */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import * as lbReactCore from "../../index";

const interpolate = (templateString, records) => {
  const funcBody = `"use strict"; return (function (records) { return \`${templateString}\`})`;
  // eslint doesn't like this, but it's at least better than eval according to MDN so ¯\_(ツ)_/¯:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!
  const output = Function(`${funcBody}`)()(records);
  return output;
};

// If fieldFilter prop is passed in by user and a section is missing displayFields,
// then that func will be used to filter out the raw record fields before displaying
// if user does not pass a fieldFilter func, then this one will be used to exclude empty fields
// and system fields
const defaultFieldFilter = (pKey, val) => {
  const key = pKey && pKey.toUpperCase();
  if (key.startsWith("_")
    || key === "GEOMETRY"
    || key === "SIDX"
    || key === "DRAW_TYPE") {
    return false;
  }
  if (val === undefined
    || val === null
    || val === "") {
    return false;
  }
  return true;
};

const parseContent = (rawContent, fieldFilter, surfaceId, getCommandInstance) => {
  const parsedSections = rawContent.sections.map((rawSection) => {
    // parse the raw display fields (values converted from template strings to literal values)
    let parsedDisplayFields = [];
    if (rawSection.displayFields
      && rawSection.displayFields instanceof Array
      && rawSection.displayFields.length > 0) {
      // content has displayFields defined, then we will use those to  determine what key-val pairs to display
      parsedDisplayFields = rawSection.displayFields.map((rawDisplayField) => {
        const parsedField = {
          ...rawDisplayField,
          value: interpolate(rawDisplayField.value, rawSection.records),
        };
        if (parsedField.commandId) {
          const cmdObj = getCommandInstance(surfaceId, parsedField.commandId);
          parsedField.onClick = cmdObj.exec;
        }
        return parsedField;
      });
    } else if (rawSection.records
      && rawSection.records instanceof Array
      && rawSection.records.length > 0) {
      // no displayFields so we will just show the raw key-value pairs provided in the records array
      // excluding empty fields and system fields (or w/e fields are excluded by fieldFilter if provided by user)
      rawSection.records.forEach((record) => {
        Object.keys(record).forEach((rawFieldName) => {
          // need to be careful to not include any key-val pairs where the
          // val isn't a string, as this will cause issues when rendering
          const fieldValue = record[rawFieldName];
          if (fieldFilter(rawFieldName, fieldValue)) {
            parsedDisplayFields.push({
              label: rawFieldName,
              value: record[rawFieldName].toString(),
            });
          }
        });
      });
    }

    let parsedCommands = [];
    // parse the raw commands
    if (rawSection.commands
      && rawSection.commands instanceof Array
      && rawSection.commands.length > 0) {
      parsedCommands = rawSection.commands.map((cmdId) => {
        // not doing anything here right now, but later we may pass in Command components
        // or need to instantiate command objects here before passing into presentational template
        const cmdObj = getCommandInstance(surfaceId, cmdId);
        const cmdName = cmdObj.getName();
        const cmdIcon = cmdObj.getIcon ? cmdObj.getIcon() : null;
        return {
          id: cmdId,
          label: cmdName,
          onClick: cmdObj.exec,
          icon: cmdIcon,
        };
      });
    }

    // return the new section with the displayFields and commands replaced by their parsed versions
    return {
      ...rawSection,
      displayFields: parsedDisplayFields,
      commands: parsedCommands,
      id: `${surfaceId}-${rawSection.title}`,
    };
  });
  return {
    ...rawContent,
    sections: parsedSections,
  };
};

const Surface = ({
  surfaceTemplate: SurfaceTemplate,
  getCommandInstance,
  content,
  fieldFilter,
  id,
}) => {
  let output = null;
  const parsedContent = parseContent(content, fieldFilter, id, getCommandInstance);
  if (typeof SurfaceTemplate === "function") {
    // Built-in template
    output = (<SurfaceTemplate content={parsedContent} />);
  } else if (typeof SurfaceTemplate === "string") {
    // Custom template string we need to execute to render html
    const funcBody = `return (function (props, React, lbReactCore) { return (${SurfaceTemplate})})`;
    output = Function(`${funcBody}`)()({ content: parsedContent }, React, lbReactCore);
  } else {
    console.log("Invalid template format: Please use a React component or a JS string");
  }
  return output;
};

Surface.defaultProps = {
  fieldFilter: defaultFieldFilter,
};

Surface.propTypes = {
  id: PropTypes.string.isRequired,
  fieldFilter: PropTypes.func,
  surfaceTemplate: PropTypes.oneOf([PropTypes.function, PropTypes.string]).isRequired,
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      records: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
        PropTypes.objectOf(PropTypes.object),
      ]).isRequired,
      displayFields: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onClick: PropTypes.func,
      })), PropTypes.string]),
      commands: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string,
        onClick: PropTypes.func.isRequired,
      })), PropTypes.string]),
    })).isRequired,
  }).isRequired,
};

export default Surface;
