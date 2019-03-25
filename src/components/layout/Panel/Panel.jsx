import styled, { css } from "styled-components";
import { fonts, colors, shadows} from "../../base/Variables/Variables";
import { PlaceholderText } from "../../_helpers/Placeholders";

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
      content: "{ Panel } \00000A 'Primary layout container for related content'";
    }
  }
`;

const PanelSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: none;
  background: ${colors.white};
  border: 0.5px solid #EAEDED;
  // box-shadow: ${shadows.panelSectionShadow};
  /* border-radius: 5px; */
  z-index: 1;
  overflow: hidden;
  /* align-items: center; */
  max-height: 100vh;
  transition: all 0.2s ease-in-out;
  /* Prototype Content - displays when a Panel Section is empty */
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ PanelSection } \00000A 'Takes only the space it needs (1 or more)'";
    }
  }
`;

const PanelBody = styled(PanelSection)`
  flex: auto;
  z-index: 0;
  nackground: white;
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
`;

export { Panel as default, PanelSection, PanelBody };
