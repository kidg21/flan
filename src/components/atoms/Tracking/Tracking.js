import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const Container = styled.div`
font-family: arial;
display: flex;
line-height: normal;
border-bottom: 1px solid dimgray;
border-top: 1px solid dimgray;
border-radius: 10px;
background: white;
cursor: pointer;
padding: 1em 1em .5em;
`
const List = styled.ul`
display: flex;
list-style: none;
margin: 0;

`

const LI = styled.li`
padding: 5px 20px 20px 5px;
font-size: 16px;
font-family: muli;
margin: 0;
cursor: pointer;

&: hover {
    color: dodgerblue;
}

`


function Tracking() {
    return (
        <Container>
        <List>
            <LI>Step 1</LI>
            <LI>Step 2</LI>
            <LI>Step 3</LI>
            <LI>Step 4</LI>
        </List>
        </Container>
    )
  }

export default Tracking;

//            <li><a href="#">title</a></li>