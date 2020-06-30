/* eslint-disable linebreak-style */
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { getGuid } from "helpers";
import Icon from "atoms/Icon";
import Bar from "layout/Bar";
import { Title } from "base/Typography";
import Menu from "blocks/Menu";

// TODO: (if necessary) Create a generic 'header' component as a base for current multiple Panel Header configurations
function NavigationPanelHeader({
  id, title, onClick, menuData,
}) {
  const uId = useMemo(() => { return id || getGuid(); }, [id]);
  return (
    <Bar
      id={uId}
      padding="2x"
      contentAlign="center"
      left={{
        content: <Icon icon="left" onClick={onClick} />,
        width: "min-content",
      }}
      center={{
        content: <Title text={title} size="lg" weight="bold" />,
        align: "left",
      }}
      right={<Menu id={`${uId}-Menu`} data={menuData} position="bottomLeft" />}
    />
  );
}

NavigationPanelHeader.propTypes = {
  id: PropTypes.string,
  menuData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
  })),
  onClick: PropTypes.func,
  title: PropTypes.node.isRequired,
};

NavigationPanelHeader.defaultProps = {
  id: null,
  menuData: null,
  onClick: null,
};

export default NavigationPanelHeader;
