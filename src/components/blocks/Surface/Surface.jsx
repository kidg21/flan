import React from "react";
import PropTypes from "prop-types";
import * as lbReactCore from "../../index";

const interpolate = (templateString, records) => {
  const funcBody = `"use strict"; return (function (records) { return \`${templateString}\`})`;
  // eslint doesn't like this, but it's at least better than eval according to MDN so ¯\_(ツ)_/¯:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!
  // eslint-disable-next-line no-new-func
  const output = Function(`${funcBody}`)()(records);
  return output;
};

const parseContent = (rawContent) => {
  const parsedSections = rawContent.sections.map((rawSection) => {
    // parse the raw display fields (values converted from template strings to literal values)
    const parsedDisplayFields = rawSection.displayFields.map((rawDisplayField) => {
      return {
        ...rawDisplayField,
        value: interpolate(rawDisplayField.value, rawSection.records),
      };
    });

    // parse the raw commands
    const parsedCommands = rawSection.commands.map((rawCommand) => {
      // not doing anything here right now, but later we may pass in Command components
      // or need to instantiate command objects here before passing into presentational template
      return {
        ...rawCommand,
      };
    });

    // return the new section with the displayFields and commands replaced by their parsed versions
    return {
      ...rawSection,
      displayFields: parsedDisplayFields,
      commands: parsedCommands,
    };
  });
  return {
    ...rawContent,
    sections: parsedSections,
  };
};

const Surface = (props) => {
  let output = null;
  if (typeof props.template === "function") {
    // Built-in template
    output = (<props.template content={parseContent(props.content)} />);
  } else if (typeof props.template === "string") {
    // Custom template string we need to execute to render html
    const funcBody = `return (function (props, React, lbReactCore) { return (${props.template})})`;
    // eslint-disable-next-line no-new-func
    output = Function(`${funcBody}`)()({ content: parseContent(props.content) }, React, lbReactCore);
  } else {
    console.log("Invalid template format: Please use a React component or a JS string");
  }
  return output;
};

Surface.propTypes = {
  template: PropTypes.oneOf([PropTypes.function, PropTypes.string]).isRequired,
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      records: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
      displayFields: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onClick: PropTypes.func,
      })),
      commands: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string,
        onClick: PropTypes.func.isRequired,
      })),
    })).isRequired,
  }).isRequired,
};

export default Surface;
