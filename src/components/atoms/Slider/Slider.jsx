import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors, Lighten, Darken } from "Variables";

const SliderPiece = styled.input.attrs({ type: "range" })`
  height: 1px;
  background: ${(props) => {
    return props.error ? colors.alert_light : colors.grey_40;
  }};
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  &::-webkit-slider-thumb {
    appearance: none;
    width: 1.25em;
    height: 1.25em;
    border: 1px solid;
    border-color: ${(props) => {
    return props.error ? colors.alert_dark : colors.success_dark;
  }};
    border-radius: 50%;
    background-image: ${(props) => {
    return props.error
      ? `linear-gradient(${colors.alert_light}, ${colors.alert_dark})`
      : `linear-gradient(${colors.success_light}, ${colors.success_dark})`;
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
  &[disabled],
  &[readonly] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
    &::-webkit-slider-thumb {
      border-color: ${colors.grey_60};
      background-image: linear-gradient(${colors.grey_20}, ${colors.grey_60});
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
