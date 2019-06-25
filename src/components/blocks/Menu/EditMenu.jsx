import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import { colors, shadows} from "Variables";

////fixed menu with fixed dimentions based on width


const Container = styled.div`
display: flex;
position: absolute;
padding-left: 700px;
  cursor: pointer;
`;



const StyledUL = styled.ul`
display: flex;
padding: 3px;
flex-direction: column;
margin-top: 6px; 
width: 10em; 
bottom: auto;
background: rgba(0, 0, 0, 0.8);
border-radius: 3px;
position: relative;
left: -10.5em;
`;

const StyledLI = styled.li`
  padding: 0.5em 0.5em 0.5em 0.5em;
  font-size: small;
  letter-spacing: 0.5px;
  color: white;
  list-style: none;

  &:hover {
    color: ${colors.grey_60};
  }
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
