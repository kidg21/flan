import React from "react";
import { useTable, useRowSelect, useSortBy } from 'react-table';
import styled from "styled-components";

const NewTable = styled.table`
border-collapse: collapse;
text-align: left;
font-family: ${(props) => { return props.theme.typography.primary; }};
`;

const NewHead = styled.thead`
color: ${(props) => {
  return props.theme.text.secondary;
}};
border: 1px solid;
border-color: ${(props) => {
  return ( props.theme.palette.neutral60
  );
}};
`;

const NewBody = styled.tbody`
color: ${(props) => {
  return props.theme.text.primary;
}};
font-weight: 600;

`;

const NewCell = styled.td`
padding: 1rem;
padding-right: 1.5rem;
&:empty {
    content: ---;
}

`;

const NewHeaderCell = styled.th`
padding: 1rem;

font-weight: 600;

`;

const NewRow = styled.tr`
border: 1px solid;
border-color: ${(props) => {
  return ( props.theme.palette.neutral60
  );
}};
`;

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)



function ReactTable({columns, data}) {

const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
  selectedFlatRows,
  state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )


return (
  <>
  <NewTable {...getTableProps()} >
    <NewHead>
      {headerGroups.map(headerGroup => (
        <NewRow {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <NewHeaderCell
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              {column.render('Header')}
              <span>
              {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
              </span>
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
  <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
  <pre>
    <code>
      {JSON.stringify(
        {
          selectedRowIds: selectedRowIds,
          'selectedFlatRows[].original': selectedFlatRows.map(
            d => d.original
          ),
        },
        null,
        2
      )}
    </code>
  </pre>
</>
)
};

export default ReactTable;
