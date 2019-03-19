import styled, { css } from "styled-components";
import { fonts, colors, shadows } from "../../base/Variables/Variables";
import { PlaceholderText } from "../../_helpers/Placeholders";

const Card = styled.li`
  display: flex;
  flex-direction: column;
  flex: none;
  width: 100%;
  background: ${colors.white};
  box-shadow: ${shadows.dropShadow};
  /* Prototype Content - displays when a Card is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "{ Card } \00000A 'Container for content modules'";
      padding: 2rem;
    }
  }
`;

const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  background: ${colors.white};
  padding: 1rem;
  /* Prototype Content - displays when a Card List is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "{ CardList } \00000A 'Displays a grid of Cards in columns'";
    }
  }
`;

export { Card as default, CardList };
