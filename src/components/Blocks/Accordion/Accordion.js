import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconGroup from './IconGroup';


const AccordionSection = styled.div`
font-family: arial;
justify-content: space-between;
display: flex;
border-bottom: 0.25px solid #EAEDED;
padding: .5em;
background: white;
cursor: pointer;
`



const Accordion = ({ title, children, onToggle }) => {
	const [visibility, setVisibility] = useState(false);
	return (
		<div>
			<AccordionSection
      		onClick={() => {
             setVisibility(!visibility);
             if (onToggle) onToggle(!visibility);
          }}
      >
        <h4>
				{title}
			</h4>
      <IconGroup style={{justifyContent: "floatRight"}}/>
      </AccordionSection>
			{visibility ? <Fragment>{children}</Fragment> : null}
		</div>
	);
};

Accordion.propTypes = {
	children: PropTypes.any.isRequired,
	onToggle: PropTypes.func,
	title: PropTypes.string.isRequired
};

export default Accordion;

