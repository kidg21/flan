import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon/Icon';

const Container = styled.div`
border: 1px solid #bbb8b4;
padding: 5px;
padding-left: 10px;
padding-right: 10px;
width: 150px;
height: 31px;
line-height: normal;
justify-content: space-between;
vertical-align: baseline;
cursor: pointer;
display: flex;

&:hover{
    border: 1px solid dodgerblue;
}
`



const downProps = {
    nameProp: ["far", "angle-down"],
    colorProp: "dimgray",
};


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
			<Icon {...downProps}/>
			{visibility ? <Fragment>{children}</Fragment> : null}
		</Container>
	);
};



const Menu = styled.div`
display: inline-block;
background: white;
border: 1px solid darkgray;
`

const StyledUL = styled.ul`
background: white;
border: 1px solid darkgray;
border-radius: 3px;
display: block;
`

const StyledLI = styled.li`
padding: 4px;
font-family: lato;
list-style: none;

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
			<Menu>
				<StyledUL>
                <StyledLI>Option 1</StyledLI>
                <StyledLI>Option 2</StyledLI>
                <StyledLI>Option 3</StyledLI>
            </StyledUL>
			</Menu>
		</Dropdown>
        </div>
	);
};

export default ClassicDropdown;

