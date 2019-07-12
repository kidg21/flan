import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";

const Arrow = styled(Icon)`
  transform: ${props => (props.leftOnscreen ? "rotate(-180deg)" : "rotate(0deg)")};
  transition: all 0.3s ease;
`;

function InformationCardBar({ id, title }) {
  const [leftOnscreen, setLeftOnscreen] = useState(false);
  function toggleLeft() {
    setLeftOnscreen(!leftOnscreen);
  }
  return (
    <Piece id={id}>
      <Bar
        onClick={toggleLeft}
        left={title}
        right={<Arrow leftOnscreen={leftOnscreen} icon={["far", "angle-up"]} />}
      />
    </Piece>
  );
}
InformationCardBar.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
};
export default InformationCardBar;
