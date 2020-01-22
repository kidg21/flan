import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "./Regions/Header.jsx";
import Sidebar from "./Regions/Sidebar.jsx";
import RightBar from "./Regions/Rightbar.jsx";
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

function Layout({
  left,
  right,
  header,
  main,
}) {
  let seeSidebar = null;
  let leftVisible = left ? left.visible : false;
  let setLeftVisible = left ? left.toggle : null;
  if (left) {
    if (!setLeftVisible) [leftVisible, setLeftVisible] = useState(leftVisible);
    seeSidebar = () => { setLeftVisible(!leftVisible); };
  }

  let seeRightbar = null;
  let rightVisible = right ? right.visible : false;
  let setRightVisible = right ? right.toggle : null;
  if (right) {
    if (!setRightVisible) [rightVisible, setRightVisible] = useState(rightVisible);
    seeRightbar = () => { setRightVisible(!rightVisible); };
  }

  return (
    <Base>
      <Header
        rightClick={seeRightbar}
        logoClick={seeSidebar}
        headerContent={header}
      />
      <ReactWrapper>
        {left ? <Sidebar visible={leftVisible} > {left.content} </Sidebar> : null}
        <LayoutWrapper >
          {main}
        </LayoutWrapper>
        {right ? <RightBar visible={rightVisible}> {right.content} </RightBar> : null}
      </ReactWrapper >
    </Base >
  );
}


Layout.propTypes = {
  left: {
    content: PropTypes.node.isRequired,
    visible: PropTypes.bool,
    toggle: PropTypes.func,
  },
  right: {
    content: PropTypes.node.isRequired,
    visible: PropTypes.bool,
    toggle: PropTypes.func,
  },
  header: PropTypes.node,
  main: PropTypes.node,
};

Layout.defaultProps = {
  left: {
    content: null,
    visible: null,
    toggle: null,
  },
  right: {
    content: null,
    visible: null,
    toggle: null,
  },
  header: null,
  main: null,
};


export default Layout;
