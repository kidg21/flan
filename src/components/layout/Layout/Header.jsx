/* eslint-disable linebreak-style */
/* eslint-disable security/detect-object-injection */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";

const FlexWrapper = styled.div`
  display: flex;
  top: 0;
  height: ${(props) => {
        return props.height || "8%";
    }};
  transition: all 1s ease-in-out;
  border: .25px solid ${(props) => {
        return props.theme.palette.grey5;
    }};
  background-color: white;
  &:empty {
    &:before {
      ${PlaceholderText};
      content: "{ Header Wrapper }";
      color: ${(props) => {
        return props.theme.text.primary;
    }};
    }
  }
`;


function Header({
    children,
    height,
    id,
}) {
    return (
        <FlexWrapper
            height={height}
            id={id}
        >
            {children}
        </FlexWrapper>
    );
}

Header.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    height: PropTypes.node,

};

Header.defaultProps = {
    children: null,
    id: null,
    height: null,

};


export default Header;
