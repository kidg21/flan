/* eslint-disable linebreak-style */
import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "atoms/Button";

const ControlButton = styled(Button)`
  margin: ${(props) => { return props.margin || "0 -1px -1px 0"; }};
  border-radius: ${(props) => { return props.borderRadius || "0px"; }};
`;

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
  ${ControlButton}:first-child {
    border-radius: 20px 0 0 20px;
    }};
  }
  ${ControlButton}:last-child {
    border-radius: 0 20px 20px 0;
    }};
  }

`;

function Controls({
  id, children, columns, style,
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
      fontColor={fontColor}
    >
      {children}
    </ControlsWrapper>
  );
}

function Control({
  id, icon, label, size, onClick, type, isSelected, color,
}) {
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
          color={color}
          solid
          round
        />
      ) : (
          <ControlButton
            id={id}
            icon={icon}
            size={size}
            label={label}
            onClick={onClick}
            isSelected={isSelected}
            color={color}
            type={type}
            round
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
  color: null,
  type: null,
  size: null,
};

export { Controls as default, Control };
