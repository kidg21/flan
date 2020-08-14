/* eslint-disable linebreak-style */
import React, { Fragment, useState, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DisableTransitionContext } from "States";

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
  transition: ${(props) => {
    return props.disableTransition ? "" : "all 0.25s ease-in-out";
  }};
`;

const AccordionFunction = ({
  id, header, children, open, onClick, className,
}) => {
  const disableTransition = useContext(DisableTransitionContext);
  return (
    <Fragment>
      <HeaderWrapper id={id} onClick={onClick}>
        {header}
      </HeaderWrapper>
      <ChildrenWrapper
        disableTransition={disableTransition}
        open={open}
        className={className}
      >
        {children}
      </ChildrenWrapper>
    </Fragment>
  );
};

function Expander({
  children,
  className,
  header,
  id,
  onClick,
  open,
}) {
  let isOpen = open;
  let setIsOpen = onClick;
  if (!setIsOpen) [isOpen, setIsOpen] = useState(isOpen);
  return (
    <AccordionFunction
      className={className}
      header={header}
      id={id}
      onClick={(e) => {
        setIsOpen(!isOpen, e);
      }}
      open={isOpen}
    >
      {children}
    </AccordionFunction>
  );
}

AccordionFunction.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.node,
  id: PropTypes.string,
  onClick: PropTypes.func,
  open: PropTypes.bool,
};

AccordionFunction.defaultProps = {
  children: null,
  className: null,
  header: null,
  id: "",
  onClick: () => { },
  open: true,
};

Expander.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.node,
  id: PropTypes.string,
  onClick: PropTypes.func,
  open: PropTypes.bool,
};

Expander.defaultProps = {
  children: null,
  className: null,
  header: null,
  id: "",
  onClick: null,
  open: false,
};

export default Expander;
