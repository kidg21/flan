import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import LeftRegion from "./Regions/LeftRegion.jsx";
import Bar from "blocks/Bar";
import RightRegion from "./Regions/RightRegion.jsx";
import LayoutWrapper from "./Regions/LayoutWrapper.jsx";
import Avatar from "atoms/Avatar";
import LightBoxIcon from "images/LightBoxIconLogo.png";
import Icon from "atoms/Icon";


const Header = styled(Bar)`
  top: 0;
  border-bottom: 1px solid ${(props) => {
    return props.theme.palette.grey5;
  }};
 
`;


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
  headerContent,
  mainContent,
}) {
  let seeLeftRegion = null;
  let leftVisible = left ? left.visible : false;
  let setLeftVisible = left ? left.toggle : null;
  if (left) {
    if (!setLeftVisible) [leftVisible, setLeftVisible] = useState(leftVisible);
    seeLeftRegion = () => { setLeftVisible(!leftVisible); };
  }

  let seeRightRegion = null;
  let rightVisible = right ? right.visible : false;
  let setRightVisible = right ? right.toggle : null;
  if (right) {
    if (!setRightVisible) [rightVisible, setRightVisible] = useState(rightVisible);
    seeRightRegion = () => { setRightVisible(!rightVisible); };
  }


  return (
    <Base>
      <Header
        contentAlign="center"
        padding="2x"
        left={<Avatar
          onClick={seeLeftRegion}
          image
          src={LightBoxIcon}
          alt="logo"
        />}
        right={<Icon
          size="lg"
          icon="settings"
          onClick={seeRightRegion}
        />}
        center={headerContent}
      />
      <ReactWrapper>
        {leftVisible ? <LeftRegion visible={leftVisible} > {left.content} </LeftRegion> : null}
        <LayoutWrapper >
          {mainContent}
        </LayoutWrapper>
        {rightVisible ? <RightRegion visible={rightVisible}> {right.content} </RightRegion> : null}
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
  headerContent: PropTypes.node,
  mainContent: PropTypes.node,
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
  headerContent: null,
  mainContent: null,
};


export default Layout;
