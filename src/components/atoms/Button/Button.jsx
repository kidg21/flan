/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import { Lighten } from "Variables";
import { DisabledContext } from "States";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Text from "base/Typography";
import Tag from "atoms/Tag";
import Icon from "atoms/Icon";
import { Skeleton } from "helpers";

const StyledButton = styled.button`
  display: flex;
  flex: auto;
  box-sizing: border-box;
  z-index: 0;
  flex-direction: row;
  width: ${(props) => {
    return props.fullWidth ? "100%" : "auto";
  }};
  height: 100%;
  padding: 0.5em 0.75em;
  justify-content: center;
  align-items: center;
  color: ${(props) => {
    return props.theme.palette[props.fontColor] || props.theme.text.primary;
  }};
  background-color: ${(props) => {
    return (
      props.theme.palette[props.backgroundColor] ||
      props.theme.background.default
    );
  }};
  border-color: ${(props) => {
    return props.theme.palette[props.borderColor] || "";
  }};
  border-width: ${(props) => {
    return props.borderWidth || "";
  }};
  border-style: ${(props) => {
    return props.borderStyle || "";
  }};
  border-radius: ${(props) => {
    return props.borderRadius || "4px";
  }};
  font-size: ${(props) => {
    return props.labelSize || "inherit";
  }};
  font-weight: ${(props) => {
    return props.fontWeight || "400";
  }};
  cursor: pointer;
  border-bottom: ${(props) => {
    return props.borderBottom || "";
  }};
  border-bottom-color: ${(props) => {
    return props.theme.palette[props.underlineColor];
  }};
  transition: all 0.15s ease;
  & > * {
    margin: 0;
  }
  &:focus {
    outline: none;
  }
  &:hover { 
    background-color: ${(props) => {
    return (
      props.theme.palette[props.hoverColor]);
  }};
    border: ${(props) => {
    return props.hoverBorder || "";
  }};
  }
  &:empty {
    ${Skeleton};
    height: 2em;
    width: 8rem;
    border: 1px solid;
  }
  &:active {
    ${Lighten};
  }
  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
  }
`;

const LabelWrapper = styled(Grid)`
  grid-gap: ${(props) => {
    return props.vertical ? "0.25rem" : "0.5rem";
  }};
  align-items: center;
  justify-items: ${(props) => {
    return props.vertical ? "center" : "";
  }};
  width: auto;
`;

StyledButton.displayName = "Button";

function ButtonGroup({
  children, className, columns, id,
}) {
  // 1-6 colums
  let setColumns;
  const _columns = parseInt(columns, 10);
  if (_columns > 0 && columns < 7) {
    setColumns = `repeat(${_columns}, minmax(0, 1fr))`;
  }
  return (
    <Grid className={className} columns={setColumns} id={id}>
      {children}
    </Grid>
  );
}

ButtonGroup.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  /** Defines the widths of grid columns
   *
   * Options: 1-6
   */
  columns: PropTypes.string,
  className: PropTypes.string,
};

ButtonGroup.defaultProps = {
  id: null,
  children: null,
  columns: null,
  className: null,
};

