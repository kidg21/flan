import React from "react";
import { useTable, useRowSelect, usePagination, useSortBy } from 'react-table';
import styled from "styled-components";
import Button, { ButtonGroup } from "atoms/Button";
import Bar from "layout/Bar";
import Text from "base/Typography";
import Panel from "layout/Panel";
import Grid from "layout/Grid";

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
  prepareRow,
  page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    rows,
    previousPage,
    setPageSize,
  selectedFlatRows,
  state: {
    pageIndex,
    pageSize,
    sortBy,
    groupBy,
    expanded,
    filters,
    selectedRowIds,
  },
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...columns,
      ])
    }
  )

  
  let totalRecords = data.length;
  let recordsCountFrom = pageIndex * pageSize + 1;
  let recordsCountTo = recordsCountFrom + pageSize - 1;
  let recordInfo = `${recordsCountFrom}-${recordsCountTo} of ${totalRecords} records`;

return (
  <>
  <Grid columns="1">
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
    {page.map(row => {
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
    <Bar 
    left={{
      content: (
        <div>
          <Text text="Showing"/>
          <p>{recordInfo}</p>
          <p>Showing Records: {recordsCountFrom}</p>
          <p>Showing of Records: {recordsCountTo}</p>
          <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
        <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
      <select
        value={pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value))
        }}
      >
        {[5, 10].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
      </div>)}}
    right={{
      content: (
    <ButtonGroup columns="2">
        <Button onClick={() => previousPage()} disabled={!canPreviousPage} label="<" isRound/>
        <Button onClick={() => nextPage()} disabled={!canNextPage} label=">" isRound />
    </ButtonGroup> ),
    width: "fit-content",
     align: "right", }}/>
  
        
      </Grid>

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
  <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
              sortBy,
              groupBy,
              expanded: expanded,
              filters,
              selectedRowIds: selectedRowIds,
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
