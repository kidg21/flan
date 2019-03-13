import React from 'react'
import styled, { css } from 'styled-components'

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 10px;
  height: 10px;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

// Render a styled text input with the standard input color, and one with a custom input color
function NewCheckbox() {
    return (
  <div>
    <Input type="checkbox" />
    <Input type="checkbox" inputColor="rebeccapurple" />
  </div>
            )
          }
        
export default NewCheckbox;