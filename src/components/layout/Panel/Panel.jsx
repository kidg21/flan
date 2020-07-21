/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";

const PanelWrapper = styled.div`
  position: absolute;
  background: ${(props) => {
    return props.theme.background.default;
  }};
  display: flex;
  color: ${(props) => {
    return props.theme.text.primary;
  }};
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: ${(props) => { return props.width; }};
  height: ${(props) => { return props.height; }};
  max-height: 100vh;
  overflow: hidden;
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
  max-height: 100vh;
  /** TODO: Add a boolean prop to support a 'horizontal scrolling' option. */
  overflow-x: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0.5px 0 0px ${(props) => {
    return props.theme.palette.neutral40;
  }};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => {
    return props.theme.palette.action80;
  }};
    border-radius: 20px;
  }
  ::-webkit-scrollbar-track:horizontal {
    box-shadow: inset 0.5px 0 0px ${(props) => {
    return props.theme.palette.neutral40;
  }};
}
  ::-webkit-scrollbar-thumb:horizontal{
    background-color: ${(props) => {
    return props.theme.palette.action80;
  }};
  border-radius: 20px;
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
  }
  &:last-of-type {
    border-top: 1px solid ${(props) => {
    return props.theme.palette.neutral20;
  }};
  }
`;

function Panel({
  children, classname, footer, header, height, id, offcanvas, padding, width,
}) {
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
      isOffCanvas={isOffCanvas}
      width={width}
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
  offcanvas: null,
  padding: null,
  width: "100%",
};

export default Panel;
