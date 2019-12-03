/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AccordionSection = styled.div`
  line-height: normal;

  border-bottom: 1px solid
    ${(props) => {
    return props.theme.palette.grey5;
  }};
  cursor: pointer;
`;

const Wrapper = styled.div`
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
      <Wrapper show={visibility}>{children}</Wrapper>
    </Fragment>
  );
};

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

export default Accordion;
