import React, { useState, Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Icon from "base/Icons"

const Container = styled.div`
  cursor: pointer;
  display: inline-block;
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
  background: rgba(0, 0, 0, 0.8);
  border-radius: 3px;
  margin-top: 4px;
  width: 150px;
`

const StyledLI = styled.li`
  padding: 4px;
  font-family: muli;
  color: white;
  font-weight: bold;
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