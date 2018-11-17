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
    const { label, labelProps, inputProps, ...input } = this.props;
    return (
      <InputLabel id={`label_${this.props.id}`} {...labelProps}>
        <CheckboxInput
          readOnly
          type="checkbox"
          {...input}
          {...inputProps}
        />
        {label}
      </InputLabel>
    );
  }
}

Checkbox.defaultProps = {
  checked: false,
  label: null,
  labelProps: null,
  inputProps: null,
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string,
  labelProps: PropTypes.shape({
    isRequired: PropTypes.bool,
  }),
  inputProps: PropTypes.shape(),
};

export default Checkbox;
