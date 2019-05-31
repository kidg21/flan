import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";

const Container = styled.div`
  cursor: pointer;
  display: inline-block;
`;

const StyledUL = styled.ul`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 3px;
  margin-top: 4px;
  width: 150px;
`;

const StyledLI = styled.li`
  padding: 0.5em 0.5em 0.5em 0.5em;
  font-size: small;
  letter-spacing: 0.5px;
  color: white;
`;

const Children = (
  <StyledUL>
    <StyledLI>Save</StyledLI>
    <StyledLI>Save as Filter</StyledLI>
    <StyledLI>Save as Layer</StyledLI>
    <StyledLI>View Heatmap</StyledLI>
    <StyledLI>View Labels</StyledLI>
  </StyledUL>
);

const EditMenu = ({ children, onToggle, object }) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <Container
      onClick={() => {
        setVisibility(!visibility);
        if (onToggle) onToggle(!visibility);
      }}
    >
      <Icon icon={["far", "ellipsis-v"]} size="lg" />
      {visibility ? <Fragment>{Children}</Fragment> : null}
    </Container>
  );
};

export default EditMenu;
