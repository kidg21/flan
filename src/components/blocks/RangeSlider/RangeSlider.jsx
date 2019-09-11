/* eslint-disable complexity */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import { DisabledContext } from "States";
import Bar from "blocks/Bar";
import { InputLabel, HelpText, ErrorText } from "layout/Form";
import Grid from "layout/Grid";
import TextInput from "atoms/TextInput";
import Slider from "atoms/Slider";

const RangeContainer = styled(Grid)`
  color: ${(props) => {
    return props.inputTextColor || "";
  }};
  &:last-child {
    margin-bottom: 1rem;
  }
`;

function RangeSlider({
  id, label, isRequired, error, disabled, helpText, errorText,
}) {
  let inputTextColor;
  if (errorText && !disabled) {
    inputTextColor = colors.alert;
    // inputBorderColor = colors.alert_light;
    // inputBorderColorHover = colors.alert_light;
    // inputSelectColor = colors.alert;
  }
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (errorText && !isDisabled) {
    inputTextColor = colors.alert;
  }
  return (
    <RangeContainer id={id} disabled={isDisabled} inputTextColor={inputTextColor} columns="1">
      {label ? <InputLabel isRequired={isRequired}>{label}</InputLabel> : null}
      {helpText ? <HelpText>{helpText}</HelpText> : null}
      <Bar
        padding="0"
        contentAlign="center"
        leftWidth="6em"
        rightWidth="6em"
        left={<TextInput type="text" placeholder="Max" disabled={isDisabled} />}
        center={
          errorText && !isDisabled ? (
            <Slider error disabled={isDisabled} />
          ) : (
            <Slider disabled={isDisabled} />
          )
        }
        right={<TextInput type="text" placeholder="Max" disabled={isDisabled} />}
      />
      {errorText && !isDisabled ? <ErrorText>{errorText}</ErrorText> : null}
    </RangeContainer>
  );
}

RangeSlider.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  minLabel: PropTypes.string,
  maxLabel: PropTypes.string,
};
RangeSlider.defaultProps = {
  id: null,
  label: null,
  minLabel: null,
  maxLabel: null,
};

export default RangeSlider;
