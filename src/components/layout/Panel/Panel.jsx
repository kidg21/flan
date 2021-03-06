/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Skeleton";
import { PointerEventsContext } from "States";

const PanelWrapper = styled.div`
  position: absolute;
  background: ${(props) => {
    return props.theme.background.default;
  }};
  pointer-events: ${(props) => {
    return props.mouseEvents || "";
  }};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: ${(props) => { return props.width; }};
  height: ${(props) => { return props.height; }};
  max-height: ${(props) => { return props.maxHeight; }};
  max-width: ${(props) => { return props.maxWidth; }};
  transform: ${(props) => {
    return props.isOffCanvas || "";
  }};
  transition: all 0.3s ease-in-out;
  -webkit-overflow-scrolling: touch;
  /* Prototype Content - displays when a Panel Section is empty */
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "Panel";
      color: ${(props) => {
    return props.theme.text.primary;
  }};
    }
  }
`;

const SectionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: auto;
  padding: ${(props) => {
    return props.sectionPadding || "1em 1em";
  }};
  z-index: 0;
  width: 100%;
  max-height: 100vh;
  /** TODO: Add a boolean prop to support a 'horizontal scrolling' option. */
  overflow-x: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.75em;
    height: 0.75em;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0.5px 0 0px ${(props) => {
    return props.theme.palette.neutral40;
  }};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => {
    return props.theme.palette.neutral80;
  }};
    border-radius: ${(props) => {
    return props.theme.borders.radiusMin;
  }};
    box-shadow: inset 0 0 0 1px ${(props) => {
    return props.theme.background.default;
  }};
    outline: none;
  }
  ::-webkit-scrollbar-track:horizontal {
    box-shadow: inset 0.5px 0 0px ${(props) => {
    return props.theme.palette.neutral40;
  }};
}
  ::-webkit-scrollbar-thumb:horizontal {
    background-color: ${(props) => {
    return props.theme.palette.neutral80;
  }};
    border-radius: ${(props) => {
    return props.theme.borders.radiusMin;
  }};
    box-shadow: inset 0 0 0 1px ${(props) => {
    return props.theme.background.default;
  }};
  outline: none;
}
  /* Prototype Content - displays when a Panel Section is empty */
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "Panel Body";
      color: ${(props) => {
    return props.theme.text.primary;
  }};
    }
  }
`;

function PanelBody({
  children, className, id, padding,
}) {
  let sectionPadding;
  const numPadding = padding ? parseInt(padding, 10) : NaN;
  if (padding && padding.toLowerCase() === "0") {
    sectionPadding = "0";
  } else if (!isNaN(numPadding) && numPadding < 5) {
    sectionPadding = `${0.5 * numPadding}em 1em`;
  }
  return (
    <SectionWrapper
      className={className}
      sectionPadding={sectionPadding}
      id={id}
    >
      {children}
    </SectionWrapper>
  );
}

PanelBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  padding: PropTypes.oneOf(["0", "2x", "3x", "4x"]),
  id: PropTypes.string,
};
PanelBody.defaultProps = {
  children: null,
  className: null,
  padding: null,
  id: null,
};

const PanelSection = styled(PanelBody)`
  flex: none;
  padding: 0;
  overflow: visible;
  z-index: 1;
  &:first-of-type {
    border-bottom: 1px solid ${(props) => {
    return props.theme.palette.neutral20;
  }};
    /** Will be coming back to this */
    /* box-shadow: ${(props) => {
    return props.theme.shadows.outerShadow;
  }}; */
  }
  &:last-of-type {
    border-top: 1px solid ${(props) => {
    return props.theme.palette.neutral20;
  }};
    /** Will be coming back to this */
    /* box-shadow: ${(props) => {
    return props.theme.shadows.outerShadow;
  }}; */
  }
  > * {
    border-radius: 0; /* Squares of corners or direct child containers.  Eliminates 'inset shadow' of rounded containers when children have borders or shadows */
  }
`;

function Panel({
  children, classname, footer, header, height, id, maxHeight, maxWidth, offcanvas, padding, width,
}) {
  const pointerEvents = useContext(PointerEventsContext);
  let isOffCanvas;
  switch (offcanvas) {
    case "top":
      isOffCanvas = "translate3d(0, -100%, 0)";
      break;
    case "right":
      isOffCanvas = "translate3d(100%, 0, 0)";
      break;
    case "bottom":
      isOffCanvas = "translate3d(0, 100%, 0)";
      break;
    case "left":
      isOffCanvas = "translate3d(-100%, 0, 0)";
      break;
    default:
      isOffCanvas = "translate3d(0, 0, 0)";
      break;
  }
  return (
    <PanelWrapper
      classname={classname}
      height={height}
      id={id}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      isOffCanvas={isOffCanvas}
      width={width}
      mouseEvents={pointerEvents}
    >
      {header ? <PanelSection id={id ? `${id}_header` : null}>{header}</PanelSection> : null}
      <PanelBody padding={padding} id={id ? `${id}_body` : null}>{children}</PanelBody>
      {footer ? <PanelSection id={id ? `${id}_footer` : null}>{footer}</PanelSection> : null}
    </PanelWrapper>
  );
}

Panel.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  footer: PropTypes.node,
  header: PropTypes.node,
  height: PropTypes.string,
  id: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  offcanvas: PropTypes.string,
  padding: PropTypes.oneOf(["0", "2x", "3x", "4x"]),
  width: PropTypes.string,
};
Panel.defaultProps = {
  children: null,
  classname: null,
  footer: null,
  header: null,
  height: "100%",
  id: null,
  maxHeight: "100vh",
  maxWidth: "100vw",
  offcanvas: null,
  padding: null,
  width: "100%",
};

export default Panel;
