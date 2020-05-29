/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import Grid from "layout/Grid";
import Text, { Title } from "base/Typography";

const PageWrapper = styled(Grid)`
  position: relative;
  height: ${(props) => {
    return props.setHeight || "100%";
  }};
  grid-template-areas: ${(props) => {
    return props.setTemplate || "";
  }};
  grid-template-columns: ${(props) => {
    return props.setColumns || "initial";
  }};
  grid-column-gap: ${(props) => {
    return props.setColumnGap || props.stateCards ? (props.setColumnGap || "1rem") : "0";
  }};
  grid-template-rows: ${(props) => {
    return props.setRows || "initial";
  }};
  grid-row-gap: ${(props) => {
    return props.setRowGap || props.stateCards ? (props.setRowGap || "1rem") : "0";
  }};
  color: ${(props) => {
    return props.theme.text.primary;
  }};
  background-color: ${(props) => {
    return props.theme.background.default;
  }};
  padding: ${(props) => {
    return props.setPadding || props.stateCards ? (props.setPadding || "1rem") : "";
  }};
  z-index: 0;
  /* Prototype Content - displays when empty */
  &:empty {
    &:before {
      white-space: pre;
      ${PlaceholderText}
      content: "{ Page }";
    }
    /* &:after {
      ${PlaceholderText}
      padding: 0;
      text-align: initial;
      white-space: pre-line;
      content: "Just think about these things in your mind - then bring them into your world. Isn't that fantastic? You can just push a little tree out of your brush like that. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. I thought today we would make a happy little stream that's just running through the woods here. Just a little indication.
      This is probably the greatest thing to happen in my life - to be able to share this with you.  Here's something that's fun. Talk to trees, look at the birds. Whatever it takes. It's so important to do something every day that will make you happy.
      All you have to learn here is how to have fun. Now, we're going to fluff this cloud. Put it in, leave it alone. Trees get lonely too, so we'll give him a little friend.
      Let's get crazy. When things happen - enjoy them. They're little gifts. Steve wants reflections, so let's give him reflections. All you need to paint is a few tools, a little instruction, and a vision in your mind. Everybody needs a friend. This is your world.
      Every day I learn. Trees live in your fan brush, but you have to scare them out. You can do it. A fan brush is a fantastic piece of equipment. Use it. Make friends with it.
      Little trees and bushes grow however makes them happy. Just let your mind wander and enjoy. This should make you happy. You don't have to spend all your time thinking about what you're doing, you just let it happen. Let's make a happy little mountain now. If I paint something, I don't want to have to explain what it is.
      It all happens automatically. You can create beautiful things - but you have to see them in your mind first. There we are. Nature is so fantastic, enjoy it. Let it make you happy. Let's put some highlights on these little trees. The sun wouldn't forget them. With practice comes confidence.";
    } */
  }
`;

const Section = styled(Grid)`
  margin-bottom: 1.5em;
  height: ${(props) => {
    return props.height || "";
  }};
  &:last-of-type {
    margin-bottom: 0;
  }
`;

function PageSection({
  children, classname, id, title,
}) {
  return (
    <Section id={id} classname={classname} columns="1" gap="sm">
      {title ? <Title size="lg" text={title} /> : null}
      {children}
    </Section>
  );
}

PageSection.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};
PageSection.defaultProps = {
  children: null,
  classname: null,
  id: null,
  title: null,
};

function ContentSection({
  children, classname, id, title,
}) {
  return (
    <Section id={id} classname={classname} columns="1" gap="sm" height="100%">
      {title ? <Title size="lg" text={title} /> : null}
      {children}
    </Section>
  );
}

ContentSection.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};
ContentSection.defaultProps = {
  children: null,
  classname: null,
  id: null,
  title: null,
};

