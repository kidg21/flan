import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const AccordionSection = styled.div`
  line-height: normal;
  // height: 20px;
  // border-bottom: 0.25px solid #eaeded;
  // border-top: 0.25px solid #eaeded;
  // background: yellowgreen;
  cursor: pointer;
`;

const Accordion = ({ id, header, children, visibility, onClick }) => {
  // const [visibility, setVisibility] = useState(false);

  return (
    <Fragment>
      <AccordionSection
      id={id}
      onClick={onClick}
      >
        {header}
      </AccordionSection>
  {visibility ?  children : null}
    </Fragment>
  );
};
Accordion.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
  header: PropTypes.any.isRequired,
}


export default Accordion;
