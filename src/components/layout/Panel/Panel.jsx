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
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  width: 100%;
  height: 100%;
  border: .5px solid ${(props) => {
    return props.theme.palette.grey5;
  }};
  max-height: 100vh;
  overflow: hidden;
  transform: none;
  transition: all 0.3s ease-in-out;
  /* box-sizing: content-box; */
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
  /* flex: auto; */
  flex: ${(props) => {
    return props.sectionFlex || "auto";
  }};
  /* height: ${(props) => {
    return props.body ? "inherit" : "";
  }}; */
  /* padding: 1rem; */
  padding: ${(props) => {
    return props.header ? "" : "1rem";
  }};
  z-index: 0;
  /* z-index: ${(props) => {
    return props.body ? "0" : "1";
  }}; */
  overflow-y: scroll;
  /* overflow-x: ${(props) => {
    return props.header ? "visible" : "hidden";
  }}; */
  /* overflow-y: ${(props) => {
    if (props.body) {
      return "scroll";
    } else if (props.header) {
      return "visible";
    }
    return "";
  }}; */
  max-height: 100vh;
  /* box-shadow: ${(props) => {
    return props.body ? "none" : props.theme.shadows.shadowV;
  }}; */
  transition: all 0.2s ease-in-out;
  /* Prototype Content - displays when a Panel Section is empty */
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "PanelSection";
      color: ${(props) => {
    return props.theme.text.primary;
  }};
    }
  }
`;

function PanelSection({
  children, className, header, footer, id,
}) {
  let sectionFlex;
  if (header) {
    sectionFlex = "none";
    // sectionJustify = "flex-start";
  }
  if (footer) {
    sectionFlex = "none";
    // sectionJustify = "flex-end";
  }
  return (
    <SectionWrapper
      sectionFlex={sectionFlex}
      className={className}
      footer={footer}
      header={header}
      id={id}
    >
      {children}
    </SectionWrapper>
  );
}

function Panel({
  id, children, footer, header,
}) {
  let sectionFlex;
  if (header) {
    sectionFlex = "none";
  }
  return (
    <PanelWrapper
      id={id}
    >
      {header ? <PanelSection header>{header}</PanelSection> : null}
      <PanelSection>
        {children}
      </PanelSection>
      {footer ? <PanelSection header>{footer}</PanelSection> : null}
    </PanelWrapper>
  );
}

Panel.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.string,
  header: PropTypes.string,
};
Panel.defaultProps = {
  id: null,
  children: null,
  footer: null,
  header: null,
};

export { Panel as default };
