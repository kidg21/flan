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
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
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
    border-radius: 2rem 0 0 2rem;
    }};
  }
  ${ControlButton}:last-child {
    border-radius: 0 2rem 2rem 0;
    }};
  }

`;

function Controls({
  id, children, style, disabled,
}) {
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


  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);

  return (
    <ControlsWrapper
      id={id}
      border={border}
      borderRadius={borderRadius}
      disabled={isDisabled}
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
  id: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.string,
  disabled: PropTypes.bool,
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
  id: null,
  style: null,
  disabled: false,
};

Control.defaultProps = {
  id: null,
  icon: null,
  isSelected: false,
  type: null,
  size: null,
};

export { Controls as default, Control };
