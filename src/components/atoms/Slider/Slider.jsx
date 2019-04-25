import React  from "react"
import styled, { css } from "styled-components"
import Input from "atoms/Input/Input";


const InputContainer = styled.div`
width: 20rem;
display: flex;
justify-content: space-between;`

const SliderPiece = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  width: 20rem;
  height: 2px;
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

  &:hover {
    opacity: 5;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-image: linear-gradient(#00adb5, #30cffc);
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-image: linear-gradient(#00adb5, #30cffc);
    cursor: pointer;
  }
`



function Slider({id}) {
  return (<div style={{display: "inline-block"}}><InputContainer><Input inputLabel="min" style={{width: "50px"}}/><Input inputLabel="max" style={{width: "50px", textAlign: "right", alignContent: "right"}}/></InputContainer>
  <div>
    <SliderPiece/></div></div>)
}

export default Slider
