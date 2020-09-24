/* eslint-disable linebreak-style */
import React from "react";
import {
  useTable, useRowSelect, usePagination, useSortBy,
} from "react-table";
import styled from "styled-components";
import Icon from "atoms/Icon";
import Grid from "layout/Grid";
import Inline from "layout/Inline";

const NewTable = styled.table`
border-collapse: collapse;
text-align: left;
overflow-x: auto;
font-family: ${(props) => { return props.theme.typography.primary; }};
`;

const NewHead = styled.thead`
color: ${(props) => {
    return props.theme.text.secondary;
  }};
border: 1px solid;
border-color: ${(props) => {
    return (props.theme.palette.neutral60
    );
  }};
`;

const NewBody = styled.tbody`
color: ${(props) => {
    return props.theme.text.primary;
  }};

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
font-weight: 500;

`;

const NewRow = styled.tr`
border: 1px solid;
overflow-y: auto;
border-color: ${(props) => {
  return (props.theme.palette.neutral60
  );
}};
`;

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <React.Fragment>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </React.Fragment>
    );
  },
);

function ReactTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    // No pagination necessary, scrolling used.
    rows,
    selectedFlatRows,
    state: {
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
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
        // Let's make a column for selection
          {
            id: "selection",
            // The header can use the table's getToggleAllRowsSelectedProps method
            // to render a checkbox
            Header: ({ getToggleAllRowsSelectedProps }) => {
              return (
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              );
            },
            // The cell can use the individual row's getToggleRowSelectedProps method
            // to the render a checkbox
            Cell: ({ row }) => {
              return (
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              );
            },
          },
          ...columns,
        ];
      });
    },
  );

  const totalRecords = data.length;
  const recordInfo = `${totalRecords} Results`; /**Use recordInfo to capture the number of rows/items in a list */

  return (
    <React.Fragment>
      <Grid columns="1">
        <NewTable {...getTableProps()}>
          <NewHead>
            {headerGroups.map((headerGroup) => {
              return (
                <NewRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => {
                    return (
                      <NewHeaderCell
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                      >
                        <Inline>
                        {column.render("Header")}
                        <Icon icon={column.isSorted ? (column.isSortedDesc ? "down" : "up") : ""} />
                        </Inline>
                      </NewHeaderCell>
                    );
                  })}
                </NewRow>
              );
            })}
          </NewHead>
          <NewBody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <NewRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <NewCell
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </NewCell>
                    );
                  })}
                </NewRow>
              );
            })}
          </NewBody>
        </NewTable>
      </Grid>

    </React.Fragment>
  );
}

export default ReactTable;
