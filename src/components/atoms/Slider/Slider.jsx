/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Lighten, Darken } from "Variables";

const SliderPiece = styled.input.attrs({ type: "range" })`
overflow: hidden;
width: 80px;
-webkit-appearance: none;
background-color: silver;
  &::-webkit-slider-runnable-track{
    height: 10px;
    -webkit-appearance: none;
    border: 2px solid white;
    color: #13bba4;
    margin-top: -1px;
  }
  &::-webkit-slider-thumb {
    width: 20px;
    position: relative;
    -webkit-appearance: none;
    height: 20px;
    border-radius: 100&;
    cursor: pointer;
    background: #434343;
    box-shadow: -100vw 0 0 100vw #43e5f7;
  }
  

`;

const SliderThumb= styled.input.attrs({ type: "range" })`
  background: transparent
  overflow: hidden;
width: 80px;
-webkit-appearance: none;
  &::-webkit-slider-runnable-track{
    height: 10px;
    -webkit-appearance: none;
    color: transparent;
    margin-top: -1px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1.5em;
    height: 1.5em;
    border: 1px solid;
    border-color: ${(props) => {
    return props.error ? props.theme.palette.alert60 : props.theme.palette.selected;
  }};
    border-radius: 50%;
    background-color: ${(props) => {
    return props.error ? props.theme.palette.alert60 : props.theme.palette.selectedLight;
  }};
    cursor: pointer;
    &:hover {
      ${Darken};
    }
    &:active {
      ${Lighten};
    }
  }
`;


function Slider({
  disabled, error, id, onChange, min, max, value,
}) {
  return (
    <div>
    <SliderPiece min={min} max={max} step="1" value={value} id={id} onChange={onChange} disabled={disabled} error={error} />
    <SliderThumb min={min} max={max} step="1" value={value} id={id} onChange={onChange} disabled={disabled} error={error} />
    </div>);
}
Slider.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,

};
Slider.defaultProps = {
  disabled: false,
  error: false,
  id: null,
  onChange: null,
  value: null,
  min: null,
  max: null,
};

export default Slider;
