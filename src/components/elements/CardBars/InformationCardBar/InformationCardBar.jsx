/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import { Piece } from "layout/Card";
import Title from "base/Typography";

const Arrow = styled(Icon)`
  transform: ${(props) => { return (props.toggleOn ? "rotate(-180deg)" : "rotate(0deg)"); }};
  transition: all 0.3s ease;
`;

function InformationCardBar({
  id,
  title,
  children,
  count,
  weight,
  open,
  onClick,
  ...textProps
}) {
  let expanded = open;
  let setExpanded = onClick;
  if (!setExpanded) [expanded, setExpanded] = useState(open);
  function toggleDropdown() {
    setExpanded(!expanded);
  }

  return (
    <Piece id={id}>
      <Bar
        padding="2x"
        contentAlign="center"
        onClick={toggleDropdown}
        left={<Title text={title} count={count} weight={weight} {...textProps} />}
        right={<Arrow icon="up" toggleOn={expanded} />}
      />
      {expanded ? children : null}
    </Piece>
  );
}
InformationCardBar.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  count: PropTypes.number,
  onClick: PropTypes.func,
  weight: PropTypes.string,
  open: PropTypes.bool,
};

InformationCardBar.defaultProps = {
  id: null,
  count: null,
  children: null,
  weight: "normal",
  onClick: null,
  open: false,
};

export default InformationCardBar;
