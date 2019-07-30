import React, { useState } from "react";
import PropertyPanelHeader from "elements/PanelHeaders/PropertyPanelHeader";
import Table from "blocks/Table";
import Title from "base/Typography";
import PropTypes from "prop-types";
import Card, { Piece } from "layout/Card";
import Command from "atoms/Command";
import Bar from "blocks/Bar";
import styled, { css } from "styled-components";

// const Container = styled.div`
// 	padding-left: 0.8em;
// 	padding-bottom: 0em;
// 	padding-top: 0.2em;
// `;

const Sections = styled.h5`
	padding-left: 0.8em;
	padding-bottom: 0em;
	padding-top: 0.2em;
`;

function PropertyListCard({
	id,
	address,
	APN,
	lotData,
	ownerData,
	buildingData,
}) {
	return (
		<Card id={id}>
			<PropertyPanelHeader title={address} APN={APN} />
			<Bar left={<Command name="add to list" size="small" />} />
			<Piece>
				<Sections>Lot</Sections>
				<Table data={lotData} />
				<Sections>Building</Sections>
				<Table data={buildingData} />
				<Sections>Owner</Sections>
				<Table data={ownerData} />
			</Piece>
		</Card>
	);
}

PropertyListCard.propTypes = {
	id: PropTypes.string,
	address: PropTypes.any,
	APN: PropTypes.any,
	lotData: PropTypes.any,
	buildingData: PropTypes.any,
};

export default PropertyListCard;
