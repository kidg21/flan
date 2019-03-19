import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
border: 1px solid dimgray;
padding: 4px;
width: 150px;
height: 30px;
border-radius: 3px;
cursor: pointer;
display: inline-block;

&:hover{
    border: 1px solid dodgerblue;
}
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
border: 1px solid darkgray;
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

const ClassicDropdown = () => {
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

export default ClassicDropdown;

