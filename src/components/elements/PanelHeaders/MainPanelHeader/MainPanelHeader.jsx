import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";
import Title from "base/Typography";
import Menu from "blocks/Menu";

function MainPanelHeader({ id, title, menuData }) {
  return (
    <Piece id={id}>
      <Bar
        left={<Title title={title} weight="bold" />}
        right={<Menu data={menuData} position="bottomLeft" type="edit" />}
      />
    </Piece>
  );
}
MainPanelHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  menuData: PropTypes.node,
};
export default MainPanelHeader;
