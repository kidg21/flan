/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import styled from "styled-components";
import Grid from "layout/Grid";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import PropTypes from "prop-types";

const CardPiece = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  padding: ${(props) => {
    return props.piecePadding || "";
  }};
  width: 100%;
  background: ${(props) => {
    return (
      props.theme.palette[props.backgroundColor] ||
      props.theme.background.default
    );
  }};
  color: ${(props) => {
    return props.theme.text[props.textColor] || props.theme.text.primary;
  }};
  &:hover {
    box-shadow: ${(props) => { return (props.hover ? props.theme.shadows.dropShadow : ""); }};
    cursor: ${(props) => { return (props.hover ? "pointer" : ""); }};
  }
  /* Prototype Content - displays when a Card is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      color: ${(props) => {
    return props.theme.text.primary;
  }};
      content: "Card Piece";
      padding: 2rem;
    }
  }
`;

const CardWrapper = styled(CardPiece)`
  position: relative;
  padding: ${(props) => {
    return props.cardPadding || "1em";
  }};
  filter: ${(props) => {
    return props.theme.shadows.cardShadow;
  }};
  /* Square off rounded edges of any direct children of Cards */
  /* Prototype Content - displays when a Card is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      color: ${(props) => {
    return props.theme.text.primary;
  }};
      content: "Card";
      padding: 2rem;
    }
  }
`;

const CardListWrapper = styled(Grid)`
  ${CardWrapper} {
    border-radius: 5px;
    height: 100%;
  }
  /* Prototype Content - displays when a Card List is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "{ CardList }";
    }
  }
`;

function Piece({
  backgroundColor,
  children,
  className,
  header,
  hover,
  id,
  onClick,
  padding,
  textColor,
}) {
  let piecePadding;
  switch (padding) {
    case "1x":
      piecePadding = "0.25em";
      break;
    case "2x":
      piecePadding = "0.5em";
      break;
    case "3x":
      piecePadding = "0.75em";
      break;
    case "4x":
      piecePadding = "1em";
      break;
    default:
      break;
  }
  return (
    <CardPiece
      backgroundColor={backgroundColor}
      className={className}
      header={header}
      hover={hover}
      id={id}
      onClick={onClick}
      piecePadding={piecePadding}
      textColor={textColor}
    >
      {children}
    </CardPiece>
  );
}

function Card({
  children, className, id, padding,
}) {
  let cardPadding;
  switch (padding) {
    case "none":
      cardPadding = "0em";
      break;
    case "1x":
      cardPadding = "0.25em";
      break;
    case "2x":
      cardPadding = "0.5em";
      break;
    case "3x":
      cardPadding = "0.75em";
      break;
    case "4x":
      cardPadding = "1em";
      break;
    default:
      break;
  }
  return (
    <CardWrapper cardPadding={cardPadding} className={className} id={id}>
      {children}
    </CardWrapper>
  );
}

function CardList({
  children, className, columns, gap, id, rows,
}) {
  return (
    <CardListWrapper
      id={id}
      className={className}
      columns={columns}
      gap={gap}
      rows={rows}
    >
      {children}
    </CardListWrapper>
  );
}

Piece.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.bool,
  id: PropTypes.string,
  padding: PropTypes.oneOf(["none", "1x", "2x", "3x", "4x"]),
};
Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  padding: PropTypes.oneOf(["none", "1x", "2x", "3x", "4x"]),
};
CardList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Defines the widths of grid columns
   *
   * Options: Any switch case or any standard value accepted by the CSS Grid property, 'grid-template-columns'.
   */
  columns: PropTypes.oneOf([
    "default (auto)",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "[grid-template-columns]",
  ]),
  /** Sets the 'gutter' between grid items
   *
   * Options: Any switch case or any standard value accepted by the CSS Grid property, 'grid-gap'.
   */
  gap: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      "none",
      "tiny",
      "small",
      "default (normal)",
      "large",
      "xlarge",
      "xxlarge",
      "[grid-template-rows]",
    ]),
  ]),
  id: PropTypes.string,
  /** Defines the heights of grid rows
   *
   * Options: Any switch case or any standard value accepted by the CSS Grid property, 'grid-template-rows'.
   */
  rows: PropTypes.oneOf(["default (auto)", "[grid-template-rows]"]),
};

export { Card as default, CardList, Piece };
