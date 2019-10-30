import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";
import Title from "base/Typography";


import Switch from "atoms/Switch";

const Line = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => {
    return props.theme.palette.grey6;
  }};
`;

function NavigationCardBar({
  id,
  title,
  number,
  disabled,
  toggle,
  onStateChange,
  onClick,
  switchProps,
}) {
  let isDisabled = null;

  if (typeof disabled === "boolean") {
    isDisabled = disabled;
  }
  if (toggle && isDisabled === null) {
    isDisabled = true;
  }
  const [state, setState] = useState({ disabled: isDisabled });

  let leftComponent = null;
  if (toggle) {
    leftComponent = (
      <React.Fragment>
        <Switch
          label={title}
          checked={!state.disabled}
          onChange={(e) => {
            const oldState = Object.assign({}, state);
            const newState = Object.assign({}, state, { disabled: !state.disabled });
            if (e) {
              e.stopPropagation();
            }
            if (typeof onStateChange === "function") {
              onStateChange(oldState, newState, setState, e);
            } else {
              setState(newState);
            }
          }}
          {...switchProps}
        />
      </React.Fragment>);
  } else {
    leftComponent = <Title text={title} count={number} weight="normal" />;
  }
  return (
    <Piece disabled={state.disabled}>
      <Bar
        id={id}
        disabled={state.disabled}
        left={leftComponent}
        right={<Icon icon="right" />}
        padding="2x"
        contentAlign="center"
        onClick={state.disabled ? null : onClick}
      />
      <Line />
    </Piece>
  );
}

NavigationCardBar.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  switchProps: PropTypes.shape({}),
  number: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  toggle: PropTypes.bool,
  onStateChange: PropTypes.func,
};
NavigationCardBar.defaultProps = {
  id: "",
  toggle: false,
  switchProps: {},
  number: null,
  disabled: false,
  onClick: null,
  onStateChange: null,
};

export default NavigationCardBar;
