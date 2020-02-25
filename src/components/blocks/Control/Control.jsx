/* eslint-disable linebreak-style */
import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import Button from "atoms/Button";

const SegmentButton = styled(Button)`
  margin: ${(props) => { return props.margin || "0 -1px -1px 0"; }};
  border-radius: ${(props) => { return props.borderRadius || "0px"; }};
`;

const ControlWrapper = styled.section`
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
  ${SegmentButton}:first-child {
    border-radius: 2rem 0 0 2rem;
    }};
  }
  ${SegmentButton}:last-child {
    border-radius: 0 2rem 2rem 0;
    }};
  }

`;

function Segment({
  disabled, icon, id, isSelected, label, onClick,
}) {
  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);

  return (
    <Fragment>
      <SegmentButton
        disabled={isDisabled}
        icon={icon}
        id={id}
        label={label}
        onClick={onClick}
        solid={isSelected ? "solid" : null}
      />
    </Fragment>
  );
}

function Control({
  children, data, disabled, id,
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

  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);

  return (
    <DisabledContext.Provider value={disabled}>
      <ControlWrapper
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
        fontColor={fontColor}
      >
        {children ||
          data.map((item) => {
            return (
              <Segment
                disabled={item.isDisabled || disabled}
                icon={item.icon}
                id={item.id}
                isSelected={item.isSelected}
                label={item.label}
                onClick={item.onClick}
              />
            );
          })}
      </ControlWrapper>
    </DisabledContext.Provider>
  );
}

Segment.propTypes = {
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  icon: PropTypes.node,
  id: PropTypes.string,
  isSelected: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
};
Segment.defaultProps = {
  disabled: null,
  icon: null,
  id: null,
  isSelected: false,
  label: null,
  onClick: null,
};

Control.propTypes = {
  children: PropTypes.node,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
};
Control.defaultProps = {
  children: null,
  data: null,
  disabled: false,
  id: null,
};

export { Control as default, Segment };
