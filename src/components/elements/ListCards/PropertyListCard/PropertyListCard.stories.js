import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import PropertyListCard from "./PropertyListCard.jsx";

const lotData = [
	{ id: "a", name: "Land Use", value: "Commercial" },
	{ id: "b", name: "Land Description", value: "Miscellaneous Commercial" },
	{ id: "c", name: "Lot Area", value: "62,344 SF | 1.43 Acres" },
];

const buildingData = [
	{ id: "a", name: "Value", value: "$11,851,071" },
	{ id: "b", name: "Square Feet", value: "34,529 SF" },
	{ id: "c", name: "# of Units", value: "1" },
	{ id: "d", name: "Year Built", value: "1950" },
];

storiesOf("Elements|ListCards", module)
	.addDecorator(Padding)
	.addDecorator(withInfo)
	.add("Property List Card", () =>
		React.createElement(() => {
			return (
				<PropertyListCard
					lotData={lotData}
					buildingData={buildingData}
					address="2801 Kelvin Avenue, Irvine, CA 92614"
					APN="374-342-8957"
				/>
			);
		}),
	);
