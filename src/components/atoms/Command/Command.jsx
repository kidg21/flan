import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Label from './Label';



const Container = styled.div`
display:flex;
flex-direction: ${props => (props.labelFirst ? 'row-reverse' : 'row')};
`


// const iconProps = {
//     nameProp: ["fal", "times"],
//     colorProp: "purple",
// };

// const labelProp = {
//     contentProp: "yo sister"
// };

const defaultProps = {
  iconProps: {nameProp: ["fal", "times"],
              colorProp: "blue"},
  labelProp: {contentProp: "yo brother"}
};

  function Command(props) {
    const _iconProps = Object.assign({}, defaultProps.iconProps, props.iconProps);
    const _labelProp = Object.assign({}, defaultProps.labelProp, props.labelProp);
    props = { iconProps: _iconProps, labelProp: _labelProp };
    return (
        <Container>
        <Icon {...props.iconProps}/>
        <Label {...props.labelProp}/>
        </Container>
    );
  }
  
  Command.defaultProps = defaultProps;
  export default Command;
