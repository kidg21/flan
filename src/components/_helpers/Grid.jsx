import React from "react"
import styled, { css } from "styled-components"

const GridWrapper = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: ${props =>
    props.col_1
      ? "repeat(1, 1fr)"
      : props.col_2
      ? "repeat(2, 1fr)"
      : props.col_3
      ? "repeat(3, 1fr)"
      : props.col_4
      ? "repeat(4, 1fr)"
      : props.col_5
      ? "repeat(5, 1fr)"
      : props.col_6
      ? "repeat(6, 1fr)"
      : props.col_7
      ? "repeat(7, 1fr)"
      : props.col_8
      ? "repeat(8, 1fr)"
      : props.col_9
      ? "repeat(9, 1fr)"
      : props.col_10
      ? "repeat(10, 1fr)"
      : props.col_11
      ? "repeat(11, 1fr)"
      : props.col_12
      ? "repeat(12, 1fr)"
      : "repeat(auto-fill, minmax(20rem, 1fr))"};
  grid-column: ${props =>
    props.alignLeft || props.alignCenter || props.alignRight
      ? "1/-1"
      : /* : props.alignJustify
      ? "none" */
        ""};
  justify-items: ${props =>
    props.alignLeft
      ? "flex-start"
      : props.alignCenter
      ? "center"
      : props.alignRight
      ? "flex-end"
      : ""};
`
function Grid({
  col_1,
  col_2,
  col_3,
  col_4,
  col_5,
  col_6,
  col_7,
  col_8,
  col_9,
  col_10,
  col_11,
  col_12,
  alignLeft,
  alignCenter,
  alignRight,
  style,
  className,
  children,
  ...props
}) {
  return (
    <GridWrapper
      col_1={col_1}
      col_2={col_2}
      col_3={col_3}
      col_4={col_4}
      col_5={col_5}
      col_6={col_6}
      col_7={col_7}
      col_8={col_8}
      col_9={col_9}
      col_10={col_10}
      col_11={col_11}
      col_12={col_12}
      alignLeft={alignLeft}
      alignCenter={alignCenter}
      alignRight={alignRight}
      style={style}
      className={className}
    >
      {children}
    </GridWrapper>
  )
}

export { Grid as default }
