import React from "react"
import styled, { css } from "styled-components"

const GridWrapper = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: ${props =>
    props.col_1
      ? "repeat(auto-fit, minmax(calc(100%/1), 1fr))"
      : props.col_2
      ? "repeat(auto-fit, minmax(calc(100%/2), 1fr))"
      : props.col_3
      ? "repeat(auto-fit, minmax(calc(100%/3), 1fr))"
      : props.col_4
      ? "repeat(auto-fit, minmax(calc(100%/4), 1fr))"
      : props.col_5
      ? "repeat(auto-fit, minmax(calc(100%/5), 1fr))"
      : props.col_6
      ? "repeat(auto-fit, minmax(calc(100%/6), 1fr))"
      : props.col_7
      ? "repeat(auto-fit, minmax(calc(100%/7), 1fr))"
      : props.col_8
      ? "repeat(auto-fit, minmax(calc(100%/8), 1fr))"
      : props.col_9
      ? "repeat(auto-fit, minmax(calc(100%/9), 1fr))"
      : props.col_10
      ? "repeat(auto-fit, minmax(calc(100%/10), 1fr))"
      : props.col_11
      ? "repeat(auto-fit, minmax(calc(100%/11), 1fr))"
      : props.col_12
      ? "repeat(auto-fit, minmax(calc(100%/12), 1fr))"
      : "repeat(auto-fill, minmax(20rem, 1fr))"};
  /* padding: 2rem; */
  /* justify-items: center; */
`

const Grid_2 = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
`

const Grid_3 = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
`

export const inputGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
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
  style,
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
      style={style}
    >
      {children}
    </GridWrapper>
  )
}

export { Grid as default, Grid_2, Grid_3 }
