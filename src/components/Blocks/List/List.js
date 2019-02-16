import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';

const UIList = styled.div`
display: inline-block
text-align: left;
font-family: Quicksand, arial, sans-serif;
`
const Item = styled.li`
font-size: 14px;
color: darkgrey;
display: flex;
text-align: left;
padding: 3px;


${props => props.primary && css`
    background: green;
    border: 1px solid black;
    color: white;
  `}
`




export default class List extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
          <UIList>
              <Item>Item One</Item>
              <Item>Item Two</Item>
              <Item>Item Three </Item>
              <Item>Item Four</Item>
          </UIList>
      )
    }
  }

  