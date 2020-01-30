/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Bar from "blocks/Bar";
import { colors, Lighten, Darken } from "Variables";
import Title from "base/Typography";

const ThemeColorBlockColor = styled.div`
  width: 5em;
  border-radius: 100px;
  height: 5em;
  margin: 5px;
  border: 1px solid
    ${(props) => {
    return props.theme.palette.border;
  }};

  background-color: ${(props) => {
    return props.theme.palette[props.color] || "";
  }};

  &:hover {
    ${Darken}
  }

  &:active {
    ${Lighten}
  }
`;


const ColorBlockColor = styled.div`
  width: 5em;
  border-radius: 100px;
  height: 5em;
  margin: 5px;
  border: 1px solid
    ${(props) => {
    return props.theme.palette.border;
  }};

  background-color: ${(props) => {
    return colors[props.color];
  }};

  &:hover {
    ${Darken}
  }

  &:active {
    ${Lighten}
  }
`;

function ThemeColors({ color }) {
  return (
    <Bar
      contentAlign="center"
      left={<ThemeColorBlockColor color={color} />}
      leftWidth="min-content"
      center={<Title text={color} />}
      centerAlign="left"
    />
  );
}
ThemeColors.propTypes = {
  color: PropTypes.string,
};
ThemeColors.defaultProps = {
  color: null,
};

function Colors({ color }) {
  return (
    <Bar
      contentAlign="center"
      left={<ColorBlockColor color={color} />}
      leftWidth="min-content"
      center={<Title text={color} />}
      centerAlign="left"
    />
  );
}
Colors.propTypes = {
  color: PropTypes.string,
};
Colors.defaultProps = {
  color: null,
};

export { ThemeColors as default, Colors };
