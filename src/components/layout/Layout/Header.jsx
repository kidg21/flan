/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import { screen } from "Variables";
import Bar from "blocks/Bar";
import Panel from "layout/Panel";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";

const HeaderWrapper = styled(Bar)`
  top: 0;
  border-bottom: .25px solid ${(props) => {
        return props.theme.palette.grey5;
    }};
 
`;


function Header({
    right,
    left,
    id,
}) {
    return (
        <HeaderWrapper
            contentAlign="center"
            padding="2x"
            left={left}
            right={right}
        />
    );
}

Header.propTypes = {
    right: PropTypes.node,
    id: PropTypes.string,
    left: PropTypes.node,

};

Header.defaultProps = {
    right: null,
    id: null,
    left: null,

};


export default Header;
