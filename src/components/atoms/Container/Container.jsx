/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: block;
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
  border: ${(props) => {
    return props.hasBorder ? "1px solid" : "";
  }};
  border-color:  ${(props) => {
    return props.hasBorder ? props.theme.palette.neutral40 : "";
  }};
  border-radius: 5px;
`;

const paddingHash = {
  "0": "0",
  "2x": "2em",
  "3x": "3em",
};

const Container = React.forwardRef(({
  children, className, height, id, maxHeight, padding, hasBorder, width,
}, ref) => {
  const setPadding = padding ? paddingHash[padding.toLowerCase()] : "1em";
  return (
    <Wrapper setPadding={setPadding} height={height} width={width} className={className}>
      <BoxContainer hasBorder={hasBorder} id={id} height={height ? "100%" : ""} maxHeight={maxHeight} ref={ref}>
        {children}
      </BoxContainer>
    </Wrapper>
  );
});

Container.propTypes = {
  hasBorder: PropTypes.bool,
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  className: PropTypes.string,
  maxHeight: PropTypes.string,
  padding: PropTypes.oneOf(["0", "2x", "3x"]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Container.defaultProps = {
  hasBorder: false,
  children: null,
  height: null,
  id: null,
  className: null,
  maxHeight: null,
  padding: "0",
  width: null,
};

export default Container;
