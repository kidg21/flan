/* eslint-disable linebreak-style */
/* eslint-disable complexity */
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Text from "base/Typography";
import TextInput from "atoms/TextInput";



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
text-align: center;
flex: auto;
box-sizing: border-box;
z-index: 0;
border-color: ${(props) => {
    return props.theme.palette[props.fontColor] || props.theme.palette.info80;
  }};
border: 1px solid;
border-radius: 5px;
flex-direction: row;
width: auto;
justify-content: center;
align-items: center;
height: 100%;
padding: 0em 0.75em;
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
  text-transform: capitalize;
  &:hover { 
    background-color: ${(props) => {
    return (
      props.theme.palette.action20);
  }};
    border: ${(props) => {
    return props.hoverBorder || "";
  }};
  }
  `;


function FileImport(onChange) {

    const [state, setState] = useState();

    return (
    <Grid columns="1fr 3fr" gap="xs">
        <React.Fragment>
        <NewInput type="file"  id="file" class="inputFile" onChange={(e) => {
    if(typeof onChange === "function"){
      onChange(e.target.files);
    }
    setState(e.target.files[0].name);
  }} />
      <NewLabel for="file" ><Text weight="bold" size="lg" text="Upload" /></NewLabel>
      </React.Fragment>
      <TextInput placeholder={state}/>
    </Grid>
  );
}


export default FileImport;
