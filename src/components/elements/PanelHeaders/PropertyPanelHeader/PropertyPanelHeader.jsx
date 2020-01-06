/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import Text, { Title } from "base/Typography";
import Menu from "blocks/Menu";

function PropertyPanelHeader({
  id, title, menuData, onClick,
}) {
  return (
    <React.Fragment id={id}>
      <Bar
        padding="3x"
        contentAlign="center"
        left={<Icon icon="directions" size="2x" type="primarylight" onClick={onClick} />}
        leftWidth="min-content"
        center={<Title text={title} size="large" />}
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
  // APN: PropTypes.string,
  menuData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    onClickLink: PropTypes.func,
  })),
  onClick: PropTypes.func,
};

PropertyPanelHeader.defaultProps = {
  id: null,
  // APN: null,
  menuData: null,
  onClick: null,
};

export default PropertyPanelHeader;
