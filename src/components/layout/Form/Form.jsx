import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import Grid from "layout/Grid";

const Form = styled.form`
  display: grid;
  grid-gap: 0.75rem;
  flex: auto;
  align-content: flex-start;
  padding: 1rem 1.5rem;
  background-color: ${props =>{ return props.theme.background.default;}}
  color: ${props => {
        return props.theme.divider;
      }};
    `;
  /* Prototype Content - displays when a Form is empty */
//   &:empty {
//     &:before {
//       ${PlaceholderText}
//       content: "{ Form } \00000A 'Displays a grid of user inputs in responsive columns'";
//     }
//   }
// `;

const Header = styled.h3`
  color: ${props => {
    return props.theme.text.primary;
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
    return props.theme.text.primary;
  }};
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
    color: ${props => {
      return props.theme.palette.alert;
    }};
    font-size: 1.25rem;
    line-height: 0;
    vertical-align: middle;
    padding-left: 0.25em;
  }
`;
function InputLabel({ label, isRequired, className, children, ...props }) {
  return (
    <Label isRequired={isRequired} className={className} {...props}>
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
  color: ${props => {
    return props.theme.palette.alert;
  }};
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
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
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
