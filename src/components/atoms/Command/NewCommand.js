import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Container = styled.div`
display: flex;
flex-direction: row-reverse;
width: 200px;
`

const CommandContent = styled.a`
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


const iconProps = {
    nameProp: ["fal", "times"],
    colorProp: "purple",
};


class Command extends React.Component {

render () {
  return (
      <Container>
      <Icon {...iconProps}/>
      <CommandContent >{this.props.contentProp}</CommandContent>
      </Container>
  );
}
}


export default Command;