const Region = styled.section`
  position: relative;
  grid-area: ${(props) => {
    return props.gridArea || "";
  }};
  height: inherit;
  overflow: auto;
    border-radius: ${(props) => {
    return props.stateCards ? props.theme.borders.radiusMin : null;
  }};
  box-shadow: ${(props) => {
    return props.stateCards ? props.theme.shadows.dropShadow2 : null;
  }};
  &:empty {
    &:before {
      ${PlaceholderText}
      color: deeppink;
      background-color: pink;
      border: 0.25rem solid deeppink;
      height: inherit;
      font-size: 2em;
      font-weight: bold;
      content: '${(props) => {
    return props.placeholder || "";
  }}';
    }
  }
`;

function Page({
  A, B, C, children, classname, D, stateCards, E, id, template,
}) {
  let setPadding;
  let setHeight;
  let setTemplate;
  let setColumns;
  let setColumnGap;
  let setRows;
  let setRowGap;
  if (stateCards) {
    setPadding = "1rem";
  }
  switch (template) {
    case "01": // A
      setTemplate = `
      "A"
      `;
      setColumns = "1fr";
      setRows = "auto";
      break;
    case "02": // A B
      setTemplate = `
      "A B"
      "A ."
      `;
      setColumns = "1fr 1fr";
      setRows = "auto auto";
      break;
    case "03": // A B C
      setTemplate = `
      ". . A . ."
      ". B B B ."
      "C C C C C"
      `;
      setColumns = "1fr 1fr 1fr 1fr 1fr";
      setRows = "1fr 1fr 1fr";
      break;
    case "04": // A B C D
      setTemplate = `
      "A A C"
      "D . C"
      "B B B"
      `;
      setColumns = "1fr 1fr 30rem";
      setRows = "30rem 1fr 1fr";
      break;
    case "05": // A B C D E
      setTemplate = `
      "A B C"
      "D D D"
      "E E E"
      `;
      setColumns = "10rem 1fr 20rem";
      setRows = "auto 1fr auto";
      break;
    case "06": // 'Appraisal Research'
      setTemplate = `
      "A B C"
      "A D C"
      `;
      setColumns = "10rem 1fr 20rem";
      setRows = "1fr auto";
      break;
    default:
      setHeight = "auto";
      setRowGap = "1rem";
      setPadding = "1rem";
      break;
  }
  return (
    <PageWrapper
      classname={classname}
      stateCards={stateCards}
      id={id}
      setColumnGap={setColumnGap}
      setColumns={setColumns}
      setHeight={setHeight}
      setPadding={setPadding}
      setRowGap={setRowGap}
      setRows={setRows}
      setTemplate={setTemplate}
      template={template}
    >
      {A || B || C || D || E ? (
        <React.Fragment>
          {A ? (
            <Region
              id={A.id || "A"}
              placeholder="A"
              gridArea={template ? "A" : ""}
              stateCards={stateCards}
            >
              {A.content}
            </Region>
          ) : null}
          {B ? (
            <Region
              id={B.id || "B"}
              placeholder="B"
              gridArea={template ? "B" : ""}
              stateCards={stateCards}
            >
              {B.content}
            </Region>
          ) : null}
          {C ? (
            <Region
              id={C.id || "C"}
              placeholder="C"
              gridArea={template ? "C" : ""}
              stateCards={stateCards}
            >
              {C.content}
            </Region>
          ) : null}
          {D ? (
            <Region
              id={D.id || "D"}
              placeholder="D"
              gridArea={template ? "D" : ""}
              stateCards={stateCards}
            >
              {D.content}
            </Region>
          ) : null}
          {E ? (
            <Region
              id={E.id || "E"}
              placeholder="E"
              gridArea={template ? "E" : null}
              stateCards={stateCards}
            >
              {E.content}
            </Region>
          ) : null}
        </React.Fragment>
      ) : children}
    </PageWrapper>
  );
}
Page.propTypes = {
  A: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
  }),
  B: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
  }),
  C: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
  }),
  children: PropTypes.node,
  classname: PropTypes.string,
  D: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
  }),
  stateCards: PropTypes.bool,
  E: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
  }),
  id: PropTypes.string,
  template: PropTypes.string,
};
Page.defaultProps = {
  A: null,
  B: null,
  C: null,
  children: null,
  classname: null,
  D: null,
  stateCards: false,
  E: null,
  id: null,
  template: null,
};

export { Page as default, PageSection, ContentSection };
