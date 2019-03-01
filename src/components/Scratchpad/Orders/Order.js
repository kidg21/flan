import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Icon from "./Icon";


const CommandContent = styled.a`
`





class Command extends React.Component {
render () {
  return (
    <div>
      <FontAwesomeIcon icon={this.props.nameProp}/>
      <CommandContent>{this.props.contentProp}</CommandContent>
    </div>
  );
}
}



export default Command;