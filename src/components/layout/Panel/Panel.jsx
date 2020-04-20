/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";

const PanelWrapper = styled.div`
  background: ${(props) => {
    return props.theme.background.default;
  }};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
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
  padding: 1rem;
  z-index: 0;
  overflow-y: auto;
  max-height: 100vh;
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
  children, className, id,
}) {
  return (
    <SectionWrapper
      className={className}
      id={id}
    >
      {children}
    </SectionWrapper>
  );
}

PanelBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};
PanelBody.defaultProps = {
  children: null,
  className: null,
  id: null,
};

const PanelSection = styled(PanelBody)`
  flex: none;
  padding: 0;
  overflow: hidden;
  z-index: 1;
  &:first-of-type {
    border-bottom: 1px solid ${(props) => {
    return props.theme.palette.neutral40;
  }};
  }
  &:last-of-type {
    border-top: 1px solid ${(props) => {
    return props.theme.palette.neutral40;
  }};
  }
`;

function Panel({
  children, classname, footer, header, id, offcanvas,
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
      id={id}
      isOffCanvas={isOffCanvas}
    >
      {header ? <PanelSection id={id ? `${id}_header` : null}>{header}</PanelSection> : null}
      <PanelBody id={id ? `${id}_body` : null}>{children}</PanelBody>
      {footer ? <PanelSection id={id ? `${id}_footer` : null}>{footer}</PanelSection> : null}
    </PanelWrapper>
  );
}

Panel.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  footer: PropTypes.node,
  header: PropTypes.node,
  id: PropTypes.string,
  offcanvas: PropTypes.string,
};
Panel.defaultProps = {
  children: null,
  classname: null,
  footer: null,
  header: null,
  id: null,
  offcanvas: null,
};

export default Panel;
