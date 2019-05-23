import React, {Fragment} from "react";
import styled, { css } from 'styled-components';
import Mapbox from '../../layout/Map/Map';
import PropTypes from "prop-types"
import Tabs, { Tab } from "blocks/Tabs";


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
background-color: white;
@media (max-width: 700px) {
    width: 95%;
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
background-color: white;
@media (max-width: 700px) {
    width: 95%;
  }
`

// const PanelContent = styled.div`
// position: absolute;
// display: flex;
// right: 0;
// flex-direction: column;
// flex: none;
// height: 100vh;
// width: 25%;
// background-color: white;
// @media (max-width: 700px) {
//     width: 100%;
//   }
// `

const Controls = styled.div`
position: absolute;
right:0;
width: 20%;
flex-direction: column;
flex: none;
`


function Trial({id, rightchild, leftchild }) {
    return (
        <App
        id={id}>
          <Mapbox/>
          <LeftPane> {leftchild}
          </LeftPane>
           <RightPane>
             {rightchild}
            </RightPane> 
        </App>
    );
}

Trial.propTypes = {
  id: PropTypes.string,
  rightchild: PropTypes.any,
  leftchild: PropTypes.any
};

export default Trial;