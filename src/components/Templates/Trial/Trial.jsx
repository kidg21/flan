import React from "react";
import styled, { css } from 'styled-components';


const App = styled.div`
display: flex;
position: relative;
height: 100vh;
width: 100wh;
color: black;
background: papayawhip;
overflow: hidden;
`


const LeftPane = styled.section`
position: absolute;
display: flex;
flex-direction: column;
flex: none;
height: 100vh;
width: 25%;
background-color: blue;
@media (max-width: 700px) {
    width: 100%;
  }

`

const RightPane = styled.section`
position: absolute;
display: flex;
right: 0;
flex-direction: column;
flex: none;
height: 100vh;
width: 25%;
background-color: red;
@media (max-width: 700px) {
    width: 100%;
  }
`

function Trial({id }) {
    return (
        <App
        id={id}>
            <LeftPane/>
            <h4> Hello World </h4>
            <RightPane/>
        </App>
    );
}
export default Trial;