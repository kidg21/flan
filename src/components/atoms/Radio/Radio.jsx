import React from 'react'
import styled, { css } from 'styled-components'

const RadioContainer = styled.div`
  display: inline-block;
  position: relative;
  padding: 3px;
  cursor: pointer;
`
// Source: https://polished.js.org/docs/#hidevisually
const HiddenRadio = styled.input.attrs({ type: 'radio' })`
position: absolute;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;
`

const StyledRadio = styled.div`
position: absolute;
top: 0;
left: 0;
height: 14px;
width: 14px;
background-color: #eee;
border: .5px solid LightGray;
border-radius: 50%;
transition: all 150ms;

  ${HiddenRadio}:focus + & {
    background-color: DodgerBlue;
  }

`

const Radio = ({ className, checked, ...props }) => (
  <RadioContainer className={className}>
    <HiddenRadio checked={checked} {...props} />
    <StyledRadio checked={checked}>
    </StyledRadio>
  </RadioContainer>
)

export default class RadioItem extends React.Component {
    state = { checked: false }
  
    handleRadioChange = event => {
      this.setState({ checked: event.target.checked })
    }
  
    render() {
      return (
        <div style={{ fontFamily: 'Muli' }}>
          <label>
            <Radio
              checked={this.state.checked}
              onChange={this.handleRadioChange}
            />
          </label>
        </div>
      )
    }
  }