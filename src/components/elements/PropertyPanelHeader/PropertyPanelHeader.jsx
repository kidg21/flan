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

function PropertyPanelHeader({ id, title }) {
  return (
      <Piece
      id={id}>
        <HeaderSpace>
          <Bar type='two' firstSlot={<Block>
          {title}
          <Icon icon={["fal", "directions"]} size='2x' anchor />
          </Block>}
          secondSlot={<Icon icon={["far", "ellipsis-v"]} size='lg'/>}/> 
        </HeaderSpace>
        </Piece>
    );
  }
      PropertyPanelHeader.propTypes = {
          id: PropTypes.string,
          title: PropTypes.any.isRequired
        };
      export default PropertyPanelHeader;
