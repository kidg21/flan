import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';


const CardInput = styled.input`
  padding: 8px;
  display: flex;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 3px;
  transition: border .25s ease-in;
  background: ${props => props.Grey ? '#F2F3F4' : 'white'};

  &:focus {
    border: DodgerBlue}
  }
`


const propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
  };
  
  
  function Input() {
    return (
        <Input
        placeholder='Input here'
        type='text'
      />
    );
    }
  
  Input.propTypes = propTypes;
  export default CardInput;