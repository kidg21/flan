import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import PropertyListCard from "./PropertyListCard";

const data = [
	{ id: "a", color: "Owners/Units", name: "Multiple Owners (2 Units)" },
	{ id: "b", color: "Master Parcel No.", name: "387483675638" },
	{ id: "c", color: "Zoning", name: "No Zone" },
];

storiesOf("Elements|ListCards", module)
	.addDecorator(Padding)
	.addDecorator(withInfo)
	.add("Property List Card", () =>
		React.createElement(() => {
			return (
				<PropertyListCard
					data={data}
					address="2801 Kelvin Avenue, Irvine, CA 92614"
				/>
			);
		}),
	);
