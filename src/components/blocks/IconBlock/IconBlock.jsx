import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
// import Icon from "base/Icons"

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  /* justify-content: space-between; */
`

function IconBlock({ style, children, ...props }) {
  return <Block style={style}>{children}</Block>
}

// IconBlock.defaultProps = defaultProps
export default IconBlock
