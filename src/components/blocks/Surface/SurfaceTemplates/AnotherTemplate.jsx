import React from "react";
import PropTypes from "prop-types";

const AnotherTemplate = (props) => {
  return (
    <div>
      {props.content.sections.map((section) => {
        return (
          <ul>
            {section.displayFields.map((displayField) => {
              return (
                <li>{displayField.label} : {displayField.value}</li>
              );
            })}
            <br /><br />
          </ul>
        );
      })}
    </div>
  );
};

AnotherTemplate.propTypes = {
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

export default AnotherTemplate;
