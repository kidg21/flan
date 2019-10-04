import React from "react";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import { Piece } from "layout/Card";
import Title from "base/Typography";
import Menu from "blocks/Menu";

function NavigationPanelHeader({
  id, title, onClick, menuData,
}) {
  return (
    <Piece id={id}>
      <Bar
              contentAlign="center"
        padding="3x"
        left={<Icon icon="left" size="lg" type="standard" />}
        center={<Title text={title} size="large" />}
        right={<Menu data={menuData} position="bottomLeft" type="edit" />}
      />
    </Piece>
  );
}

NavigationPanelHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  menuData: PropTypes.node,
};

NavigationPanelHeader.defaultProps = {
  id: null,
  onClick: null,
  menuData: null,
};

export default NavigationPanelHeader;
