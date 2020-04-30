/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Icon from "atoms/Icon";
import Text from "base/Typography";



const NewInput = styled.input`
width: 0.1px;
height: 0.1px;
opacity: 0;
overflow: hidden;
position: absolute;
z-index: -1;
`;

const NewLabel = styled.label`
display: flex;
flex: auto;
box-sizing: border-box;
z-index: 0;
flex-direction: row;
width: ${(props) => {
  return props.fullWidth ? "100%" : "auto";
}};
height: 100%;
padding: 0.5em 0.75em;
justify-content: center;
align-items: center;
color: inherit;
margin: 0;
color: ${(props) => {
    return props.theme.palette[props.fontColor] || props.theme.palette.info80;
  }};
font-family: ${(props) => { return props.theme.typography.primary; }};
user-select: none;
cursor: pointer;

  font-size: ${(props) => {
    return props.labelSize || "inherit";
  }};
  font-weight: ${(props) => {
    return props.fontWeight || "600";
  }};
  text-transform: capitalize;
  *{
      padding: 2px;
  }

`;

function Import({

}) {

  return (
      <React.Fragment>
<NewInput type="file" name="file" id="file" class="inputfile" />
<NewLabel for="file"><Icon icon="plus_circle" size="lg" /><Text weight="bold" text="Add File" /></NewLabel>
    </React.Fragment>
  );
}


export default Import;