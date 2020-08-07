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
  border-right: ${(props) => {
    return props.hasBorder ? "1px solid" : "";
  }};
  border-color: ${(props) => {
    return props.theme.palette.neutral40;
  }};
  overflow: ${(props) => {
    return props.overflow || "auto";
  }};
  box-shadow: ${(props) => {
    return props.theme.shadows[props.regionShadow];
  }};
  outline: none;
  ${(props) => {
    // when it is overlay, we want the region (parent) to have no pointer-events
    // and the children to restore thier events
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
    hasBorder: true,
  },
  B_02: {
    setTemplate: [
      "\"A B\"",
    ].join("\n"),
    setColumns: `${widthXS} 1fr`,
    hasBorder: true,
  },
  B_03: {
    setTemplate: [
      "\"A\"",
      "\"B\"",
    ].join("\n"),
    setRows: "auto 1fr",
    hasBorder: true,
  },
  B_04: {
    setTemplate: [
      "\"A B\"",
    ].join("\n"),
    setColumns: `${widthMD} 1fr`,
    hasBorder: true,
  },
  B_05: {
    setTemplate: [
      "\"A . B\"",
      "\". . .\"",
    ].join("\n"),
    setColumns: "auto 1fr 12rem",
    setRows: "1fr 1rem",
    hasBorder: true,
  },
  B_06: {
    setTemplate: [
      "\"A B\"",
    ].join("\n"),
    setColumns: `1fr ${widthXL}`,
    hasBorder: true,
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
  let hasBorder;
  let setTemplate;
  let zIndex;
  if (template && template.toUpperCase() !== "" && templateHash[template.toUpperCase()]) {
    ({
      setTemplate, setColumns, setRows, hasBorder,
    } = templateHash[template.toUpperCase()]);
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
    setPadding = "0.5rem";
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
              id={A.id || "A"}
              placeholder="A"
              gridArea={template ? "A" : ""}
              regionShadow={regionShadow}
              tabIndex="0"
              hasBorder={hasBorder}
              overflow={A.overflow}
              isOverlay={isOverlay}
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
              overflow={B.overflow}
              isOverlay={isOverlay}
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
              overflow={C.overflow}
              isOverlay={isOverlay}
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
              overflow={D.overflow}
              isOverlay={isOverlay}
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
              overflow={E.overflow}
              isOverlay={isOverlay}
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
    id: PropTypes.string,
    content: PropTypes.node,
    overflow: PropTypes.string,
  }),
  B: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.node,
    overflow: PropTypes.string,
  }),
  C: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.node,
    overflow: PropTypes.string,
  }),
  children: PropTypes.node,
  classname: PropTypes.string,
  D: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.node,
    overflow: PropTypes.string,
  }),
  E: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.node,
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
