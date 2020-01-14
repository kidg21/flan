/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
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


{ /* <FixedControls>
<Bar
    padding="2x"
    center={
        <MenuButton round solid icon="menu" />}
/>
</FixedControls> */ }


const SideBar = styled.div`
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

const Footer = styled.div`
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

const MainLayout = styled.div`
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

const ParentLayout = styled.div`
display: flex;
height: 100vh;
width: 100vw;
@media ${screen.small} {
    ${MainLayout} {
        width: 100%;
    }
    ${SideBar} {
        width: 0%;
    }
  }
  @media ${screen.medium} {
    ${MainLayout} {
        width: 100%;
    }
    ${SideBar} {
        width: 0%;
    }
  }
  @media ${screen.large} {
    ${MainLayout} {
        width: 87%;
    }
    ${SideBar} {
        width: 13%;
    }
  }
  @media ${screen.xlarge} {
    ${MainLayout} {
        width: 87%;
    }
    ${SideBar} {
        width: 13%;
    }
  }
`;

function MobileLayout() {
    return (
        <Wrapper >
            <ParentLayout>
                <SideBar />
                <MainLayout />
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
