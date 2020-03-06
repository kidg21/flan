/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import { Title } from "base/Typography";
import Menu from "blocks/Menu";

function NavigationPanelHeader({
  id, title, onClick, menuData,
}) {
  return (
    <React.Fragment id={id}>
      <Bar
        contentAlign="center"
        padding="3x"
        left={{
          content: <Icon icon="left" onClick={onClick} />,
          width: "min-content",
        }}
        center={{
          content: <Title text={title} size="2x" weight="bold" />,
          align: "left",
        }}
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
    onClick: PropTypes.func,
  })),
};

NavigationPanelHeader.defaultProps = {
  id: null,
  onClick: null,
  menuData: null,
};

export default NavigationPanelHeader;