function Button({
  className,
  count,
  disabled,
  fullWidth,
  htmlFor,
  icon,
  id,
  label,
  onClick,
  plain,
  round,
  solid,
  type,
  underlined,
  vertical,
}) {
  let backgroundColor;
  let borderRadius;
  let hoverColor;
  let borderWidth;
  let borderStyle;
  let borderColor;
  let buttonColor;
  let fontColor;
  let fontWeight;
  let shadeColor;
  let labelSize;
  let tintColor;

  switch (type && type.toLowerCase()) {
    case "success":
      buttonColor = "success";
      fontColor = buttonColor;
      tintColor = "successTint";
      shadeColor = "successDark";
      break;
    case "warning":
      buttonColor = "warning";
      fontColor = buttonColor;
      tintColor = "warningTint";
      shadeColor = "warningDark";
      break;
    case "alert":
      buttonColor = "alert";
      fontColor = buttonColor;
      tintColor = "alertTint";
      shadeColor = "alertDark";
      break;
    case "info":
      buttonColor = "info";
      fontColor = buttonColor;
      tintColor = "infoTint";
      shadeColor = "infoDark";
      break;
    case "primary":
      buttonColor = "primary";
      fontColor = buttonColor;
      tintColor = "primaryTint";
      shadeColor = "primaryDark";
      break;
    case "secondary":
      buttonColor = "secondary";
      fontColor = buttonColor;
      tintColor = "secondaryTint";
      shadeColor = "secondaryDark";
      break;
    case "grey":
      buttonColor = "grey";
      fontColor = buttonColor;
      break;
    default:
      buttonColor = "primary";
      fontColor = buttonColor;
      tintColor = "primaryTint";
      shadeColor = "primaryDark";
      break;
  }

  if (round) {
    borderRadius = "20px";
  } else {
    borderRadius = "4px";
  }

  if (underlined) {
    borderWidth = "0 0 2px 0";
    borderStyle = "solid";
  } else if (plain) {
    borderWidth = "0px";
  } else {
    borderWidth = "1px";
    borderStyle = "solid";
  }

  if (solid) {
    fontColor = "white";
    borderColor = buttonColor;
    hoverColor = shadeColor;
    backgroundColor = buttonColor;
    borderWidth = "0";
  } else {
    hoverColor = tintColor;
    borderColor = buttonColor;
  }

  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);

  if (isDisabled) {
    fontColor = "grey4";
    borderColor = "grey4";
    if (solid) {
      fontColor = "white";
      backgroundColor = "grey4";
    }
  }

  let content;


  if (icon) {
    content = (
      <LabelWrapper columns="1fr max-content">
        <Icon icon={icon} />
        <Text size="4x" weight="bold" text={label} />
      </LabelWrapper>
    );
    if (!label) {
      content = (
        <LabelWrapper columns="1fr">
          <Icon icon={icon} size="2x" />
        </LabelWrapper>
      );
    }
    if (vertical) {
      content = (
        <LabelWrapper
          columns="1fr"
          rows="max-content 1fr"
          vertical={vertical}
        >
          <Icon icon={icon} size="lg" />
          <Text size="4x" weight="bold" text={label} />
        </LabelWrapper>
      );
    }
    if (count) {
      content = (
        <LabelWrapper columns="max-content max-content 1fr">
          <Icon icon={icon} />
          <Text size="4x" weight="bold" text={label} />
          {!isDisabled ? <Tag label={count} /> : null}
        </LabelWrapper>
      );
    }
  } else if (count) {
    content = (
      <LabelWrapper columns="1fr max-content">
        <Text size="4x" weight="bold" text={label} />
        {!isDisabled ? <Tag label={count} /> : null}
      </LabelWrapper>
    );
  } else {
    content = (
      <LabelWrapper columns="1fr">
        <Text size="4x" weight="bold" text={label} />
      </LabelWrapper>
    );
  }

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderStyle={borderStyle}
      borderWidth={borderWidth}
      buttonColor={buttonColor}
      className={className}
      disabled={isDisabled}
      fontColor={fontColor}
      fontWeight={fontWeight}
      fullWidth={fullWidth}
      hoverColor={hoverColor}
      htmlFor={htmlFor}
      id={id}
      labelSize={labelSize}
      name={id}
      onClick={onClick}
      plain={plain}
      round={round}
      solid={solid}
      tabIndex={disabled ? "-1" : "1"}
      underlined={underlined}
    >
      {content}
    </StyledButton>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  count: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  htmlFor: PropTypes.node,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  plain: PropTypes.bool,
  round: PropTypes.bool,
  solid: PropTypes.bool,
  type: PropTypes.node,
  underlined: PropTypes.bool,
  vertical: PropTypes.bool,

};

Button.defaultProps = {
  className: null,
  count: null,
  disabled: false,
  fullWidth: false,
  htmlFor: null,
  icon: null,
  id: null,
  label: null,
  onClick: null,
  plain: null,
  round: null,
  solid: null,
  type: null,
  underlined: null,
  vertical: null,
};

// export default Button;
export { Button as default, ButtonGroup };
