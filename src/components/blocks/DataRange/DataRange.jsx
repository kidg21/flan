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
import { getGuid } from "helpers";

const RangeContainer = styled(Grid)`
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || "";
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
  max,
  min,
  select,
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

  const uId = id || getGuid();
  return (
    <RangeContainer
      columns="1"
      disabled={isDisabled}
      id={uId}
      inputTextColor={inputTextColor}
    >
      {label ? (
        <Label weight="bold" isRequired={isRequired} text={label} />
      ) : null}
      <Bar
        padding="none"
        contentAlign="bottom"
        left={
          min.options ? (
            <SelectMenu
              disabled={min.disabled || isDisabled}
              error={!!error}
              id={`${uId}_left`}
              label={min.label}
              onChangeState={onChangeMin}
              options={min.options}
              selectOptions={min.value}
            />)
            :
            (<TextInput
              disabled={min.disabled || isDisabled}
              error={!!error}
              id={`${uId}_left`}
              label={min.label}
              onChange={onChangeMin}
              value={min.value}
            />)
        }
        center={
          select.options ? (
            <SelectMenu
              disabled={select.disabled || isDisabled}
              error={!!error}
              id={`${uId}_center`}
              label={select.label}
              onChangeState={select.onChange}
              options={select.options}
              selectOptions={select.selected}
            />
          ) : null
        }
        right={
          max.options ? (
            <SelectMenu
              disabled={max.disabled || isDisabled}
              error={!!error}
              id={`${uId}_right`}
              label={max.label}
              onChangeState={max.onChange}
              options={max.options}
              selectOptions={max.selected}
            />)
            :
            (<TextInput
              disabled={max.disabled || isDisabled}
              error={!!error}
              id={`${uId}_right`}
              label={max.label}
              onChange={onChangeMax}
              value={max.value}
            />)
        }
      />
      {helpText ? <Text size="sm" weight="bold" text={helpText} /> : null}
      {typeof error === "string" && !isDisabled ? (
        <Text size="sm" weight="bold" text={error} />
      ) : null}
    </RangeContainer>
  );
}

const selectType = PropTypes.shape({
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.map,
  selected: PropTypes.arrayOf(PropTypes.object),
});

const textType = PropTypes.shape({
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
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
  max: {},
  min: {},
  select: {},
};

export default DataRange;
