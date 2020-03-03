import React from "react";
import PropTypes from "prop-types";

/*
content passed in via props will look like this:
{
  title: "The title of the surface",
  sections: [
    {
      title: "The title of the first section",
      displayFields: [
        {
          label: "The label of a key-val pair in section 1",
          value: "The value of a key-val pair in section 1",
          onClick: () => { // a func to be executed when the user clicks on this field},
        }
        {
          // another field
        }
      ],
      commands: [
        {
          label: "A command to be included in the 1st section",
          icon: "an icon to use -- not sure on format yet...",
          onClick: () => { // a func to be executed when the user clicks on this command },
        },
        {
          // another command
        }
      ]
    },
    {
      // another section
    }
  ]
}
*/

// The following component is just to show how to iterate through all the data
const SummaryPanelTemplate = (props) => {
  return (
    <div>
      {/* surface title */}
      <h2>{props.content.title}</h2>
      <br />
      {/* map through each section */}
      {props.content.sections.map((section) => {
        return (
          <div>
            <h4>{section.title}</h4>
            {/* map through eac section's display field (key-value pairs) */}
            {section.displayFields.map((displayField) => {
              let displayFieldValue = displayField.value;
              // some displayFields have an onClick, those need to be attached to the value
              // so the value becomes like a link/command instead of just plain text
              if (displayField.onClick) {
                displayFieldValue = (
                  <button onClick={displayField.onClick}>
                    {displayField.value}
                  </button>);
              }
              return (
                <div>{displayField.label} : {displayFieldValue}</div>
              );
            })}
            {/* finally, map through the section's standalone commands */}
            {section.commands.length > 0 ? "Commands:" : null}
            {section.commands.map((command) => {
              return (<button onClick={command.onClick}>{command.label}</button>);
            })}
            <br /><br />
          </div>
        );
      })}
    </div>
  );
};

SummaryPanelTemplate.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    sections: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
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
    })),
  }).isRequired,
};

export default SummaryPanelTemplate;