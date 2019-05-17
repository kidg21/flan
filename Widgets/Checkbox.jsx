import styled from "styled-components";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const CheckboxInput = styled.input`
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  margin: 1em;
`;

const InputLabel = styled.label`
  color: #4b4844;
  cursor: pointer;
  display: inline-block;
  text-align: left;
`;

class Checkbox extends PureComponent {
  render() {
    const { label, labelProps, ...input } = this.props;
    return (
      <React.Fragment>
        <CheckboxInput
          readOnly
          type="checkbox"
          {...input}
        />
        <InputLabel id={`label_${this.props.id}`} {...labelProps}>
          {label}
        </InputLabel>
      </React.Fragment>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string,
  labelProps: PropTypes.shape({
    isRequired: PropTypes.bool,
  }),
};

export default Checkbox;
