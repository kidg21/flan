// Import dependencies
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// Import colors and sizes variables
import { colors, shadows, fonts, fontSize } from "Variables";

const StyledDescription = styled.h5`
  margin: 0;
  color: ${props => props.textColor || colors.grey_80};
  font-size: ${props => props.textSize || ""};
  font-weight: ${props => props.textWeight || "500"};
`;

const CountContainer = styled.div`
  display: inline-flex;
  margin-left: 4em;
`;

const StyledText = styled.h4`
  color: ${props => props.textColor || "inherit"};
  font-weight: ${props => props.textWeight || "600"};
  text-align: ${props => props.textAlign || ""};
  letter-spacing: ${props => props.letterSpacing || ""};
  /* margin: 0; */
  font-style: ${props => props.textStyle || ""};
  text-decoration: ${props => props.textDecoration || ""};
  user-select: ${props => (props.select ? "all" : "")};
`;

function Title({
  id,
  title,
  type,
  order,
  style,
  weight,
  spacing,
  count,
  size,
  align,
  select,
  className,
}) {
  let textColor;
  let textWeight;
  let letterSpacing;
  let textAlign;
  let textStyle;
  let textDecoration;
  let flexDirection;
  let as;
  switch (type) {
    case "info":
      textColor = colors.anchor;
      break;
    case "success":
      textColor = colors.success;
      break;
    case "warning":
      textColor = colors.warning;
      break;
    case "alert":
      textColor = colors.alert;
      break;
    case "inverse":
      textColor = colors.white;
      break;
    case "light":
      textColor = colors.grey_60;
      break;
    default:
      break;
  }
  switch (size) {
    case "tiny":
      as = "h6";
      break;
    case "small":
      as = "h5";
      break;
    case "large":
      as = "h3";
      break;
    case "xlarge":
      as = "h2";
      break;
    case "xxlarge":
      as = "h1";
      break;
    case "normal":
    default:
      as = "h4";
      break;
  }
  switch (align) {
    case "center":
      textAlign = "center";
      break;
    case "right":
      textAlign = "right";
      break;
    default:
      break;
  }
  switch (spacing) {
    case "2x":
      letterSpacing = "0.1em";
      break;
    case "3x":
      letterSpacing = "0.2em";
      break;
    default:
      break;
  }
  switch (style) {
    case "underline":
      textDecoration = "underline";
      break;
    case "italic":
      textStyle = "italic";
      break;
    default:
      break;
  }
  switch (order) {
    case "before":
      flexDirection = "row";
      break;
    case "after":
      flexDirection = "row-reverse";
      break;
    default:
      break;
  }
  switch (weight) {
    case "light":
      textWeight = "300";
      break;
    case "normal":
      textWeight = "500";
      break;
    case "bold":
    default:
      textWeight = "700";
      break;
  }
  return (
    <StyledText
      id={id}
      as={as}
      textColor={textColor}
      textWeight={textWeight}
      letterSpacing={letterSpacing}
      textAlign={textAlign}
      textStyle={textStyle}
      textDecoration={textDecoration}
      select={select}
      className={className}
    >
      {title}
      {count ? (
        <CountContainer>
          <a>{count}</a>
        </CountContainer>
      ) : null}
    </StyledText>
  );
}

function SubTitle({ id, title, select, className }) {
  return (
    <Title
      id={id}
      title={title}
      select={select}
      size=""
      weight=""
      spacing="2x"
      type="light"
      className={className}
    />
  );
}

function Description({ id, title, className }) {
  return (
    <Title
      id={id}
      title={title}
      size="tiny"
      weight="light"
      className={className}
    />
  );
}

Title.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any,
  number: PropTypes.bool,
  results: PropTypes.bool,
  weight: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.string,
  size: PropTypes.string,
};

function Body({ id, body, type, weight, size, className }) {
  let textColor;
  let textWeight;
  let textSize;
  switch (type) {
    case "info":
      textColor = colors.anchor;
      break;
    case "success":
      textColor = colors.success;
      break;
    case "warning":
      textColor = colors.warning;
      break;
    case "alert":
      textColor = colors.alert;
      break;
    case "inherit":
      textColor = "inherit";
      break;
    case "inverse":
      textColor = colors.white;
      break;
    default:
      break;
  }

  switch (size) {
    case "small":
      textSize = "0.75rem";
      break;
    case "normal":
      textSize = "0.875rem";
      break;
    case "large":
      textSize = "1.25rem";
      break;
    case "xlarge":
      textSize = "1.5rem";
      break;
    default:
      break;
  }
  switch (weight) {
    case "light":
      textWeight = "500";
      break;
    case "normal":
      textWeight = "600";
      break;
    case "bold":
      textWeight = "700";
      break;
    default:
      break;
  }
  return (
    <StyledDescription
      id={id}
      textColor={textColor}
      textWeight={textWeight}
      textSize={textSize}
    >
      {body}
    </StyledDescription>
  );
}

Body.propTypes = {
  id: PropTypes.string,
  body: PropTypes.any,
  weight: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  order: PropTypes.string,
  style: PropTypes.string,
  size: PropTypes.string,
  align: PropTypes.string,
  spacing: PropTypes.string,
  select: PropTypes.bool,
  className: PropTypes.string,
};

// export default Title;
export { Title as default, Body, SubTitle, Description };
