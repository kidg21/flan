import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  text-align: left;
  display: block;
  width: 50%;
  height: 50%;
  padding: 12px 0;
  border: 1px solid black;
`
export default class Button extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <Container>
        </Container>
      )
    }
  }