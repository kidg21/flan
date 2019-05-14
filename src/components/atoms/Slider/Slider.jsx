import React  from "react"
import styled, { css } from "styled-components"
import Input from "atoms/Input";
import PropTypes from "prop-types";
import { InputLabel } from "layout/Form";
import { colors, shadows } from "Variables"
import { Lighten, Darken } from "helpers/Placeholders.jsx";


const SliderPiece = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  appearance: none;
  width: 98%;
  height: 1px;
  min: "0";
  max: "100";
  step: "10";
  value: "80";
  border-radius: 5px;
  background: #ccc;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;


  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-image: linear-gradient(#528321, #66a22a);
    // background-image: linear-gradient(#00adb5, #30cffc);
    cursor: pointer;
    
&:hover {
  ${Darken};
}

    &:active {
  ${Lighten};
}

  }




  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-image: linear-gradient(#528321, #66a22a);
    cursor: pointer;
  }
`



function Slider({id, value, min, max, step, ...props}) {
  return (
  <div>
    <SliderPiece/>
  </div>
    )
};



Slider.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string
}



export default Slider
