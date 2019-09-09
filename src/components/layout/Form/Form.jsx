import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import Grid from "layout/Grid";

const Form = styled.form`
  display: grid;
  grid-gap: 0.75rem;
  flex: auto;
  align-content: flex-start;
  padding: 1rem 1.5rem;
  background-color: ${props => (props.bg_light ? props.theme.divider : props.theme.background)};
  ${props =>
    props.dark &&
    css`
      color: ${props => {
        return props.theme.divider;
      }};
      background-color: ${props => {
        return props.theme.disabled;
      }};
      * {
        color: ${props => {
          return props.theme.divider;
        }}; !important;
      }
    `}
  /* Prototype Content - displays when a Form is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "{ Form } \00000A 'Displays a grid of user inputs in responsive columns'";
    }
  }
`;

const Header = styled.h3`
  color: ${props => {
    return props.theme.textColor;
  }};
  line-height: normal;
  letter-spacing: 2px;
  margin: 0;
`;

const CenteredSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Section = styled.section`
  display: grid;
  /* grid-gap: 0.75rem; */
  grid-gap: 1rem;
  flex: auto;
  margin-bottom: 1.5rem;
  /* Prototype Content - displays when a Form is empty */
`;

const SectionName = styled.h5`
  color: ${props => {
    return props.theme.textColor;
  }};
  font-weight: 700;
  // letter-spacing: 1px;
  margin-bottom: 0;
`;
const Label = styled.label`
  display: flex;
  font-family: Arial;
  justify-content: space-between;
  align-items: center;
  grid-column: 1 / -1;
  user-select: none;
  font-size: smaller;
  font-weight: 400;
  letter-spacing: 1px;
  color: inherit;
  cursor: pointer;
  &:after {
    content: "*";
    display: ${props => (props.isRequired ? "" : "none")};
    line-height: 0;
    font-size: 1.5rem;
    color: ${props => {
      return props.theme.alert;
    }};
  }
`;
const InputLabel = props => <Label isRequired={props.isRequired}>{props.inputLabel}</Label>;

const Help = styled.label`
  grid-column: 1 / -1;
  color: inherit;
  font-size: smaller;
  letter-spacing: 1px;
`;
const HelpText = props => <Help>{props.children || props.helpText}</Help>;

const Error = styled.label`
  grid-column: 1 / -1;
  color: ${props => {
    return props.theme.alert;
  }};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
`;
const ErrorText = props => <Error>{props.children || props.errorText}</Error>;

const InputGroup = styled(Grid)`
  /* Prototype Content - displays when a Form is empty */
  &:empty {
    &:before {
      content: "{ InputGroup }";
    }
  }
`;

InputLabel.propTypes = {
  inputLabel: PropTypes.string,
  isRequired: PropTypes.bool,
};

HelpText.propTypes = {
  helpText: PropTypes.string,
};

ErrorText.propTypes = {
  errorText: PropTypes.string.isRequired,
};

export {
  Form as default,
  Header,
  CenteredSection,
  Section,
  SectionName,
  InputLabel,
  HelpText,
  ErrorText,
  InputGroup,
};
