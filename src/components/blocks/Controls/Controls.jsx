/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "atoms/Button";

const ControlButton = styled(Button)`
margin: ${(props) => {
    return props.margin || "0 -1px -1px 0";
  }};
  border: ${(props) => {
    return props.border || "";
  }};
  border-radius: ${(props) => {
    return props.borderRadius || "0px";
  }};
  background-color: ${(props) => {
    return props.theme.background[props.backgroundColor] || "";
  }};
  color: ${(props) => {
    return props.theme.palette[props.fontColor] || "";
  }};
;`;

const ControlsWrapper = styled.section`
  position: ${(props) => {
    return props.setPosition || "";
  }};
  display: ${(props) => {
    return props.setOrientation || "grid";
  }};
  grid-gap: ${(props) => {
    return props.gap || "";
  }};
  grid-template-columns: ${(props) => {
    return props.setColumns || "repeat(auto-fit, minmax(0, 1fr))";
  }};
  flex-direction: column;
  bottom: ${(props) => {
    return props.alignBottom || "";
  }};
  right: ${(props) => {
    return props.alignRight ? "0" : "";
  }};
  width: ${(props) => {
    return props.setWidth || "100%";
  }};
  height: ${(props) => {
    return props.setHeight || "100%";
  }};

`;

function Controls({
  id, children, columns, style, margin, gap,
}) {
  let setColumns;
  let border;
  let borderRadius;
  let setPosition;
  let setWidth;
  let backgroundColor;
  let fontColor;
  let setHeight;
  let setOrientation;
  let alignRight;
  let alignBottom;
  switch (columns) {
    case "wrap":
      setColumns = "repeat(auto-fit, minmax(8rem, 1fr))";
      break;
    case "1":
      setColumns = "repeat(1, 1fr)";
      break;
    case "2":
      setColumns = "repeat(2, 1fr)";
      break;
    case "3":
      setColumns = "repeat(3, 1fr)";
      break;
    case "4":
      setColumns = "repeat(4, 1fr)";
      break;
    case "5":
      setColumns = "repeat(5, 1fr)";
      break;
    default:
      break;
  }

  return (
    <ControlsWrapper
      id={id}
      gap={gap}
      border={border}
      borderRadius={borderRadius}
      setColumns={setColumns}
      setPosition={setPosition}
      backgroundColor={backgroundColor}
      setWidth={setWidth}
      setHeight={setHeight}
      setOrientation={setOrientation}
      alignRight={alignRight}
      alignBottom={alignBottom}
      style={style}
      margin={margin}
      fontColor={fontColor}
    >
      {children}
    </ControlsWrapper>
  );
}

function Control({
  id, icon, label, size, onClick, type, isSelected, disabled, color,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);

  return (
    <Fragment>
      {isSelected ? (
        <ControlButton
          id={id}
          icon={icon}
          size={size}
          label={label}
          onClick={onClick}
          isSelected={isSelected}
          disabled={isDisabled}
          color={color}
          type="solid"
        />
      ) : (
        <ControlButton
            id={id}
            icon={icon}
            size={size}
            label={label}
            onClick={onClick}
            isSelected={isSelected}
            disabled={isDisabled}
            color={color}
            type={type}
          />
        )}
    </Fragment>
  );
}

Controls.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  columns: PropTypes.oneOf(["default", "wrap", "1", "2", "3", "4", "5"]),
  style: PropTypes.string,
};

Control.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
};

Controls.defaultProps = {
  id: null,
  columns: null,
  style: null,
};

Control.defaultProps = {
  id: null,
  icon: false,
  isSelected: false,
  disabled: false,
  color: null,
  type: null,
  size: null,
};

export { Controls as default, Control };
