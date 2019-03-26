import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
background: white;
border: 1px solid #60AAD2;
color: #3c93c1;
font-size: 14px;
font-weight: bold;
width: 8em;
height: 2.3em;
text-align:center;
vertical-align: middle;
border-radius: 20px;
cursor: pointer;
transition: opacity .15s;

&:hover {
    background: #60AAD2;
    color: white;
}

&:active {
    background: #60AAD2;
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