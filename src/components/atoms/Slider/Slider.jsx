import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colors, shadows } from "Variables";
import { Lighten, Darken } from "helpers/Placeholders.jsx";

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
    background-image: linear-gradient(
      ${colors.success_light},
      ${colors.success_dark}
    );
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
`;

function Slider({ id }) {
  return <SliderPiece id={id} />;
}
Slider.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string
};

export default Slider;
