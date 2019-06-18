import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";

const Block = styled.div`
  display: flex;
  // vertical-align: bottom;
  word-break: break-word;
  width: 70%;
`;
const HeaderSpace = styled.div`
  padding-top: 0.7rem;
  font-weight: 700;
`;

function NavigationPanelHeader({ id, title, onClick }) {
  return (
    <Piece id={id}>
      <HeaderSpace>
        <Bar
          type="three"
          left={<Icon icon={["far", "angle-left"]} size="lg" />}
          center={title}
          right={
            <Icon icon={["far", "ellipsis-v"]} size="lg" onClick={onClick} />
          }
        />
      </HeaderSpace>
    </Piece>
  );
}
NavigationPanelHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  onClick: PropTypes.func
};
export default NavigationPanelHeader;
