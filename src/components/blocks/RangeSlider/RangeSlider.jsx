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
  placeholderMax,
  placeholderMin,
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
      columns="1"
      disabled={isDisabled}
      gap="small"
      id={uId}
      inputTextColor={inputTextColor}
    >
      {label ? (
        <Label size="2x" isRequired={isRequired} text={label} />
      ) : null}

      <Bar
        padding="none"
        contentAlign="center"
        leftWidth="6em"
        rightWidth="6em"
        left={
          <TextInput
            disabled={isDisabled}
            error={!!error}
            id={`${uId}_min`}
            placeholder={placeholderMin}
            type="text"
          />
        }
        center={<Slider error={error && !isDisabled} disabled={isDisabled} />}
        right={
          <TextInput
            disabled={isDisabled}
            error={!!error}
            id={`${uId}_max`}
            placeholder={placeholderMax}
            type="text"
          />
        }
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
  placeholderMax: PropTypes.string,
  placeholderMin: PropTypes.string,
};
RangeSlider.defaultProps = {
  disabled: false,
  error: null,
  helpText: null,
  id: null,
  isRequired: false,
  label: null,
  placeholderMax: "Max",
  placeholderMin: "Min",
};

export default RangeSlider;
