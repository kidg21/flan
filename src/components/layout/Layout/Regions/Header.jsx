/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import LightBoxIcon from "images/LightBoxIconLogo.png";
import Avatar from "atoms/Avatar";
import Bar from "blocks/Bar";
import Icon from "atoms/Icon";
import styled from "styled-components";


const HeaderWrapper = styled(Bar)`
  top: 0;
  order: 0;
  z-index: -50;
 
`;

function Header({
    id,
    logoClick,
    rightClick,
    headerContent,
}) {
    return (
        <HeaderWrapper
            id={id}
            contentAlign="center"
            padding="2x"
            left={<Avatar
                onClick={logoClick}
                image
                src={LightBoxIcon}
                alt="logo"
            />
            }
            center={headerContent}
            right={
                <Icon
                    size="lg"
                    icon="settings"
                    onClick={rightClick}
                />}
        />
    );
}

Header.propTypes = {
    rightClick: PropTypes.node,
    id: PropTypes.string,
    logoClick: PropTypes.node,
    headerContent: PropTypes.node,

};

Header.defaultProps = {
    rightClick: null,
    id: null,
    logoClick: null,
    headerContent: null,

};


export default Header;
