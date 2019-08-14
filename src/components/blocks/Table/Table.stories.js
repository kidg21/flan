import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Table from "blocks/Table";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import { MultiGridWrapper, CellWrapper } from "./TableView";
import { MultiGrid, AutoSizer, CellMeasurer, CellMeasurerCache } from "react-virtualized";
const data = [
  { id: "a", name: "Owners/Units", value: "Multiple Owners (2 Units)" },
  { id: "b", name: "Master Parcel No.", value: "387483675638" },
  { id: "c", name: "Zoning", value: "No Zone" },
];

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
      // which data cell should get highlighted, -1 means that none should
      // rowIndex === 0, is the header and will not get highlighted
      const [ highlightRowIndex, setHighlightRowIndex ] = useState(-1);
      const cache = new CellMeasurerCache({
        defaultWidth: 100,
        minWidth: 50,
        fixedHeight: true,
      });
      function cellRenderer({ columnIndex, key, parent, style, rowIndex}) {
        return (
          <CellMeasurer
            cache={cache}
            columnIndex={columnIndex}
            key={key}
            parent={parent}
            rowIndex={rowIndex}
          >
            <CellWrapper
              style={style}
              isHeader={rowIndex === 0}
              evenRow={rowIndex % 2 === 0}
              isHighlighted={rowIndex === highlightRowIndex && rowIndex !== 0}
              onMouseOver={() => {
                console.log(rowIndex);
                setHighlightRowIndex(rowIndex);
              }}
              onMouseOut={() => {
                setHighlightRowIndex(-1);
              }}
            >
              {"sampleText"}
            </CellWrapper>
          </CellMeasurer>
        );
      }
      return (
        <MultiGridWrapper>
          <AutoSizer disableHeight>
            {({ width }) => (
              <MultiGrid
                cellRenderer={cellRenderer}
                columnCount={10}
                columnWidth={cache.columnWidth}
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
