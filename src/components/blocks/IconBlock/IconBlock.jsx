import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { colors, shadows } from "Variables"

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  position: ${props => (props.stacked ? "relative" : "")};
  width: ${props => (props.stacked ? "100%" : "")};
  justify-content: ${props => (props.stacked ? "center" : "space-between")};
  align-items: ${props => (props.stacked ? "center" : "")};
  > * {
    position: ${props => (props.stacked ? "absolute" : "")};
  }
`

function IconBlock({ stacked, style, ...props }) {
  return (
    <Block stacked={stacked} style={style}>
      {props.children}
    </Block>
  )
}

export default IconBlock
