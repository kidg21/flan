import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const Content = styled.a`
display: flex;
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


function Label ({content, ...props}) {

  return (
      <Content>{content}</Content>
  );
};

Label.defaultProps = {
  id: "",
  content: "default",
};

Label.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
};


export default Label;