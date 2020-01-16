/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import Panel from "layout/Panel";
import { screen } from "Variables";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";

const CenterWrapper = styled.div`
display: flex;
width: 100vw;
height: 100vh;
align-items: stretch;
background: grey;
`;

function BaseLayout({
    children,

    id,
}) {
    return (
        <CenterWrapper>
            {children}

        </CenterWrapper>
    );
}

BaseLayout.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,

};

BaseLayout.defaultProps = {
    children: null,
    id: null,

};


export default BaseLayout;
