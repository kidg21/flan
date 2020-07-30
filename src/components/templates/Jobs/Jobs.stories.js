/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { FullScreen } from "helpers/Display";
import Panel from "layout/Panel";
import Icon from "atoms/Icon";
import Loader from "atoms/Loader";
import Button, { ButtonGroup } from "atoms/Button";
import Bar from "layout/Bar";
import Layout from "layout/Layout";
import Container from "atoms/Container";
import Command from "atoms/Command";
import Template from "layout/Template";
import Tag from "atoms/Tag";
import Tabs, { TabItem } from "blocks/Tabs";
import List, { ListItem } from "blocks/List";
import Grid from "layout/Grid";
import Form, { FormSection } from "layout/Form";
import Text, { Title, Link } from "base/Typography";
import SelectMenu from "atoms/SelectMenu";
import Table from "blocks/Table";
import TextInput from "atoms/TextInput";
import Media from "atoms/Media";
import Card, { CardSection, CardGrid } from "elements/Card";
import Modal from "layout/Modal";
import ParcelMap from "images/maps/map-parcel.png";
import ReportTemp from "images/rural.jpg";
import Menu from "blocks/Menu";
import {
  MockData,
  MockDetails,
  MockFooter,
  MockForm,
  MockHeader,
  MockHeaderGlobal,
  MockMenu,
  MockTabs,
  MockWorkflow,
} from "helpers/Mocks";

// Only columns specified here will be displayed
const headers = [
  { id: "JOB_NUMBER", label: "Job Number", sortable: true },
  { id: "ADDRESS", label: "Address" },
  { id: "CITY", label: "City" },
  { id: "STATE", label: "State" },
  { id: "PROPERTY_TYPE", label: "Property Type", sortable: true },
  { id: "CLIENT", label: "Client", sortable: true },
  { id: "REPORT_TYPE", label: "Report Type", sortable: true },
  { id: "DUE_DATE", label: "Due Date", sortable: true },
  { id: "STATUS", label: "Status" },
  { id: "options", label: "Actions" },
];

const rfpheaders = [
  { id: "JOB_NUMBER", label: "RFP Number", sortable: true },
  { id: "ADDRESS", label: "Address" },
  { id: "CITY", label: "City" },
  { id: "STATE", label: "State" },
  { id: "PROPERTY_TYPE", label: "Property Type", sortable: true },
  { id: "CLIENT", label: "Client", sortable: true },
  { id: "REPORT_TYPE", label: "Report Type", sortable: true },
  { id: "DUE_DATE", label: "Due Date", sortable: true },
  { id: "STATUS", label: "Status" },
  { id: "options", label: "Actions" },
];

