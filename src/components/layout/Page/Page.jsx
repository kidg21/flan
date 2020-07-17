/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import Grid from "layout/Grid";
import { Title } from "base/Typography";

const PageWrapper = styled(Grid)`
  position: ${(props) => {
    return props.setPosition || "relative";
  }};
  height: ${(props) => {
    return props.setHeight || "";
  }};
  grid-template-areas: ${(props) => {
    return props.setTemplate || "";
  }};
  grid-template-columns: ${(props) => {
    return props.setColumns || "100%";
  }};
  grid-column-gap: ${(props) => {
    return props.setColumnGap || "";
  }};
  grid-template-rows: ${(props) => {
    return props.setRows || "initial";
  }};
  grid-row-gap: ${(props) => {
    return props.setRowGap || "";
  }};
  color: ${(props) => {
    return props.theme.text.primary;
  }};
  background-color: ${(props) => {
    return props.backgroundColor || props.theme.background.default;
  }};
  padding: ${(props) => {
    return props.setPadding || "";
  }};
  z-index: ${(props) => {
    return props.zIndex || "0";
  }};
  pointer-events: ${(props) => {
    return props.pointerEvents || "";
  }};
  /* Prototype Content - displays when empty */
  &:empty {
    &:before {
      white-space: pre;
      ${PlaceholderText}
      content: "{ Template }";
    }
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
  box-shadow: ${(props) => {
    return props.theme.shadows[props.regionShadow];
  }};
  padding: 1px;
  pointer-events: initial;
  &:focus {
    outline: ${(props) => {
    return `1px solid ${props.theme.palette.selected}`;
  }};
  outline-offset: -1px;
  }
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

const widthXS = "12rem";
const widthSM = "18rem";
const widthMD = "24rem";
const widthLG = "30rem";
const widthXL = "36rem";

const templateHash = {
  A_01: {
    setTemplate: "\n\"A\"\n",
    setColumns: "1fr",
    setRows: "auto",
  },
  A_02: {
    setTemplate: [
      "\". . .\"",
      "\". A .\"",
      "\". . .\"",
    ].join("\n"),
    setColumns: "1fr auto 1fr",
    setRows: "1fr auto 1fr",
  },
  B_01: {
    setTemplate: [
      "\"A B\"",
    ].join("\n"),
    setColumns: `1fr ${widthMD}`,
  },
  B_02: {
    setTemplate: [
      "\"A B\"",
    ].join("\n"),
    setColumns: `${widthXS} 1fr`,
  },
  B_03: {
    setTemplate: [
      "\"A\"",
      "\"B\"",
    ].join("\n"),
    setRows: "auto 1fr",
  },
  B_04: {
    setTemplate: [
      "\"A B\"",
    ].join("\n"),
    setColumns: `${widthMD} 1fr`,
  },
  C_01: {
    setTemplate: [
      "\"A A A\"",
      "\"B B C\"",
    ].join("\n"),
    setColumns: `${widthXS} 1fr 1fr`,
    setRows: "auto 1fr",
  },
  C_02: {
    setTemplate: [
      "\"A B\"",
      "\"A C\"",
    ].join("\n"),
    setColumns: `${widthXS} 1fr`,
    setRows: "auto 1fr",
  },
  C_03: {
    setTemplate: [
      "\"A B C\"",
    ].join("\n"),
    setColumns: `${widthXS} ${widthSM} 1fr`,
    setRows: "1fr",
  },
  D_01: {
    setTemplate: [
      "\"A A B\"",
      "\"A A C\"",
      "\"D D D\"",
    ].join("\n"),
    setColumns: "auto 1fr 3fr",
    setRows: "3fr 1fr auto",
  },
  D_02: {
    setTemplate: [
      "\"A B D\"",
      "\"A C D\"",
    ].join("\n"),
    setColumns: `${widthXS} 1fr ${widthXL}`,
    setRows: "auto 1fr",
  },
  E_01: {
    setTemplate: [
      "\"A A A\"",
      "\"B C D\"",
      "\"E E E\"",
    ].join("\n"),
    setColumns: "1fr 5fr 2fr",
    setRows: "auto 1fr auto",
  },
  E_02: {
    setTemplate: [
      "\"A B B B\"",
      "\"A C C E\"",
      "\"A C C E\"",
      "\"A D D E\"",
    ].join("\n"),
    setColumns: `${widthXS} ${widthXS} 1fr ${widthMD}`,
    setRows: "auto 1fr 1fr auto",
  },
  E_03: {
    setTemplate: [
      "\"A A . . E\"",
      "\". . . . E\"",
      "\"B . . . .\"",
      "\"C . . . .\"",
      "\"D . . . .\"",
      "\". . . . .\"",
    ].join("\n"),
    setColumns: "auto 2fr 1fr 1fr auto",
    setRows: "max-content max-content max-content max-content max-content 1fr",
  },
};

function Page({
  A, B, C, D, E, children, classname, hasBorders, hasShadows, id, isOverlay, template,
}) {
  let backgroundColor;
  let pointerEvents;
  let regionShadow;
  let setColumnGap;
  let setColumns;
  let setHeight;
  let setPadding;
  let setPosition;
  let setRowGap;
  let setRows;
  let setTemplate;
  let zIndex;
  if (template && template.toUpperCase() !== "" && templateHash[template.toUpperCase()]) {
    ({ setTemplate, setColumns, setRows } = templateHash[template.toUpperCase()]);
    setHeight = "100%";
    setPadding = "0";
    setColumnGap = "0";
    setRowGap = "0";
  } else {
    setHeight = "auto";
    setPadding = "1rem";
    setColumnGap = "1rem";
    setRowGap = "1rem";
  }
  if (hasBorders || hasShadows) {
    setPadding = "1rem";
    setColumnGap = "1rem";
    setRowGap = "1rem";
    regionShadow = "outlineShadow";
    if (hasShadows) {
      regionShadow = "dropShadow2";
    }
  }
  if (isOverlay) {
    backgroundColor = "none";
    pointerEvents = "none";
    setPadding = "1rem";
    setPosition = "absolute";
    zIndex = "999";
  }
  return (
    <PageWrapper
      backgroundColor={backgroundColor}
      classname={classname}
      id={id}
      pointerEvents={pointerEvents}
      setColumnGap={setColumnGap}
      setColumns={setColumns}
      setHeight={setHeight}
      setPadding={setPadding}
      setPosition={setPosition}
      setRowGap={setRowGap}
      setRows={setRows}
      setTemplate={setTemplate}
      zIndex={zIndex}
    >
      {A || B || C || D || E ? (
        <React.Fragment>
          {A ? (
            <Region
              id={A.id || "A"}
              placeholder="A"
              gridArea={template ? "A" : ""}
              regionShadow={regionShadow}
              tabIndex="0"
            >
              {A.content}
            </Region>
          ) : null}
          {B ? (
            <Region
              id={B.id || "B"}
              placeholder="B"
              gridArea={template ? "B" : ""}
              regionShadow={regionShadow}
              tabIndex="0"
            >
              {B.content}
            </Region>
          ) : null}
          {C ? (
            <Region
              id={C.id || "C"}
              placeholder="C"
              gridArea={template ? "C" : ""}
              regionShadow={regionShadow}
              tabIndex="0"
            >
              {C.content}
            </Region>
          ) : null}
          {D ? (
            <Region
              id={D.id || "D"}
              placeholder="D"
              gridArea={template ? "D" : ""}
              regionShadow={regionShadow}
              tabIndex="0"
            >
              {D.content}
            </Region>
          ) : null}
          {E ? (
            <Region
              id={E.id || "E"}
              placeholder="E"
              gridArea={template ? "E" : null}
              regionShadow={regionShadow}
              tabIndex="0"
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
    content: PropTypes.node,
  }),
  B: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.node,
  }),
  C: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.node,
  }),
  children: PropTypes.node,
  classname: PropTypes.string,
  D: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.node,
  }),
  E: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.node,
  }),
  id: PropTypes.string,
  isOverlay: PropTypes.bool,
  stateCards: PropTypes.bool,
  template: PropTypes.string,
};
Page.defaultProps = {
  A: null,
  B: null,
  C: null,
  children: null,
  classname: null,
  D: null,
  E: null,
  id: null,
  isOverlay: false,
  stateCards: false,
  template: null,
};

export { Page as default, PageSection, ContentSection };
