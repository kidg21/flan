/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Bar from "layout/Bar";
import { Title } from "base/Typography";
import Menu from "blocks/Menu";

// TODO: (if necessary) Create a generic 'header' component as a base for current multiple Panel Header configurations
function MainPanelHeader({
  id, menuData, title,
}) {
  return (
    <React.Fragment id={id} >
      <Bar
        padding="2x"
        left={<Title text={title} size="lg" weight="bold" />}
        contentAlign="center"
        right={menuData ? <Menu data={menuData} position="bottomLeft" /> : null}
      />
    </React.Fragment>
  );
}

MainPanelHeader.propTypes = {
  id: PropTypes.string,
  menuData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
  })),
  title: PropTypes.node.isRequired,
};

MainPanelHeader.defaultProps = {
  id: null,
  menuData: null,
};

export default MainPanelHeader;
