// Import dependencies
// import React from "react";
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// Import colors and sizes variables
import { colors, fonts, fontSize } from "../Variables/Variables";

const TypeContainer = styled.section`
  font-family: ${props =>
    props.lato ? "Lato, sans-serif" : "inherit"}; /* default 'Muli' */
  display: block;
  margin-bottom: 3rem;
  /* Underline */
  :after {
    content: "";
    position: absolute;
    height: 1px;
    width: 90%;
    left: 5%;
    background-color: ${colors.grey_40};
    margin-top: 1rem;
  }
  /* No underline on last element */
  &:last-of-type {
    margin-bottom: 0;
    :after {
      content: none;
    }
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

//Muli Family Fonts
const Title = styled.h1`
  font-family: ${props => (props.muli ? "Muli, sans-serif" : "inherit")};
  font-family: ${props => (props.lato ? "Lato, sans-serif" : "inherit")};
  font-weight: 400;
  margin: 0 0 1.5rem;
`;
const Paragraph = styled.p`
  font-family: ${props => (props.muli ? "Muli, sans-serif" : "inherit")};
  font-family: ${props => (props.lato ? "Lato, sans-serif" : "inherit")};
`;
const Heading_1 = styled.h1`
  font-family: ${props => (props.muli ? "Muli, sans-serif" : "inherit")};
  font-family: ${props => (props.lato ? "Lato, sans-serif" : "inherit")};
`;
const Heading_2 = styled.h2`
  font-family: ${props => (props.muli ? "Muli, sans-serif" : "inherit")};
  font-family: ${props => (props.lato ? "Lato, sans-serif" : "inherit")};
`;
const Heading_3 = styled.h3`
  font-family: ${props => (props.muli ? "Muli, sans-serif" : "inherit")};
  font-family: ${props => (props.lato ? "Lato, sans-serif" : "inherit")};
`;
const Heading_4 = styled.h4`
  font-family: ${props => (props.muli ? "Muli, sans-serif" : "inherit")};
  font-family: ${props => (props.lato ? "Lato, sans-serif" : "inherit")};
`;
const Heading_5 = styled.h5`
  font-family: ${props => (props.muli ? "Muli, sans-serif" : "inherit")};
  font-family: ${props => (props.lato ? "Lato, sans-serif" : "inherit")};
`;
const Heading_6 = styled.h6`
  font-family: ${props => (props.muli ? "Muli, sans-serif" : "inherit")};
  font-family: ${props => (props.lato ? "Lato, sans-serif" : "inherit")};
`;
const Numbers = styled.span`
  font-family: ${props => (props.muli ? "Muli, sans-serif" : "inherit")};
  font-family: ${props => (props.lato ? "Lato, sans-serif" : "inherit")};
  font-size: inherit;
  font-weight: 600;
  letter-spacing: 1px;
`;
const Span = styled.span`
  font-family: ${props => (props.muli ? "Muli, sans-serif" : "inherit")};
  font-family: ${props => (props.lato ? "Lato, sans-serif" : "inherit")};
  font-weight: 400;
  color: ${colors.grey_60};
  :after {
    padding: 0 0.5rem;
  }
`;
const Colon = styled(Span)`
  :after {
    content: ":";
  }
`;
const Pipe = styled(Span)`
  :after {
    content: "|";
  }
`;
const Slash = styled(Span)`
  :after {
    content: "/";
  }
`;
const Ampersand = styled(Span)`
  :after {
    content: "@";
  }
`;
const Bullet = styled(Span)`
  :after {
    content: "•";
  }
