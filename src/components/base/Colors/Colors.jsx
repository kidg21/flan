import React from "react";
import styled from "styled-components";
import Title, { Description } from "base/Typography";
import Grid from "layout/Grid";
import Bar from "blocks/Bar";

const ColorBlockColor = styled.div`
  width: 5em;
  border-radius: 100px;
  height: 5em;
  margin: 5px;
  filter: ${props => {
    return props.filterShade || "";
  }};
  border: 1px solid
    ${props => {
      return props.theme.text.disabled;
    }};

  background-color: ${props => {
    return props.theme.palette[props.color] || "";
  }};
`;

const TextStuff = styled(Title)`
  color: ${props => {
    return props.color || "";
  }};
  font-weight: semi-bold;
  font-size: 14px;
`;

function Colors({ id, shade, comment, color, hexcode }) {
  let filterShade;
  switch (shade) {
    case "darken":
      filterShade = "brightness(85%) contrast(150%)";
      break;
    case "lighten":
      filterShade = "brightness(115%)";
      break;
    default:
      break;
  }
  return (
    <Bar
      contentAlign="center"
      left={<ColorBlockColor color={color} filterShade={filterShade} />}
      leftWidth="min-content"
      center={
        <>
          <TextStuff color={color} text={color} />
          <Description text={comment} />
        </>
      }
      centerAlign="left"
    />
  );
}
export default Colors;
