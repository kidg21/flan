import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: block;
  padding: ${(props) => {
    return props.padding ? "1em" : "";
  }};
`;

const BoxContainer = styled.div`
  overflow-y: auto;
  overflow-x: auto;
  padding: 0;
  height: ${(props) => {
    return props.height || "";
  }};
  width: ${(props) => {
    return props.width || "";
  }};
  border: 1px solid
    ${(props) => {
    return props.theme.palette.disabled;
  }};
  border-radius: 5px;

  ::-webkit-scrollbar {
    width: 0.5em;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0.5px 0 0px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => {
    return props.theme.palette.primary;
  }};
    border-radius: 20px;
  }
`;

function Container({
  id, height, width, padding, children,
}) {
  return (
    <Wrapper>
      <BoxContainer id={id} height={height} width={width}>
        {children}
      </BoxContainer>
    </Wrapper>
  );
}

Container.propTypes = {
  id: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};

Container.defaultProps = {
  id: null,
  height: null,
  width: null,
  children: null,
};

export default Container;
