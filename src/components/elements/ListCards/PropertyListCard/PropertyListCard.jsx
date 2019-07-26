import React, { useState } from "react";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Table from "blocks/Table";
import PropTypes from "prop-types";
import Card from "layout/Card";
import Command from "atoms/Command";
import Bar from "blocks/Bar";

function PropertyListCard({ id, address, data }) {
	return (
		<Card id={id}>
			<MainPanelHeader title={address} />
			<Bar left={<Command name="add to list" size="small" />} />
			<Table data={data} />
		</Card>
	);
}

PropertyListCard.propTypes = {
	id: PropTypes.string,
	address: PropTypes.any,
	data: PropTypes.any,
};

export default PropertyListCard;
