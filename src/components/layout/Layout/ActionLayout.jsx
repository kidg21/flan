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
import TextInput from "atoms/TextInput";
import Icon from "atoms/Icon";
import Title from "base/Typography";
import Button from "atoms/Button";
import Grid from "layout/Grid";
import Sidebar from "./Sidebar.jsx";
import IconBlock from "blocks/IconBlock";
import Parent from "./ParentWrapper.jsx";
import Header from "./Header.jsx";
import Rightbar from "./Rightbar.jsx";
import LayoutWrapper from "./LayoutWrapper.jsx";


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
        <Parent >
            {leftVisible ? <Sidebar visible={leftVisible} ><Panel> {leftContent} </Panel> </Sidebar> : null}
            <LayoutWrapper>
                <Panel>
                    <Header
                        left={
                            <Icon
                                icon="menu"
                                onClick={seeSidebar}
                            />}
                        right={
                            <Icon
                                icon="settings"
                                onClick={seeRightbar}
                            />}
                    />
                    {mainContent}
                </Panel>
            </LayoutWrapper>
            {rightVisible ?
                (
                    <Rightbar visible={rightVisible} >
                        <Panel>
                            <Bar
                                padding="2x"
                                contentAlign="center"
                                left={<Title text="Settings" />}
                                right={
                                    <Icon icon="close" onClick={seeRightbar} />}
                            />
                            {rightContent}
                        </Panel>
                    </Rightbar>) : null
            }
        </Parent >
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
