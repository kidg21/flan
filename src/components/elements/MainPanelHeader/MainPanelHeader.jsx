import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import Card, {Piece} from "layout/Card"


const HeaderSpace =styled.div`
padding-top: .7rem;
font-weight: 700;
`

function MainPanelHeader({ id, title }) {
  return (
      <Piece
      id={id}>
        <HeaderSpace>
        <Bar left={title} type='two' right={<Icon icon={["far", "ellipsis-v"]} size='lg'/>}/>
        </HeaderSpace>
        </Piece>
    );
  }
      MainPanelHeader.propTypes = {
          id: PropTypes.string,
          title: PropTypes.any.isRequired
        };
      export default MainPanelHeader;
