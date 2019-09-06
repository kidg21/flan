import React from "react";
import styled from "styled-components";
import Title from "base/Typography";
import Grid from "layout/Grid";

const ColorsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  @media ${screen.medium} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${screen.large} {
    grid-template-columns: repeat(8, 1fr);
  }
  grid-auto-flow: dense;
`;

// Container for one color sample

// Color thumbnail
const ColorBlockColor = styled.div`
  width: 5em;
  border-radius: 5px;
  height: 5em;
  margin: 5px;
  filter: ${(props) => {
    return props.filterShade || "";
  }};
  border: 1px solid
    ${(props) => {
    return props.theme.grey;
  }};
  background-color: ${(props) => {
    return props.theme[props.backgroundColor] || props.theme.background;
  }};
`;

function Colors({ id, shade, type }) {
  let backgroundColor;
  let filterShade;
  switch (type) {
    case "info":
      backgroundColor = "info";
      break;
    case "success":
      backgroundColor = "success";
      break;
    case "warning":
      backgroundColor = "warning";
      break;
    case "alert":
      backgroundColor = "alert";
      break;
    case "primary":
      backgroundColor = "primary";
      break;
    case "secondary":
      backgroundColor = "secondary";
      break;
    case "background":
      backgroundColor = "background";
      break;
    case "textColor":
      backgroundColor = "textColor";
      break;
    default:
      backgroundColor = "primary";
      break;
  }
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
    <ColorsContainer>
      <ColorBlockColor id={id} backgroundColor={backgroundColor} filterShade={filterShade} />
    </ColorsContainer>
  );
}
export default Colors;
