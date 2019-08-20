import React from "react";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import { Piece } from "layout/Card";
import Title from "base/Typography";
import Menu from "blocks/Menu";

function PropertyPanelHeader({ id, title, menuData, onClick }) {
  return (
    <Piece id={id}>
      <Bar
        left={<Title title={title} weight="bold" />}
        center={
          <IconBlock>
            <Icon
              icon={["fal", "directions"]}
              size="2x"
              type="info"
              onClick={onClick}
            />
          </IconBlock>
        }
        right={<Menu data={menuData} position="bottomLeft" type="edit" />}
      />
    </Piece>
  );
}
PropertyPanelHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  APN: PropTypes.string,
  menuDate: PropTypes.node,
  onClick: PropTypes.func,
};
export default PropertyPanelHeader;
