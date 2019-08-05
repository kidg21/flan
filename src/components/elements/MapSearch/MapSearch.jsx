import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Search from "blocks/Search";
import Tabs, { Tab } from "blocks/Tabs";
import { colors, shadows } from "Variables";

const IconWrapper = styled.span`
	/* Needed for passing properties to children (animation, etc.) */
`;

const SearchContainer = styled.div`
	display: flex;
	margin: 1em;
	width: 350px;
	flex-direction: column;
	position: absolute;

	${IconWrapper} {
		position: absolute;
		right: 0;
		background-color: ${colors.white};
		margin: 0.2em;
		padding: 0.7em;
		cursor: pointer;
	}

	@media only screen and (max-width: 700px) {
		width: 91vw;
	}
`;

function MapSearch({ id, ...searchProps }) {
	return (
		<SearchContainer id={id}>
			<Search {...searchProps} />
		</SearchContainer>
	);
}

MapSearch.propTypes = {
	id: PropTypes.string,
	tabs: PropTypes.string,
};

export default MapSearch;

///this one will need more work on setting up for logic like Autocomplete and everything else
