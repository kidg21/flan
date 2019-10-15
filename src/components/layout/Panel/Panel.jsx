import styled, { css } from "styled-components";
import { fonts, shadows } from "Variables";
import { PlaceholderText } from "helpers/Placeholders.jsx";

const Panel = styled.div`
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
  max-height: 100vh;
  overflow: hidden;
  transform: none;
  transition: all 0.3s ease-in-out;
  box-sizing: content-box;
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

const PanelSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: ${(props) => {
    return props.body ? "auto" : "none";
  }};
  z-index: ${(props) => {
    return props.body ? "0" : "1";
  }};
  overflow-x: hidden;
  overflow-y: ${(props) => {
    return props.body ? "scroll" : "";
  }};
  max-height: 100vh;
  box-shadow: ${(props) => {
    return props.body ? "none" : props.theme.shadows.panelSectionShadow;
  }};
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

export { Panel as default, PanelSection };
