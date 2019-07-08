import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import { Piece } from "layout/Card";

const Arrow = styled(Icon)`
  transition: all 0.3s ease;
`;

function GroupCardBar({ id, title, onClick, length, initDown }) {
  const [rotate, setRotate] = useState(initDown);
  const rotateDeg = rotate ? 180 : 0;

  function toggleLeft() {
    setRotate(!rotate);
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
  initDown: false,
};

GroupCardBar.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  length: PropTypes.number,
  onClick: PropTypes.func,
  initDown: PropTypes.bool,
};
export default GroupCardBar;
