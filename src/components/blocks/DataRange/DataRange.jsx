/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DisabledContext } from "States";
import Text, { Label } from "base/Typography";
import Grid from "layout/Grid";
import TextInput from "atoms/TextInput";
import SelectMenu from "atoms/SelectMenu";
import { useId } from "utils/hooks";

const RangeContainer = styled(Grid)`
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || "inherit";
  }};
  &:last-child {
    margin-bottom: 1rem;
  }
`;

const LabelWrapper = styled.section`
  color: ${(props) => {
    return props.theme.text[props.inputTextColor] || props.theme.text.light;
  }};
`;

const RangeTextInput = styled(TextInput)`
  display: ${(props) => {
    return props.setDisplay || "";
  }};
`;

const RangeSelectMenu = styled(SelectMenu)`
  display: ${(props) => {
    return props.setDisplay || "";
  }};
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
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
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

  const uId = useId(id);

  let selectContent;
  if (select.options) {
    selectContent = (
      <SelectMenu
        disabled={select.disabled || isDisabled}
        error={!!error}
        id={`${uId}_center`}
        label={select.label}
        onChangeState={select.onChange}
        options={select.options}
        selectOptions={select.selected}
      />
    );
  }

  return (
    <RangeContainer
      columns="1"
      disabled={isDisabled}
      gap="xs"
      id={uId}
      inputTextColor={inputTextColor}
    >
      {label ? (
        <LabelWrapper inputTextColor={inputTextColor}>
          <Label size="sm" isRequired={isRequired} text={label} />
        </LabelWrapper>
      ) : null}
      <Grid align="center" columns="3">
        {selectContent}
        {min.options ? (
          <RangeSelectMenu
            disabled={min.disabled || isDisabled}
            error={!!error}
            id={`${uId}_left`}
            setDisplay={min.setDisplay}
            placeholder={min.label}
            onChangeState={onChangeMin}
            options={min.options}
            selectOptions={min.selected}
          />
        ) : (
          <RangeTextInput
            disabled={min.disabled || isDisabled}
            error={!!error}
            setDisplay={min.setDisplay}
            id={`${uId}_left`}
            placeholder={min.label}
            onChange={onChangeMin}
            value={min.value}
            type={min.type}
          />
        )}

        {max.options ? (
          <RangeSelectMenu
            disabled={max.disabled || isDisabled}
            error={!!error}
            id={`${uId}_right`}
            placeholder={max.label}
            setDisplay={max.setDisplay}
            onChangeState={max.onChange}
            options={max.options}
            selectOptions={max.selected}
          />
        ) : (
          <RangeTextInput
            disabled={max.disabled || isDisabled}
            error={!!error}
            setDisplay={max.setDisplay}
            id={`${uId}_right`}
            placeholder={max.label}
            onChange={onChangeMax}
            value={max.value}
            type={max.type}
          />
        )}
      </Grid>
      {helpText ? <Text size="xs" text={helpText} /> : null}
      {typeof error === "string" && !isDisabled ? (
        <Text size="xs" text={error} />
      ) : null}
    </RangeContainer>
  );
}

const selectType = PropTypes.shape({
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  setDisplay: PropTypes.node,
  options: PropTypes.map,
  selected: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.any), PropTypes.any]),
});

const textType = PropTypes.shape({
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string,
  setDisplay: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.oneOf([PropTypes.any]),
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
