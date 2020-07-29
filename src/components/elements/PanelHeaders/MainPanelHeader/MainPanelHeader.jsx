/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import { useId } from "utils/hooks";
import Bar from "layout/Bar";
import { Title } from "base/Typography";
import Menu from "blocks/Menu";

// TODO: (if necessary) Create a generic 'header' component as a base for current multiple Panel Header configurations
function MainPanelHeader({
  id, menuData, menuWidth, title,
}) {
  const uId = useId(id);
  return (
    <Bar
      id={uId}
      padding="2x"
      left={<Title size="lg" text={title} />}
      contentAlign="center"
      right={menuData ? <Menu id={`${uId}-Menu`} data={menuData} position="bottomLeft" width={menuWidth} /> : null}
    />
  );
}

MainPanelHeader.propTypes = {
  id: PropTypes.string,
  menuData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
  })),
  menuWidth: PropTypes.string,
  title: PropTypes.node.isRequired,
};

MainPanelHeader.defaultProps = {
  id: null,
  menuData: null,
  menuWidth: undefined,
};

export default MainPanelHeader;
