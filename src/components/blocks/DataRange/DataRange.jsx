/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DisabledContext } from "States";
import Bar from "blocks/Bar";
import Text, { Label } from "base/Typography";
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
  // labelMax,
  // maxValue,
  // optionsMax,
  // disableRight,
  // labelMin,
  // minValue,
  // onChange,
  // optionsMin,
  // disableLeft,
  // withSelector,
  // onChangeSelector,
  // optionsSelect,
  // optionsSelectedOptions,

  select,
  max,
  min,
}) {
  let inputTextColor;
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (error && !isDisabled) {
    inputTextColor = "alert";
  }
  function onChangeMin(currState, newState, setMinState) {
    const newMinValue = newState ? newState.selected : currState.target.value;
    if (typeof min.onChange === "function") min.onChange({ min: newMinValue, max: max.value });
    if (setMinState) setMinState(newState);
  }

  function onChangeMax(currState, newState, setMaxState) {
    const newMaxValue = newState ? newState.selected : currState.target.value;
    if (typeof max.onChange === "function") max.onChange({ min: min.value, max: newMaxValue });
    if (typeof setMaxState === "function") setMaxState(newState);
  }
  console.log(min);
  console.log(select);
  return (
    <RangeContainer
      id={id}
      disabled={isDisabled}
      inputTextColor={inputTextColor}
      columns="1"
      gap="tiny"
    >
      {label ? (
        <Label size="2x" isRequired={isRequired} text={label} />
      ) : null}
      <Bar
        padding="none"
        contentAlign="center"
        left={
          min.options ? (
            <SelectMenu
              label={min.label}
              options={min.options}
              onChangeState={onChangeMin}
              disabled={min.disabled || isDisabled}
              selectOptions={min.value}
            />)
            :
            (<TextInput
              label={min.label}
              onChange={onChangeMin}
              error={!!error}
              disabled={min.disabled || isDisabled}
              value={min.value}
            />)
        }
        center={
          select ? (
            <SelectMenu
              options={select.options}
              label={select.label}
              onChangeState={select.onChange}
              // selectOptions={select.selected}
              disabled={isDisabled}
            />
          ) : null
        }
        right={
          max.options ? (
            <SelectMenu
              label={max.label}
              options={max.options}
              onChangeState={max.onChange}
              disabled={max.disabled || isDisabled}
              selectOptions={max.selected}
            />)
            :
            (<TextInput
              label={max.label}
              onChange={onChangeMax}
              error={!!error}
              disabled={max.disabled || isDisabled}
              value={max.value}
            />)
        }
      />
      {helpText ? <Text size="1x" text={helpText} /> : null}
      {typeof error === "string" && !isDisabled ? (
        <Text size="1x" text={error} />
      ) : null}
    </RangeContainer>
  );
}

const selectType = PropTypes.shape({
  options: PropTypes.map,
  selected: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
});

const textType = PropTypes.shape({
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
});

DataRange.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  helpText: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  max: PropTypes.oneOfType([textType, selectType]),
  min: PropTypes.oneOfType([textType, selectType]),
  select: selectType,
};
DataRange.defaultProps = {
  disabled: false,
  error: null,
  helpText: null,
  id: null,
  isRequired: false,
  label: null,
  select: null,
  max: {},
  min: {},
};

export default DataRange;
