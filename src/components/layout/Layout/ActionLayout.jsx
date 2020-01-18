/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Panel from "layout/Panel";
import Header from "./Header.jsx";
import IconBlock from "blocks/IconBlock";
import Icon from "atoms/Icon";
import Sidebar from "./Regions/Sidebar.jsx";
import Grid from "layout/Grid";
import TextInput from "atoms/TextInput";
import Rightbar from "./Regions/Rightbar.jsx";
// import BaseLayout from "./BaseLayout.jsx";
import LayoutWrapper from "./Regions/LayoutWrapper.jsx";


// const InnerWrapper = styled.div`
// display: flex;
// flex-direction: column;
// flex-wrap: nowrap;
// justify-content: flex-start;
// width: 100%;
// height: 100%;
// `;

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

function ActionLayout({
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
            <ReactWrapper>
                {leftVisible ? <Sidebar visible={leftVisible} > {leftContent}  </Sidebar> : null}
                <LayoutWrapper >
                    <Panel>
                        <Header
                            rightClick={seeRightbar}
                            logoClick={seeSidebar}
                        />
                        {mainContent}
                    </Panel>
                </LayoutWrapper>
                {rightVisible ?
                    (
                        <Rightbar visible={rightVisible} >
                            <Panel>
                                <Exit icon="close" onClick={seeRightbar} />
                                {rightContent}
                            </Panel>
                        </Rightbar>) : null
                }
            </ReactWrapper >
        </Base >
    );
}

ActionLayout.propTypes = {
    leftContent: PropTypes.node,
    rightContent: PropTypes.node,
    mainContent: PropTypes.node,


};

ActionLayout.defaultProps = {
    leftContent: null,
    rightContent: null,
    mainContent: null,


};


export default ActionLayout;
