/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "layout/Layout";
import { screen } from "Variables";
import { PlaceholderText } from "helpers/Placeholders.jsx";

const Wrapper = styled.div`
display: flex;
height: 100vh;
width: 100vw;
color: blue;
background-color: azure;

`;


function NewLayout({ theme }) {
    let content;

    switch (theme && theme.toLowerCase()) {
        case "one":
            content = (
                <Layout>
                    <Layout width="13%" />
                    <Layout width="87%" right="0" />
                </Layout>
            );
            break;
        case "two":
            content = (
                <Layout>
                    <Layout width="13%" />
                    <Layout width="87%" height="6%" right="0" />
                    <Layout width="87%" height="94%" right="0" top="6" />
                </Layout>
            );
            break;
        default:
            content = (
                <Layout />
            );
            break;
    }

    return (
        <Wrapper>
            {content}
        </Wrapper>

    );
}


Layout.propTypes = {
    theme: PropTypes.node,
};

Layout.defaultProps = {
    theme: null,
};


export default NewLayout;
