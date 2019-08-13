import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";
import Title from "base/Typography";

function NavigationPanelHeader({
  id,
  title,
  onClickLeftIcon,
  onClickRightIcon,
}) {
  return (
    <Piece id={id}>
      <Bar
        left={
          <Icon
            icon={["far", "angle-left"]}
            size="lg"
            onClick={onClickLeftIcon}
          />
        }
        center={<Title text={title} weight="bold" />}
        right={
          <Icon
            icon={["far", "ellipsis-v"]}
            size="lg"
            onClick={onClickRightIcon}
          />
        }
      />
    </Piece>
  );
}
NavigationPanelHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  onClick: PropTypes.func,
};
export default NavigationPanelHeader;