`;

export default function Typography(props) {
  return (
    <React.Fragment>
      <TypeContainer>
        <Title>
          <u>Font Pairings</u>
        </Title>
        <Heading_6>
          Pairing
          <Pipe />
          Heading
          <Colon />
          Muli
          <Bullet />
          Body
          <Colon />
          Muli
        </Heading_6>
        <Heading_2>This is the Heading</Heading_2>
        <Paragraph>
          What the devil. But we're not there yet, so we don't need to worry
          about it. Every single thing in the world has its own personality -
          and it is up to you to make friends with the little rascals. Every
          highlight needs it's own personal shadow. You can do anything here. So
          don't worry about it.
        </Paragraph>
        <Heading_6>
          Pairing
          <Pipe />
          Heading
          <Colon />
          Lato
          <Bullet />
          Body
          <Colon />
          Lato
        </Heading_6>
        <Heading_2 lato>This is the Heading</Heading_2>
        <Paragraph lato>
          What the devil. But we're not there yet, so we don't need to worry
          about it. Every single thing in the world has its own personality -
          and it is up to you to make friends with the little rascals. Every
          highlight needs it's own personal shadow. You can do anything here. So
          don't worry about it.
        </Paragraph>
        <Heading_6>
          Pairing
          <Pipe />
          Heading
          <Colon />
          Lato
          <Bullet />
          Body
          <Colon />
          Muli
        </Heading_6>
        <Heading_2 lato>This is the Heading</Heading_2>
        <Paragraph>
          What the devil. But we're not there yet, so we don't need to worry
          about it. Every single thing in the world has its own personality -
          and it is up to you to make friends with the little rascals. Every
          highlight needs it's own personal shadow. You can do anything here. So
          don't worry about it.
        </Paragraph>
        <Heading_6>
          Pairing
          <Pipe />
          Heading
          <Colon />
          Muli
          <Bullet />
          Body
          <Colon />
          Lato
        </Heading_6>
        <Heading_2>This is the Heading</Heading_2>
        <Paragraph lato>
          What the devil. But we're not there yet, so we don't need to worry
          about it. Every single thing in the world has its own personality -
          and it is up to you to make friends with the little rascals. Every
          highlight needs it's own personal shadow. You can do anything here. So
          don't worry about it.
        </Paragraph>
      </TypeContainer>
      <TypeContainer>
        <Title>
          <u>Muli</u>
        </Title>
        <Heading_1>
          h1
          <Pipe />
          Heading 1
        </Heading_1>
        <Heading_2>
          h2
          <Pipe />
          Heading 2
        </Heading_2>
        <Heading_3>
          h3
          <Pipe />
          Heading 3
        </Heading_3>
        <Heading_4>
          h4
          <Pipe />
          Heading 4
        </Heading_4>
        <Heading_5>
          h5
          <Pipe />
          Heading 5
        </Heading_5>
        <Heading_6>
          h6
          <Pipe />
          Heading 6
        </Heading_6>
        <Paragraph>
          paragraph
          <Pipe /> What the devil. But we're not there yet, so we don't need to
          worry about it. Every single thing in the world has its own
          personality - and it is up to you to make friends with the little
          rascals. Every highlight needs it's own personal shadow. You can do
          anything here. So don't worry about it.
        </Paragraph>
        <Paragraph>
          paragraph
          <Pipe />
          We'll make some happy little bushes here. And just raise cain. Isn't
          that fantastic that you can make whole mountains in minutes? Just make
          a decision and let it go.
        </Paragraph>
        <a>
          <Heading_6>
            anchor text
            <Pipe />
            This is anchor text using Header 6
          </Heading_6>
        </a>
        <Heading_2>
          Number Sequence
          <Pipe />
          <Numbers>1234567890</Numbers>
        </Heading_2>
      </TypeContainer>
      <TypeContainer lato>
        <Title>
          <u>Lato</u>
        </Title>
        <Heading_1>
          h1
          <Pipe />
          Heading 1
        </Heading_1>
        <Heading_2>
          h2
          <Pipe />
          Heading 2
        </Heading_2>
        <Heading_3>
          h3
          <Pipe />
          Heading 3
        </Heading_3>
        <Heading_4>
          h4
          <Pipe />
          Heading 4
        </Heading_4>
        <Heading_5>
          h5
          <Pipe />
          Heading 5
        </Heading_5>
        <Heading_6>
          h6
          <Pipe />
          Heading 6
        </Heading_6>
        <Paragraph>
          paragraph
          <Pipe /> What the devil. But we're not there yet, so we don't need to
          worry about it. Every single thing in the world has its own
          personality - and it is up to you to make friends with the little
          rascals. Every highlight needs it's own personal shadow. You can do
          anything here. So don't worry about it.
        </Paragraph>
        <Paragraph>
          paragraph
          <Pipe />
          We'll make some happy little bushes here. And just raise cain. Isn't
          that fantastic that you can make whole mountains in minutes? Just make
          a decision and let it go.
        </Paragraph>
        <a>
          <Heading_6>
            anchor text
            <Pipe />
            This is anchor text using Header 6
          </Heading_6>
        </a>
        <Heading_2>
          Number Sequence
          <Pipe />
          <Numbers>1234567890</Numbers>
        </Heading_2>
      </TypeContainer>
    </React.Fragment>
  );
}
