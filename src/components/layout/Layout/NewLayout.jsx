/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { screen } from "Variables";
import { PlaceholderText } from "helpers/Placeholders.jsx";

const Wrapper = styled.div`
display: flex;
height: 100vh;
width: 100vw;
color: blue;
background-color: azure;

`;

function NewLayout() {
    return (
        <Wrapper />

    );
}

export default NewLayout;
