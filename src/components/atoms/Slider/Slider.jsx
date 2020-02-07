/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Lighten, Darken } from "Variables";

const SliderPiece = styled.input.attrs({ type: "range" })`
  height: 1px;
  background: ${(props) => {
    return props.error ? props.theme.palette.alert60 : props.theme.palette.neutral80;
  }};
  outline: none;
  transition: opacity 0.2s;
  &::-webkit-slider-thumb {
    appearance: none;
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
  &::-moz-range-track {
    -webkit-appearance: none;
    appearance: none;
    width: 98%;
    height: 1px;
    x: align.center;
    y: align.center;
    border-radius: 5px;
    background: #ccc;
    outline: none;
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    color: ${(props) => {
    return props.theme.palette.selectedLight;
  }};
    cursor: pointer;
  }
  &[disabled],
  &[readonly] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
    &::-webkit-slider-thumb {
      border-color: ${(props) => {
    return props.theme.palette.neutral80;
  }};
      background-color: ${(props) => {
    return props.theme.palette.neutral60;
  }};
    }
  }
`;

function Slider({
  disabled, error, id, onChange,
}) {
  return <SliderPiece id={id} onChange={onChange} disabled={disabled} error={error} />;
}
Slider.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
};
Slider.defaultProps = {
  disabled: false,
  error: false,
  id: null,
  onChange: null,
};

export default Slider;
