/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import Text, { Title } from "base/Typography";
import Menu from "blocks/Menu";

function PropertyPanelHeader({
  id, title, onClick, menuData,
}) {
  return (
    <React.Fragment id={id}>
      <Bar
        padding="3x"
        contentAlign="center"
        leftWidth="min-content"
        left={<Icon icon="directions" size="2x" type="actionLight" onClick={onClick} />}
        centerAlign="left"
        center={<Title text={title} size="large" />}
        rightWidth="min-content"
        right={<Menu data={menuData} position="bottomLeft" type="edit" />}
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
    onClickLink: PropTypes.func,
  })),
};

PropertyPanelHeader.defaultProps = {
  id: null,
  onClick: null,
  menuData: null,
};

export default PropertyPanelHeader;

