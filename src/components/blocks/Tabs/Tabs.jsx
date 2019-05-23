import React, { Fragment } from "react";
import styled, { css, keyframes } from "styled-components";
import { colors, shadows } from "Variables";
import PropTypes from "prop-types";
import Button from "atoms/Button";

const TabsWrapper = styled.section`
  display: ${props => (props.isVertical ? "flex" : "grid")};
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  grid-gap: 2px;
  flex-direction: column;
  position: ${props => (props.isVertical ? "absolute" : "")};
  height: ${props => (props.isVertical ? "100%" : "")};
  padding: ${props => (props.isFloating ? ".25rem" : "")};
  z-index: ${props => (props.isFloating ? "1001" : "")};
  filter: ${props => (props.isFloating ? shadows.cardShadow : "")};
  > * {
    margin: ${props => (props.isFloating ? ".25rem" : "")};
  }
`;

function Tabs({ id, children, isVertical, isFloating }) {
  return (
    <TabsWrapper id={id} isVertical={isVertical} isFloating={isFloating}>
      {children}
    </TabsWrapper>
  );
}

function Tab({ id, tabLabel, onClick, isSelected }) {
  return (
    <Fragment>
      {isSelected ? (
        <Button
          id={id}
          buttonLabel={tabLabel}
          onClick={onClick}
          isSelected={isSelected}
          isSolid={true}
          isSecondary={true}
        />
      ) : (
        <Button
          id={id}
          buttonLabel={tabLabel}
          onClick={onClick}
          isSelected={isSelected}
        />
      )}
    </Fragment>
  );
}

Tabs.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  isVertical: PropTypes.bool,
  isFloating: PropTypes.bool
};

Tab.propTypes = {
  id: PropTypes.string,
  tabLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool
};

export { Tabs as default, Tab };
