import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";

const Wrapper = styled.div`
  display: block;
  padding: 1em;
`;

const BoxContainer = styled.div`
  overflow-y: auto;
  overflow-x: auto;
  padding: 0;
  height: ${(props) => {
    return props.setHeight || "";
  }};
  width: ${(props) => {
    return props.setWidth || "";
  }};
  border: 1px solid ${colors.grey_20};
  border-radius: 5px;

  ::-webkit-scrollbar {
    width: 0.5em;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0.5px 0 0px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.anchor_light};
    border-radius: 20px;
  }
`;

function Container({
  id, setHeight, setWidth, children,
}) {
  return (
    <Wrapper>
      <BoxContainer id={id} setHeight={setHeight} setWidth={setWidth}>
        {children}
      </BoxContainer>
    </Wrapper>
  );
}

Container.propTypes = {
  id: PropTypes.string,
  setHeight: PropTypes.node,
  setWidth: PropTypes.node,
  children: PropTypes.node,
};

export default Container;
