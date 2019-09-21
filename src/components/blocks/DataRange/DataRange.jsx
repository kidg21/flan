import React, { useContext } from "react";
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
    return props.theme.text[props.inputTextColor] || "";
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
  optionsMax,
  optionsMin,
}) {
  let inputTextColor;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (error && !isDisabled) {
    inputTextColor = "error";
  }
  function onChangeMin(currState, newState, setState) {
    if (onChange) onChange({ min: newState ? newState.selected : currState.target.value });
    if (setState) setState(newState);
  }

  function onChangeMax(currState, newState, setState) {
    if (onChange) onChange({ max: newState ? newState.selected : currState.target.value });
    if (setState) setState(newState);
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
      <Bar
        padding="none"
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
  optionsMax: null,
  optionsMin: null,
};

export default DataRange;
