import styled, { css } from "styled-components";
import { fonts, colors } from "../../base/Variables/Variables";
import { PlaceholderText } from "../../_helpers/Placeholders";

const Card = styled.li`
  display: flex;
  flex-direction: column;
  flex: none;
  width: 100%;
  background: ${colors.white};
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  border-radius: 5px;
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
  grid-gap: 1rem;
  flex: auto;
  padding: 1rem;
  align-self: stretch;
  align-content: flex-start;
  background: ${colors.white};
  /* Prototype Content - displays when a Card List is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "{ CardList } \00000A 'Displays a grid of Cards in columns'";
    }
  }
`;

export default Card;
export { CardList };
