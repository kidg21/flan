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

const Separator = styled.div`
display:flex;
align-items: bottom;
padding-left: 1em;
padding-right: 1em;
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
    <Separator>
    <Line>-</Line>
    </Separator>
  );


function DataRange ({id, placeholder, firstOptions, secondOptions, label}) {
    return (
      <Container id={id}>
      <InputLabel inputLabel={label}/>
<InputContainer>
<SelectMenu
placeholder={placeholder}
options={firstOptions}
/>
<Dash/>
<SelectMenu
placeholder={placeholder}
options={secondOptions}
/>
</InputContainer>
</Container>

    );
}

DataRange.defaultProps = {
  placeholder: 'Any'};

DataRange.propTypes = {
  id: PropTypes.string,
  firstOptions: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  secondOptions: PropTypes.any.isRequired,
};


export default DataRange;