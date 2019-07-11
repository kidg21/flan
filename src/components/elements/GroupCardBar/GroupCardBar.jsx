import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
// import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import { Piece } from "layout/Card";

const _Icon = Icon;
const Arrow = styled(_Icon)`
  transition: all 0.3s ease;
`;

function GroupCardBar({
  id,
  title,
  onClick,
  length,
  initOpen,
}) {
  const [isOpen, setIsOpen] = useState(initOpen);
  const rotateDeg = isOpen ? 180 : null;

  function toggleLeft() {
    setIsOpen(!isOpen);
  }

  return (
    <Piece id={id}>
      <Bar
        onClick={() => {
          toggleLeft();
          if (onClick) onClick();
        }}
        left={`${title}  |  ${length}`}
        right={<Arrow rotation={rotateDeg} icon={["far", "angle-up"]}/>}
      />
    </Piece>
  );
}

GroupCardBar.defaultProps = {
  id: "",
  initOpen: false,
  onClick: null,
};

GroupCardBar.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  initOpen: PropTypes.bool,
};
export default GroupCardBar;
