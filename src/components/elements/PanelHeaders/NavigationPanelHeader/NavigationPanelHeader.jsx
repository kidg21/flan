/* eslint-disable linebreak-style */
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

function NavigationPanelHeader({
  id, title, onClick, menuData,
}) {
  return (
    <React.Fragment id={id}>
      <Bar
        contentAlign="center"
        padding="3x"
        left={<Icon icon="left" size="lg" type="standard" onClick={onClick} />}
        center={<Title text={title} size="large" />}
        right={<Menu data={menuData} position="bottomLeft" type="edit" />}
      />
    </React.Fragment>
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
