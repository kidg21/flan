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

function IconBlock({ id, stacked, children, style }) {
  return (
    <Block id={id} stacked={stacked} style={style}>
      {children}
    </Block>
  )
}

IconBlock.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any.isRequired,
}

export default IconBlock
