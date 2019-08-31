import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { fonts, colors, shadows } from "Variables";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import Grid from "layout/Grid";

const Form = styled.form`
  display: grid;
  grid-gap: 0.75rem;
  flex: auto;
  align-content: flex-start;
  padding: 1rem 1.5rem;
  background-color: ${props => (props.bg_light ? colors.grey_light : colors.white)};
  ${props =>
    props.dark &&
    css`
      color: ${colors.grey_light};
      background-color: ${props => colors.grey_dark};
      * {
        color: ${colors.grey_light} !important;
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

const Title = styled.h3`
  color: ${colors.grey_60};
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
  color: ${colors.grey_80};
  font-weight: 700;
  // letter-spacing: 1px;
  margin-bottom: 0;
`;
const Label = styled.label`
  color: inherit;
  font-weight: 700;
  user-select: none;
  cursor: pointer;
  &:after {
    content: "*";
    display: ${props => (props.isRequired ? "" : "none")};
    color: ${colors.alert};
    font-size: 1.5em;
    line-height: 0;
    vertical-align: middle;
    padding-left: .25em;
  }
`;
const InputLabel = props => (
  <Label isRequired={props.isRequired} className={props.className}>
    {props.inputLabel}
  </Label>
);

const Help = styled.label`
  grid-column: 1 / -1;
  color: inherit;
`;
const HelpText = props => <Help>{props.helpText}</Help>;

const Error = styled.label`
  grid-column: 1 / -1;
  color: ${colors.alert};
`;
const ErrorText = props => <Error>{props.errorText}</Error>;

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
  Title,
  CenteredSection,
  Section,
  SectionName,
  InputLabel,
  HelpText,
  ErrorText,
  InputGroup,
};
