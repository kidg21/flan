import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
padding: 5em;
text-align: left;
`
const Header = styled.h1`
  font-family: muli;
  display: flex;
  align-items: left;
  font-size: 60px;
  color: #282c34;
`

const Body = styled.body`
font-family: muli;
display: flex;
padding-top: 20px;
color: black;
font-size: 20px;
`

const Link = styled.a`
  color: #61dafb;
`


function App() {
    return (
      <Container>
        <Header>FLAN Design System</Header>
        <Body>A Design Language System utilizing reusable React components. <br/>
        Based off the principles of atomic design, FLAN provides the basic building blocks of a User Interface.</Body>
      </Container>
    )

}

export default App;
