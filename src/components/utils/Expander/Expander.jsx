/* eslint-disable linebreak-style */
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card, { CardSection, CardList } from "elements/Card";

const AccordionSection = styled.div`
  /* padding: 0.5rem 1rem; */
  /* padding-bottom: 0.5em; */
  cursor: pointer;
`;

const ChildrenWrapper = styled.div`
  padding: ${(props) => {
    return props.open ? "0.5em 1em" : "0 1em";
  }};
  max-height: ${(props) => {
    return props.open ? "100%" : "0";
  }};
  opacity: ${(props) => {
    return props.open ? "100%" : "0";
  }};
  transition: all 0.25s ease-in-out;
  /* box-shadow: ${(props) => {
    return props.theme.shadows.innerShadow;
  }}; */
`;

const AccordionFunction = ({
  id, header, children, open, onClick, type, ...props
}) => {
  return (
    <Fragment>
      <CardSection id={id} type={type} onClick={onClick} {...props}>
        {header}
      </CardSection>
      <CardSection padding="none">
        <ChildrenWrapper open={open}>{children}</ChildrenWrapper>
      </CardSection>
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
