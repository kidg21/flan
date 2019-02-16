import React from 'react'
import styled, { css } from 'styled-components'


const StyledSelect = styled.select`
`



export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <StyledSelect >Default Select</StyledSelect>
    )
  }
}