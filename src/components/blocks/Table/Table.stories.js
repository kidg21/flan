import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "blocks/Table";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";

const data = [
	{ id: "a", color: "Owners/Units", name: "Multiple Owners (2 Units)" },
	{ id: "b", color: "Master Parcel No.", name: "387483675638" },
	{ id: "c", color: "Zoning", name: "No Zone" },
];

storiesOf("Blocks|Table", module)
	.addDecorator(Padding)
	.addDecorator(withInfo)
	.add("Simple", () => (
		<div>
			<Table data={data} />
			<Table data={data} width="half" />
			<Table data={data} width="full" />
		</div>
	));
