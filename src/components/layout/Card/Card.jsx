import React from "react";
import styled, { css } from "styled-components";
import { fonts, colors, shadows } from "Variables";
import Grid from "helpers/Grid.jsx";
import { PlaceholderText } from "helpers/Placeholders.jsx";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  position: relative;
  width: 100%;
  background: ${colors.white};
  filter: ${shadows.cardShadow};
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

const PieceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background: ${colors.white};

  flex: none;
  width: 100%;
  border-bottom: 0.25px solid #ddd;
  /* Prototype Content - displays when a Card is empty */
`;

// const CardList = styled.ul`
const CardList = styled(Grid)`
  padding: 1rem;
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

function Card({ id, children }) {
  return <CardWrapper id={id}>{children}</CardWrapper>;
}

function Piece({ id, children}) {
  return <PieceWrapper id={id}>{children}</PieceWrapper>;
}

export { Card as default, CardList, Piece };
