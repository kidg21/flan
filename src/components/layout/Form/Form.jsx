import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { fonts, colors, shadows } from "../../../attributes/Variables/Variables";
import { PlaceholderText } from "../../_helpers/Placeholders";

const Form = styled.form`
  display: grid;
  grid-gap: 0.5rem;
  flex: auto;
  align-content: flex-start;
  padding: 1rem 1.5rem;
  background-color: ${props =>
    props.bg_light ? colors.grey_light : colors.white};
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
  letter-spacing: 2px;
  margin: 0;
`;
const FormTitle = props => <Title>{props.title}</Title>;

const InputBlock = styled.section`
  display: grid;
  grid-gap: 0.75rem;
  flex: auto;
  margin-bottom: 0.5rem;
  /* Prototype Content - displays when a Form is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "{ InputBlock } \00000A ''";
    }
  }
`;

const Label = styled.h5`
  color: ${colors.grey_60};
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 0;
`;
const InputBlockLabel = props => <Label>{props.label}</Label>;

const Help = styled.label`
  grid-column: 1 / -1;
  font-size: smaller;
  font-weight: 700;
  letter-spacing: 1px;
`;
const HelpText = props => <Help>{props.helpText}</Help>;

const Error = styled.label`
  grid-column: 1 / -1;
  color: ${colors.alert};
  font-size: smaller;
  font-weight: 700;
  letter-spacing: 1px;
`;
const ErrorText = props => <Error>{props.errorText}</Error>;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 0.75rem;
  /* Prototype Content - displays when a Form is empty */
  &:empty {
    &:before {
      ${InputGroup}
      content: "{ InputGroup } \00000A ''";
    }
  }
`;
const InputGroup_1_Colunn = styled(InputGroup)`
  grid-template-columns: repeat(1, 1fr);
`;
const InputGroup_2_Colunn = styled(InputGroup)`
  grid-template-columns: repeat(2, 1fr);
`;
const InputGroup_3_Colunn = styled(InputGroup)`
  grid-template-columns: repeat(3, 1fr);
`;

FormTitle.defaultProps = {
  title: "Form Title"
};
InputBlockLabel.defaultProps = {
  label: "Input Block Label"
};
HelpText.defaultProps = {
  helpText: "Help Text Goes Here"
};
ErrorText.defaultProps = {
  errorText: "This message appears when the input is invalid"
};

FormTitle.propTypes = {
  title: PropTypes.string
};
InputBlockLabel.propTypes = {
  label: PropTypes.string.isRequired
};
HelpText.propTypes = {
  helpText: PropTypes.string
};
ErrorText.propTypes = {
  errorText: PropTypes.string.isRequired
};

export {
  Form as default,
  FormTitle,
  InputBlock,
  InputBlockLabel,
  HelpText,
  ErrorText,
  InputGroup,
  InputGroup_1_Colunn,
  InputGroup_2_Colunn,
  InputGroup_3_Colunn
};
