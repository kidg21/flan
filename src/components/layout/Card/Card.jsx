import React from "react"
import styled, { css } from "styled-components"
import { fonts, colors, shadows } from "../../../attributes/Variables/Variables"
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
      content: "{ Card } \00000A 'Container for content modules'";
      padding: 2rem;
    }
  }
`

const CardList = styled(Grid)`
  padding: 1rem;
  * {
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
