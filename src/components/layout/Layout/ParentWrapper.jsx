/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";

const ParentWrapper = styled.div`
width: 100vw;
height: 100vh;

`;

const ReactWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
width: 100%;
height: 100%;
align-items: stretch;
justify-content: flex-start;
`;


function Parent({
    children,
    id,
}) {
    return (
        <ParentWrapper
            id={id}
        >
            <ReactWrapper>
                {children}
            </ReactWrapper>

        </ParentWrapper>
    );
}


Parent.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,


};

Parent.defaultProps = {
    children: null,
    id: null,


};

export default Parent;
