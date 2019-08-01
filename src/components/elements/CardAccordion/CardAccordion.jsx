import React, { useState } from "react";
import PropTypes from "prop-types";
import { Piece } from "layout/Card";
import Accordion from "blocks/Accordion";

function CardAccordion({
	id,
	header,
	children,
	options,
	hasOptions,
	initOpen,
}) {
	const [isOpen, setIsOpen] = useState(initOpen);
	return (
		<Accordion
			id={id}
			header={header}
			visibility={isOpen}
			onClick={() => {
				setIsOpen(!isOpen);
			}}
		>
			<Piece>{children}</Piece>
			{hasOptions ? <Piece>{options}</Piece> : null}
		</Accordion>
	);
}

CardAccordion.defaultProps = {
	children: null,
	hasOptions: false,
	header: null,
	id: "",
	initOpen: false,
	options: null,
};

CardAccordion.propTypes = {
	children: PropTypes.node,
	hasOptions: PropTypes.bool,
	header: PropTypes.node,
	id: PropTypes.string,
	initOpen: PropTypes.bool,
	options: PropTypes.node,
};

export default CardAccordion;
