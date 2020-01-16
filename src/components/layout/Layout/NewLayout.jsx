/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "layout/Layout";
import ActionLayout from "./ActionLayout.jsx";
import { screen } from "Variables";
import { PlaceholderText } from "helpers/Placeholders.jsx";


function NewLayout({
    theme, leftContent, rightContent, mainContent,
}) {
    let content;

    switch (theme && theme.toLowerCase()) {
        case "dynamic":
            content = (
                <ActionLayout leftContent={leftContent} rightContent={rightContent} mainContent={mainContent} />
            );
            break;
        case "static":
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
        <Fragment>
            {content}
        </Fragment>

    );
}


Layout.propTypes = {
    theme: PropTypes.node,
    leftContent: PropTypes.node,
    rightContent: PropTypes.node,
    mainContent: PropTypes.node,
};

Layout.defaultProps = {
    theme: null,
    leftContent: null,
    rightContent: null,
    mainContent: null,
};


export default NewLayout;
