import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DisabledContext } from "States";
import Bar from "blocks/Bar";
import { InputLabel, HelpText, ErrorText } from "layout/Form";
import Grid from "layout/Grid";
import TextInput from "atoms/TextInput";
import SelectMenu from "atoms/SelectMenu";

const RangeContainer = styled(Grid)`
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || props.theme.text.primary;
  }};
  &:last-child {
    margin-bottom: 1rem;
  }
`;

// eslint-disable-next-line complexity
function DataRange({
  disabled,
  error,
  helpText,
  id,
  isRequired,
  label,
  labelMax,
  labelMin,
  maxValue,
  minValue,
  onChange,
  withSelector,
  onChangeSelector,
  optionsSelect,
  optionsSelectedOptions,
  optionsMax,
  optionsMin,
  disableLeft,
  disableRight,
}) {
  let inputTextColor;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  const isLeftDisabled = disableLeft || isDisabled;
  const isRightDisabled = disableRight || isDisabled;
  if (error && !isDisabled) {
    inputTextColor = "alert";
  }
  function onChangeMin(currState, newState, setMinState) {
    const newMinValue = newState ? newState.selected : currState.target.value;
    if (onChange) onChange({ min: newMinValue, max: maxValue });
    if (setMinState) setMinState(newState);
  }

  function onChangeMax(currState, newState, setMaxState) {
    const newMaxValue = newState ? newState.selected : currState.target.value;
    if (onChange) onChange({ min: minValue, max: newMaxValue });
    if (setMaxState) setMaxState(newState);
  }
  return (
    <RangeContainer
      id={id}
      disabled={isDisabled}
      inputTextColor={inputTextColor}
      columns="1"
      gap="tiny"
    >
      {label ? <InputLabel isRequired={isRequired}>{label}</InputLabel> : null}
      <Bar
        padding="none"
        withSelector={withSelector}
        contentAlign="center"
        left={
          optionsMin ? (
            <SelectMenu
              label={labelMin}
              options={optionsMin}
              onChangeState={onChangeMin}
              disabled={isLeftDisabled}
              selectOptions={minValue}
            />)
            :
            (<TextInput
              label={labelMin}
              options={optionsMin}
              onChange={onChangeMin}
              error={!!error}
              disabled={isLeftDisabled}
              value={minValue}
            />)
        }
        center={
          withSelector ? (
            <SelectMenu
              options={optionsSelect}
              label="Options"
              onChangeState={onChangeSelector}
              selectOptions={optionsSelectedOptions}
              disabled={isDisabled}
            />
          ) : null
        }
        right={
          optionsMax ? (
            <SelectMenu
              label={labelMax}
              options={optionsMax}
              onChangeState={onChangeMax}
              disabled={isRightDisabled}
              selectOptions={maxValue}
            />)
            :
            (<TextInput
              label={labelMax}
              options={optionsMax}
              onChange={onChangeMax}
              error={!!error}
              disabled={isRightDisabled}
              value={maxValue}
            />)
        }
      />
      {helpText ? <HelpText>{helpText}</HelpText> : null}
      {typeof error === "string" && !isDisabled ? <ErrorText>{error}</ErrorText> : null}
    </RangeContainer>
  );
}

DataRange.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  helpText: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  withSelector: PropTypes.bool,
  maxValue: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  minValue: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  onChangeSelector: PropTypes.func,
  optionsSelect: PropTypes.map,
  optionsSelectedOptions: PropTypes.shape({}),
  labelMax: PropTypes.string.isRequired,
  labelMin: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  optionsMax: PropTypes.map,
  optionsMin: PropTypes.map,
  disableLeft: PropTypes.bool,
  disableRight: PropTypes.bool,
};
DataRange.defaultProps = {
  disabled: false,
  error: null,
  helpText: null,
  id: null,
  isRequired: false,
  label: null,
  onChange: null,
  withSelector: false,
  onChangeSelector: null,
  optionsSelect: null,
  optionsSelectedOptions: null,
  optionsMax: null,
  optionsMin: null,
  disableLeft: false,
  disableRight: false,
  minValue: null,
  maxValue: null,
};

export default DataRange;
