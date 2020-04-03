/* eslint-disable linebreak-style */
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Bar from "blocks/Bar";
import { Label } from "base/Typography";
import { Lighten, Darken } from "Variables";


const SliderPiece = styled.input.attrs({ type: "range" })`
  height: 1.5em;
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

const SliderLabel = styled(Label)`
  position: relative;
  left: ${(props) => {
    return props.left || "";
  }};
  width: max-content;
`;


function Slider({
  value: inputValue, onChange, disabled, error, id, max, min, step, withLabel, withRange,
}) {
  let value = inputValue;
  let setValue = onChange;
  if (!setValue) {
    [value, setValue] = useState(inputValue || min);
  }

  const leftValue = (`${((100 / max) * (value - min)) + ((2 * value) / max)}%`);

  return (
    <Grid columns="1" gap="none">
      {withLabel ? <SliderLabel text={value || min} weight="bold" left={leftValue} /> : null}
      <SliderPiece
        id={id}
        max={max}
        min={min}
        value={value || min}
        step={step}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={disabled}
        error={error}
      />

      {withLabel || withRange ? <Bar left={<Label weight="bold" text={min} />} right={<Label weight="bold" text={max} />} /> : null}
    </Grid>
  );
}
Slider.propTypes = {
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  /** Defaults to 'min' if no 'value' is set  */
  value: PropTypes.number,
  error: PropTypes.bool,
  id: PropTypes.string,
  withLabel: PropTypes.bool,
  withRange: PropTypes.bool,
  onChange: PropTypes.func,
};
Slider.defaultProps = {
  disabled: false,
  min: null,
  max: null,
  step: 1,
  value: null,
  error: false,
  id: null,
  withLabel: null,
  withRange: null,
  onChange: null,
};

export default Slider;
