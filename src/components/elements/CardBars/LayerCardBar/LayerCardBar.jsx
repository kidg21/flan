/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import { Piece } from "layout/Card";
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

function LayerCardBar({
  id, title, icons, onChange, disabled,
}) {
  return (
    <Piece id={id} disabled={disabled}>
      <Bar
        contentAlign="center"
        padding="2x"
        left={<Switch label={title} disabled={disabled} onChange={onChange} />}
        right={<IconBlock style={disabled ? disabledblockStyle : blockStyle}>{icons}</IconBlock>}
        rightWidth="9em"
      />
    </Piece>
  );
}
LayerCardBar.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  icons: PropTypes.node,
};
export default LayerCardBar;
