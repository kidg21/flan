import React from "react";
import styled, { css } from "styled-components";
import Input from "atoms/Input";
import Slider from "atoms/Slider";
import PropTypes from "prop-types";
// import Label from "atoms/Label";
import { colors, shadows } from "Variables";
import { Lighten, Darken } from "helpers/Placeholders.jsx";
import { InputLabel } from "layout/Form";



const SliderInput = styled(Input)`
border-color: ${colors.white};
min-height: 2rem;
width: 10%;
padding: .5rem .5rem;

::placeholder {
  color: ${colors.success};
  font-size: 11px;

  &:hover {
    border: 1px solid ${colors.grey_40};
    border-color: ${colors.grey_20};
    }


    &:focus {
      border-color: ${colors.grey_20};
      color: ${colors.success};
      font-size: 11px;
      ::placeholder {
        color: ${colors.success};

      }}
`

const RangeContainer = styled.div`
display: inline-block;
margin-bottom: 1.5rem;
`

const InputContainer = styled.div`
  width: 98%;
  line-height: normal;
  display: flex;
  justify-content: space-between;
`;

function RangeSlider({ id, label, value, min, max, step }) {
  return (
    <RangeContainer
    id={id}>
    <InputLabel inputLabel={label}/>
      <InputContainer>
        <SliderInput
          type="text"
          placeholder="Min"
          value={value}
          min={min}
          max={max}
          step={step}
          inputLabel=""
        />
        <SliderInput
          type="text"
          placeholder="Max"
          inputLabel=""
          style={{
            textAlign: "right",
            alignContent: "right"
          }}
        />
      </InputContainer>
      <Slider/>
    </RangeContainer>
  );
}

RangeSlider.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string
};

export default RangeSlider;
