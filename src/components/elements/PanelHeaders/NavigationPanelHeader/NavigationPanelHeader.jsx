/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import Text, { Title } from "base/Typography";
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
  title: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  menuData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    onClickLink: PropTypes.func,
  })),
};

NavigationPanelHeader.defaultProps = {
  id: null,
  onClick: null,
  menuData: null,
};

export default NavigationPanelHeader;
