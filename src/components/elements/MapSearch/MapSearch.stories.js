import React from "react";
import { storiesOf } from "@storybook/react";
import MapSearch from "elements/MapSearch";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Mapbox from "layout/Map";
import Layout from "layout/Layout";

storiesOf("Elements|MapSearch", module)
	// .addDecorator(Padding)
	// .addDecorator(withInfo)
	.add("Default", () => <MapSearch />)
	.add("In map", () => (
		<Layout>
			<Mapbox />
			<MapSearch />
		</Layout>
	));
