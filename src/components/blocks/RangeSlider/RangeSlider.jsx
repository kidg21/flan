/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import Bar from "blocks/Bar";
import Grid from "layout/Grid";
import Text, { Label } from "base/Typography";
import TextInput from "atoms/TextInput";
import Slider from "atoms/Slider";
import { getGuid } from "helpers";

const RangeContainer = styled(Grid)`
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || props.theme.text.primary;
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
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (error && !isDisabled) {
    inputTextColor = "alert";
  }

  const uId = id || getGuid();
  return (
    <RangeContainer
      id={uId}
      disabled={isDisabled}
      inputTextColor={inputTextColor}
      columns="1"
      gap="small"
    >
      {label ? (
        <Label size="2x" isRequired={isRequired} text={label} />
      ) : null}

      <Bar
        padding="none"
        contentAlign="center"
        left={{
          content: <TextInput
            id={`${uId}_min`}
            type="text"
            placeholder={placeholderMin}
            error={!!error}
            disabled={isDisabled}
          />,
          width: "6em",
        }}
        center={<Slider error={error && !isDisabled} disabled={isDisabled} />}
        right={{
          content: <TextInput
            id={`${uId}_max`}
            type="text"
            placeholder={placeholderMax}
            error={!!error}
            disabled={isDisabled}
          />,
          width: "6em",
        }}
      />
      {helpText ? <Text size="1x" text={helpText} /> : null}
      {typeof error === "string" && !isDisabled ? (
        <Text size="1x" text={error} />
      ) : null}
    </RangeContainer>
  );
}

RangeSlider.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
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
