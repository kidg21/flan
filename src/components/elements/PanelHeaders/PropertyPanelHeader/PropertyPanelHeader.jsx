import React from "react";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import { Piece } from "layout/Card";
import Title from "base/Typography";
import Menu from "blocks/Menu";

function PropertyPanelHeader({
  id, title, menuData, onClick,
}) {
  return (
    <Piece id={id}>
      <Bar
        padding="top"
        left={<Title text={title} weight="bold" size="large" />}
        center={
          <IconBlock>
            <Icon icon="directions" size="2x" type="primarylight" onClick={onClick} />
          </IconBlock>
        }
        right={<Menu menuData={menuData} position="bottomLeft" type="edit" />}
      />
    </Piece>
  );
}

PropertyPanelHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  APN: PropTypes.string,
  menuData: PropTypes.node,
  onClick: PropTypes.func,
};

PropertyPanelHeader.defaultProps = {
  id: null,
  APN: null,
  menuData: null,
  onClick: null,
};

export default PropertyPanelHeader;
