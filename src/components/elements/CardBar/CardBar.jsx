import React, {useState} from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar/Bar";
import Card, { Piece } from "layout/Card"

import Switch from "atoms/Switch"

const blockStyle = {
    width: '5em',
    filter: 'brightness(160%)',
    lineHeight: 'normal'
}

const Icons = (
    <IconBlock style={blockStyle} >
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
`


function CardBar({ id, navigation, info, title, layer }) {
  const [checked, setChecked] = useState(false);
  return (
      <Piece
      id={id}
      title={title}
      layer={layer}
      navigation={navigation}
      info={info}> 
            { layer ? (<Bar twoParts='true' firstSlot={
             <SwitchContainer> <Switch checked={checked}
             onChange={() => {
               setChecked(!checked);
             }}
   /> <span style={Space}/> {title} </SwitchContainer>
             } 
             secondSlot={Icons}/>)
             : navigation ? 
             (<Bar twoParts='true' firstSlot={title} secondSlot={<Icon icon={["fal", "chevron-right"]}/>}/>
             )
             :
             info ? 
             ( <Bar twoParts='true' firstSlot={title} secondSlot={<Icon icon={["far", "angle-up"]}/>}/>)
             : null }
        </Piece>
    );
  }
      CardBar.propTypes = {
          id: PropTypes.string,
          title: PropTypes.any.isRequired,
          navigation: PropTypes.bool,
          layer: PropTypes.bool,
          info: PropTypes.bool
        };
      export default CardBar;
