/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import Panel from "layout/Panel";
import Menu from "blocks/Menu";
import Legend from "blocks/Legend";
import Divider from "atoms/Divider";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";

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
    <Panel
      header={
        <MainPanelHeader title={props.content.title} />}
    >
      {props.content.sections.map((section) => {
        return (
          <React.Fragment>         
            <Menu
              data={section.commands}
            />
            <Legend
            title={section.title} 
              data={section.displayFields}
            />
            <Divider />
          </React.Fragment>
        );
      })}
    </Panel>
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
