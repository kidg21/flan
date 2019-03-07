import React from 'react'
import styled, { css } from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  border-radius:3px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  cursor: pointer;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  border-radius:3px;
  width: 10px;
  height: 10px;
  background: ${props => (props.checked ? '#75B238' : 'white')}
  border: 1px solid darkgray;
  transition: all 150ms;
  cursor: pointer;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px white;
  }

`

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
    </StyledCheckbox>
  </CheckboxContainer>
)

export default class CheckboxItem extends React.Component {
    state = { checked: false }
  
    handleCheckboxChange = event => {
      this.setState({ checked: event.target.checked })
    }
  
    render() {
      return (
        <div style={{ fontFamily: 'arial' }}>
          <label>
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
            />
            <text style={{ marginLeft: 8, fontSize: 14 }}>Option</text>
          </label>
        </div>
      )
    }
  }