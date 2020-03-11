/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import Panel from "layout/Panel";
import Legend from "blocks/Legend";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";

// The following component is just to show how to iterate through all the data
const SummaryPanelTemplate = (props) => {
  let menuData = [];
  const content = props.content.sections.map((section) => {
    if (section.commands.length > 0) {
      if (section.title) {
        // if we have a section title, these commands will
        // be nested under a sub-menu titled after the section
        menuData.push({
          id: `${section.id}-menu`,
          label: section.title,
          commands: section.commands,
        });
      } else {
        // section does not have a title, so the commands
        // will just be placed on the root level of the menu
        menuData = section.commands.concat(menuData);
      }
    }

    return (
      <React.Fragment>
        <Legend
        title={section.title}
          data={section.displayFields}
        />
      </React.Fragment>
    );
  });
  return (
    <Panel
      header={
        <MainPanelHeader
          title={props.content.title}
          menuData={menuData}
        />}
    >
      {content}
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
