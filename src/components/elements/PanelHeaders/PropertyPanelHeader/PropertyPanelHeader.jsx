/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "layout/Bar";
import { Title } from "base/Typography";
import Menu from "blocks/Menu";

// TODO: (if necessary) Create a generic 'header' component as a base for current multiple Panel Header configurations
function PropertyPanelHeader({
  id, title, onClick, menuData,
}) {
  return (
    <React.Fragment id={id}>
      <Bar
        padding="2x"
        contentAlign="center"
        left={{
          content: <Icon icon="directions" size="lg" onClick={onClick} />,
          width: "min-content",
        }}
        center={{
          content: <Title text={title} size="lg" weight="bold" />,
          align: "left",
        }}
        right={{
          content: <Menu data={menuData} position="bottomLeft" />,
          width: "min-content",
        }}
      />
    </React.Fragment>
  );
}

PropertyPanelHeader.propTypes = {
  id: PropTypes.string,
  menuData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
  })),
  onClick: PropTypes.func,
  title: PropTypes.node.isRequired,
};

PropertyPanelHeader.defaultProps = {
  id: null,
  menuData: null,
  onClick: null,
};

export default PropertyPanelHeader;

