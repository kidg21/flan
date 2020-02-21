import React from "react";
import SummaryPanel from "./SurfaceTemplates/SummaryPanelTemplate.jsx";
import PropTypes from "prop-types";

const templateComponents = {
  SummaryPanel,
};

// const interpolate = function(params) {
//   const names = Object.keys(params);
//   const vals = Object.values(params);
//   return new Function(...names, `return \`${this}\`;`)(...vals);
// }

// const template = 'Example text: ${text}';
// const result = template.interpolate({
//   text: 'Foo Boo'
// });

const interpolate = (template, records) => {
  const funcBody = `"use strict"; return (function (records, numberFormatter) { return \`${template.value}\`})`;
  // eslint doesn't like this, but it's better than eval according to MDN:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!
  // eslint-disable-next-line no-new-func
  const output = Function(`${funcBody}`)()(records, Intl.NumberFormat);
  return output;
};

const GenericSurface = (props) => {
  const Template = templateComponents[props.templateName || "SummaryPanel"];
  const parsedContent = props.content[0].displayFields.map((field) => {
    return {
      ...field,
      value: interpolate(field, props.content[0].records),
    };
  });
  return (<Template message={"Hello there"} content={parsedContent} />);
};

GenericSurface.propTypes = {
  templateName: PropTypes.string.isRequired,
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequied,
      data: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        onClick: PropTypes.func,
      })).isRequired,
      commands: PropTypes.arrayOf(PropTypes.shape({

      })).isRequired,
    })),
  }).isRequired,
};

export default GenericSurface;