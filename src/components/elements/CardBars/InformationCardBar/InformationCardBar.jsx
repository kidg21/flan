import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";
import Title from "base/Typography";

const Arrow = styled(Icon)`
  transform: ${(props) => { return (props.leftOnscreen ? "rotate(-180deg)" : "rotate(0deg)"); }};
  transition: all 0.3s ease;
`;

function InformationCardBar({ id, title, count }) {
  const [leftOnscreen, setLeftOnscreen] = useState(false);
  function toggleLeft() {
    setLeftOnscreen(!leftOnscreen);
  }
  return (
    <Piece id={id}>
      <Bar
      padding="2x"
        onClick={toggleLeft}
        left={<Title text={title} count={count} weight="normal" />}
        right={<Arrow icon="up" leftOnscreen={leftOnscreen} />}
      />
    </Piece>
  );
}
InformationCardBar.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  count: PropTypes.number,
  disabled: PropTypes.bool,
};
export default InformationCardBar;
