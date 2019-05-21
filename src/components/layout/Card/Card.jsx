import React from "react"
import styled, { css } from "styled-components"
import { fonts, colors, shadows } from "Variables"
import Grid from "helpers/Grid.jsx"
import { PlaceholderText } from "helpers/Placeholders.jsx"

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  width: 100%;
  background: ${colors.white};
  filter: ${shadows.cardShadow};
  /* box-shadow: ${shadows.cardShadow}; */
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
`

// const CardList = styled.ul`
const CardList = styled(Grid)`
  /* display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr)); */
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

function Card({ id, children}) {
  return <CardWrapper>{children}</CardWrapper>
}



export { Card as default, CardList }
