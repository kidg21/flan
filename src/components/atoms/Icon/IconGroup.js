import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import Icon from './Icon';



const defaultProps = {
    commandOneProps: {nameProp: ["far", "expand-arrows"],
    colorProp: "darkgray"},
commandTwoProps: {nameProp: ["far", "share"],
    colorProp: "darkgray"},
commandThreeProps: {nameProp: ["far", "filter"],
    colorProp: "darkgray"}
};

const Group = styled.div`
display: flex; 
width: 5em;
padding-left: 5px;
padding-right: 5px;
justify-content: space-between;
`


function IconGroup(props) {
    return (
        <Group>
          <Icon  {...props.commandOneProps}/>
          <Icon  {...props.commandTwoProps}/>
          <Icon  {...props.commandThreeProps}/>
        </Group>
    )
  }

IconGroup.defaultProps = defaultProps;
export default IconGroup;