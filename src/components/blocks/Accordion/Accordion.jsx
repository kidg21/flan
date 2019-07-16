import React, { Fragment } from "react";
import { colors } from "Variables";
import PropTypes from "prop-types";
import styled from "styled-components";
 
const AccordionSection = styled.div`
  line-height: normal;
  border-bottom: 1px solid ${colors.grey_20};
  cursor: pointer;
`;

const Wrapper = styled.div`
  ${(props) => { return props.show ? "" : "display: none;"; }}
`;

const Accordion = ({
  id,
  header,
  children,
  visibility,
  onClick,
}) => {
  return (
    <Fragment>
      <AccordionSection id={id} onClick={onClick}>
        {header}
      </AccordionSection>
      <Wrapper show={visibility}>
        {children}
      </Wrapper>
    </Fragment>
  );
};

Accordion.defaultProps = {
  visibility: true,
  onClick: () => {},
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
