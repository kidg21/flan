/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
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
      {disabled ? (
        <Bar
          padding="2x"
          contentAlign="center"
          centerAlign="left"
          leftWidth="3em"
          left={<Switch disabled onChange={onChange} />}
          center={<Title text={title} />}
          right={<IconBlock style={disabledblockStyle}>{icons}</IconBlock>}
          rightWidth="9em"
        />
      ) : (
        <Bar
            padding="2x"
            contentAlign="center"
            centerAlign="left"
            leftWidth="3em"
            left={<Switch onChange={onChange} />}
            center={<Title text={title} />}
            right={<IconBlock style={blockStyle}>{icons}</IconBlock>}
            rightWidth="9em"
          />
        )}
    </Piece>
  );
}
LayerCardBar.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  icons: PropTypes.node,
};

LayerCardBar.defaultProps = {
  id: null,
  disabled: false,
  onChange: null,
  icons: null,
};

export default LayerCardBar;
