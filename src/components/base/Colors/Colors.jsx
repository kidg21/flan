/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import styled from "styled-components";
import Bar from "blocks/Bar";
import { colors, Lighten, Darken } from "Variables";
import Title, { Headline, SubTitle } from "base/Typography";


const ThemeColorBlockColor = styled.div`
  width: 5em;
  border-radius: 100px;
  height: 5em;
  margin: 5px;
  border: 1px solid
    ${(props) => {
    return props.theme.palette.grey3;
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
    return props.theme.palette.grey3;
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

function ThemeColors({ id, color }) {
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

function Colors({ id, color }) {
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


export { ThemeColors as default, Colors };
