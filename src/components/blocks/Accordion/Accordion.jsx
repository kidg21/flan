import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const AccordionSection = styled.div`
  line-height: normal;
  border-bottom: 0.25px solid #eaeded;
  border-top: 0.25px solid #eaeded;
  background: white;
  cursor: pointer;
`;

const Accordion = ({ header, children, onToggle }) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <Fragment>
      <AccordionSection
        onClick={() => {
          setVisibility(!visibility);
          if (onToggle) onToggle(!visibility);
        }}
      >
        <Fragment>{header}</Fragment>
      </AccordionSection>
      {visibility ? <Fragment>{children}</Fragment> : null}
    </Fragment>
  );
};

Accordion.propTypes = {
  children: PropTypes.any.isRequired,
  onToggle: PropTypes.func,
  header: PropTypes.any.isRequired
};

export default Accordion;
