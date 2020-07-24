/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import { Lighten } from "Variables";
import { DisabledContext } from "States";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import { Label } from "base/Typography";
import Tag from "atoms/Tag";
import Icon from "atoms/Icon";
import { Skeleton } from "helpers/Skeleton";

const StyledButton = styled.button`
  display: flex;
  flex: auto;
  box-sizing: border-box;
  z-index: 0;
  flex-direction: row;
  width: ${(props) => {
    return props.fullWidth ? "100%" : "max-content";
  }};
  height: ${(props) => {
    return props.setHeight;
  }};
  padding: ${(props) => {
    return props.setPadding;
  }};
  justify-content: center;
  align-items: center;
  color: ${(props) => {
    return props.theme.palette[props.fontColor] || props.theme.text.primary;
  }};
  background-color: ${(props) => {
    return (
      props.theme.palette[props.backgroundColor]
      || props.theme.background.default
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
    return props.gridGap || "0.5rem";
  }};
  align-items: center;
  justify-items: ${(props) => {
    return props.justifyItems || "";
  }};
  width: auto;
  > * {
    line-height: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const GroupWrapper = styled(Grid)`
  ${StyledButton} {
    width: auto;
  }
`;

StyledButton.displayName = "Button";

function ButtonGroup({
  children, className, columns, id,
}) {
  // 1-6 colums
  let setColumns;
  const _columns = parseInt(columns, 10);
  if (_columns > 0 && columns < 8) {
    setColumns = `repeat(${_columns}, minmax(0, 1fr))`;
  }
  return (
    <GroupWrapper className={className} columns={setColumns} id={id}>
      {children}
    </GroupWrapper>
  );
}

ButtonGroup.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  /** Defines the widths of grid columns
   *
   * Options: 1-6
   */
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

ButtonGroup.defaultProps = {
  id: null,
  children: null,
  columns: null,
  className: null,
};

const sizeHash = {
  sm: {
    label: "xs",
    icon: "sm",
    height: "fit-content",
    padding: "0.25em 0em",
  },
  lg: {
    label: "lg",
    icon: "xl",
    height: "2.4rem",
    padding: "0.5em 0.75em",
  },
  xl: {
    label: "lg",
    icon: "xl",
    height: "3.4rem",
    padding: "1.5em 1.75em",
  },
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
  isPlain,
  isRound,
  isSolid,
  type,
  size,
  variant,
  hasUnderline,
  alignCenter,
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
  let tintColor;

  switch (variant && variant.toLowerCase()) {
    case "success":
      buttonColor = "success80";
      fontColor = buttonColor;
      tintColor = "success20";
      shadeColor = "success100";
      break;
    case "warning":
      buttonColor = "warning80";
      fontColor = buttonColor;
      tintColor = "warning20";
      shadeColor = "warning100";
      break;
    case "alert":
      buttonColor = "alert80";
      fontColor = buttonColor;
      tintColor = "alert20";
      shadeColor = "alert100";
      break;
    case "info":
      buttonColor = "info80";
      fontColor = buttonColor;
      tintColor = "info20";
      shadeColor = "info100";
      break;
    case "neutral":
      buttonColor = "neutral120";
      fontColor = buttonColor;
      tintColor = "neutral20";
      shadeColor = "neutral200";
      break;
    case "action":
      buttonColor = "action80";
      fontColor = buttonColor;
      tintColor = "action20";
      shadeColor = "action90";
      break;
    default:
      buttonColor = "action80";
      fontColor = buttonColor;
      tintColor = "action20";
      shadeColor = "action100";
      break;
  }

  if (isRound) {
    borderRadius = "20px";
  } else {
    borderRadius = "4px";
  }

  if (hasUnderline) {
    borderWidth = "0 0 2px 0";
    borderRadius = "0px";
    borderStyle = "solid";
  } else if (isPlain) {
    borderWidth = "0px";
  } else {
    borderWidth = "1px";
    borderStyle = "solid";
  }

  if (isSolid) {
    fontColor = "inverse";
    borderColor = buttonColor;
    hoverColor = shadeColor;
    backgroundColor = buttonColor;
  } else {
    hoverColor = tintColor;
    borderColor = buttonColor;
  }

  const selectedSize = size && sizeHash[size.toLowerCase()];
  const labelSize = selectedSize ? selectedSize.label : "lg";
  const iconSize = selectedSize ? selectedSize.icon : "inherit";
  const setHeight = selectedSize ? selectedSize.height : "2.4rem";
  const setPadding = selectedSize ? selectedSize.padding : "0em 0.75em";

  let gridGap = null;
  let justifyItems = null;
  if (alignCenter) {
    gridGap = "0.25rem";
    justifyItems = "center";
  } else if (icon && !label) {
    gridGap = "0";
  }

  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);

  if (isDisabled) {
    fontColor = "disabled";
    borderColor = "disabled";
    if (isSolid) {
      fontColor = "inverse";
      backgroundColor = "disabled";
    }
  }

  const columns = count || icon
    ? `${!alignCenter && icon ? "max-content" : ""} 1fr ${count ? "max-content" : ""}`
    : "1fr";

  const content = (
    <LabelWrapper
      columns={columns}
      gridGap={gridGap}
      justifyItems={justifyItems}
      rows={alignCenter ? "max-content 1fr" : null}
    >
      {icon ? <Icon icon={icon} size={iconSize} /> : null}
      {label ? <Label size={labelSize} text={label} /> : null}
      {count && !isDisabled ? <Tag label={count} /> : null}
    </LabelWrapper>
  );

  return (
    <StyledButton
      alignCenter={alignCenter}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderStyle={borderStyle}
      setPadding={setPadding}
      setHeight={setHeight}
      borderWidth={borderWidth}
      buttonColor={buttonColor}
      className={className}
      disabled={isDisabled}
      fontColor={fontColor}
      fontWeight={fontWeight}
      fullWidth={fullWidth}
      hasUnderline={hasUnderline}
      hoverColor={hoverColor}
      htmlFor={htmlFor}
      id={id}
      isPlain={isPlain}
      isRound={isRound}
      isSolid={isSolid}
      name={id}
      onClick={onClick}
      tabIndex={disabled ? "-1" : "1"}
      type={type}
    >
      {content}
    </StyledButton>
  );
}

Button.propTypes = {
  alignCenter: PropTypes.bool,
  className: PropTypes.string,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  hasUnderline: PropTypes.bool,
  htmlFor: PropTypes.node,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string,
  isPlain: PropTypes.bool,
  isRound: PropTypes.bool,
  isSolid: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg", "xl", ""]),
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  variant: PropTypes.oneOf(["", "action", "alert", "info", "success", "warning", "neutral"]),
};

Button.defaultProps = {
  alignCenter: null,
  className: null,
  count: null,
  disabled: false,
  fullWidth: false,
  hasUnderline: null,
  htmlFor: null,
  icon: null,
  id: null,
  isPlain: null,
  isRound: null,
  isSolid: null,
  size: "",
  label: null,
  onClick: null,
  type: "button",
  variant: null,
};

export { Button as default, ButtonGroup };
