/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: ${(props) => {
    return props.visible ? "block" : "none";
  }};
  padding: ${(props) => {
    return props.setPadding || "";
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
  background-color: ${(props) => {
    return props.theme.background.default;
  }};
  max-height: ${(props) => {
    return props.maxHeight || "";
  }};
  height: ${(props) => {
    return props.height || "";
  }};
  width: ${(props) => {
    return props.width || "";
  }};
  padding: ${(props) => {
    return props.innerPadding || "";
  }};
  border: ${(props) => {
    return props.hasBorder ? "1px solid" : "";
  }};
  border-color: ${(props) => {
    return props.theme.palette.neutral40;
  }};
  border-radius: ${(props) => {
    return props.theme.borders.radiusMin;
  }};
  ::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0.5px 0 0px ${(props) => {
    return props.theme.palette.neutral40;
  }};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => {
    return props.theme.palette.action80;
  }};
    border-radius: 20px;
  }
  ::-webkit-scrollbar-track:horizontal {
    box-shadow: inset 0.5px 0 0px ${(props) => {
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

const paddingHash = {
  "0": "0",
  "1x": "1rem",
  "2x": "2rem",
  "3x": "3rem",
};

const Container = React.forwardRef(({
  hasBorder, children, className, visible, height, id, innerPadding, maxHeight, padding, width,
}, ref) => {
  const setPadding = padding ? paddingHash[padding.toLowerCase()] : "0";
  // inner padding so that scroll bar is to the edge, copies card padding
  let _innerPadding = "";
  const containerPadding = innerPadding ? parseInt(innerPadding, 10) : 0;
  if (containerPadding > 0 && containerPadding < 5) {
    _innerPadding = `${0.25 * containerPadding}em`;
  }

  return (
    <Wrapper setPadding={setPadding} height={height} width={width} visible={visible} className={className}>
      <BoxContainer id={id} height={height ? "100%" : ""} maxHeight={maxHeight} hasBorder={hasBorder} ref={ref} innerPadding={_innerPadding}>
        {children}
      </BoxContainer>
    </Wrapper>
  );
});

Container.propTypes = {
  hasBorder: PropTypes.bool,
  visible: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  innerPadding: PropTypes.oneOf(["", "0", "1x", "2x", "3x", "4x"]),
  maxHeight: PropTypes.string,
  padding: PropTypes.oneOf(["", "0", "1x", "2x", "3x"]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Container.defaultProps = {
  hasBorder: false,
  visible: true,
  children: null,
  className: null,
  height: null,
  id: null,
  innerPadding: null,
  maxHeight: null,
  padding: null,
  width: null,
};

export default Container;
