/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Layout from "layout/Layout";
import DynamicLayout from "./DynamicLayout.jsx";
import SemiDynamicLayout from "./SemiDynamicLayout.jsx";
import StaticLayout from "./StaticLayout.jsx";


function NewLayout({
    theme, leftContent, rightContent, mainContent,
}) {
    let content;

    switch (theme && theme.toLowerCase()) {
        case "semi":
            content = (
                <SemiDynamicLayout leftContent={leftContent} rightContent={rightContent} mainContent={mainContent} />
            );
        case "dynamic":
            content = (
                <DynamicLayout leftContent={leftContent} rightContent={rightContent} mainContent={mainContent} />
            );
            break;
        case "static":
            content = (
                <StaticLayout leftContent={leftContent} rightContent={rightContent} mainContent={mainContent} />
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
