/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: block;
  padding: ${(props) => {
    return props.padding || "";
  }};
  height: ${(props) => {
    return props.height || "";
  }};
  width: ${(props) => {
    return props.width || "";
  }};
`;

const BoxContainer = styled.div`
  overflow-y: auto;
  overflow-x: auto;
  max-height: ${(props) => {
    return props.maxHeight || "";
  }};
  padding: 0;
  height: ${(props) => {
    return props.height || "";
  }};
  width: ${(props) => {
    return props.width || "";
  }};
  border: 1px solid
    ${(props) => {
    return props.theme.palette.neutral40;
  }};
  border-radius: 5px;

  ::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0.5px 0 0px ${(props) => {
    return props.theme.palette.neutral40;
  }};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => {
    return props.theme.palette.action80;
  }};
    border-radius: 20px;
  }

}

::-webkit-scrollbar-track:horizontal {
  -webkit-box-shadow: inset 0.5px 0 0px ${(props) => {
    return props.theme.palette.neutral40;
  }};
}


::-webkit-scrollbar-thumb:horizontal{
  background-color: ${(props) => {
    return props.theme.palette.action80;
  }};
  border-radius: 20px;
}

`;

const Container = React.forwardRef(({
  id, height, width, padding, children, maxHeight,
}, ref) => {
  return (
    <Wrapper padding={padding} height={height} width={width}>
      <BoxContainer id={id} height={height ? "100%" : ""}  maxHeight={maxHeight} ref={ref}>
        {children}
      </BoxContainer>
    </Wrapper>
  );
});

Container.propTypes = {
  id: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  maxHeight: PropTypes.string,
  padding: PropTypes.string,
};

Container.defaultProps = {
  id: null,
  height: null,
  maxHeight: null,
  width: null,
  children: null,
  padding: null,
};

export default Container;
