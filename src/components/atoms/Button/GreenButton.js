import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
background: white;
border: 2px solid #75AB3F;
color: #6ba531;
margin: 0.5em;
padding: 2px;
font-size: 16px;
font-weight: bold;
width: 8em;
height: 35px;
border-radius: 40px;
cursor: pointer;
transition: opacity .15s;

&:hover {
    background: #75AB3F;
    color: white;
}

&:active {
    background: red;
    color: white;
}
`





const propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  label: 'Button Label',
  disabled: false,
};

function Button({ disabled, label, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      style={styles}
    >
      {label}
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default StyledButton;