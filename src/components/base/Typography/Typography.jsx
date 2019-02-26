// Import dependencies
import React, {Component} from 'react'
import styled from 'styled-components'

// Import colors and sizes variables
import { colors, sizes } from '../../helpers/Variables'

import { Container } from '../../helpers/GenericHelper'

const TypeContainer = styled(Container)`
  display: block;
  text-align: left;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`

//Muli Family Fonts
const Title = styled.title`
font-family: Muli;
`
const Body = styled.body`
font-family: Muli;
`
const H1 = styled.h1`
font-family: Muli;
`
const H2 = styled.h2`
font-family: Muli;
`
const H3 = styled.h3`
font-family: Muli;
`
const H4 = styled.h4`
font-family: Muli;
`
const H5 = styled.h5`
font-family: Muli;
`
//Lato Family Fonts

const LTitle = styled.title`
font-family: lato;
`
const LBody = styled.body`
font-family: lato;
font-size: 14px;
`

const LH1 = styled.h1`
font-family: lato;
`
const LH2 = styled.h2`
font-family: lato;
`
const LH3 = styled.h3`
font-family: lato;
`
const LH4 = styled.h4`
font-family: lato;
`
const LH5 = styled.h5`
font-family: lato;
`

export default class Typography extends Component {
    render() {
      return (
          <TypeContainer>
              <Title>This is a Muli title</Title>
              <H1>This is a Muli title with H1</H1>
              <H2>This is a Muli title with H2</H2>
              <H3>This is a Muli title with H3</H3>
              <H4>This is a Muli title with H4</H4>
              <H5>This is a Muli title with H5</H5>
              <Body>This is body text using Muli</Body>
<br/>
              <LTitle>This is a Lato title</LTitle>
              <LH1>This is a Lato title with H1</LH1>
              <LH2>This is a Lato title with H2</LH2>
              <LH3>This is a Lato title with H3</LH3>
              <LH4>This is a Lato title with H4</LH4>
              <LH5>This is a Lato title with H5</LH5>
              <LBody>This is a Lato body. 14px</LBody>
              </TypeContainer>
              );
            }
          }