import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
border-bottom: 2px solid yellowgreen;
padding: 4px;
width: 120px;
height: 30px;
cursor: pointer;
display: inline-block;

`

const Dropdown = ({ title, children, onToggle }) => {
	const [visibility, setVisibility] = useState(false);
	return (
		<Container
      		onClick={() => {
             setVisibility(!visibility);
             if (onToggle) onToggle(!visibility);
          }}
      >
        <h4>
				{title}
			</h4>
			{visibility ? <Fragment>{children}</Fragment> : null}
		</Container>
	);
};


const StyledUL = styled.ul`
background: white;
border-radius: 3px;
display: block;
`

const StyledLI = styled.li`
padding: 4px;
font-family: lato;

&:hover{
    color: black;
}

&:active{
    font-weight: bold;
}
`

const InlineDropdown = () => {
	return (
    <div>
		<Dropdown
			title="Select"
			onToggle={visibility => {
				console.log('visibility -->', visibility);
			}}
		>
			<StyledUL>
                <StyledLI>Option 1</StyledLI>
                <StyledLI>Option 2</StyledLI>
                <StyledLI>Option 3</StyledLI>
            </StyledUL>
		</Dropdown>
        </div>
	);
};

export default InlineDropdown;

