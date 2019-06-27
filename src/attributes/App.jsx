import React, { Component } from "react"
import styled, { css } from "styled-components"
import { colors } from "Variables"
import logo from "images/flan.jpg"

const image = {
  src: logo,
  alt: "my image"
}

const Container = styled.div`
  padding: 3rem 2rem 1rem;
`
const Logo = styled.img``

const Header = styled.h1`
  color: ${colors.success};
  margin-bottom: 1rem;
`
const Body = styled.div``

const Link = styled.a``

function App() {
  return (
    <Container>
      <Header>FLAN Design System</Header>
      <Body>
        <h4>
          A Design Language System utilizing reusable React components. <br />
          Based off the principles of atomic design, FLAN provides the basic
          building blocks of a User Interface.
        </h4>
        <h4>
          Our system is organized into atoms, blocks, layouts, templates, and
          views. Please consult this site for examples and rules for putting
          together the UI.
        </h4>
        <h3>
          <a>Thank you. Enjoy your Flan!</a>
        </h3>
        <Logo src={image.src} alt={image.alt} />
      </Body>
    </Container>
  )
}

export default App
