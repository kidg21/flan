import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Panel from "layout/Panel";
import Command from "atoms/Command";
import Menu from "blocks/Menu";
import Form, {Section} from "layout/Form";
import Divider from "atoms/Divider";
import Text, {Title, Link} from "base/Typography";
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
  return (
    <Panel
    header={
      <MainPanelHeader title={props.content.title}/>}>
      {props.content.sections.map((section) => {
        return (
          <React.Fragment>
            <Title text={section.title}/>
            {/* map through eac section's display field (key-value pairs) */}
            {section.displayFields.map((displayField) => {
              let displayFieldValue = displayField.value;
              // some displayFields have an onClick, those need to be attached to the value
              // so the value becomes like a link/command instead of just plain text
              if (displayField.onClick) {
                displayFieldValue = (
                  <Link onClick={displayField.onClick} text={displayField.value} />);
              }
              return (
                <TableContainer><Row><Cell><Text text={displayField.label}/></Cell><Cell><Text weight="bold" text={displayFieldValue}/></Cell></Row></TableContainer>
              );
            })}
            {/* finally, map through the section's standalone commands */}
            {section.commands.length > 0 ? "" : null}
            <Grid>
            {section.commands.map((command) => {
              return (<Command onClick={command.onClick} label={command.label}/>);
            })}</Grid>
             <Divider/>
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
