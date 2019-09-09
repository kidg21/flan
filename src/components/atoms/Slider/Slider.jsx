import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { InputLabel } from "layout/Form";
import { Lighten, Darken } from "Variables";

const RangePiece = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  appearance: none;
  width: 98%;
  height: 1px;
  x: align.center;
  y: align.center;
  border-radius: 5px;
  background: #ccc;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-track {
    color: blue;
    background: purple;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    color: ${(props) => {
    return props.theme.secondary;
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
    return props.theme.secondary;
  }};
    cursor: pointer;
  }
`;

const SliderPiece = styled.input.attrs({ type: "range" })`
  width: 98%;
  height: 1px;
  border-radius: 5px;
  background: #ccc;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  &::-webkit-slider-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    color: ${(props) => {
    return props.theme.secondary;
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
    background-image: linear-gradient(#528321, #66a22a);
    // background-image: linear-gradient(#00adb5, #30cffc);
    cursor: pointer;
  }
`;

function Slider({ id, onChange }) {
  return <SliderPiece id={id} onChange={onChange} />;
}
Slider.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
};

export default Slider;
