import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import Grid from "helpers/Grid";
import Card, { Piece } from "layout/Card";
import Title from "base/Typography";

import Switch from "atoms/Switch";

const blockStyle = {
  filter: "brightness(150%)",
  lineHeight: "normal",
};

const disabledblockStyle = {
  filter: "brightness(200%)",
  lineHeight: "normal",
};

const Icons = (
  <IconBlock style={blockStyle}>
    <Icon icon={["far", "expand-arrows"]} />
    <Icon icon={["far", "share"]} />
    <Icon icon={["far", "filter"]} />
  </IconBlock>
);

const DisabledIcons = (
  <IconBlock style={disabledblockStyle}>
    <Icon icon={["far", "expand-arrows"]} />
    <Icon icon={["far", "share"]} />
    <Icon icon={["far", "filter"]} />
  </IconBlock>
);

const SwitchContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
  filter: ${props => (props.disabled ? "brightness(130%)" : "")};
  &:last-child {
    padding-left: 1rem;
  }
`;

function LayerCardBar({ id, title, switchProps, disabled }) {
  return (
    <Piece id={id} title={title} disabled={disabled}>
      {disabled ? (
        <Bar
          left={
            <SwitchContainer disabled="true">
              {" "}
              <Switch />
              <Title title={title} weight="normal" />
            </SwitchContainer>
          }
          right={DisabledIcons}
        />
      ) : (
        <Bar
          left={
            <SwitchContainer>
              {" "}
              <Switch {...switchProps} />
              <Title title={title} weight="normal" />
            </SwitchContainer>
          }
          right={Icons}
        />
      )}
    </Piece>
  );
}
LayerCardBar.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
};
export default LayerCardBar;
