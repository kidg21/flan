import React from "react";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import { Piece } from "layout/Card";
import Title from "base/Typography";
import Menu from "blocks/Menu";

function NavigationPanelHeader({ id, title, onClick, menuData }) {
  return (
    <Piece id={id}>
      <Bar
<<<<<<< HEAD
        left={<Icon icon="left" size="lg" onClick={onClickLeftIcon} />}
        center={<Title text={title} weight="bold" />}
        right={<Icon icon="options" size="lg" onClick={onClickRightIcon} />}
=======
        left={<Icon icon={["far", "angle-left"]} size="lg" onClick={onClick} />}
        center={<Title title={title} weight="bold" />}
        right={<Menu data={menuData} position="bottomLeft" type="edit" />}
>>>>>>> master
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
export default NavigationPanelHeader;
