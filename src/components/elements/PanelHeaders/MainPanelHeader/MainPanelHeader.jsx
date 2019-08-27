import React from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import { Piece } from "layout/Card";
import Title from "base/Typography";
import Menu from "blocks/Menu";

function MainPanelHeader({ id, title, menuData }) {
  return (
    <Piece id={id}>
      <Bar
        left={<Title text={title} weight="bold" />}
        right={<Menu data={menuData} position="bottomLeft" type="edit" />}
      />
    </Piece>
  );
}

MainPanelHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  menuData: PropTypes.node,
};

MainPanelHeader.defaultProps = {
  id: null,
  menuData: null,
};

export default MainPanelHeader;
