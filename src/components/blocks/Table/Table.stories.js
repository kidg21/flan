import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "blocks/Table";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import { MultiGridWrapper, CellWrapper } from "./TableView";
import { MultiGrid, AutoSizer } from "react-virtualized";
const data = [
  { id: "a", name: "Owners/Units", value: "Multiple Owners (2 Units)" },
  { id: "b", name: "Master Parcel No.", value: "387483675638" },
  { id: "c", name: "Zoning", value: "No Zone" },
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
  .add("Simple", () => (
    <div>
      <Table data={data} />
      <Table data={data} width="half" />
      <Table data={data} width="full" />
    </div>
  ))
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
  );
