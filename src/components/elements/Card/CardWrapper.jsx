/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { useId } from "utils/hooks";
import { PlaceholderText } from "helpers/Skeleton";

const StyledCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: none;
  color: ${(props) => {
    return props.cardColor ? props.theme.text[props.cardColor] : props.theme.text.primary;
  }};
  background-color: ${(props) => {
    return props.cardBackground
      ? props.theme.background[props.cardBackground]
      : props.theme.background.default;
  }};
  padding: ${(props) => {
    return props.cardPadding || "";
  }};
  border-radius: ${(props) => {
    return props.theme.borders.radiusMin;
  }};
  box-shadow: ${(props) => {
    return props.theme.shadows[props.cardShadow] || "";
  }};
  cursor: ${(props) => {
    return props.onClick ? "pointer" : "";
  }};
  a {
  color: ${(props) => {
    return props.theme.text[props.cardColor] || "";
  }};
  }
  /* Prototype Content - displays when a Card is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "${(props) => { return props.placeholder || ""; }}";
      padding: 2rem;
    }
  }
`;

const CardWrapper = ({
  children,
  className,
  href,
  id,
  isInverse,
  media,
  onClick,
  padding,
  placeholder,
  shadow,
}) => {
  const uId = useId(id);
  let cardColor;
  let cardBackground;
  if (isInverse) {
    cardColor = "inverse";
    cardBackground = "inverse";
  }

  let cardPadding;
  const numPadding = padding ? parseInt(padding, 10) : NaN;
  if (numPadding > 0 && numPadding < 5) {
    cardPadding = `${0.25 * numPadding}em`;
  }

  let cardShadow;
  switch (shadow) {
    case "0":
      cardShadow = null;
      break;
    case "2x":
      cardShadow = "dropShadow2";
      break;
    default:
      cardShadow = "outlineShadow";
      break;
  }

  return (
    <StyledCardWrapper
      cardBackground={cardBackground}
      cardColor={cardColor}
      cardPadding={cardPadding}
      cardShadow={cardShadow}
      className={className}
      onClick={onClick}
      id={uId}
      href={href}
      isInverse={isInverse}
      media={media}
      shadow={shadow}
      placeholder={placeholder}
    >
      {children}
    </StyledCardWrapper>
  );
};

export default CardWrapper;
