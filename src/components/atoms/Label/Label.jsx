import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const Content = styled.a`
font-size: 14px;
display:flex;
font-family: muli;
margin: 0px 5px 0px 5px;
color: ${props => (props.primary ? 'dodgerBlue' : 'black')};
cursor: pointer;
transition: color .25s ease-in;

&:hover {
 color: darkblue;
}
`


// const props = {
//     contentProp: "yo brother"
// };


function Label (props) {

  return (
      <Content>{props.contentProp}</Content>
  );
};



export default Label;