const data = [
  {
    JOB_NUMBER: <Link text="1402-20-12345" />,
    ADDRESS: "22902 Trabuco Rd.",
    CITY: "Mission Viejo",
    STATE: "CA",
    PROPERTY_TYPE: "Shopping Center",
    CLIENT: "North Bank",
    REPORT_TYPE: "Appraisal",
    DUE_DATE: "04/09/2021",
    STATUS: <Tag label="Submitted" />,
  },
  {
    JOB_NUMBER: <Link text="1402-20-12345" />,
    ADDRESS: "22902 Trabuco Rd.",
    CITY: "Mission Viejo",
    STATE: "CA",
    PROPERTY_TYPE: "Shopping Center",
    CLIENT: "North Bank",
    REPORT_TYPE: "Appraisal",
    DUE_DATE: "04/09/2021",
    STATUS: <Tag label="Submitted" />,
  },
  {
    JOB_NUMBER: <Link text="1402-20-12345" />,
    ADDRESS: "22902 Trabuco Rd.",
    CITY: "Mission Viejo",
    STATE: "CA",
    PROPERTY_TYPE: "Shopping Center",
    CLIENT: "North Bank",
    REPORT_TYPE: "Appraisal",
    DUE_DATE: "04/09/2021",
    STATUS: <Tag label="Submitted" />,
  },
  {
    JOB_NUMBER: <Link text="1402-20-12345" />,
    ADDRESS: "22902 Trabuco Rd.",
    CITY: "Mission Viejo",
    STATE: "CA",
    PROPERTY_TYPE: "Shopping Center",
    CLIENT: "North Bank",
    REPORT_TYPE: "Appraisal",
    DUE_DATE: "04/09/2021",
    STATUS: <Tag label="Submitted" />,
  },
  {
    JOB_NUMBER: <Link text="1402-20-12345" />,
    ADDRESS: "22902 Trabuco Rd.",
    CITY: "Mission Viejo",
    STATE: "CA",
    PROPERTY_TYPE: "Shopping Center",
    CLIENT: "North Bank",
    REPORT_TYPE: "Appraisal",
    DUE_DATE: "04/09/2021",
    STATUS: <Tag label="Submitted" />,
  },
  {
    JOB_NUMBER: <Link text="1402-20-12345" />,
    ADDRESS: "22902 Trabuco Rd.",
    CITY: "Mission Viejo",
    STATE: "CA",
    PROPERTY_TYPE: "Shopping Center",
    CLIENT: "North Bank",
    REPORT_TYPE: "Appraisal",
    DUE_DATE: "04/09/2021",
    STATUS: <Tag label="Submitted" />,
  },
  {
    JOB_NUMBER: <Link text="1402-20-12345" />,
    ADDRESS: "22902 Trabuco Rd.",
    CITY: "Mission Viejo",
    STATE: "CA",
    PROPERTY_TYPE: "Shopping Center",
    CLIENT: "North Bank",
    REPORT_TYPE: "Appraisal",
    DUE_DATE: "04/09/2021",
    STATUS: <Tag label="Submitted" />,
  },
  {
    JOB_NUMBER: <Link text="1402-20-12345" />,
    ADDRESS: "22902 Trabuco Rd.",
    CITY: "Mission Viejo",
    STATE: "CA",
    PROPERTY_TYPE: "Shopping Center",
    CLIENT: "North Bank",
    REPORT_TYPE: "Appraisal",
    DUE_DATE: "04/09/2021",
    STATUS: <Tag label="Submitted" />,
  },
  {
    JOB_NUMBER: <Link text="1402-20-12345" />,
    ADDRESS: "22902 Trabuco Rd.",
    CITY: "Mission Viejo",
    STATE: "CA",
    PROPERTY_TYPE: "Shopping Center",
    CLIENT: "North Bank",
    REPORT_TYPE: "Appraisal",
    DUE_DATE: "04/09/2021",
    STATUS: <Tag label="Submitted" />,
  },
  {
    JOB_NUMBER: <Link text="1402-20-12345" />,
    ADDRESS: "22902 Trabuco Rd.",
    CITY: "Mission Viejo",
    STATE: "CA",
    PROPERTY_TYPE: "Shopping Center",
    CLIENT: "North Bank",
    REPORT_TYPE: "Appraisal",
    DUE_DATE: "04/09/2021",
    STATUS: <Tag label="Submitted" />,
  },
  {
    JOB_NUMBER: <Link text="1402-20-12345" />,
    ADDRESS: "22902 Trabuco Rd.",
    CITY: "Mission Viejo",
    STATE: "CA",
    PROPERTY_TYPE: "Shopping Center",
    CLIENT: "North Bank",
    REPORT_TYPE: "Appraisal",
    DUE_DATE: "04/09/2021",
    STATUS: <Tag label="Submitted" />,
  },
];


