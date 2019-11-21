/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisabledContext } from "States";
import KeyItem from "./LegendItem.jsx";

const TabsWrapper = styled.section`
  display: grid;
  // grid-gap: 2px;
  // grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  // flex-direction: column;
  width: 100%;

  > * {
    border-radius: 0;
  }
`;

const Title = styled.h4`
  text-align: left;
  font-size: .88em;
  margin-top: .5em;
  padding-left: 2.3em;
  margin-bottom: .5em;
`;

function Legend({ id, children, title }) {
  return (
    <TabsWrapper
      id={id}
    >
      <Title> {title} </Title>
      {children}
    </TabsWrapper>
  );
}

function Item({
  id,
  color,
  name,
  onClick,
  isSelected,
  disabled,
}) {
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  return (
    <KeyItem
      id={id}
      color={color}
      name={name}
      onClick={onClick}
      isSelected={isSelected}
      isDisabled={isDisabled}
    />
  );
}

Legend.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Item.propTypes = {
  id: PropTypes.string,
  color: PropTypes.any,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  disabled: PropTypes.bool,
};

export { Legend as default, Item };
