import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
background: ${props => (props.primary ? 'navy' : 'olivedrab')}; 
color: ${props => (props.primary ? 'white' : 'white')};

${props => props.isSecondary && css` background: white; color: black; border: 2px solid black; `};
${props => props.isDisabled && css` color: grey; background: lightgrey; border: 2px solid gray; `};
margin: 0.5em;
padding: 10px 0;
width: ${props => (props.isLarger ? '100%' : '150px')};
border: 0;
font-weight: 500;
border-radius: 35px;
box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
cursor: pointer;

&:hover {
  box-shadow: 0 12px 12px rgba(0, 0, 0, .16);
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