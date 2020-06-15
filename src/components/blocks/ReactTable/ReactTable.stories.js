/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import ReactTable from "./ReactTable.jsx";


storiesOf("Blocks|ReactTable", module)

  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add("Documentation", () => {
    return React.createElement(() => {
      const data = React.useMemo(
        () => {
          return [
            {
              col1: "Hello",
              col2: "World",
              col3: "dkfjslkdjkf",
            },
            {
              col1: "react-table",
              col2: "rocks",
              col3: "dkfjslkdjkf",
            },
            {
              col1: "whatever",
              col2: "you want",
              col3: "dkfjslkdjkf",
            },
          ];
        },
        [],
      );

      const columns = React.useMemo(
        () => {
          return [
            {
              Header: "Column 1",
              accessor: "col1", // accessor is the "key" in the data
            },
            {
              Header: "Column 2",
              accessor: "col2",
            },
            {
              Header: "Words",
              accessor: "col3",
            },
          ];
        },
        [],
      );
      return (
        <ReactTable columns={columns} data={data} />);
    });
  });
