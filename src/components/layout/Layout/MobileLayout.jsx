/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "layout/Layout";
import Button from "atoms/Button";
import Bar from "blocks/Bar";
import Tabs, { Tab } from "blocks/Tabs";
import { screen } from "Variables";
import { PlaceholderText } from "helpers/Placeholders.jsx";

const Wrapper = styled.div`
display: flex;
height: 100vh;
width: 100vw;
@media ${screen.small} {
    background-color: lightblue;
  }
  @media ${screen.medium} {
    background-color: mistyrose;
  }
  @media ${screen.large} {
    background-color: lemonchiffon;
  }
  @media ${screen.xlarge} {
    background-color: azure;
  }

`;

const FixedControls = styled.div`
position: absolute;
width: 100%;
bottom: 0px;
`;

const MenuButton = styled(Button)`

`;


const SideBar = styled(Layout)`
@media ${screen.small} {
    color: purple;
    border: 1px solid black;
  }
  @media ${screen.medium} {
    color: yellow;
    border: 1px solid black;
  }
  @media ${screen.large} {
    color: black;
    border: 1px solid black;
  }
  @media ${screen.xlarge} {
    color: green;
    border: 1px solid black;
  }
`;

const Header = styled(Layout)`
@media ${screen.small} {
    color: purple;
    border: 1px solid black;
  }
  @media ${screen.medium} {
    color: yellow;
    border: 1px solid black;
  }
  @media ${screen.large} {
    color: black;
    border: 1px solid black;
  }
  @media ${screen.xlarge} {
    color: green;
    border: 1px solid black;
  }
`;

const MainLayout = styled(Layout)`
@media ${screen.small} {
    color: blue;
    border: 1px solid purple;
  }
  @media ${screen.medium} {
    color: white;
    border: 1px solid purple;
  }
  @media ${screen.large} {
    color: red;
    border: 1px solid purple;
  }
  @media ${screen.xlarge} {
    color: purple;
    border: 1px solid purple;
  }
`;

const ParentLayout = styled(Layout)`
display: flex;
height: 100vh;
width: 100vw;
`;


function MobileLayout() {
  const [innerState, setInnerState] = useState("leftCover");
  // const [activeLeft, setActiveLeft] = useState(false);
  function toggleLeft() {
    if (innerState === "leftUncover") {
      setInnerState("leftCover");
    } else {
      setInnerState("leftUncover");
    }
    return false;
  }
  return (
    <Wrapper >
      <ParentLayout>
        <SideBar id="innerWrapper" state={innerState} />
        <Header height="6%" right="0" />
        <MainLayout height="94%" right="0" top="6" />
        <FixedControls>
          <Bar
            padding="2x"
            center={
              <MenuButton icon="menu" onClick={toggleLeft} />}
          />
        </FixedControls>
      </ParentLayout>
    </Wrapper >

  );
}

MobileLayout.propTypes = {
  // theme: PropTypes.node,
  // sidebar: PropTypes.node,
  // main: PropTypes.node,
};

MobileLayout.defaultProps = {
  // theme: null,
  // sidebar: null,
  // main: null,
};

export default MobileLayout;
