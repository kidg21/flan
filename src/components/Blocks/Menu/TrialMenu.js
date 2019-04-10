import React, { useState, Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Icon from "base/Icons"

const Container = styled.div`
  cursor: pointer;
  display: inline-block;
  padding-left: 5px;
`

const Dropdown = ({ children, onToggle }) => {
  const [visibility, setVisibility] = useState(false)
  return (
    <Container
      onClick={() => {
        setVisibility(!visibility)
        if (onToggle) onToggle(!visibility)
      }}
    >
      <h2>Menu</h2>
      {visibility ? <Fragment>{children}</Fragment> : null}
    </Container>
  )
}

const StyledUL = styled.ul`
  border-radius: 3px;
  border: 0.5px solid #eaeded;
  margin-top: 4px;
  width: 150px;
`

const StyledLI = styled.li`
  padding: 4px;
  border-bottom: 0.25px solid #eaeded;

  &:last-child {
    border-bottom: 0px solid dimgray;
  }

  &:hover {
    color: black;
  }
`

const EditDropdown = () => {
  return (
    <div>
      <Dropdown
        title="Select"
        onToggle={visibility => {
          console.log("visibility -->", visibility)
        }}
      >
        <StyledUL>
          <StyledLI>Option 1</StyledLI>
          <StyledLI>Option 2</StyledLI>
          <StyledLI>Option 3</StyledLI>
        </StyledUL>
      </Dropdown>
    </div>
  )
}

export default EditDropdown
