/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Lighten, Darken } from "Variables";

const SliderPiece = styled.input.attrs({ type: "range" })`
  height: 2px;
  background: ${(props) => {
    return props.theme.palette.neutral60;
  }};
  outline: none;
  transition: opacity 0.2s;
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1.5em;
    height: 1.5em;
    border: 1px solid;
    margin-top: -4px;
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
  return <SliderPiece min={min} max={max} step="1" value={value} id={id} onChange={onChange} disabled={disabled} error={error} />;
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
