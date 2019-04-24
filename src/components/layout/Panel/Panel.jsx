import styled, { css } from "styled-components"
import { fonts, colors, shadows } from "Variables"
import { PlaceholderText } from "helpers/Placeholders"

const Panel = styled.div`
  position: absolute;
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
    }
  }
`

const PanelSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  /* flex: none; */
  flex: ${props => (props.body ? "auto" : "none")};
  /* background: ""; */
  /* z-index: 1; */
  z-index: ${props => (props.body ? "0" : "1")};
  overflow-x: hidden;
  overflow-y: ${props => (props.body ? "scroll" : "hidden")};
  max-height: 100vh;
  box-shadow: ${shadows.panelSectionShadow};
  box-shadow: ${props => (props.body ? "none" : "")};
  transition: all 0.2s ease-in-out;
  /* Prototype Content - displays when a Panel Section is empty */
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "PanelSection";
    }
  }
`

const PanelBody = styled(PanelSection)`
  flex: auto;
  z-index: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: none;
  /* Prototype Content - displays when a Card is empty */
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ PanelBody } \00000A 'Takes up any remaining space and scrolls when full (typically, only 1 of these...multiples would share the remaining space)'";
    }
  }
`

const PanelFooter = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: none;
  background: "";
  border: 0.5px solid #eaeded;
  box-shadow: ${shadows.panelSectionShadow};
  z-index: 1;
  overflow: hidden;
  align-items: center;
  padding-bottom: 5px;
  max-height: 100vh;
  transition: all 0.2s ease-in-out;
  /* Prototype Content - displays when a Panel Section is empty */
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ PanelFooter } \00000A 'Takes only the space it needs (1 or more)'";
    }
  }
`

export { Panel as default, PanelSection, PanelBody, PanelFooter }
