import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Table from "blocks/Table";
import IconBlock from "blocks/IconBlock";
import Icon from "atoms/Icon";
import InformationCardBar from "elements/CardBars/InformationCardBar";
import Accordion from "blocks/Accordion";
import Card from "layout/Card";
import Command from "atoms/Command";
import Bar from "blocks/Bar";
import Panel, { PanelSection } from "layout/Panel";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

// const propertyCommands = [
// 	<IconBlock>
// 		<Icon icon="plus" type="info" />
// 		<Icon icon={["far", "share-alt"]} type="info" />
// 		<Icon icon={["fal", "directions"]} type="info" />
// 	</IconBlock>,
// ];

const data = [
	{ id: "a", color: "Owners/Units", name: "Multiple Owners (2 Units)" },
	{ id: "b", color: "Master Parcel No.", name: "387483675638" },
	{ id: "c", color: "Zoning", name: "No Zone" },
];

storiesOf("Templates|Card", module)
	.addDecorator(Padding)
	.addDecorator(withInfo)
	.add("Card", () =>
		React.createElement(() => {
			return (
				<Card>
					<MainPanelHeader title="5201 California Ave. Irvine, California 92614" />
					<Bar left={<Command name="add to list" size="small" />} />
					<Table data={data} />
				</Card>
			);
		}),
	);
