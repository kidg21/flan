/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Padding } from "helpers/Display";
import Text, { Link } from "base/Typography";
import Tag from "atoms/Tag";
import Panel from "layout/Panel";
import Bar from "layout/Bar";
import Icon from "atoms/Icon";
import Page from "layout/Page";
import TextInput from "atoms/TextInput";
import Button from "atoms/Button";
import Menu from "blocks/Menu";
import ReactTable from "./ReactTable.jsx";

storiesOf("Data Display|ReactTable", module)
  .add("Documentation", () => {
    return React.createElement(() => {
      const data = React.useMemo(
        () => {
          return [
            {
              col1: <Link text="19-2398834" />,
              col2: "305 West End Ave",
              col3: "New York",
              col4: "NY",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="In Progress" type="info" />,

            },
            {
              col1: <Link text="19-2308432" />,
              col2: "28 Rock Lane",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="In Progress" type="info" />,
            },
            {
              col1: <Link text="18-374839" />,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Hougfdfdfdhjh dsdfghjasdfghjwer tyuisdfghjas dfghjrtyuerty dtdfghghj iuuydtrdtrd fyftf sing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success" />,
            },
            {
              col1: <Link text="18-374839" />,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success" />,
            },
            {
              col1: <Link text="18-374839" />,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success" />,
            },
            {
              col1: <Link text="18-374839" />,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success" />,
            },
            {
              col1: <Link text="18-374839" />,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success" />,
            },
            {
              col1: <Link text="18-374839" />,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success" />,
            },
            {
              col1: <Link text="18-374839" />,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success" />,
            },
            {
              col1: <Link text="18-374839" />,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success" />,
            },
            {
              col1: <Link text="18-374839" />,
              col2: "847 Milton St.",
              col3: "Los Angeles",
              col4: "CA",
              col5: "10023",
              col6: "Senior Housing",
              col7: "6/19/2020",
              col8: <Tag label="Completed" type="success" />,
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
            },
            {
              Header: "Address",
              accessor: "col2",
              sortType: "basic",
            },
            {
              Header: "City",
              accessor: "col3",
              sortType: "basic",
            },
            {
              Header: "State",
              accessor: "col4",
              sortType: "basic",
            },
            {
              Header: "Zip",
              accessor: "col5",
              sortType: "basic",
            },
            {
              Header: "Property Type",
              accessor: "col6",
            },
            {
              Header: "Due Date",
              accessor: "col7",
              sortType: "basic",
            },
            {
              Header: "Status",
              accessor: "col8",
              sortType: "basic",
            },
          ];
        },
        [],
      );
      return (
        <ReactTable columns={columns} data={data} />);
    });
  })
  .add("In Action", () => {
    return React.createElement(() => {
      const data = React.useMemo(
        () => {
          return [
            {
              col1: <Link text="22902 Trabuco Rd. Mission Viejo CA" />,
              col2: "1402-20-12345",
              col3: "22902 Trabuco Rd.",
              col4: "Mission Viejo",
              col5: "CA",
              col6: "Shopping Center",
              col7: "Steve Davidson",
              col8: "6/25/2020",
              col9: <Tag label="Open" />,

            },
            {
              col1: <Link text="2609 Nicklaus Blvd, Sioux City IA" />,
              col2: "1206-20-159647",
              col3: "2609 Nicklaus Blvd",
              col4: "Sioux City",
              col5: "IA",
              col6: "Shopping Center",
              col7: "John Davis",
              col8: "6/01/2020",
              col9: <Tag label="Open" />,
            },
            {
              col1: <Link text="SW/4 of Section 27, Stillwater TX" />,
              col2: "1402-20-159645",
              col3: "SW/4 of Section 27, T-19-N",
              col4: "Stillwater",
              col5: "TX",
              col6: "Shopping Center",
              col7: "Joe Lockerbie",
              col8: "6/12/2020",
              col9: <Tag label="Open" />,
            },
            {
              col1: <Link text="6133 Sherwood Way, San Angelo TX" />,
              col2: "1400-20-159643",
              col3: "6133 Sherwood Way",
              col4: "San Angelo",
              col5: "TX",
              col6: "Shopping Center",
              col7: "Joe Lockerbie",
              col8: "6/26/2020",
              col9: <Tag label="Open" />,
            },
            {
              col1: <Link text="1820 S Potomac St. Aurora CO" />,
              col2: "1501-20-159641",
              col3: "1820 S Potomac St",
              col4: "Aurora",
              col5: "CO",
              col6: "Shopping Center",
              col7: "Anne Smith",
              col8: "6/18/2020",
              col9: <Tag label="Open" />,
            },
            {
              col1: <Link text="600-624 E. 4th S, Tulsa OK" />,
              col2: "1408-20-159639",
              col3: "600-624 E. 4th S",
              col4: "Tulsa",
              col5: "OK",
              col6: "Shopping Center",
              col7: "Jane Monroe",
              col8: "6/18/2020",
              col9: <Tag label="Open" />,
            },
            {
              col1: <Link text="4670 Railhead Rd, Fort Worth TX" />,
              col2: "1402-20-159637",
              col3: "4670 Railhead Rd",
              col4: "Fort Worth",
              col5: "TX",
              col6: "Shopping Center",
              col7: "Joe Lockerbie",
              col8: "6/24/2020",
              col9: <Tag label="Open" />,
            },
            {
              col1: <Link text="9401 S Eastern Ave, Moore OK" />,
              col2: "1402-20-159635",
              col3: "9401 S Eastern Ave",
              col4: "Moore",
              col5: "OK",
              col6: "Shopping Center",
              col7: "Jane Monroe",
              col8: "6/16/2020",
              col9: <Tag label="Open" />,
            },
            {
              col1: <Link text="Railhead Rd, Fort Worth TX" />,
              col2: "1402-20-159635",
              col3: "Railhead Rd",
              col4: "Fort Worth",
              col5: "TX",
              col6: "Shopping Center",
              col7: "Joe Lockerbie",
              col8: "6/24/2020",
              col9: <Tag label="Open" />,
            },
            {
              col1: <Link text="3735 Saxonburg Blvd., Pittsburgh PA" />,
              col2: "3200-20-159631",
              col3: "3735 Saxonburg Blvd.",
              col4: "Pittsburgh",
              col5: "PA",
              col6: "Shopping Center",
              col7: "Beatrice Knott",
              col8: "6/19/2020",
              col9: <Tag label="Open" />,
            },
          ];
        },
        [],
      );

      const columns = React.useMemo(
        () => {
          return [
            {
              Header: "Project Name",
              accessor: "col1", // accessor is the "key" in the data
            },
            {
              Header: "Job Number",
              accessor: "col2",
              sortType: "basic",
            },
            {
              Header: "Address",
              accessor: "col3",
            },
            {
              Header: "City",
              accessor: "col4",
              sortType: "basic",
            },
            {
              Header: "State",
              accessor: "col5",
              sortType: "basic",
            },
            {
              Header: "Property Type",
              accessor: "col6",
              sortType: "basic",
            },
            {
              Header: "Project Owner",
              accessor: "col7",
              sortType: "basic",
            },
            {
              Header: "Due Date",
              accessor: "col8",
              sortType: "basic",
            },
            {
              Header: "Status",
              accessor: "col9",
              sortType: "basic",
            },
          ];
        },
        [],
      );
      return (
        <Panel>
          <Page>
            <Bar
              padding="0"
              left={{
                content: (<TextInput type="search" placeholder="Search Projects" />),
                width: "fit-content",
              }}
            />
            <Button label="Filters" icon="filter" isSolid />
            <ReactTable hasSelection columns={columns} data={data} />
          </Page>
        </Panel>
      );
    });
  })
  .add("Jobs Trial", () => {
    return React.createElement(() => {
      const data = React.useMemo(
        () => {
          return [
            {
              col1: <Link text="1402-20-12345" />,
              col2: "22902 Trabuco Rd.",
              col3: "Mission Viejo",
              col4: "CA",
              col5: "Shopping Center",
              col6: "6/25/2020",
              col7: <Tag label="In Progress" brand="jobs" />,
              col8: <Menu
                id="menu-nested-bottomLeft"
                data={[{
                  id: "save",
                  label: "Save",
                }, {
                  id: "filter",
                  label: "Filter",
                }, {
                  id: "share",
                  label: "Share",
                  data: [{
                    id: "toast",
                    label: "Toast",
                  }, {
                    id: "popcorn",
                    label: "Popcorn",
                  }],
                }, {
                  id: "delete",
                  label: "Delete",
                }]}
                position="bottomLeft"
              >
              <Icon icon="more"/>
              </Menu>,

            },
            {
              col1: <Link text="1206-20-159647" />,
              col2: "2609 Nicklaus Blvd",
              col3: "Sioux City",
              col4: "IA",
              col5: "Shopping Center",
              col6: "6/01/2020",
              col7: <Tag label="Completed" variant="success" />,
              col8: <Icon icon="more" />,
            },
            {
              col1: <Link text="1402-20-159645" />,
              col2: "SW/4 of Section 27, T-19-N",
              col3: "Stillwater",
              col4: "TX",
              col5: "Shopping Center",
              col6: "6/12/2020",
              col7: <Tag label="In Progress" brand="jobs" />,
              col8: <Icon icon="more" />,
            },
            {
              col1: <Link text="1400-20-159643" />,
              col2: "6133 Sherwood Way",
              col3: "San Angelo",
              col4: "TX",
              col5: "Shopping Center",
              col6: "6/26/2020",
              col7: <Tag label="In Progress" brand="jobs" />,
              col8: <Icon icon="more" />,
            },
            {
              col1: <Link text="1501-20-159641" />,
              col2: "1820 S Potomac St",
              col3: "Aurora",
              col4: "CO",
              col5: "Shopping Center",
              col6: "6/18/2020",
              col7: <Tag label="Not Started" />,
              col8: <Icon icon="more" />,
            },
            {
              col1: <Link text="1408-20-159639" />,
              col2: "600-624 E. 4th S",
              col3: "Tulsa",
              col4: "OK",
              col5: "Shopping Center",
              col6: "6/18/2020",
              col7: <Tag label="Not Started" />,
              col8: <Icon icon="more" />,
            },
            {
              col1: <Link text="1402-20-159637" />,
              col2: "4670 Railhead Rd",
              col3: "Fort Worth",
              col4: "TX",
              col5: "Shopping Center",
              col6: "6/24/2020",
              col7: <Tag label="In Progress" brand="jobs" />,
              col8: <Icon icon="more" />,
            },
            {
              col1: <Link text="1402-20-159635" />,
              col2: "9401 S Eastern Ave",
              col3: "Moore",
              col4: "OK",
              col5: "Shopping Center",
              col6: "6/16/2020",
              col7: <Tag label="In Progress" brand="jobs" />,
              col8: <Icon icon="more" />,
            },
            {
              col1: <Link text="1402-20-159635" />,
              col2: "Railhead Rd",
              col3: "Fort Worth",
              col4: "TX",
              col5: "Shopping Center",
              col6: "6/24/2020",
              col7: <Tag label="Completed" variant="success" />,
              col8: <Icon icon="more" />,
            },
            {
              col1: <Link text="3200-20-159631" />,
              col2: "3735 Saxonburg Blvd.",
              col3: "Pittsburgh",
              col4: "PA",
              col5: "Shopping Center",
              col6: "6/19/2020",
              col7: <Tag label="In Progress" brand="jobs" />,
              col8: <Icon icon="more" />,
            },
          ];
        },
        [],
      );

      const columns = React.useMemo(
        () => {
          return [
            {
              Header: "Job Number",
              accessor: "col1", // accessor is the "key" in the data
            },
            {
              Header: "Address",
              accessor: "col2",
              sortType: "basic",
            },
            {
              Header: "City",
              accessor: "col3",
              sortType: "basic",
            },
            {
              Header: "State",
              accessor: "col4",
              sortType: "basic",
            },
            {
              Header: "Property Type",
              accessor: "col5",
            },
            {
              Header: "Due Date",
              accessor: "col6",
              sortType: "basic",
            },
            {
              Header: "Status",
              accessor: "col7",
              sortType: "basic",
            },
            {
              Header: "Actions",
              accessor: "col8",
            },
          ];
        },
        [],
      );
      return (
        <Panel>
          <Page>
            <Bar
              padding="0"
              left={{
                content: (<TextInput type="search" placeholder="Search Jobs" />),
                width: "fit-content",
              }}
            />
            <Button label="Filters" icon="filter" isSolid />
            <ReactTable columns={columns} data={data} />
          </Page>
        </Panel>
      );
    });
  })
  .add("RFPs Trial", () => {
    return React.createElement(() => {
      const data = React.useMemo(
        () => {
          return [
            {
              col1: <Link text="1402-20-12345" />,
              col2: "22902 Trabuco Rd.",
              col3: "Mission Viejo",
              col4: "CA",
              col5: "Shopping Center",
              col6: "6/25/2020",
              col7: "North Banking Company",
              col8: <Tag label="Needs Response" brand="research" />,
              col9: <Icon icon="more" />,
            },
            {
              col1: <Link text="1206-20-159647" />,
              col2: "2609 Nicklaus Blvd",
              col3: "Sioux City",
              col4: "IA",
              col5: "Shopping Center",
              col6: "6/01/2020",
              col7: "North Banking Company",
              col8: <Tag label="Submitted" />,
              col9: <Icon icon="more" />,
            },
            {
              col1: <Link text="1402-20-159645" />,
              col2: "SW/4 of Section 27, T-19-N",
              col3: "Stillwater",
              col4: "TX",
              col5: "Shopping Center",
              col6: "6/12/2020",
              col7: "North Banking Company",
              col8: <Tag label="Submitted" />,
              col9: <Icon icon="more" />,
            },
            {
              col1: <Link text="1400-20-159643" />,
              col2: "6133 Sherwood Way",
              col3: "San Angelo",
              col4: "TX",
              col5: "Shopping Center",
              col6: "6/26/2020",
              col7: "North Banking Company",
              col8: <Tag label="Submitted" />,
              col9: <Icon icon="more" />,
            },
            {
              col1: <Link text="1501-20-159641" />,
              col2: "1820 S Potomac St",
              col3: "Aurora",
              col4: "CO",
              col5: "Shopping Center",
              col6: "6/18/2020",
              col7: "North Banking Company",
              col8: <Tag label="Needs Response" brand="research" />,
              col9: <Icon icon="more" />,
            },
            {
              col1: <Link text="1408-20-159639" />,
              col2: "600-624 E. 4th S",
              col3: "Tulsa",
              col4: "OK",
              col5: "Shopping Center",
              col6: "6/18/2020",
              col7: "North Banking Company",
              col8: <Tag label="Awaiting Acceptance" brand="bi" />,
              col9: <Icon icon="more" />,
            },
            {
              col1: <Link text="1402-20-159637" />,
              col2: "4670 Railhead Rd",
              col3: "Fort Worth",
              col4: "TX",
              col5: "Shopping Center",
              col6: "6/24/2020",
              col7: "North Banking Company",
              col8: <Tag label="Awaiting Acceptance" brand="bi" />,
              col9: <Icon icon="more" />,
            },
            {
              col1: <Link text="1402-20-159635" />,
              col2: "9401 S Eastern Ave",
              col3: "Moore",
              col4: "OK",
              col5: "Shopping Center",
              col6: "6/16/2020",
              col7: "North Banking Company",
              col8: <Tag label="Needs Response" brand="research" />,
              col9: <Icon icon="more" />,
            },
            {
              col1: <Link text="1402-20-159635" />,
              col2: "Railhead Rd",
              col3: "Fort Worth",
              col4: "TX",
              col5: "Shopping Center",
              col6: "6/24/2020",
              col7: "North Banking Company",
              col8: <Tag label="Needs Response" brand="research" />,
              col9: <Icon icon="more" />,
            },
            {
              col1: <Link text="3200-20-159631" />,
              col2: "3735 Saxonburg Blvd.",
              col3: "Pittsburgh",
              col4: "PA",
              col5: "Shopping Center",
              col6: "6/19/2020",
              col7: "North Banking Company",
              col8: <Tag label="Needs Response" brand="research" />,
              col9: <Icon icon="more" />,
            },
          ];
        },
        [],
      );

      const columns = React.useMemo(
        () => {
          return [
            {
              Header: "RFP Number",
              accessor: "col1", // accessor is the "key" in the data
              sortType: "basic",
            },
            {
              Header: "Address",
              accessor: "col2",
              sortType: "basic",
            },
            {
              Header: "City",
              accessor: "col3",
              sortType: "basic",
            },
            {
              Header: "State",
              accessor: "col4",
              sortType: "basic",
            },
            {
              Header: "Property Type",
              accessor: "col5",
              sortType: "basic",
            },
            {
              Header: "Due Date",
              accessor: "col6",
              sortType: "basic",
            },
            {
              Header: "Client Name",
              accessor: "col7",
              sortType: "basic",
            },
            {
              Header: "Status",
              accessor: "col8",
              sortType: "basic",
            },
            {
              Header: "Actions",
              accessor: "col9",
              sortType: "basic",
            },
          ];
        },
        [],
      );
      return (
        <Panel>
          <Page>
            <Bar
              padding="0"
              left={{
                content: (<TextInput type="search" placeholder="Search RFPs" />),
                width: "fit-content",
              }}
            />
            <Button label="Filters" icon="filter" isSolid />
            <ReactTable columns={columns} data={data} />
          </Page>
        </Panel>
      );
    });
  });
