/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Panel from "layout/Panel";
import Command from "atoms/Command";
import Menu from "blocks/Menu";
import Legend from "blocks/Legend";
import Form, { Section } from "layout/Form";
import Divider from "atoms/Divider";
import Text, { Title, Link } from "base/Typography";
import Grid from "layout/Grid";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";


const TableContainer = styled.table`
  width: 100%;
  color: ${(props) => {
    return props.theme.text.primary;
  }};
  table-layout: fixed;
  border-collapse: collapse;
  min-width: 400px;
`;

const Row = styled.tr`
  margin: 1em;
`;

const Cell = styled.td`
  padding: 0.25em;
  `;

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
        <Title text={section.title} />
        <Legend
          data={section.displayFields}
        />
        <Divider />
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
