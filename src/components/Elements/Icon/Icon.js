import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';


//Dark dark gray icon. Used for Edit buttons and Navigation. Basic Default Icon style.
const CardIcon = styled.i`
  color: dimgray;
  cursor: pointer;
  display: inline-block;
  transition: opacity .2s ease-in;

  &:hover {
    color: darkgray;
  }
`


const propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
  };
  
  const defaultProps = {
    label: 'Icon Label',
    disabled: false,
  };
  
  function Icon() {
    return (
      <Icon/>
    );
    }
  
  Icon.propTypes = propTypes;
  Icon.defaultProps = defaultProps;
  export default CardIcon;