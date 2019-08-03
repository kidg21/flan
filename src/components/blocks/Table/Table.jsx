import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Card, { Piece } from "layout/Card/Card";
import { SkeletonStatic } from "helpers/SkeletonStatic.jsx";

const TableWrapper = styled.table`
  // overflow: hidden;
  cursor: default;
  padding: .2em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  display: flex-block;
  width: 100%;
  &:empty {
      ${SkeletonStatic};
      padding: 5px;
      width: 100 em;
      height: 5rem;
    }
  }
`;

const Row = styled.tr`
	&:hover {
		background-color: #f5f7f9;
		transition: background-color 0.05s ease-in;
	}
`;
const Cell = styled.td`
	padding: 0.5em 0.5em 0.5em;
	font-size: small;

	&:first-child {
		color: #83a3c2;
		font-weight: bold;
	}
	&:nth-child(even) {
		text-align: right;
	}
	&:empty {
		&:before {
			content: "Not Available";
		}
	}
`;

function Table({ id, data }) {
	return (
		<Piece>
			<TableWrapper id={id}>
				{data
					? [
							data.map(item => (
								<Row key={item.id}>
									<Cell>{item.color}</Cell> <Cell>{item.name}</Cell>
								</Row>
							)),
					  ]
					: null}
			</TableWrapper>
		</Piece>
	);
}

Table.propTypes = {
	id: PropTypes.string,
	data: PropTypes.any.isRequired,
};

export default Table;

//Tables currently do not have context props. these props will need to be added so there is no hard coded text. we will meet on this later
