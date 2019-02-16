import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  text-align: left;
`

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 500px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`

const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 5px;
`

const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`

const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`



const CardOptionsNote = styled.body`
  display: block;
  width: 100%;
  font-size: 14px;
  text-align: left;
`


const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color .25s ease-in;

  &:hover {
    color: #777;
  }
`

export default class Card extends React.Component {
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
      <CardWrapper>
        <CardHeader>
          <CardHeading>Information Card</CardHeading>
        </CardHeader>
        
        <CardBody>
          <CardFieldset>

          </CardFieldset>
          
          <CardFieldset>
            <CardOptionsNote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardOptionsNote>

          </CardFieldset>
          
          <CardFieldset>
            <CardLink>Learn More</CardLink>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
      </Container>
    )
  }
}