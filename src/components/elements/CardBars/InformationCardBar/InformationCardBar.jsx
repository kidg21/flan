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
  onChange,
  open,
  ...textProps
}) {
  const [expanded, setExpanded] = useState(open);
  function toggleOn() {
    if (onChange) onChange(expanded, !expanded, setExpanded);
    else setExpanded((state) => { return !state; });
  }

  return (
    <Piece id={id}>
      <Bar
        padding="2x"
        onClick={toggleOn}
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
  weight: PropTypes.string,
  onChange: PropTypes.func,
  open: PropTypes.bool,
};

InformationCardBar.defaultProps = {
  id: null,
  count: null,
  children: null,
  weight: "normal",
  onChange: null,
  open: false,
};

export default InformationCardBar;
