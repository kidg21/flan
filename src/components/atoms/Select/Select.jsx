import React from "react";
import styled from 'styled-components';



const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

const MultiSelect = styled.select`
border: 2px solid purple;
background: green;
font-weight: 500;	


&.Select--multi  {

		.Select-value {
			display: inline-flex;
			align-items: center;
		}		
	}

	& .Select-placeholder {
		font-size: smaller;
	}
`

export default (props) => {
<MultiSelect
className="basic-single"
classNamePrefix="select"
defaultValue={options[0]}
name="color"
options={options}
{...props} /> }