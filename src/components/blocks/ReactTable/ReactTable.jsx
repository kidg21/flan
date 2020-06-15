import React from "react";
import { useTable } from 'react-table';
import styled from "styled-components";

const NewTable = styled.table`
border-collapse: collapse;
font-family: ${(props) => { return props.theme.typography.primary; }};
`;

const NewHead = styled.thead`

`;

const NewBody = styled.tbody`

`;

const NewCell = styled.td`
padding: 0.5rem;
border: 1px solid;
border-color: ${(props) => {
  return ( props.theme.palette.neutral60
  );
}};
`;

const NewHeaderCell = styled.th`
padding: 0.5rem;
border: 1px solid;
border-color: ${(props) => {
  return ( props.theme.palette.neutral60
  );
}};
`;

const NewRow = styled.tr`
`;

function ReactTable() {
const data = React.useMemo(
  () => [
    {
      col1: 'Hello',
      col2: 'World',
    },
    {
      col1: 'react-table',
      col2: 'rocks',
    },
    {
      col1: 'whatever',
      col2: 'you want',
    },
  ],
  []
)

const columns = React.useMemo(
  () => [
    {
      Header: 'Column 1',
      accessor: 'col1', // accessor is the "key" in the data
    },
    {
      Header: 'Column 2',
      accessor: 'col2',
    },
  ],
  []
)

const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
} = useTable({ columns, data })

return (
  <NewTable {...getTableProps()} >
    <NewHead>
      {headerGroups.map(headerGroup => (
        <NewRow {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <NewHeaderCell
              {...column.getHeaderProps()}
            >
              {column.render('Header')}
            </NewHeaderCell>
          ))}
        </NewRow>
      ))}
    </NewHead>
    <NewBody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row)
        return (
          <NewRow {...row.getRowProps()}>
            {row.cells.map(cell => {
              return (
                <NewCell
                  {...cell.getCellProps()}
 
                >
                  {cell.render('Cell')}
                </NewCell>
              )
            })}
          </NewRow>
        )
      })}
    </NewBody>
  </NewTable>
)
};

export default ReactTable;
