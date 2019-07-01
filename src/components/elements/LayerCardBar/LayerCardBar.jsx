import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";

import Switch from "atoms/Switch";

const blockStyle = {
  width: ".5em",
  filter: "brightness(160%)",
  lineHeight: "normal",
};

const disabledblockStyle = {
  width: ".5em",
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

const Space = {
  paddingLeft: "1em",
};

const SwitchContainer = styled.div`
  display: flex;
  vertical-align: baseline;
  filter: ${props => (props.disabled ? "brightness(130%)" : "")};
`;

function LayerCardBar({ id, title, switchProps, disabled }) {
  return (
    <Piece id={id} title={title} disabled={disabled}>
      {disabled ? (
        <Bar
          left={
            <SwitchContainer disabled="true">
              {" "}
              <Switch /> <span style={Space} /> {title}{" "}
            </SwitchContainer>
          }
          right={DisabledIcons}
        />
      ) : (
        <Bar
          left={
            <SwitchContainer>
              {" "}
              <Switch {...switchProps} /> <span style={Space} /> {title}{" "}
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
