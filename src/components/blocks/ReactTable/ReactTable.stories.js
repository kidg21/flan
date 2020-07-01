/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import { Link } from "base/Typography";
import Tag from "atoms/Tag";
import ReactTable from "./ReactTable.jsx";


storiesOf("Data Display|ReactTable", module)
  .add("Documentation", () => {
    return React.createElement(() => {
      const data = React.useMemo(
        () => {
          return [
            {
              col1: <Link text="19-2398834"/>,
              col2: "305 West End Ave",
              col3: "New York",
              col4: "NY",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="In Progress" type="info"/>,

            },
            {
              col1: <Link text="19-2308432"/>,
              col2: "28 Rock Lane",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="In Progress" type="info"/>,
            },
            {
              col1: <Link text="18-374839"/>,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success"/>,
            },
            {
              col1: <Link text="18-374839"/>,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success"/>,
            },
            {
              col1: <Link text="18-374839"/>,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success"/>,
            },
            {
              col1: <Link text="18-374839"/>,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success"/>,
            },
            {
              col1: <Link text="18-374839"/>,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success"/>,
            },
            {
              col1: <Link text="18-374839"/>,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success"/>,
            },
            {
              col1: <Link text="18-374839"/>,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success"/>,
            },
            {
              col1: <Link text="18-374839"/>,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success"/>,
            },
            {
              col1: <Link text="18-374839"/>,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success"/>,
            },
          ];
        },
        [],
      );

      const columns = React.useMemo(
        () => {
          return [
            {
              Header: "Project Number",
              accessor: "col1", // accessor is the "key" in the data
              sortType: 'basic',
            },
            {
              Header: "Address",
              accessor: "col2",
              sortType: 'basic',
            },
            {
              Header: "City",
              accessor: "col3",
              sortType: 'basic',
            },
            {
              Header: "State",
              accessor: "col4",
              sortType: 'basic',
            },
            {
              Header: "Zip",
              accessor: "col5",
              sortType: 'basic',
            },
            {
              Header: "Property Type",
              accessor: "col6",
              sortType: 'basic',
            },
            {
              Header: "Due Date",
              accessor: "col7",
              sortType: 'basic',
            },
            {
              Header: "Status",
              accessor: "col8",
              sortType: 'basic',
            },
          ];
        },
        [],
      );
      return (
        <ReactTable columns={columns} data={data} />);
    });
  });
