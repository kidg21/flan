import React from "react";
import styled, { css } from "styled-components";
import { fonts, colors, shadows } from "Variables";
import Grid from "helpers/Grid";
import { PlaceholderText } from "helpers/Placeholders";

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
  return <CardWrapper>{children}</CardWrapper>;
}

export { Card as default, CardList };
