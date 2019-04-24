import React from "react"
import styled, { css } from "styled-components"
import { fonts, colors, shadows } from "Variables"
import Grid from "../../_helpers/Grid"
import { PlaceholderText } from "../../_helpers/Placeholders"

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  width: 100%;
  background: ${colors.white};
  filter: ${shadows.cardShadow};
  /* Prototype Content - displays when a Card is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "Card";
      padding: 2rem;
    }
  }
`

// const CardList = styled(Grid)`
const CardList = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
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
`

function Card({ ...props }) {
  return <CardWrapper>{props.children}</CardWrapper>
}

function DaCard({ ...props }) {
  return <Card>{props.children}</Card>
}

export { Card as default, CardList, DaCard }
