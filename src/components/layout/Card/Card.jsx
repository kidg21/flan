import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  width: 100%;
  height: auto;
  /* overflow: hidden; */
  color: #605c57;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: #4b4844 0rem 0rem 1px,
    rgba(75, 72, 68, 0.333333) 0.25rem 0.25rem 0.5rem;
  z-index: 1;
  transition: all 0.3s ease;
`

export default class Card extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <StyledCard>{this.props.children}</StyledCard>
    )
  }
}