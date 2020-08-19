/* eslint-disable linebreak-style */
/* eslint-disable complexity */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "layout/Grid";

const Region = styled.section`
  position: relative;
  grid-area: ${(props) => {
    return props.gridArea || "";
  }};
  height: inherit;
  border-left: ${(props) => {
    return props.hasBorder ? "1px solid" : "";
  }};
  border-color: ${(props) => {
    return props.theme.palette.neutral40;
  }};
  overflow: ${(props) => {
    return props.overflow || "auto";
  }};
  opacity: ${(props) => {
    return props.opacity || "1";
  }};
  box-shadow: ${(props) => {
    return props.theme.shadows[props.regionShadow];
  }};
  outline: none;
  transition: all 0.15s ease-in-out;
  ${(props) => {
    // when it is overlay, we want the region (parent) to have no pointer-events
    // and the children to restore thier events
    // allows for transparent space inbetween to work
    return !props.isOverlay ? "pointer-events: initial;" : ">* { pointer-events: auto; };";
  }}
`;

const TemplateWrapper = styled(Grid)`
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
  ${Region} {
    > * {
      border-radius: 0; /* Squares of corners or direct child containers.  Eliminates 'inset shadow' of rounded containers when Regions have borders or shadows */
    }
  }
`;

const widthXS = "12rem";
const widthSM = "18rem";
const widthMD = "24rem";
const widthLG = "30rem";
const widthXL = "38rem";

const templateHash = {
  A_01: {
    setTemplate: "\n\"A\"\n",
    setColumns: "1fr",
    setRows: "auto",
  },
  A_02: {
    setTemplate: [
      "\". A .\"",
    ].join("\n"),
    setColumns: "1fr auto 1fr",
    setRows: "auto",
  },
  B_01: {
    setTemplate: [
      "\"A B\"",
    ].join("\n"),
    setColumns: `1fr ${widthLG}`,
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
  B_05: {
    setTemplate: [
      "\"A . B\"",
      "\". . B\"",
      "\". . .\"",
    ].join("\n"),
    setColumns: `4rem 1fr ${widthMD}`,
    setRows: "auto 1fr 1rem",
    hasBorder: true,
  },
  B_06: {
    setTemplate: [
      "\"A B\"",
    ].join("\n"),
    setColumns: `1fr ${widthXL}`,
  },
  B_07: {
    setTemplate: [
      "\"A B\"",
    ].join("\n"),
    setColumns: `1fr ${widthLG}`,
  },
  C_01: {
    setTemplate: [
      "\"A A A\"",
      "\"B B C\"",
    ].join("\n"),
    setColumns: `${widthXS} 1fr ${widthLG}`,
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
  C_04: {
    setTemplate: [
      "\"A . . B\"",
      "\"C C . B\"",
      "\". . . .\"",
    ].join("\n"),
    setColumns: "auto auto 1fr 12rem",
    setRows: "1fr auto 2rem",
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

function Template({
  A, B, C, D, E, children, classname, hasCards, hasShadows, id, isOverlay, template,
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
    ({
      setTemplate, setColumns, setRows,
    } = templateHash[template.toUpperCase()]);
    setHeight = "100%";
    setPadding = "0";
    setColumnGap = "0";
    setRowGap = "0";
  } else {
    setHeight = "auto";
    setPadding = "1rem";
    setColumnGap = "1rem";
    setRowGap = "1.25rem";
  }
  if (hasCards || hasShadows) {
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
    <TemplateWrapper
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
              gridArea={template ? "A" : ""}
              hasBorder={A.hasBorder}
              id={A.id || "A"}
              isOverlay={isOverlay}
              opacity={A.opacity}
              overflow={A.overflow}
              placeholder="A"
              regionShadow={regionShadow}
              tabIndex="0"
            >
              {A.content}
            </Region>
          ) : null}
          {B ? (
            <Region
              gridArea={template ? "B" : ""}
              hasBorder={B.hasBorder}
              id={B.id || "B"}
              isOverlay={isOverlay}
              opacity={B.opacity}
              overflow={B.overflow}
              placeholder="B"
              regionShadow={regionShadow}
              tabIndex="0"
            >
              {B.content}
            </Region>
          ) : null}
          {C ? (
            <Region
              gridArea={template ? "C" : ""}
              hasBorder={C.hasBorder}
              id={C.id || "C"}
              isOverlay={isOverlay}
              opacity={C.opacity}
              overflow={C.overflow}
              placeholder="C"
              regionShadow={regionShadow}
              tabIndex="0"
            >
              {C.content}
            </Region>
          ) : null}
          {D ? (
            <Region
              gridArea={template ? "D" : ""}
              hasBorder={D.hasBorder}
              id={D.id || "D"}
              isOverlay={isOverlay}
              opacity={D.opacity}
              overflow={D.overflow}
              placeholder="D"
              regionShadow={regionShadow}
              tabIndex="0"
            >
              {D.content}
            </Region>
          ) : null}
          {E ? (
            <Region
              gridArea={template ? "E" : null}
              hasBorder={E.hasBorder}
              id={E.id || "E"}
              isOverlay={isOverlay}
              opacity={E.opacity}
              overflow={E.overflow}
              placeholder="E"
              regionShadow={regionShadow}
              tabIndex="0"
            >
              {E.content}
            </Region>
          ) : null}
        </React.Fragment>
      ) : children}
    </TemplateWrapper>
  );
}
Template.propTypes = {
  A: PropTypes.shape({
    content: PropTypes.node,
    hasBorder: PropTypes.bool,
    id: PropTypes.string,
    opacity: PropTypes.string,
    overflow: PropTypes.string,
  }),
  B: PropTypes.shape({
    content: PropTypes.node,
    hasBorder: PropTypes.bool,
    id: PropTypes.string,
    opacity: PropTypes.string,
    overflow: PropTypes.string,
  }),
  C: PropTypes.shape({
    content: PropTypes.node,
    hasBorder: PropTypes.bool,
    id: PropTypes.string,
    opacity: PropTypes.string,
    overflow: PropTypes.string,
  }),
  children: PropTypes.node,
  classname: PropTypes.string,
  D: PropTypes.shape({
    content: PropTypes.node,
    hasBorder: PropTypes.bool,
    id: PropTypes.string,
    opacity: PropTypes.string,
    overflow: PropTypes.string,
  }),
  E: PropTypes.shape({
    content: PropTypes.node,
    hasBorder: PropTypes.bool,
    id: PropTypes.string,
    opacity: PropTypes.string,
    overflow: PropTypes.string,
  }),
  id: PropTypes.string,
  isOverlay: PropTypes.bool,
  hasCards: PropTypes.bool,
  hasShadows: PropTypes.bool,
  template: PropTypes.string,
};
Template.defaultProps = {
  A: null,
  B: null,
  C: null,
  children: null,
  classname: null,
  D: null,
  E: null,
  id: null,
  isOverlay: false,
  hasCards: false,
  hasShadows: false,
  template: null,
};

export default Template;
