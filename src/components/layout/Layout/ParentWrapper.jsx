/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";


const ReactWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
width: 100%;
height: 100%;
justify-content: flex-start;
`;


function Parent({
    children,
    id,
}) {
    return (
        <ReactWrapper>
            {children}
        </ReactWrapper>

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
