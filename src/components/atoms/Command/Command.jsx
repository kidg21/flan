import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Label from './Label';



//Scenarios: icon+label, label only, icon only, label+icon, stacked

//iconfirst = [ Container, Icon, Label ]
// labelFirst = [ Container, Label, Icon ]

// if (labelFirst) {
//   return (
//     <div>{
//       labelFirst.map(Component => (
//         <Component key={ somethingunique ) />
//       )}</div>
//       )}


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
                colorProp: "purple"},
    labelProp: {contentProp: "yo brother"}
  };


  function Command(props) {
    return (
        <Container>
        <Icon {...props.iconProps}/>
        <Label {...props.labelProp}/>
        </Container>
    );
  }
  
  Command.defaultProps = defaultProps;
  export default Command;
  