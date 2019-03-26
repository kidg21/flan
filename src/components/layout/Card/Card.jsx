import styled, { css } from "styled-components";
import { fonts, colors, shadows } from "../../../attributes/Variables/Variables";
import Grid from "../../_helpers/Grid";
import { PlaceholderText } from "../../_helpers/Placeholders";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  width: 100%;
  background: ${colors.white};
  /* box-shadow: 0 0 20px rgba(0, 0, 0, .1); */
  box-shadow: ${shadows.dropShadow};
  /* border-radius: 5px; */
  /* Prototype Content - displays when a Card is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "{ Card } \00000A 'Container for content modules'";
      padding: 2rem;
    }
  }
`;

// const CardList = styled.ul`
const CardList = styled(Grid)`
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr)); */
  /* grid-gap: 1rem; */
  /* background: ${colors.grey_light}; */
  /* padding: 1rem; */
  /* Prototype Content - displays when a Card List is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "{ CardList } \00000A 'Displays a grid of Cards in columns'";
    }
  }
`;

export { Card as default, CardList };