storiesOf("Templates|Applications/Jobs Portal", module)
  .addDecorator(FullScreen)
  .add(
    "Jobs Page",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        const [highlightedCell, setHighlightCell] = useState(null);
        const [selectedCell, setSelectedCell] = useState(null);
        for (let i = 0; i < data.length; i++) {
          data[i].options = <Menu  closeOnClickAway isFlex position="bottomLeft"
            data={[
              { id: "save", label: "Verify Site", icon: "export" },
              { id: "filter", label: "Research", icon: "export" },
              { id: "share", label: "Report Writing", icon: "export" },
              { id: "delete", label: "Delete", icon: "delete" },
            ]}><Icon icon="more" /></Menu>;
        }

        const onCellClick = (e, { rowIndex }) => {
          setSelectedCell({ rowIndex });
        };

        const onHeaderClick = (e, { columnIndex }) => {
          alert(`Header ${columnIndex}: ${headers[columnIndex].id} clicked`);
        };

        const onCellMouseOver = (e, { rowIndex }) => {
          setHighlightCell({ rowIndex });
        };

        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: (<List title="Jobs Portal" isInteractive isInverse>
                <ListItem title="Dashboard" />
                <ListItem title="Jobs" isSelected />
                <ListItem title="RFPs" />
              </List>),
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (

                <Template
                  id="Assessment"

                  template="B_02"
                  A={{
                    id: "A",
                    content: (
                      <List title="Jobs Menu" isInteractive>
                        <ListItem title="All Jobs" isSelected />
                        <ListItem title="Submitted" post={{ type: "label", label: "28" }} />
                        <ListItem title="In Progress" post={{ type: "label", label: "5" }} />
                        <ListItem title="Completed" />
                      </List>

                    ),
                  }}
                  B={{
                    id: "B",
                    content: (
                      <Template
                        id="Details"
                        template="A_01"

                        A={{
                          id: "A",
                          content: (
                            <Panel header={<Bar padding="2x" contentAlign="center" left={<Title size="xl" text="Jobs" />} right={<Button icon="plus" label="Create" />} />}>

                              <Bar padding="1x" left={{ content: (<TextInput type="search" placeholder="Search Jobs" />), width: "fit-content" }} />
                              <Bar padding="1x" left={<Button label="Filters" icon="filter" isSolid />} />
                              <Table
                                headers={headers}
                                rows={data}
                                listId="foo"
                                onCellClick={onCellClick}
                                onHeaderClick={onHeaderClick}
                                onCellMouseOver={onCellMouseOver}
                                columnWidth={144}
                              />

                            </Panel>)
                          ,
                        }}
                      />
                    ),
                  }}
                />

              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "RFPs Page",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        const [highlightedCell, setHighlightCell] = useState(null);
        const [selectedCell, setSelectedCell] = useState(null);
        for (let i = 0; i < data.length; i++) {
          data[i].options = <Menu isFlex position="bottomLeft"
            data={[
              { id: "save", label: "Verify Site", icon: "export" },
              { id: "filter", label: "Research", icon: "export" },
              { id: "share", label: "Report Writing", icon: "export" },
              { id: "delete", label: "Delete", icon: "delete" },
            ]}><Icon icon="more" /></Menu>;
        }

        const onCellClick = (e, { rowIndex }) => {
          setSelectedCell({ rowIndex });
        };

        const onHeaderClick = (e, { columnIndex }) => {
          alert(`Header ${columnIndex}: ${headers[columnIndex].id} clicked`);
        };

        const onCellMouseOver = (e, { rowIndex }) => {
          setHighlightCell({ rowIndex });
        };

        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: (<List title="Jobs Portal" isInteractive isInverse>
                <ListItem title="Dashboard" />
                <ListItem title="Jobs" />
                <ListItem title="RFPs" isSelected />
              </List>),
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (

                <Template
                  id="Assessment"

                  template="B_02"
                  A={{
                    id: "A",
                    content: (
                      <List title="RFPs Menu" isInteractive>
                        <ListItem title="All RFPs" isSelected />
                        <ListItem title="Needs Response" post={{ type: "label", label: "4" }} />
                        <ListItem title="Submitted" post={{ type: "label", label: "28" }} />
                        <ListItem title="Awaiting Acceptance" />
                      </List>

                    ),
                  }}
                  B={{
                    id: "B",
                    content: (
                      <Template
                        id="Details"
                        template="A_01"

                        A={{
                          id: "A",
                          content: (
                            <Panel header={<Bar padding="2x" contentAlign="center" left={<Title size="xl" text="RFPs" />} right={<Button icon="plus" label="Create" />} />}>


                              <Bar padding="1x" left={{ content: (<TextInput type="search" placeholder="Search RFPs" />), width: "fit-content" }} />

                              <Bar padding="1x" left={<Button label="Filters" icon="filter" isSolid />} />
                              <Table
                                headers={rfpheaders}
                                rows={data}
                                listId="foo"
                                onCellClick={onCellClick}
                                onHeaderClick={onHeaderClick}
                                onCellMouseOver={onCellMouseOver}
                                columnWidth={144}
                              />

                            </Panel>)
                          ,
                        }}
                      />
                    ),
                  }}
                />

              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Projects Page",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        const [activeSingleTab, setActiveSingleTab] = useState("tab1");

        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: (<List title="Research" isInteractive isInverse>
                <ListItem title="Projects" isSelected />
                <ListItem title="Properties" />
                <ListItem title="History" />
                <ListItem title="Data" />
              </List>),
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Template
                  id="Details"
                  template="A_01"

                  A={{
                    id: "A",
                    content: (
                      <Panel header={<Bar padding="2x" contentAlign="center" left={<Title size="xl" text="Projects" />} right={<Button icon="plus" label="Create" />} />}>
                        <Form>
                          <Bar padding="0" left={{ content: (<TextInput type="search" placeholder="Filter Projects" />), width: "fit-content" }} />
                          <Bar padding="0" left={<Button label="Filters" icon="filter" isSolid />} />
                        </Form>
                      </Panel>)
                    ,
                  }}
                />
              ),
            }}
          />
        );
      });
    },
  );
