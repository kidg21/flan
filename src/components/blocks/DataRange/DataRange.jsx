import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "Variables";
import { DisabledContext } from "States";
import Bar from "blocks/Bar";
import { InputLabel, HelpText, ErrorText } from "layout/Form";
import Grid from "layout/Grid";
import TextInput from "atoms/TextInput";
import SelectMenu from "atoms/SelectMenu";

const RangeContainer = styled(Grid)`
  color: ${(props) => {
    return props.inputTextColor || "";
  }};
  &:last-child {
    margin-bottom: 1rem;
  }
`;

function DataRange({
  disabled,
  errorText,
  helpText,
  id,
  isRequired,
  label,
  labelMax,
  labelMin,
  optionsMax,
  optionsMin,
}) {
  let inputTextColor;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (errorText && !isDisabled) {
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
      <Bar
        padding="none"
        contentAlign="center"
        left={
          optionsMin ? (
            <SelectMenu label={labelMin} options={optionsMin} disabled={isDisabled} />
          ) : (
            <TextInput label={labelMin} disabled={isDisabled} />
          )
        }
        right={
          optionsMax ? (
            <SelectMenu label={labelMax} options={optionsMax} disabled={isDisabled} />
          ) : (
            <TextInput label={labelMax} disabled={isDisabled} />
          )
        }
      />
      {helpText ? <HelpText>{helpText}</HelpText> : null}
      {errorText && !isDisabled ? <ErrorText>{errorText}</ErrorText> : null}
    </RangeContainer>
  );
}

DataRange.propTypes = {
  disabled: PropTypes.bool,
  errorText: PropTypes.string,
  helpText: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  labelMax: PropTypes.string.isRequired,
  labelMin: PropTypes.string.isRequired,
  optionsMax: PropTypes.map,
  optionsMin: PropTypes.map,
};
DataRange.defaultProps = {
  disabled: false,
  errorText: null,
  helpText: null,
  id: null,
  isRequired: false,
  label: null,
  optionsMax: null,
  optionsMin: null,
};

export default DataRange;
