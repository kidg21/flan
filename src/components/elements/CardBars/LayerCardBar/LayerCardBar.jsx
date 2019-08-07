import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
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

const SwitchContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
  filter: ${props => (props.disabled ? "brightness(130%)" : "")};
`;

function LayerCardBar({ id, title, icons, switchProps, disabled }) {
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
          right={<IconBlock style={disabledblockStyle}>{icons}</IconBlock>}
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
          right={<IconBlock style={blockStyle}>{icons}</IconBlock>}
        />
      )}
    </Piece>
  );
}
LayerCardBar.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  icons: PropTypes.node,
};
export default LayerCardBar;
