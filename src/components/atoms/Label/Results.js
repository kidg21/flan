import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const Content = styled.a`
display: inline-flex;
margin: 0px 5px 0px 5px;
color: #75ab3f;
font-weight: bold;
font-size: 18px;
cursor: pointer;
transition: color .25s ease-in;
`


// const props = {
//     contentProp: "yo brother"
// };


function Results (props) {

  return (
      <div><Content>{props.resultsProp}</Content><span style={{fontSize: "12px"}}>results</span></div>);
    };



export default Results;