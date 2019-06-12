import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card"

import Switch from "atoms/Switch"

const blockStyle = {
  width: '4.8em',
  filter: 'brightness(160%)',
  lineHeight: 'normal'
}


const disabledblockStyle = {
  width: '4.8em',
  filter: 'brightness(200%)',
  lineHeight: 'normal'
}

const Icons = (
  <IconBlock style={blockStyle} >
    <Icon icon={["far", "expand-arrows"]} />
    <Icon icon={["far", "share"]} />
    <Icon icon={["far", "filter"]} />
  </IconBlock>
)


const DisabledIcons = (
  <IconBlock style={disabledblockStyle} >
    <Icon icon={["far", "expand-arrows"]} />
    <Icon icon={["far", "share"]} />
    <Icon icon={["far", "filter"]} />
  </IconBlock>
)

const Space = {
  paddingLeft: '1em'
}

const SwitchContainer = styled.div`
display: flex;
vertical-align: baseline;
filter: ${props => props.disabled ? 'brightness(130%)' : ''};
`


function CardBar({ id, navigation, info, title, layer, switchProps, disabled, onClick }) {
  return (
    <Piece
      id={id}
      title={title}
      layer={layer}
      navigation={navigation}
      info={info}
      disabled={disabled}>
      {layer ? (<Bar onClick={onClick} twoParts={true} firstSlot={
        <SwitchContainer> <Switch {...switchProps} /> <span style={Space} /> {title} </SwitchContainer>
      }
        secondSlot={Icons} />)
        : disabled ? (<Bar twoParts={true} firstSlot={
          <SwitchContainer disabled={true}> <Switch /> <span style={Space} /> {title} </SwitchContainer>
        }
          secondSlot={DisabledIcons} />)
          : navigation ?
            (<Bar onClick={onClick} twoParts={true} firstSlot={title} secondSlot={<Icon icon={["fal", "chevron-right"]} />} />)
            :
            info ?
              (<Bar onClick={onClick} twoParts={true} firstSlot={title} secondSlot={<Icon icon={["far", "angle-up"]} />} />)
              : null}
    </Piece>
  );
}
CardBar.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  navigation: PropTypes.bool,
  layer: PropTypes.bool,
  info: PropTypes.bool,
  disabled: PropTypes.bool
};
export default CardBar;
