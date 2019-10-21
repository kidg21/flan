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

function DataRange({
  disabled,
  error,
  helpText,
  id,
  isRequired,
  label,
  labelMax,
  labelMin,
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

  let state = {};
  let setState = null;
  if (optionsMax) {
    state.max = null;
  } else {
    state.max = "";
  }
  if (optionsMin) {
    state.min = null;
  } else {
    state.min = "";
  }
  [state, setState] = useState(state);
  let inputTextColor;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  const isLeftDisabled = disableLeft || isDisabled;
  const isRightDisabled = disableRight || isDisabled;
  if (error && !isDisabled) {
    inputTextColor = "alert";
  }
  function onChangeMin(currState, newState, setMinState) {
    state.min = newState ? newState.selected : currState.target.value;
    setState(state);
    if (onChange) onChange(state);
    if (setMinState) setMinState(newState);
  }

  function onChangeMax(currState, newState, setMaxState) {
    state.max = newState ? newState.selected : currState.target.value;
    setState(state);
    if (onChange) onChange(state);
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
            />)
            :
            (<TextInput
              label={labelMin}
              options={optionsMin}
              onChange={onChangeMin}
              error={!!error}
              disabled={isLeftDisabled}
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
            />)
            :
            (<TextInput
              label={labelMax}
              options={optionsMax}
              onChange={onChangeMax}
              error={!!error}
              disabled={isRightDisabled}
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
  onChangeSelector: PropTypes.func,
  optionsSelect: PropTypes.map,
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
  optionsMax: null,
  optionsMin: null,
  disableLeft: false,
  disableRight: false,
};

export default DataRange;
