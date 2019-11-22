/* eslint-disable linebreak-style */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import Title from "base/Typography";
import Menu from "blocks/Menu";

function PropertyPanelHeader({
  id, title, menuData, onClick,
}) {
  return (
    <React.Fragment id={id}>
      <Bar
        padding="2x"
        contentAlign="center"
        left={<Icon icon="directions" size="lg" type="primarylight" onClick={onClick} />}
        leftWidth="min-content"
        center={<Title text={title} weight="bold" size="" />}
        centerAlign="left"
        right={<Menu menuData={menuData} position="bottomLeft" type="edit" />}
        rightWidth="min-content"
      />
    </React.Fragment>
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
