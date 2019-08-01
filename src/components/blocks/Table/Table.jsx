import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const TableWrapper = styled.table`
	// overflow: hidden;
	table-layout: fixed;
	cursor: default;
	// box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
	border-radius: 5px;
	border-collapse: collapse;
	// display: flex-block;
	width: 100%;
`;
const Row = styled.tr`
	// &:hover {
	// 	background-color: #f5f7f9;
	// 	transition: background-color 0.05s ease-in;
	// }
`;
const Cell = styled.td`
	padding: 0.25em 0.25em 0.25em;
	font-size: small;
	text-align: left;

	// &:first-child {
	// 	color: #83a3c2;
	// 	font-weight: bold;
	// }
	&:nth-child(even) {
		font-weight: bold;
	}
`;

function Table({ id, data }) {
	return (
		<TableWrapper id={id}>
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
};

export default Table;

//Tables currently do not have context props. these props will need to be added so there is no hard coded text. we will meet on this later
