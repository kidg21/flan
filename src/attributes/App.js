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

const Body = styled.div`
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
        <div style={{padding: "20px"}}></div>
        <h3 style={{ color: "#60aad2", lineHeight: "normal"}}>Our system is organized into atoms, blocks, layouts, templates, and views.<br/>
        Please consult this site for examples and rules for putting together the UI.<br/>
        Thank you. Enjoy your Flan!</h3>
      </Container>
    )

}

export default App;
