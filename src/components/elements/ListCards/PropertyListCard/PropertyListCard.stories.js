import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import PropertyListCard from "./PropertyListCard.jsx";
import PropCard from "./PropCard.jsx";
import ContactListCard from "./ContactListCard.jsx";

const lotData = [
	{ id: "a", name: "Land Use", value: "Commercial" },
	{ id: "b", name: "Land Description", value: "Miscellaneous Commercial" },
	{ id: "c", name: "Lot Area", value: "62,344 SF | 1.43 Acres" },
];

const ownerData = [
	{ id: "a", name: "Owner", value: "1830 LA CIENEGA LLC" },
	{ id: "b", name: "Last Transfer", value: "12/31/14" },
	{ id: "c", name: "Last Market Sale", value: "10/31/13 for $11,000,110" },
	{ id: "d", name: "Opportunity Zone ", value: "No" },
];

// const ownerData = [
// 	{ id: "a", name: "Address", value: "1830 LA CIENEGA LLC" },
// 	{ id: "b", name: "Last Transfer", value: "12/31/14" },
// 	{ id: "c", name: "Last Market Sale", value: "10/31/13 for $11,000,110" },
// 	{ id: "d", name: "Opportunity Zone ", value: "No" },
// ];

// const newData = [
// 	{ id: "a", name: "Land Use" },
// 	{ id: "b", name: "Land Description" },
// 	{ id: "c", name: "Lot Area" },
// ];

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
					ownerData={ownerData}
					buildingData={buildingData}
					address="2801 Kelvin Avenue, Irvine, CA 92614"
					APN="374-342-8957"
				/>
			);
		}),
	)
	.add("PropCard", () =>
		React.createElement(() => {
			return (
				<PropCard
					address="2801 Kelvin Avenue, Irvine, CA 92614"
					landUse="Commercial"
					price="$11,209,340"
				/>
			);
		}),
	)
	.add("ContactListCard", () =>
		React.createElement(() => {
			return (
				<ContactListCard
					name="Annabelle Granger"
					ownerAddress="2801 Kelvin Avenue, Irvine, CA 92614"
				/>
			);
		}),
	);
