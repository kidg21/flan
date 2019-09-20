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
    return props.color || "";
  }};
`;

const TextStuff = styled.h4`
  color: ${props => {
    return props.color || "";
  }};
  font-weight: semi-bold;
  font-size: 14px;
`;

function Colors({ id, shade, comment, color, hexcode }) {
  let filterShade;
  // switch (type) {
  //   case "info":
  //     backgroundColor = "info";
  //     break;
  //   case "success":
  //     backgroundColor = "success";
  //     break;
  //   case "warning":
  //     backgroundColor = "warning";
  //     break;
  //   case "alert":
  //     backgroundColor = "alert";
  //     break;
  //   case "primary":
  //     backgroundColor = "primary";
  //     break;
  //   case "secondary":
  //     backgroundColor = "secondary";
  //     break;
  //   case "background":
  //     backgroundColor = "background";
  //     break;
  //   case "textColor":
  //     backgroundColor = "textColor";
  //     break;
  //   case "disabled":
  //     backgroundColor = "disabled";
  //     break;
  //   case "divider":
  //     backgroundColor = "divider";
  //     break;
  //   case "appBackground":
  //     backgroundColor = "appBackground";
  //     break;
  //   default:
  //     backgroundColor = "primary";
  //     break;
  // }
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
          <TextStuff color={color}>{color}</TextStuff> <Title text={comment} weight="normal" />
          <Description text={comment} />
        </>
      }
      centerAlign="left"
    />
  );
}
export default Colors;
