/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Bar from "blocks/Bar";
import Panel from "layout/Panel";
import IconBlock from "blocks/IconBlock";
import Icon from "atoms/Icon";
import Sidebar from "./Regions/Sidebar.jsx";
import Rightbar from "./Regions/Rightbar.jsx";
// import BaseLayout from "./BaseLayout.jsx";
import LayoutWrapper from "./Regions/LayoutWrapper.jsx";

const Header = styled(Bar)`
border: 1px solid ${(props) => {
        return props.theme.palette.grey6;
    }};
`;

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

function FixedLayout({
    leftContent,
    rightContent,
    mainContent,
}) {
    const [rightVisible, setRightVisible] = useState(false);
    function seeRightbar() {
        setRightVisible(!rightVisible);
    }

    return (
        <Base>
            <ReactWrapper>
                <Sidebar visible > {leftContent}  </Sidebar>
                <LayoutWrapper >
                    <Panel>
                        <Header
                            contentAlign="center"
                            rightWidth="15%"
                            padding="2x"
                            right={

                                <IconBlock>
                                    <Icon
                                        icon="list"
                                        onClick={seeRightbar}
                                    />
                                    <Icon
                                        icon="chat"
                                        onClick={seeRightbar}
                                    />
                                    <Icon
                                        icon="notification"
                                        onClick={seeRightbar}
                                    />
                                    <Icon
                                        icon="settings"
                                        onClick={seeRightbar}
                                    />
                                </IconBlock>

                            }
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

FixedLayout.propTypes = {
    leftContent: PropTypes.node,
    rightContent: PropTypes.node,
    mainContent: PropTypes.node,


};

FixedLayout.defaultProps = {
    leftContent: null,
    rightContent: null,
    mainContent: null,


};


export default FixedLayout;
