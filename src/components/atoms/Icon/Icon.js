import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//Dark dark gray icon. Used for Edit buttons and Navigation. Basic Default Icon style.



// Iconn.defaultProps = {
//   iconProp: "Another Prop"
//   }


// const CardIcon = styled.i`
//   color: dimgray;
//   cursor: pointer;
//   display: inline-block;
//   transition: opacity .2s ease-in;

//   &:hover {
//     color: darkgray;
//   }
// `

// const CommandIcon = styled.i`
//   color: dimgray;
//   cursor: pointer;
//   display: inline-block;
//   transition: opacity .2s ease-in;

//   &:hover {
//     color: darkgray;
//   }
// `


class Icon extends React.Component {
render () {
  return (
    <div>
      <FontAwesomeIcon icon={this.props.nameProp}/>
    </div>
  );
}
}

Icon.defaultProps = {  
  nameProp: "times"
}

export default Icon;
