import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";
import Title from "base/Typography";


const Line = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => {
    return props.theme.palette.grey6; }};
`;

function NavigationCardBar({ id, title, number, disabled, onClick }) {
  return (
    <Piece id={id} disabled={disabled} >
      <Bar
      contentAlign="center"
        left={<Title text={title} number={number} />}
        right={<Icon icon="right" />}
        padding="2x"
        onClick={onClick}
      />
      <Line />
    </Piece>
  );
}

NavigationCardBar.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  number: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default NavigationCardBar;
