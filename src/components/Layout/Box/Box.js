import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  text-align: left;
`

const BoxWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 500px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`

const BoxHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 5px;
`

const BoxHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const BoxBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`



export default class Box extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      isPasswordVisible: false
    }
    
    this.revealPassword = this.revealPassword.bind(this);
  }
  
  revealPassword () {
    this.setState({
      isPasswordVisible: !this.state.isPasswordVisible
    })
  }
  
  render () {
    return(
        <Container>
      <BoxWrapper>
        <BoxHeader>
          <BoxHeading>Box</BoxHeading>
        </BoxHeader>
        
        <BoxBody> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   
        </BoxBody>
      </BoxWrapper>
      </Container>
    )
  }
}