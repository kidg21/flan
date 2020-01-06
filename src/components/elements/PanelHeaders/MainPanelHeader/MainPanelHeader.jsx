/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import Text, { Title } from "base/Typography";
import Menu from "blocks/Menu";

function MainPanelHeader({
  id, title, style, menuData,
}) {
  return (
    <React.Fragment id={id} style={style}>
      <Bar
        contentAlign="center"
        padding="3x"
        left={<Title text={title} size="large" />}
        right={menuData ? <Menu data={menuData} position="bottomLeft" type="edit" /> : null}
      />
    </React.Fragment>
  );
}

MainPanelHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node.isRequired,
  style: PropTypes.object,
  menuData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    onClickLink: PropTypes.func,
  })),
};

MainPanelHeader.defaultProps = {
  id: null,
  menuData: null,
  style: null,
};

export default MainPanelHeader;
