import React from "react";
import styled, { css } from "styled-components";
import TextInput from "atoms/TextInput";
import Slider from "atoms/Slider";
import PropTypes from "prop-types";
// import Label from "atoms/Label";
import { colors, shadows, Lighten, Darken  } from "Variables";
import { InputLabel } from "layout/Form";

const SliderInput = styled(TextInput)`
  border-color: ${colors.white};
  min-height: 2rem;
  width: 10%;
  padding: 0.5rem 0.5rem;
  ::placeholder {
    color: ${colors.success};
    font-size: 11px;
  }
  &:hover {
    border: 1px solid ${colors.grey_40};
    border-color: ${colors.grey_20};
  }
  &:focus {
    border-color: ${colors.grey_20};
    color: ${colors.success};
    font-size: 11px;
    ::placeholder {
      color: ${colors.success};
    }
  }
`;

const RangeContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

function RangeSlider({ id, label, minLabel, maxLabel }) {
  return (
    <RangeContainer id={id}>
      <InputLabel inputLabel={label} />
      <InputContainer>
        <SliderInput inputLabel={minLabel} type="text" placeholder="Min" />
        <SliderInput inputLabel={maxLabel} type="text" placeholder="Max" />
      </InputContainer>
      <Slider />
    </RangeContainer>
  );
}

RangeSlider.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  minLabel: PropTypes.string,
  maxLabel: PropTypes.string,
};

export default RangeSlider;
