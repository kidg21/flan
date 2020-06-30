/* eslint-disable linebreak-style */
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { getGuid } from "helpers";
import Bar from "layout/Bar";
import { Title } from "base/Typography";
import Menu from "blocks/Menu";

// TODO: (if necessary) Create a generic 'header' component as a base for current multiple Panel Header configurations
function MainPanelHeader({
  id, menuData, title,
}) {
  const uId = useMemo(() => { return id || getGuid(); }, [id]);
  return (
    <Bar
      id={uId}
      padding="2x"
      left={<Title text={title} size="lg" weight="bold" />}
      contentAlign="center"
      right={menuData ? <Menu id={`${uId}-Menu`} data={menuData} position="bottomLeft" /> : null}
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
  title: PropTypes.node.isRequired,
};

MainPanelHeader.defaultProps = {
  id: null,
  menuData: null,
};

export default MainPanelHeader;
