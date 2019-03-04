import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Icon(props) {
  return (
    <div>
      <FontAwesomeIcon icon={props.nameProp} color={props.colorProp}/>
    </div>
  );
}


export default Icon;

