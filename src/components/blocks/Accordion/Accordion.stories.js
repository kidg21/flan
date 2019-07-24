import React, { Fragment, useState } from "react";
import { storiesOf } from "@storybook/react";
import Accordion from "blocks/Accordion";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Container from "atoms/Container";

storiesOf("Blocks|Accordion", module)
	.addDecorator(Padding)
	.addDecorator(withInfo)
	.add("Documentation", () => (
		<Accordion
			header={<h4>This is my accordion header example!</h4>}
			children={<h4>this is my children</h4>}
		/>
	))
	.add("Accordion", () =>
		React.createElement(() => {
			const [activeAccordion, setActiveAccordion] = useState("");
			return (
				<Accordion
					header={<h4>This is my accordion header example!</h4>}
					visibility={activeAccordion === "accordion1"}
					onClick={() => {
						if (activeAccordion === "accordion1") {
							setActiveAccordion("");
						} else {
							setActiveAccordion("accordion1");
						}
						return false;
					}}
				>
					<h3>This is the body of my accordion being visible</h3>
				</Accordion>
			);
		}),
	);
