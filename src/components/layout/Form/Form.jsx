import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
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
      background-color: ${colors.grey_dark};
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

const Header = styled.h3`
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
  font-weight: 700;
  user-select: none;
  color: inherit;
  cursor: pointer;
  &:after {
    display: ${props => (props.isRequired ? "" : "none")};
    content: "*";
    color: ${colors.alert};
    font-size: 1.25rem;
    line-height: 0;
    vertical-align: middle;
    padding-left: 0.25em;
  }
`;
function InputLabel({ label, isRequired, className, children }) {
  return (
    <Label isRequired={isRequired} className={className}>
      {label || children}
    </Label>
  );
}

const Help = styled(Label)`
  color: initial;
  font-weight: initial;
  cursor: initial;
`;
function HelpText({ helpText, children }) {
  return <Help>{helpText || children}</Help>;
}

const Error = styled(Label)`
  color: ${colors.alert};
  cursor: initial;
`;
function ErrorText({ errorText, children }) {
  return <Error>{errorText || children}</Error>;
}

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
