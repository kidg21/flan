/* eslint-disable linebreak-style */
import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "atoms/Button";
import { DisabledContext } from "States";

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
    border-radius: ${(props) => { return props.vertical ? "2rem 2rem 0 0" : "2rem 0 0 2rem"; }}
  };
  ${ControlButton}:last-child {
    border-radius: ${(props) => { return props.vertical ? "0 0 2rem 2rem" : "0 2rem 2rem 0"; }}
  };
`;

function Controls({
  id, children, style, disabled,
}) {
  /* let setColumns;
  let setWidth;
  let setHeight;

  if (vertical) {
    setColumns = "none";
    setWidth = "auto";
    setHeight = "100%";
  } */

  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);

  return (
    <ControlsWrapper
      id={id}
      disabled={isDisabled}
      style={style}
    >
      {children}
    </ControlsWrapper>
  );
}

function Control({
  id, icon, label, size, onClick, type, isSelected,
}) {
  return (
    <Fragment>
      {isSelected ? (
        <ControlButton
          id={id}
          icon={icon}
          size={size}
          label={label}
          type={type}
          onClick={onClick}
          isSelected={isSelected}
          solid
        />
      ) : (
        <ControlButton
          id={id}
          icon={icon}
          size={size}
          label={label}
          onClick={onClick}
          isSelected={isSelected}
          type={type}
        />
      )}
    </Fragment>
  );
}

Controls.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  style: PropTypes.string,
  // vertical: PropTypes.bool,
};

Control.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.string,
};

Controls.defaultProps = {
  children: null,
  disabled: false,
  id: null,
  style: null,
  // vertical: false,
};

Control.defaultProps = {
  id: null,
  icon: null,
  label: null,
  onClick: null,
  isSelected: false,
  type: null,
  size: null,
};

export { Controls as default, Control };
