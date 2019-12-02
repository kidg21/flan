/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import { Piece } from "layout/Card";
import Title from "base/Typography";


const Line = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => {
    return props.theme.palette.grey6;
  }};
`;

function NavigationCardBar({
  id,
  title,
  number,
  disabled,
  onClick,
}) {
  return (
    <Piece disabled={disabled} >
      <Bar
        id={id}
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
  title: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

NavigationCardBar.defaultProps = {
  id: "",
  number: null,
  disabled: false,
  onClick: null,
};

export default NavigationCardBar;
