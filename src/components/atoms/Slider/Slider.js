import React, { useState } from "react";
import styled, {css} from 'styled-components';


const SliderPiece = styled.input.attrs({ type: 'range' })`
    -webkit-appearance: none;
    width: 20em;
    height: 2px;
    border-radius: 5px;
    background: #ccc;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  
  &:hover {
    opacity: 5;
  }
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #00adb5;
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #00adb5;
    cursor: pointer;
  }
  `
    
function Slider() {
  return(
             <SliderPiece/>
    );
  };
  
  export default Slider;