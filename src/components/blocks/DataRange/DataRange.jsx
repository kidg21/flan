/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DisabledContext } from "States";
import Bar from "blocks/Bar";
import Label from "base/Label";
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
  optionsMax,
  optionsMin,
}) {
  let inputTextColor;
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (error && !isDisabled) {
    inputTextColor = "alert";
  }
  function onChangeMin(currState, newState, setState) {
    if (onChange) { onChange({ min: newState ? newState.selected : currState.target.value }); }
    if (setState) setState(newState);
  }

  function onChangeMax(currState, newState, setState) {
    if (onChange) { onChange({ max: newState ? newState.selected : currState.target.value }); }
    if (setState) setState(newState);
  }
  return (
    <RangeContainer
      id={id}
      disabled={isDisabled}
      inputTextColor={inputTextColor}
      columns="1"
      gap="tiny"
    >
      {label ? (
        <Label size="sm" weight="bold" isRequired={isRequired} text={label} />
      ) : null}
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
              disabled={isDisabled}
            />
          ) : (
            <TextInput
                label={labelMin}
                options={optionsMin}
                onChange={onChangeMin}
                error={!!error}
                disabled={isDisabled}
              />
            )
        }
        center={
          withSelector ? (
            <SelectMenu
              options={optionsSelect}
              label="Options"
              onChangeState={onChangeSelector}
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
              disabled={isDisabled}
            />
          ) : (
            <TextInput
                label={labelMax}
                options={optionsMax}
                onChange={onChangeMax}
                error={!!error}
                disabled={isDisabled}
              />
            )
        }
      />
      {helpText ? <Label size="sm" text={helpText} /> : null}
      {typeof error === "string" && !isDisabled ? (
        <Label size="sm" text={error} />
      ) : null}
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
};

export default DataRange;
