import React from "react";
import styled from 'styled-components';

const MultiSelect = styled.select`
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

export default (props) => <MultiSelect multi {...props} />