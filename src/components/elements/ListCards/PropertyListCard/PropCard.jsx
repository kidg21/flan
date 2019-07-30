import React, { useState } from "react";
import PropertyPanelHeader from "elements/PanelHeaders/PropertyPanelHeader";
import Table from "blocks/Table";
import Title from "base/Typography";
import PropTypes from "prop-types";
import Card from "layout/Card";
import Command from "atoms/Command";
import Bar from "blocks/Bar";
import styled, { css } from "styled-components";

const Sections = styled.h5`
	padding-left: 0.8em;
	padding-bottom: 0em;
	padding-top: 0.2em;
`;

const image = (
	<img
		src="https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
		width="90px"
		height="70px"
	/>
);

function PropCard({ id, lotData }) {
	return (
		<Card id={id}>
			<Bar left={<Table data={lotData} />} right={image} />
		</Card>
	);
}

PropCard.propTypes = {
	id: PropTypes.string,
	lotData: PropTypes.any,
};

export default PropCard;
