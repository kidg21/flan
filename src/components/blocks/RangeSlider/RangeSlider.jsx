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
  disabled,
  error,
  helpText,
  id,
  isRequired,
  label,
  placeholderMin,
  placeholderMax,
}) {
  let inputTextColor;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (error && !isDisabled) {
    inputTextColor = colors.alert;
  }
  return (
    <RangeContainer
      id={id}
      disabled={isDisabled}
      inputTextColor={inputTextColor}
      columns="1"
      gap="small"
    >
      {label ? <InputLabel isRequired={isRequired}>{label}</InputLabel> : null}
      {helpText ? <HelpText>{helpText}</HelpText> : null}
      <Bar
        padding="none"
        contentAlign="center"
        leftWidth="6em"
        rightWidth="6em"
        left={<TextInput type="text" placeholder={placeholderMin} error={!!error} disabled={isDisabled} />}
        center={
          error && !isDisabled ? (
            <Slider error disabled={isDisabled} />
          ) : (
            <Slider disabled={isDisabled} />
          )
        }
        right={<TextInput type="text" placeholder={placeholderMax} error={!!error} disabled={isDisabled} />}
      />
      {typeof error === "string" && !isDisabled ? <ErrorText>{error}</ErrorText> : null}
    </RangeContainer>
  );
}

RangeSlider.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helpText: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  placeholderMin: PropTypes.string,
  placeholderMax: PropTypes.string,
};
RangeSlider.defaultProps = {
  disabled: false,
  error: null,
  helpText: null,
  id: null,
  isRequired: false,
  label: null,
  placeholderMin: "Min",
  placeholderMax: "Max",
};

export default RangeSlider;
