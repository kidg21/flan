import React from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import { Piece } from "layout/Card";
import Title from "base/Typography";
import Menu from "blocks/Menu";

function MainPanelHeader({ id, title, menuData }) {
  return (
    <Piece id={id} header>
      <Bar
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
  menuData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    onClickLink: PropTypes.func,
  })),
};
MainPanelHeader.defaultProps = {
  id: null,
  menuData: null,
};

MainPanelHeader.defaultProps = {
  id: null,
  menuData: null,
};

export default MainPanelHeader;
