import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar/Bar";
import Card, {Piece} from "layout/Card/Card"

const Block = styled.div`
display: flex;
// vertical-align: bottom;
word-break: break-word;
width: 70%;
`
const HeaderSpace =styled.div`
padding-top: .7rem;
font-weight: 700;
`

function NavigationPanelHeader({ id, title }) {
  return (
      <Piece
      id={id}>
        <HeaderSpace>
        <Bar type='three' firstSlot={<Icon icon={["far", "angle-left"]} size='lg'/>} secondSlot={title}
        thirdSlot={<Icon icon={["far", "ellipsis-v"]} size='lg'/>}/> 
        </HeaderSpace>
        </Piece>
    );
  }
      NavigationPanelHeader.propTypes = {
          id: PropTypes.string,
          title: PropTypes.any.isRequired
        };
      export default NavigationPanelHeader;
