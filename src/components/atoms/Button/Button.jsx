/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import { Lighten } from "Variables";
import { DisabledContext } from "States";
import PropTypes from "prop-types";
import Text from "base/Typography";
import Tag from "atoms/Tag";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import { Skeleton } from "helpers";

// const Text = styled.h4`
// `;


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
  padding: ${(props) => {
    return props.buttonPadding || "0.5rem 0.7rem";
  }};
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
    weight: 8rem;
    border: 1px solid;
    }};
  }
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

StyledButton.displayName = "Button";


/**
 * ( This documentaion is written using 'JSdoc'. This method allows us to use comments written in the Component file. )
 *
 * Usage
 *
 * Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:
 *
- Dialogs
- Modal windows
- Forms
- Cards
- Toolbars
  *
  * Principles
  *
- Identifiable: Buttons should indicate that they can trigger an action.
- Findable: Buttons should be easy to find among other elements, including other buttons.
- Clear: A button’s action and state should be clear.
* */

function Button({
  className,
  type,
  count,
  disabled,
  htmlFor,
  fullWidth,
  icon,
  id,
  label,
  onClick,
  round,
  plain,
  underlined,
  solid,
}) {
  let backgroundColor;
  let borderRadius;
  let hoverColor;
  let borderWidth;
  let borderStyle;
  let borderColor;
  let buttonColor;
  let buttonPadding;
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


  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);


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
  } else {
    hoverColor = tintColor;
    borderColor = buttonColor;
  }

  if (round) {
    borderRadius = "20px";
  } else {
    borderRadius = "4px";
  }

  if (isDisabled) {
    fontColor = "white";
    borderWidth = "1px";
    borderStyle = "solid";
    backgroundColor = "grey4";
    borderColor = backgroundColor;
  }

  let content;

  if (icon) {
    if (label) {
      content = (
        <Bar
          contentAlign="center"
          leftWidth="max-content"
          centerAlign="left"
          left={<Icon icon={icon} size="lg" />}
          center={<Text size="4x" weight="bold" text={label} />}
        />
      );
    }
  }
  if (icon) {
    if (!label) {
      content = (
        <Bar
          contentAlign="center"
          center={<Icon size="4x" icon={icon} size="lg" />}
        />
      );
    }
  } if (icon) {
    if (count) {
      content = (
        <Bar
          contentAlign="center"
          leftWidth="max-content"
          rightWidth="max-content"
          centerAlign="center"
          left={<Icon icon={icon} size="lg" />}
          center={<Text size="4x" weight="bold" text={label} />}
          right={<Tag label={count} />}
        />
      );
    }
  } else if (count) {
    content = (
      <Bar
        contentAlign="center"
        rightWidth="max-content"
        centerAlign="right"
        center={<Text size="4x" weight="bold" text={label} />}
        right={<Tag label={count} />}
      />
    );
  } else {
    content = (
      <Text weight="bold" size="4x" text={label} />
    );
  }

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
      htmlFor={htmlFor}
      disabled={isDisabled}
      borderRadius={borderRadius}
      hoverColor={hoverColor}
      borderColor={borderColor}
      buttonColor={buttonColor}
      buttonPadding={buttonPadding}
      className={className}
      fontColor={fontColor}
      fontWeight={fontWeight}
      fullWidth={fullWidth}
      id={id}
      labelSize={labelSize}
      name={id}
      onClick={onClick}
      tabIndex={disabled ? "-1" : "1"}
      underlined={underlined}
      plain={plain}
      round={round}
      solid={solid}
    >
      {content}
    </StyledButton>
  );
}

Button.propTypes = {
  htmlFor: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.node,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string,
  label: PropTypes.string,
  count: PropTypes.string,
  onClick: PropTypes.func,
  round: PropTypes.bool,
  underlined: PropTypes.bool,
  solid: PropTypes.bool,
  plain: PropTypes.bool,

};

Button.defaultProps = {
  className: null,
  htmlFor: null,
  type: null,
  disabled: false,
  fullWidth: false,
  icon: null,
  count: null,
  id: null,
  label: null,
  onClick: null,
  round: null,
  underlined: null,
  solid: null,
  plain: null,
};

export default Button;
