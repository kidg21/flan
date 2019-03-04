import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';



const ListItem = styled.li`
font-size: 14px;
font-family: arial;
color: black;
display: flex;
text-align: left;
padding: 5px 10px 5px;
`

const ItemContainer = styled.div`
background: white;
cursor: pointer;
display: flex;
transition: background .25s ease-in;

&:hover {
        background: #e5e7e9  ;
      }
`



function Item(props) {
      return (
              <ItemContainer>
              <ListItem>{props.nameProp}</ListItem>
              </ItemContainer>
      )
    }


export default Item;