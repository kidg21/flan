import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const AccordionSection = styled.div`
line-height: normal;
border-bottom: 0.25px solid #EAEDED;
border-top: 0.25px solid #EAEDED;
background: white;
cursor: pointer;
`


const Accordion = ({ title, children, onToggle }) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <Fragment>
      <AccordionSection
        onClick={() => {
          setVisibility(!visibility);
          if (onToggle) onToggle(!visibility);
        }} >
        <h3>{title}</h3>
      </AccordionSection>
      {visibility ? <Fragment>{children}</Fragment> : null}
    </Fragment>
  );
};

Accordion.propTypes = {
  children: PropTypes.any.isRequired,
  onToggle: PropTypes.func,
  title: PropTypes.string.isRequired
};

export default Accordion;

