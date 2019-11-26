/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AccordionSection = styled.div`
  line-height: normal;
  background-color: purple;

  border-bottom: 1px solid
    ${(props) => {
    return props.theme.palette.grey5;
  }};
  cursor: pointer;
`;

const ChildrenWrapper = styled.div`
background-color: orange;
  border-bottom: 1px solid
    ${(props) => {
    return props.theme.palette.grey5;
  }};
  padding-bottom: 1em;
  ${(props) => {
    return props.show ? "" : "display: none;";
  }}
`;

const Accordion = ({
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


function CardAccordion({
  id,
  header,
  children,
  initOpen,
}) {
  const [isOpen, setIsOpen] = useState(initOpen);
  return (
    <Accordion
      id={id}
      header={header}
      visibility={isOpen}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <React.Fragement>{children}</React.Fragement>
    </Accordion>
  );
}

Accordion.defaultProps = {
  visibility: true,
  onClick: () => { },
  children: null,
  id: "",
};

Accordion.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  header: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  visibility: PropTypes.bool,
};

CardAccordion.defaultProps = {
  children: null,
  header: null,
  id: "",
  initOpen: false,
};

CardAccordion.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  id: PropTypes.string,
  initOpen: PropTypes.bool,
};

export default CardAccordion;
