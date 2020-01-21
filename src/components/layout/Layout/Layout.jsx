/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Panel from "layout/Panel";
import Header from "./Regions/Header.jsx";
import Icon from "atoms/Icon";
import Sidebar from "./Regions/Sidebar.jsx";
import RightScreen from "./Regions/RightScreen.jsx";
import LayoutWrapper from "./Regions/LayoutWrapper.jsx";


const ReactWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
width: 100%;
height: 100%;
justify-content: flex-start;
`;


const Base = styled.div`
width: 100vw;
height: 100vh;

`;

const Exit = styled(Icon)`
align-self: right;
float: right;
padding: 1em;
z-index: 100;
`;

function Layout({
  leftContent,
  rightContent,
  mainContent,
}) {
  const [leftVisible, setLeftVisible] = useState(false);
  function seeSidebar() {
    setLeftVisible(!leftVisible);
  }

  const [rightVisible, setRightVisible] = useState(false);
  function seeRightbar() {
    setRightVisible(!rightVisible);
  }

  return (
    <Base>
      <Header
        rightClick={seeRightbar}
        logoClick={seeSidebar}
      />
      <ReactWrapper>
        {leftVisible ? <Sidebar visible={leftVisible} > <Panel>{leftContent} </Panel>  </Sidebar> : null}
        <LayoutWrapper >

          {mainContent}
        </LayoutWrapper>
        {rightVisible ?
          (
            <RightScreen visible={rightVisible} >
              <Panel>
                <Exit icon="close" onClick={seeRightbar} />
                {rightContent}
              </Panel>
            </RightScreen>) : null
        }
      </ReactWrapper >
    </Base >
  );
}

Layout.propTypes = {
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
  mainContent: PropTypes.node,


};

Layout.defaultProps = {
  leftContent: null,
  rightContent: null,
  mainContent: null,


};


export default Layout;
