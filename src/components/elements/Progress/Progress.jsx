/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Text, { Title } from "base/Typography";

const StepItem = styled.li`
  align-items: center;
  align-self: center;
  vertical-align: center;
  font-family: Nunito;
  justify-content: center;
  padding-bottom: 0.5rem;
  display: flex;
  border-bottom: 2px solid ${(props) => { return props.isComplete ? props.theme.palette.selected : props.isSelected ? props.theme.palette.selected : props.theme.palette.neutral40; }};
  align-items: baseline;
  width: 100%;
  color: ${(props) => { return props.isComplete ? props.theme.text.selected : props.isSelected ? props.theme.palette.selected : props.theme.text.secondary; }};
  &:before {
    content: counter(step);
    counter-increment: step;
    height: 1.5rem;
    display: flex;
    padding: 0.5em;
    align-items: center;
    vertical-align: bottom;
    justify-content: center;
    margin-right: 1rem;
    width: 1.5rem;
    color: ${(props) => { return props.isComplete ? props.theme.palette.inverse : props.isSelected ? props.theme.palette.selected : ""; }};
    background: ${(props) => { return props.isComplete ? props.theme.palette.info80 : props.isSelected ? "" : ""; }};
    border: 1px solid ${(props) => { return props.isComplete ? props.theme.palette.info80 : props.isSelected ? props.theme.palette.selected : props.theme.text.secondary; }};
    border-radius: 50%;
    font-weight: 600;
  }
`;

const Container = styled.ul`
  display: flex;
  list-style: none;
  counter-reset: step;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: ${(props) => { return props.line ? "space-between" : ""; }};
  flex-direction: column;
  width: ${(props) => { return props.line ? "100%" : ""; }};
`;

function Step({
  description, id, isSelected, isComplete, title,
}) {
  return (
    <StepItem id={id} isComplete={isComplete} isSelected={isSelected}>
      <ItemContainer>
        <Title text={title} weight="bold" />
        {description ? <Text text={description} /> : null}
      </ItemContainer>
    </StepItem>
  );
}

Step.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  isSelected: PropTypes.bool,
  isComplete: PropTypes.bool,
  title: PropTypes.string,
};
Step.defaultProps = {
  description: null,
  id: null,
  isSelected: false,
  isComplete: false,
  title: null,
};

function ProgressBar({
  children, id,
}) {
  return (
    <Container id={id}>
      {children}
    </Container>
  );
}

ProgressBar.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
};
ProgressBar.defaultProps = {
  children: null,
  id: null,
};

export { ProgressBar as default, Step };
