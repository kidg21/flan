/* eslint-disable linebreak-style */
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  cursor: pointer;
`;

const ChildrenWrapper = styled.div`
  margin-top: ${(props) => {
    return props.open ? "0.5em" : "0";
  }};
  padding-top: ${(props) => {
    return props.open ? "0.5em" : "0";
  }};
  padding-bottom: ${(props) => {
    return props.open ? "0.25em" : "0";
  }};
  max-height: ${(props) => {
    return props.open ? "100%" : "0";
  }};
  opacity: ${(props) => {
    return props.open ? "100%" : "0";
  }};
  transition: all 0.25s ease-in-out;
`;

const AccordionFunction = ({
  id, header, children, open, onClick,
}) => {
  return (
    <Fragment>
      <HeaderWrapper id={id} onClick={onClick}>
        {header}
      </HeaderWrapper>
      <ChildrenWrapper open={open}>{children}</ChildrenWrapper>
    </Fragment>
  );
};

function Expander({
  id,
  header,
  children,
  initOpen,
}) {
  const [isOpen, setIsOpen] = useState(initOpen);
  return (
    <AccordionFunction
      id={id}
      header={header}
      open={isOpen}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      {children}
    </AccordionFunction>
  );
}

AccordionFunction.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func,
  open: PropTypes.bool,
};

AccordionFunction.defaultProps = {
  children: null,
  id: "",
  onClick: () => { },
  open: true,
};

Expander.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  id: PropTypes.string,
  initOpen: PropTypes.bool,
};

Expander.defaultProps = {
  children: null,
  header: null,
  id: "",
  initOpen: false,
};

export default Expander;
