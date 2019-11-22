/* eslint-disable linebreak-style */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import { Piece } from "layout/Card";
import Title from "base/Typography";
import Menu from "blocks/Menu";

function MainPanelHeader({
  id, title, style, menuData,
}) {
  return (
    <Piece id={id} style={style}>
      <Bar
        contentAlign="center"
        padding="3x"
        left={<Title text={title} size="large" />}
        right={menuData ? <Menu data={menuData} position="bottomLeft" type="edit" /> : null}
      />
    </Piece>
  );
}

MainPanelHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node.isRequired,
  style: PropTypes.object,
  menuData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    onClickLink: PropTypes.func,
  })),
};

MainPanelHeader.defaultProps = {
  id: null,
  menuData: null,
  style: null,
};

export default MainPanelHeader;
