import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconGroup from './IconGroup';
import Switch from "../../atoms/Switch/Switch";




const AccordionSection = styled.div`
font-family: arial;
display: flex;
line-height: normal;
border-bottom: 0.25px solid #EAEDED;
border-top: 0.25px solid #EAEDED;
background: white;
cursor: pointer;
padding: 1em 1em .5em;
`

const H4 = styled.h4`
margin: 0;
flex: auto;
padding-left: 1.5em;
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
        <Switch />
            <H4>
             {title}
            </H4>
            <IconGroup />
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

