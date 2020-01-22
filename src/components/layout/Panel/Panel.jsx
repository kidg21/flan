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
  overflow-y: scroll;
  max-height: 100vh;
  /* Prototype Content - displays when a Panel Section is empty */
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "Header / Footer";
      color: ${(props) => {
    return props.theme.text.primary;
  }};
    }
  }
`;

function PanelBody({
  children, className,
}) {
  return (
    <SectionWrapper
      className={className}
    >
      {children}
    </SectionWrapper>
  );
}

PanelBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
PanelBody.defaultProps = {
  children: null,
  className: null,
};

const PanelSection = styled(PanelBody)`
  flex: none;
  padding: 0;
  overflow: hidden;
  z-index: 1;
  /** TODO: change to variable once 'Card' branch is merged */
  border: 1px solid hsl(240,11%,91%);
`;
function Panel({
  id, children, footer, header,
}) {
  return (
    <PanelWrapper
      id={id}
    >
      {header ? <PanelSection>{header}</PanelSection> : null}
      <PanelBody>{children}</PanelBody>
      {footer ? <PanelSection>{footer}</PanelSection> : null}
    </PanelWrapper>
  );
}

Panel.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
  header: PropTypes.node,
};
Panel.defaultProps = {
  id: null,
  children: null,
  footer: null,
  header: null,
};

export default Panel;
