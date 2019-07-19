import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";

import Switch from "atoms/Switch";

const LayerIconBlock = styled(IconBlock)`
  filter: ${props => props.disabled ? "brightness(200%)" : "brightness(150%)"};
  lineHeight: "normal";
`;

const Space = {
  paddingLeft: "1em",
};

const SwitchContainer = styled.div`
  display: flex;
  vertical-align: baseline;
  filter: ${props => (props.disabled ? "brightness(130%)" : "")};
  padding: 0 1em;
`;

function LayerCardBar({ id, title, switchProps, disabled, icons, onClick }) {
  // overrides the switch props when disabled
  let _switchProps = disabled ? {} : switchProps;
  const _icons = (<LayerIconBlock disabled={disabled}>{icons}</LayerIconBlock>);
  return (
    <Piece id={id}>
      <Bar
        onClick={onClick}
        left={
          <SwitchContainer disabled={disabled}>
            <Switch {..._switchProps} />
            <span style={Space} /> {title}{" "} {/* TODO: Update this spacing problem */}
          </SwitchContainer>
        }
        right={icons ? _icons : null}
      />
    </Piece>
  );
};

LayerCardBar.defaultProps = {
  disabled: false,
};

LayerCardBar.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
};
export default LayerCardBar;
