/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const BarItem = styled.li`
  align-items: center;
  align-self: center;
  vertical-align: center;
  font-family: Nunito;
  justify-content: center;
  display: flex;
  height: 5px;
  align-items: baseline;
  width: 100%;
  background-color: ${(props) => { return props.isComplete ? props.theme.palette.selected : props.isSelected ? props.theme.palette.selected : props.theme.palette.neutral60; }};
`;

const Container = styled.ul`
  display: flex;
  list-style: none;
  counter-reset: step;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
  ${BarItem}:first-child {
    border-radius: 5rem 0 0 5rem;
  };
  ${BarItem}:last-child {
    border-radius: 0 5rem 5rem 0;
  };
`;



function BarStep({
  id, isSelected, isComplete,
}) {
  return (
    <BarItem id={id} isComplete={isComplete} isSelected={isSelected}/>
  );
}

BarStep.propTypes = {
  id: PropTypes.string,
  isSelected: PropTypes.bool,
  isComplete: PropTypes.bool,
};
BarStep.defaultProps = {
  id: null,
  isSelected: false,
  isComplete: false,
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

export { ProgressBar as default, BarStep };
