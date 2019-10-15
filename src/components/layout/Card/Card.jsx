import React from "react";
import styled from "styled-components";
import { shadows } from "Variables";
import Grid from "layout/Grid";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import PropTypes from "prop-types";

const CardPiece = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  padding: ${props => props.padding || ""};
  width: 100%;
  background: ${props => {
    return props.theme.palette[props.backgroundColor] || props.theme.background.default;
  }};
  color: ${props => {
    return props.theme.text[props.textColor] || props.theme.text.primary;
  }};
  &:hover {
    box-shadow: ${props => (props.hover ? props.theme.shadows.dropShadow : "")};
    cursor: ${props => (props.hover ? "pointer" : "")};
  }
  /* Prototype Content - displays when a Card is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      color: ${props => {
        return props.theme.text.primary;
      }};
      content: "Card Piece";
      padding: 2rem;
    }
  }
`;

const CardWrapper = styled(CardPiece)`
  position: relative;
  filter: ${props => {
    return props.theme.shadows.cardShadow;
  }};
  /* Square off rounded edges of any direct children of Cards */
  /* Prototype Content - displays when a Card is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      color: ${props => {
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
  }
  /* Prototype Content - displays when a Card List is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "{ CardList } \00000A 'Displays a grid of Cards in columns'";
    }
  }
`;

function Piece({
  id,
  hover,
  children,
  padding,
  textColor,
  backgroundColor,
  className,
  header,
  onClick,
}) {
  return (
    <CardPiece
      id={id}
      padding={padding}
      className={className}
      textColor={textColor}
      backgroundColor={backgroundColor}
      onClick={onClick}
      header={header}
      hover={hover}
    >
      {children}
    </CardPiece>
  );
}

function Card({ id, children, padding, className }) {
  return (
    <CardWrapper id={id} padding={padding} className={className}>
      {children}
    </CardWrapper>
  );
}

function CardList({ id, children, columns, gap, rows }) {
  return (
    <CardListWrapper id={id} columns={columns} gap={gap} rows={rows}>
      {children}
    </CardListWrapper>
  );
}

Piece.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  padding: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.bool,
};
Card.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
CardList.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
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
  /** Defines the heights of grid rows
   *
   * Options: Any switch case or any standard value accepted by the CSS Grid property, 'grid-template-rows'.
   */
  rows: PropTypes.oneOf(["default (auto)", "[grid-template-rows]"]),
};

export { Card as default, CardList, Piece };
