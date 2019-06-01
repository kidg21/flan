import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SelectMenu from "atoms/SelectMenu";
import { colors, shadows } from "Variables";
import { InputLabel } from "layout/Form";


const InputContainer = styled.div`
  line-height: normal;
  text-align: center;
  display: grid;
  grid-template-columns: minmax(auto, 2fr) minmax(auto, auto) minmax(auto, 2fr);
  grid-gap: 0.35rem;
`;

const Container = styled.div`
display: inline-block;
margin-bottom: .5rem;
`

const Space = styled.div`
width: 1em;
`
const DIV = styled.div`
display:flex;
align-items: bottom;
align-text: bottom;
justify-content: bottom;
`

const Line = styled.span`
font-size: 1.5em;
// padding-top: .5em;
line-height: 1;
margin: auto;
`

const Dash = () => (
    <DIV>
    <Space/>
    <Line>-</Line>
    <Space/>
    </DIV>
  );


function DataRange ({options, label}) {
    return (
      <Container>
      <InputLabel inputLabel={label}/>
<InputContainer>
<SelectMenu
placeholder="Any"
options={options}
/>
<Dash/>
<SelectMenu
placeholder="Any"
options={options}
/>
</InputContainer>
</Container>

    );
}


export default DataRange;