import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import Icon from "atoms/Icon"
import Label from "./Label"

const Container = styled.a`
  display: grid;
  grid-template-columns: auto 1fr;
  /* grid-template-columns: ${props =>
    props.flip ? "1fr auto" : "auto 1fr"}; */
  grid-template-areas: "left right";
  /* grid-template-areas: ${props =>
    props.flip ? "right left" : "left right"}; */
  grid-gap: 0.5rem;
  transition: all 0.3s ease;
  *:first-child {
    grid-area: ${props => (props.flip ? "right" : "left")};
  }
  *:last-child {
    grid-area: ${props => (props.flip ? "left" : "right")};
  }
  &:hover {
    opacity: 0.75;
  }
`

const defaultProps = {
  iconProps: { nameProp: ["fal", "times"] },
  labelProp: { contentProp: "yo brother" }
}

function Command({ flip, ...props }) {
  const _iconProps = Object.assign({}, defaultProps.iconProps, props.iconProps)
  const _labelProp = Object.assign({}, defaultProps.labelProp, props.labelProp)
  props = { iconProps: _iconProps, labelProp: _labelProp }
  return (
    <Container>
      <Icon {...props.iconProps} />
      <Label {...props.labelProp} />
    </Container>
  )
}

function CommandRight({ flip, ...props }) {
  const _iconProps = Object.assign({}, defaultProps.iconProps, props.iconProps)
  const _labelProp = Object.assign({}, defaultProps.labelProp, props.labelProp)
  props = { iconProps: _iconProps, labelProp: _labelProp }
  return (
    <Container flip>
      <Icon {...props.iconProps} />
      <Label {...props.labelProp} />
    </Container>
  )
}

Command.defaultProps = {
  flip: true
}
Command.PropTypes = {
  flip: PropTypes.bool
}

// export default Command;
export { Command as default, CommandRight }
