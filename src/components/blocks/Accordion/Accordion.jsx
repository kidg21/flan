import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const AccordionSection = styled.div`
  line-height: normal;
  // border-bottom: 0.25px solid #eaeded;
  // border-top: 0.25px solid #eaeded;
  background: white;
  cursor: pointer;
`;

const Accordion = ({ header, children, visibility, ...props }) => {
  // const [visibility, setVisibility] = useState(false);

  return (
    <Fragment>
      <AccordionSection
        { ...props}
      >
        <Fragment>{header}</Fragment>
      </AccordionSection>
      {visibility ? <Fragment>{children}</Fragment> : null}
    </Fragment>
  );
};



Accordion.defaultProps = {
  id: ""
}

Accordion.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any.isRequired,
  header: PropTypes.any.isRequired,
}


export default Accordion;
