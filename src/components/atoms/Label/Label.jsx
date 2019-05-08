import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import { colors, shadows } from "Variables";
import {Lighten, Darken} from "helpers/Placeholders";

const Content = styled.a`
display: flex;
font-size: 12px;
font-family: arial;
color: ${props => (props.grey ? colors.grey_40 : colors.anchor_light )};
cursor: pointer;
transition: color .25s ease-in;
float: ${props => (props.right ? "right" : "left" )};

&:hover {
  ${Darken};
}

    &:active {
  ${Lighten};
}

  }

`


// const props = {
//     contentProp: "yo brother"
// };


function Label ({content, grey, right, ...props}) {

  return (
    <div>
      <Content
      grey={grey}
      right={right}
      >
      {content}
      </Content>
      </div>
  );
};

Label.defaultProps = {
  id: "",
  content: "default",
  grey: false,
  right: false,
};

Label.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
  grey: PropTypes.bool,
  right: PropTypes.bool,
};


export default Label;