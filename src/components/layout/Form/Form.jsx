import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { fonts, colors, shadows } from "../../base/Variables/Variables";
import { PlaceholderText } from "../../_helpers/Placeholders";

const Form = styled.form`
  display: grid;
  grid-gap: .5rem;
  flex: auto;
  align-content: flex-start;
  padding: 1rem 1.5rem;
  background-color: ${props => (props.white ? colors.white : "")};
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
  grid-gap: .75rem;
  margin-bottom: .5rem;
  /* Prototype Content - displays when a Form is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "{ InputBlock } \00000A ''";
    }
  }
`;

const Label = styled.h5`
  color: ${colors.grey_40};
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 0;
`;
const InputBlockLabel = props => <Label>{props.label}</Label>;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-template-columns: ${props => (props.fullWidth ? "repeat(1, 1fr)" : "")};
  grid-gap: 1rem;
  /* Prototype Content - displays when a Form is empty */
  &:empty {
    &:before {
      ${InputGroup}
      content: "{ InputGroup } \00000A ''";
    }
  }
`;

FormTitle.defaultProps = {
  title: "Form Title"
};
InputBlockLabel.defaultProps = {
  label: "Input Block Label"
};

FormTitle.propTypes = {
  title: PropTypes.string
};
InputBlockLabel.propTypes = {
  label: PropTypes.string.isRequired
};
InputGroup.propTypes = {
  fullWidth: PropTypes.string
};

export { Form as default, FormTitle, InputBlock, InputBlockLabel, InputGroup };
