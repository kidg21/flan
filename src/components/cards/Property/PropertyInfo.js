import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from '../../atoms/Icon/Icon';


const HeaderSection = styled.div`
overflow: hidden;
padding: .8em 1em .8em;
cursor: pointer;
line-height: normal;
justify-content: space-between;
display: flex;

`

const H4 = styled.h5`
margin: 0;

`



 const infoSectionProps = {
    nameProp: ["far", "angle-up"],
    colorProp: "dimgray"
  };

  const infoOpenProps = {
    nameProp: ["far", "angle-down"],
    colorProp: "#60aad2"
  };



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
          <HeaderSection>
          <H4>{title}</H4>
          {visibility ? <Icon {...infoOpenProps}/> : <Icon {...infoSectionProps} />}
        </HeaderSection>
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