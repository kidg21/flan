import React from "react";
import styled, { css } from "styled-components";
import { fonts, colors, shadows } from "Variables";
import Grid from "layout/Grid";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import PropTypes from "prop-types";


const CardPiece = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  width: 100%;
  background: ${colors.white};
  /* Prototype Content - displays when a Card is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "Card Piece";
      padding: 2rem;
    }
  }
`;

const CardWrapper = styled(CardPiece)`
  position: relative;
  filter: ${shadows.cardShadow};
  /* box-shadow: ${shadows.dropShadow}; */
  /* Square off rounded edges of any direct children of Cards */
  > * {
    border-radius: 0;
  }
  /* Prototype Content - displays when a Card is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
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

function Piece({ id, children, className }) {
  return (
    <CardPiece id={id} className={className}>
      {children}
    </CardPiece>
  );
}

function Card({ id, children, className }) {
  return (
    <CardWrapper id={id} className={className}>
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
  className: PropTypes.string,
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
