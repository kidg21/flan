import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import Card, {Piece} from "layout/Card"

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

function PanelHeader({ id, navigation, main, title, property, onNavigationClick, onPropertyClick, onEllipseClick }) {
  return (
      <Piece
      id={id}
      navigation={navigation}
      property={property}
      main={main}>
        <HeaderSpace>
        { navigation ? (
        <Bar threeParts={true} firstSlot={<Icon onClick={onNavigationClick} icon={["far", "angle-left"]} size='lg'/>} secondSlot={title}
        thirdSlot={<Icon onClick={onEllipseClick} icon={["far", "ellipsis-v"]} size='lg'/>}/> ) 
        : main ? 
        (<Bar firstSlot={title} twoParts={true} secondSlot={<Icon onClick={onEllipseClick} icon={["far", "ellipsis-v"]} size='lg'/>}/>) 
        : property ? (
        <Bar twoParts={true} firstSlot={<Block>
          {title}
          <Icon onClick={onPropertyClick} icon={["fal", "directions"]} size='2x' anchor />
          </Block>}
          secondSlot={<Icon onClick={onEllipseClick} icon={["far", "ellipsis-v"]} size='lg'/>}/> ) 
        : null }
        </HeaderSpace>
        </Piece>
    );
  }
      PanelHeader.propTypes = {
          id: PropTypes.string,
          title: PropTypes.any.isRequired,
          navigation: PropTypes.bool,
          property: PropTypes.bool,
          main: PropTypes.bool
        };
      export default PanelHeader;
