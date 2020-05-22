/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import Grid from "layout/Grid";
import Text, { Title } from "base/Typography";

const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: auto;
  align-self: stretch;
  height: 100%;
  color: ${(props) => {
    return props.theme.text.primary;
  }};
  background-color: ${(props) => {
    return props.theme.background.default;
  }};
  /** TODO: Add a 'padding' prop */
  padding: 1em;
  z-index: 0;

  /* Prototype Content - displays when empty */
  &:empty {
    &:before {
      white-space: pre;
      ${PlaceholderText}
      content: "{ Page }";
    }
    &:after {
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
    }
  }
`;

const Section = styled(Grid)`
  margin-bottom: 1.5em;
  /* padding: 1rem 1rem .5rem; */
  height: ${(props) => {
    return props.height || "";
  }};
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Body = styled(Grid)`
  grid-template-areas: ${(props) => {
    return props.setTemplate || "";
  }};
  grid-template-columns: ${(props) => {
    return props.setColumns || "initial";
  }};
  grid-column-gap: ${(props) => {
    return props.setColumnGap || "0";
  }};
  grid-template-rows: ${(props) => {
    return props.setRows || "initial";
  }};
  grid-row-gap: ${(props) => {
    return props.setRowGap || "0";
  }};
  height: inherit;
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
  grid-area: ${(props) => {
    return props.gridArea || "";
  }};
  height: inherit;
  padding: ${(props) => {
    return props.setPadding || "";
  }};
  overflow: auto;
  box-shadow: ${(props) => {
    return props.hasShadow ? props.theme.shadows.dropShadow2 : null;
  }};
  &:empty {
    &:before {
      ${PlaceholderText}
      background-color: pink;
      height: inherit;
      content: "${(props) => {
    return props.placeholder || "";
  }}";
    }
  }
`;
function Page({
  A, B, C, children, classname, columns, gap, header, id, rows, template, placeholder,
}) {
  let hasShadow;
  let setTemplate;
  let setColumns;
  let setColumnGap;
  let setRows;
  let setRowGap;
  switch (template) {
    case "01":
      setTemplate = `
        "A B C"
      `;
      setColumns = "15% 1fr 25%";
      setRows = "auto";
      break;
    case "02":
      setTemplate = `
        "header header header"
        "A B C"
        "A B C"
      `;
      setColumns = "10rem 1fr 20rem";
      // setColumnGap = "0";
      setRows = "auto 1fr";
      // setRowGap = "0";
      // hasShadow = true;
      break;
    default:
      break;
  }
  return (
    <PageWrapper
      id={id}
      classname={classname}
      columns="1"
      hasShadow={hasShadow}
    >
      <Body
        setColumnGap={setColumnGap}
        setColumns={setColumns}
        setRowGap={setRowGap}
        setRows={setRows}
        setTemplate={setTemplate}
        template={template}
      >
        {!children ? (
          <React.Fragment>
            {header ? (
              <Region
                id={header.id || "Header"}
                placeholder="Header"
                gridArea="header"
              >
                {header.content}
              </Region>
            ) : null}
            <Region
              id={A.id || "A"}
              placeholder="A"
              gridArea="A"
            >
              {A.content}
            </Region>
            <Region
              id={B.id}
              placeholder="B"
              gridArea="B"
            >
              {B.content}
            </Region>
            <Region
              id={C.id}
              placeholder="C"
              gridArea="C"
            >
              {C.content}
            </Region>
          </React.Fragment>
        ) : null}
        {!children ? null : children}
      </Body>
    </PageWrapper>
  );
}
Page.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  columns: PropTypes.number,
  header: PropTypes.shape({
    description: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }),
  id: PropTypes.string,
};
Page.defaultProps = {
  children: null,
  classname: null,
  columns: null,
  header: null,
  id: null,
};

export { Page as default, PageSection, ContentSection };
