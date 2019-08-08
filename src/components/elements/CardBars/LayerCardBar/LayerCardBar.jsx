/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// import Icon from "atoms/Icon";
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
  width: ".5rem",
  filter: "brightness(200%)",
  lineHeight: "normal",
};

/* const Icons = (
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
); */

const Space = {
  paddingLeft: "1em",
};

const SwitchContainer = styled.div`
  display: flex;
  vertical-align: baseline;
  filter: ${(props) => { return (props.disabled ? "brightness(130%)" : ""); }};
`;

function LayerCardBar({
  id,
  title,
  icons,
  switchProps,
  disabled,
}) {
  return (
    <Piece id={id} title={title} disabled={disabled}>
      {disabled ? (
        <Bar
          left={<SwitchContainer disabled> <Switch disabled /> <span style={Space} /> <Title title={title} weight="normal" /></SwitchContainer>}
          right={<IconBlock style={disabledblockStyle}>{icons}</IconBlock>}
        />
      ) : (
        <Bar
          left={<SwitchContainer> <Switch {...switchProps} /> <span style={Space} /> <Title title={title} weight="normal" /></SwitchContainer>}
          right={<IconBlock style={blockStyle}>{icons}</IconBlock>}
        />
      )}
    </Piece>
  );
}
LayerCardBar.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  icons: PropTypes.node,
  disabled: PropTypes.bool,
  switchProps: PropTypes.object,
};
export default LayerCardBar;
