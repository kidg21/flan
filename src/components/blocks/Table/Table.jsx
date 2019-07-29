import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const TableWrapper = styled.table`
	overflow: hidden;
	cursor: default;
	margin: 0em 0.5em 0.5em;
	// box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
	border-radius: 5px;
	border-collapse: collapse;
	display: flex-block;
	width: ${props => props.tableWidth || ""};
`;
const Row = styled.tr`
	// &:hover {
	// 	background-color: #f5f7f9;
	// 	transition: background-color 0.05s ease-in;
	// }
`;
const Cell = styled.td`
	padding: 0.25em 0.25em 0.2em;
	font-size: small;

	// &:first-child {
	// 	color: #83a3c2;
	// 	font-weight: bold;
	// }
	&:nth-child(even) {
		text-align: right;
		font-weight: bold;
	}
`;

function Table({ id, width, data }) {
	let tableWidth;
	switch (width) {
		case "full":
			tableWidth = "100%";
			break;
		case "half":
			tableWidth = "50%";
			break;
		default:
			break;
	}
	return (
		<TableWrapper id={id} width={width} tableWidth={tableWidth}>
			{data.map(item => (
				<Row key={item.id}>
					<Cell>
						<span>{item.name}</span>
					</Cell>{" "}
					<Cell>
						<span>{item.value}</span>
					</Cell>
				</Row>
			))}
		</TableWrapper>
	);
}

Table.propTypes = {
	id: PropTypes.string,
	data: PropTypes.any.isRequired,
	width: PropTypes.string,
};

export default Table;

//Tables currently do not have context props. these props will need to be added so there is no hard coded text. we will meet on this later
