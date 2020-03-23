/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Bar from "blocks/Bar";
import Text from "base/Typography";
import { Lighten, Darken } from "Variables";


const SliderPiece = styled.input.attrs({ type: "range" })`
  height: 2em;
  outline: none;
  transition: opacity 0.2s;
  &::-webkit-slider-runnable-track {
    height: 1px;
    background: ${(props) => {
      return props.error ? props.theme.palette.alert60 : props.theme.palette.neutral80;
    }};
  }
  &::-webkit-slider-thumb {
    appearance: none;
    width: 1em;
    height: 1em;
    border: 1px solid;
    border-color: ${(props) => {
    return props.error ? props.theme.palette.alert60 : props.theme.palette.selected;
  }};
    border-radius: 50%;
    margin-top: -.5em;
    background-color: ${(props) => {
    return props.error ? props.theme.palette.alert60 : props.theme.palette.selectedLight;
  }};
  transition: 200ms;
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
    content: "";
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
  disabled, error, id, onChange, max, min, value,
}) {

  return (
    <Bar
      padding="none"
      contentAlign="center"
      center={{
      content: <SliderPiece id={id} max={max} min={min} value={value} step="1" onChange={onChange} disabled={disabled} error={error} />,
    }}
      right={{
        content: <Text text={value} />,
      width: "6em",
}}
    />);
}
Slider.propTypes = {
  disabled: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
};
Slider.defaultProps = {
  disabled: false,
  min: null,
  max: null,
  value: null,
  error: false,
  id: null,
  onChange: null,
};

export default Slider;
