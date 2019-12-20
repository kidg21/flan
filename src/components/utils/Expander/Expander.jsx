/* eslint-disable linebreak-style */
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AccordionSection = styled.div`
  cursor: pointer;
`;

const ChildrenWrapper = styled.div`
  max-height: ${(props) => {
    return props.collapsed ? "0" : "100%";
  }};
  opacity: ${(props) => {
    return props.collapsed ? "0" : "100%";
  }};
  transition: all 0.25s ease-in-out;
`;

const AccordionFunction = ({
  id, header, children, visibility, onClick,
}) => {
  return (
    <Fragment>
      <AccordionSection id={id} onClick={onClick}>
        {header}
      </AccordionSection>
      <ChildrenWrapper collapsed={visibility}>{children}</ChildrenWrapper>
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
      visibility={!isOpen}
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
  visibility: PropTypes.bool,
};

AccordionFunction.defaultProps = {
  children: null,
  id: "",
  onClick: () => { },
  visibility: true,
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
