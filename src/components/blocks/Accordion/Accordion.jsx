import React, { Fragment } from "react";
import { colors } from "Variables";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const AccordionSection = styled.div`
  line-height: normal;
  border-bottom: 1px solid ${colors.grey_light};
  cursor: pointer;
`;

const Accordion = ({ id, header, children, visibility, onClick }) => {
  return (
    <Fragment>
      <AccordionSection id={id} onClick={onClick}>
        {header}
      </AccordionSection>
      {visibility ? children : null}
    </Fragment>
  );
};

Accordion.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
  header: PropTypes.any.isRequired
};

export default Accordion;
