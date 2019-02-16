import React from 'react'
import styled from 'styled-components'

const StyledCardSection = styled.section`
  position: initial;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  max-width: 100%;
  max-height: 300vh;
  background-color: white;
  background-color: ${props => props.dark ? 'black' : ''};
  background-color: ${props => props.light ? 'lightgrey' : ''};
  background-color: ${props => props.anchor ? 'blue' : ''};
  background-color: ${props => props.success ? 'green' : ''};
  background-color: ${props => props.warning ? 'orange' : ''};
  background-color: ${props => props.alert ? 'red' : ''};
  color: inherit;
  padding: 0.5rem 1rem;
  line-height: 1.8;
  z-index: 1;
  transition: all 0.2s ease;
  
  &:only-child {
    flex: 1 0 auto;
  }
`

export default class CardSection extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <StyledCardSection {...this.props}>{this.props.children}</StyledCardSection>
    )
  }
}