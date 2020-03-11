/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import { Title } from "base/Typography";
import Menu from "blocks/Menu";

function PropertyPanelHeader({
  id, title, onClick, menuData,
}) {
  return (
    <React.Fragment id={id}>
      <Bar
        padding="3x"
        contentAlign="center"
        left={{
          content: <Icon icon="directions" size="2x" type="action40" onClick={onClick} />,
          width: "min-content",
        }}
        center={{
          content: <Title text={title} size="2x" weight="bold" />,
          align: "left",
        }}
        right={{
          content: <Menu data={menuData} position="bottomLeft" type="edit" />,
          width: "min-content",
        }}
      />
    </React.Fragment>
  );
}

PropertyPanelHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  menuData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
  })),
};

PropertyPanelHeader.defaultProps = {
  id: null,
  onClick: null,
  menuData: null,
};

export default PropertyPanelHeader;

