import React from "react";
import styled, { css } from "styled-components";
import { fonts, colors, shadows } from "Variables";
import Grid from "helpers/Grid.jsx";
import { PlaceholderText } from "helpers/Placeholders.jsx";

const Wrapper = styled.div`
	margin: 0.5em;
`;

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

function Piece({ id, children }) {
	return <CardPiece id={id}>{children}</CardPiece>;
}

function Card({ id, children }) {
	return <CardWrapper id={id}>{children}</CardWrapper>;
}

export { Card as default, CardList, Piece, Wrapper };
