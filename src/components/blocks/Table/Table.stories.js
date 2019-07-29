import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "blocks/Table";
import DataTable from "./DataTable";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import { MultiGridWrapper, CellWrapper } from "./TableView";
import { MultiGrid, AutoSizer } from "react-virtualized";
const data = [
  { id: "a", color: "Owners/Units", name: "Multiple Owners (2 Units)" },
  { id: "b", color: "Master Parcel No.", name: "387483675638" },
  { id: "c", color: "Zoning", name: "No Zone" }
];
function cellRenderer({ columnIndex, key, parent, style, rowIndex}) {
  let header = false;
  if (rowIndex === 0) header = true;
  return (
    <CellWrapper style={style} key={key} isHeader={header} evenRow={rowIndex % 2 === 0}>
      {"sampleText"}
    </CellWrapper>
  )
}
storiesOf("Blocks|Table", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Simple", () => <Table data={data} />)
  .add("Heavy Data", () => <DataTable />)
  .add("React Virtualized Table", () =>
    React.createElement(() => {
      return (
        <MultiGridWrapper>
          <AutoSizer disableHeight>
            {({ width }) => (
              <MultiGrid
                cellRenderer={cellRenderer}
                columnCount={10}
                columnWidth={100}
                height={200}
                rowCount={20}
                rowHeight={25}
                width={width}
                fixedRowCount={1}
              />
            )}
          </AutoSizer>
        </MultiGridWrapper>
      )
    })
  )
