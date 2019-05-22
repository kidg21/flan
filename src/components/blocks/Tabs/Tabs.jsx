import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { colors, shadows } from "Variables";
import PropTypes from "prop-types";
import { Darken } from "helpers/Placeholders";

const StyledTab = styled.div`
  display: grid;
  grid-gap: 0.25rem;
  flex: auto;
  align-items: center;
  line-height: normal;
  text-align: center;
  width: min-content;
  color: ${props => (props.isSelected ? colors.white : colors.grey_40)};
  background: ${props => (props.isSelected ? colors.anchor : colors.white)};
  background-image: ${props =>
    props.isSelected ? "linear-gradient(#85b1c9, #68b0cd)" : ""};
  border: 1px solid ${colors.grey_20};
  padding: 0.25em;
  cursor: pointer;
  &:hover {
    ${Darken};
  }
`;
const TabLabel = styled.span`
  cursor: pointer;
  font-size: 12px;
  line-height: normal;
  user-select: none;
`;

const TabsWrapper = styled.section`
  display: flex;
`;

function Tab({ label, onClick, isSelected }) {
  return (
    <StyledTab isSelected={isSelected} onClick={onClick}>
      <TabLabel>{label}</TabLabel>
    </StyledTab>
  );
}

function Tabs({ id, children }) {
  return <TabsWrapper id={id}>{children}</TabsWrapper>;
}
Tab.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string
};

export { Tabs as default, Tab };
