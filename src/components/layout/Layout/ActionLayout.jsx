/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Bar from "blocks/Bar";
import Panel from "layout/Panel";
import Button from "atoms/Button";
import Sidebar from "./Sidebar.jsx";
import Parent from "./ParentWrapper.jsx";
import Header from "./Header.jsx";
import Rightbar from "./Rightbar.jsx";
import LayoutWrapper from "./LayoutWrapper.jsx";


function ActionLayout({
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
            {leftVisible ? <Sidebar visible={leftVisible} ><Panel/></Sidebar> : null}
            <LayoutWrapper>
            <Header>
                <Bar
                    left={
                        <Button
                            icon="menu"
                            onClick={seeSidebar}
                        />
                         }
                    right={
                        <React.Fragment>
                         <Button
                            icon="user"
                            
                        />

                        <Button
                            icon="settings"
                            onClick={seeRightbar}
                        />
                        </React.Fragment>
                    }

                />
                </Header>
                </LayoutWrapper>
            {rightVisible ? <Rightbar visible={rightVisible} ><Panel/></Rightbar> : null}
        </Parent>
    );
}

ActionLayout.propTypes = {


};

ActionLayout.defaultProps = {


};


export default ActionLayout;
