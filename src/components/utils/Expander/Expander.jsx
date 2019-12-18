/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AccordionSection = styled.div`
  cursor: pointer;
`;

const ChildrenWrapper = styled.div`
  ${(props) => {
    return props.show ? "" : "display: none;";
  }}
`;

const AccordionFunction = ({
  id, header, children, visibility, onClick,
}) => {
  return (
    <Fragment>
      <AccordionSection id={id} onClick={onClick}>
        {header}
      </AccordionSection>
      <ChildrenWrapper show={visibility}>{children}</ChildrenWrapper>
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
      visibility={isOpen}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div>{children}</div>
    </AccordionFunction>
  );
}

AccordionFunction.defaultProps = {
  visibility: true,
  onClick: () => { },
  children: null,
  id: "",
};

AccordionFunction.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  header: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  visibility: PropTypes.bool,
};

Expander.defaultProps = {
  children: null,
  header: null,
  id: "",
  initOpen: false,
};

Expander.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  id: PropTypes.string,
  initOpen: PropTypes.bool,
};

export default Expander;
