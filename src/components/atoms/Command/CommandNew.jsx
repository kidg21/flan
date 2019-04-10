import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import Icon from "base/Icons"
import Label from "atoms/Label"
import Command, { CommandRight } from "atoms/Command"

function CommandNew() {
  return <CommandRight {...defaultProps} />
}

const defaultProps = {
  iconProps: { nameProp: ["fal", "times"] },
  labelProp: { contentProp: "sdlfjsklfs brother" }
}

Command.defaultProps = defaultProps

export default CommandNew
