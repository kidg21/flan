import React from "react";
import { storiesOf } from "@storybook/react";
import MapSearch from "elements/MapSearch";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Tabs, { Tab } from "blocks/Tabs";

const controlTabs = [
	<Tabs>
		<Tab tabLabel="tab 1" />
		<Tab tabLabel="tab 2" />
		<Tab tabLabel="tab 3" />
		<Tab tabLabel="tab 4" />
	</Tabs>,
];

storiesOf("Elements|MapSearch", module)
	.addDecorator(Padding)
	.addDecorator(withInfo)
	.add("Default", () => <MapSearch tabs={controlTabs} />);
