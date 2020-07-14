/* eslint-disable linebreak-style */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Text, { Title, Link } from "base/Typography";
import Icon from "atoms/Icon";
import Image from "atoms/Image";
import IconBlock from "blocks/IconBlock";
import Card, { CardSection, CardGrid } from "elements/Card";
import List, { ListSection, ListItem } from "blocks/List";
import Tabs from "blocks/Tabs";
import Table from "blocks/Table";
import Form, { FormSection } from "layout/Form";
import TextInput from "atoms/TextInput";
import Button, { ButtonGroup } from "atoms/Button";
import Checkbox, { CheckboxGroup } from "atoms/Checkbox";
import { RadioGroup } from "atoms/Radio";
import SelectMenu from "atoms/SelectMenu";
import Avatar from "atoms/Avatar";
import Bar from "layout/Bar";
import Menu from "blocks/Menu";
import Template from "layout/Template";
import Picker, { ColorSwatch } from "elements/Picker";
import Field, { FieldGroup } from "atoms/Field";
import LightBoxLogo from "images/LightBoxLogo.png";
import StaticMap from "images/maps/mission-viejo.png";

function MockPalette() {
  return (
    <Picker id="standard" label="Color Picker" columns="3">
      <ColorSwatch color="#EBEAEC" />
      <ColorSwatch color="#D9ECEC" />
      <ColorSwatch isSelected color="#80959D" />
      <ColorSwatch color="#63B1CD" />
      <ColorSwatch color="#06BFAE" />
      <ColorSwatch color="#095593" />
      <ColorSwatch color="#F3822B" />
      <ColorSwatch color="#FFBF00" />
    </Picker>
  );
}
MockPalette.propTypes = {
  // stuff
};
MockPalette.defaultProps = {
  // stuff
};

function MockHeaderGlobal({ menuClick }) {
  function doNothing() {
    // do nothing
  }

  return (
    <Bar
      contentAlign="center"
      left={{
        content: (
          <Grid columns="max-content 1fr" gap="xl" align="center">
            <Icon
              icon="menu"
              onClick={menuClick}
            />
            <Image src={LightBoxLogo} alt="Lightbox Logo" width="8vw" onClick={doNothing} />
          </Grid>
        ),
        width: "15%",
      }}
      center={{
        content: (
          <ButtonGroup columns="5">
            <Button label="JOBS PORTAL" isPlain />
            <Button label="RESEARCH" isPlain />
            <Button label="BI" isPlain />
            <Button label="REPORT WRITING" isPlain />
          </ButtonGroup>
        ),
        align: "left",
      }}
      right={{
        content: (
          <Grid columns="max-content max-content" gap="4xl" align="center">
            <Avatar icon="help_solid" size="sm" onClick={doNothing} />
            <Avatar icon="user" size="sm" onClick={doNothing} />
          </Grid>
        ),
        width: "fit-content",
      }}
    />
  );
}
MockHeaderGlobal.propTypes = {
  menuClick: PropTypes.func,
};
MockHeaderGlobal.defaultProps = {
  menuClick: null,
};

function MockHeader() {
  const testData = [{
    id: "a",
    label: "Action",
    onClick: () => { },
  }, {
    id: "b",
    label: "Action",
    onClick: () => { },
  }, {
    id: "c",
    label: "Action",
    commands: [
      { id: "c0", label: "Action", onClick: () => { } },
      { id: "c1", label: "Action" }],
  }];
  return (
    <Card
      id="Card_Header"
    >
      <CardSection padding="2x" variant="light">
        <Bar
          padding="0"
          contentAlign="center"
          left={{
            content: <Title size="lg" text="22902 Trabuco Road • Mission Viejo, CA 92691 • Shopping Center • 171,143 sqft" weight="bold" />,
            align: "left",
          }}
          right={{
            content: (
              <IconBlock>
                <Icon icon="share" onClick />
                <Icon icon="bookmark" onClick />
                <Menu
                  data={testData}
                  position="bottomLeft"
                />
              </IconBlock>
            ),
            width: "10rem",
          }}
        />
      </CardSection>
    </Card>
  );
}
MockHeader.propTypes = {
  // stuff
};
MockHeader.defaultProps = {
  // stuff
};

function MockFooter() {
  return (
    <Bar
      contentAlign="center"
      padding="0"
      left={{
        content: (
          <Grid columns="auto 1fr">
            <Link text="1" onClick={() => { }} />
            <Text text="Last Updated: May 23, 2020 • Source: CRMLS" />
          </Grid>
        ),
        align: "left",
      }}
    />
  );
}
MockFooter.propTypes = {
  // stuff
};
MockFooter.defaultProps = {
  // stuff
};

function MockMenu() {
  return (
    <List title="Research" isInteractive isInverse>
      <ListItem title="Projects" isSelected />
      <ListItem title="Properties" />
      <ListItem title="History" />
      <ListItem title="Data" />
    </List>
  );
}
MockMenu.propTypes = {
  // stuff
};
MockMenu.defaultProps = {
  // stuff
};

function MockWorkflow({ data, title }) {
  return (
    <React.Fragment>
      {data ? <List title={title} isInteractive data={data} />
        : (
          <List title={title} isInteractive>
            <ListItem
              title="Project Details"
              isSelected
            />
            <ListItem
              title="Define Site"
              post={{
                type: "icon", icon: "check", variant: "success",
              }}
            />
            <ListSection title="Review">
              <ListItem
                title="Assessment"
                disabled
              />
              <ListItem
                title="Zoning"
                disabled
              />
              <ListItem
                title="Demographics"
                disabled
              />
              <ListItem
                title="Maps"
                disabled
              />
              <ListItem
                title="Report"
                disabled
              />
              <ListItem
                title="Export"
                disabled
              />
            </ListSection>
          </List>
        )}
    </React.Fragment>
  );
}
MockWorkflow.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  title: PropTypes.string,
};
MockWorkflow.defaultProps = {
  data: null,
  title: null,
};

function MockTable() {
  const tableHeaders = [
    { id: "checkbox", label: <Grid columns="auto 1fr"><Checkbox label="Select All" /></Grid> },
    { id: "Name", label: "Name", sortable: true },
    { id: "Address", label: "Address", sortable: false },
    { id: "City", label: "City", sortable: false },
    { id: "State", label: "State", sortable: false },
    { id: "Zip", label: "Zip", sortable: false },
    { id: "Property_Type", label: "Property Type", sortable: false },
    { id: "GBA", label: "GBA", sortable: false },
    { id: "Rentable_Area", label: "Rentable Area", sortable: false },
    { id: "Units", label: "Units", sortable: false },
    { id: "Year_Built", label: "Year Built", sortable: false },
    { id: "Land_SF", label: "Land(sf)", sortable: false },
    { id: "Acres", label: "Acres", sortable: false },
    { id: "actions", label: "Actions" },
  ];

  const tableData = [
    {
      Name: <Link text="477 Madison Avenue" />,
      Address: "477 Madison Avenue",
      City: "New York",
      State: "NY",
      Zip: "10022",
      Property_Type: "Office",
      GBA: "262,287",
      Rentable_Area: "262,287",
      Units: "68",
      Year_Built: "1987",
      Land_SF: "2938",
      Acres: "2",
    },
    {
      Name: <Link text="23 E. 21 St." />,
      Address: "23 E. 21St. #2",
      City: "New York",
      State: "NY",
      Zip: "10010",
      Property_Type: "Office",
      GBA: "3,230",
      Rentable_Area: "--",
      Units: "2",
      Year_Built: "1999",
      Land_SF: "78",
      Acres: "0.5",
    },
    {
      Name: <Link text="11 W. 20 St." />,
      Address: "11 W 20 St. #4R",
      City: "New York",
      State: "NY",
      Zip: "10011",
      Property_Type: "Office",
      GBA: "2,650",
      Rentable_Area: "--",
      Units: "2",
      Year_Built: "1999",
      Land_SF: "78",
      Acres: "0.5",
    },
  ];

  const iconNames = [
    {
      icon: "edit",
      onClick: true,
      // icon: "check",
      // variant: "success",
    },
    {
      icon: "delete",
      onClick: true,
      // icon: "close",
      // variant: "alert",
    },
    {
      icon: "options",
      onClick: true,
    },
  ];
  const [highlightedCell, setHighlightCell] = useState(null);
  const [selectedCell, setSelectedCell] = useState(null);
  for (let i = 0; i < tableData.length; i++) {
    tableData[i].checkbox = React.createElement(
      Checkbox,
      {
        label: "Select",
      },
      null,
    );
  }
  for (let i = 0; i < tableData.length; i++) {
    tableData[i].actions = React.createElement(
      IconBlock,
      {
        data: iconNames,
      },
      null,
    );
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
    <React.Fragment>
      <Card>
        <CardSection padding="0">
          <Bar
            contentAlign="center"
            left={{
              content: <Title size="" text="Results | 3" weight="bold" />,
              align: "left",
            }}
            right={{
              content: (
                <IconBlock>
                  <Icon icon="share" onClick />
                  <Icon icon="delete" onClick />
                  <Menu
                    data={[
                      { id: "a", label: "Action" },
                      { id: "b", label: "Action" },
                      { id: "c", label: "Action" },
                    ]}
                    position="bottomLeft"
                    onClick
                  />
                </IconBlock>
              ),
              width: "10rem",
            }}
          />
        </CardSection>
      </Card>
      <Table
        id="MockTable"
        headers={tableHeaders}
        rows={tableData}
        listId="Data Table"
        onCellClick={onCellClick}
        onHeaderClick={onHeaderClick}
        onCellMouseOver={onCellMouseOver}
        highlightedCell={highlightedCell}
        selectedCell={selectedCell}
        columnWidth={180}
      />
    </React.Fragment>
  );
}
MockTable.propTypes = {
  // stuff
};
MockTable.defaultProps = {
  // stuff
};

function MockData() {
  return (
    <Template>
      <FieldGroup id="General Information" title="General Information">
        <Field
          id="Property Name"
          label="Property Name"
          value="22902 Trabuco Rd"
        />
        <Field
          id="Property Type"
          label="Property Type"
          value="Shopping Center"
        />
        <Field
          id="Lat / Long"
          label="Lat / Long"
          value="33.629211 / -117.663988"
        />
        <Field
          id="Street Address"
          label="Street Address"
          value="22902 Trabuco Road"
        />
        <Field
          id="City, State Zip"
          label="City, State Zip"
          value="Mission Viejo, CA 92691"
        />
        <Field
          id="Census Tract"
          label="Census Tract"
          value=""
        />
        <Field
          id="Census Block"
          label="Census Block"
          value=""
        />
        <Field
          id="County"
          label="County"
          value="Orange"
        />
        <Field
          id="CBSA"
          label="CBSA"
          value="Los Angeles-Long Beach-Anaheim"
        />
      </FieldGroup>
      <FieldGroup id="Site Characteristics" title="Site Characteristics">
        <Field
          id="Land SF"
          label="Land SF"
          value="171,143"
        />
        <Field
          id="Acres"
          label="Acres"
          value="3.93000"
        />
        <Field
          id="Land Use"
          label="Land Use"
          value="Shopping Center"
        />
        <Field
          id="Street Address"
          label="Street Address"
          value="22902 Trabuco Road"
        />
      </FieldGroup>
    </Template>
  );
}
MockData.propTypes = {
  // stuff
};
MockData.defaultProps = {
  // stuff
};

function MockCardGrid() {
  return (
    <CardGrid>
      <Card id="MockCard_1" />
      <Card id="MockCard_2" />
      <Card id="MockCard_3" />
      <Card id="MockCard_4" />
      <Card id="MockCard_5" />
    </CardGrid>
  );
}
MockCardGrid.propTypes = {
  // stuff
};
MockCardGrid.defaultProps = {
  // stuff
};

function MockForm() {
  const shortBoxes = [
    {
      id: "box-1",
      label: "Label 1",
    },
    {
      id: "box-2",
      label: "Label 2 (disabled)",
      disabled: true,
    },
    {
      id: "box-3",
      label: "Label 3",
    },
    {
      id: "box-4",
      label: "Label 4",
    },
  ];
  const longBoxes = [
    {
      id: "box_long",
      label:
        "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself.",
    },
    {
      id: "box_long2",
      label:
        "Enough with these long labels already...put it on your blog, Shakespeare.",
    },
  ];
  const shortRadios = [
    {
      id: "radio-1",
      name: "radio-group",
      value: "1",
      label: "Label 1",
    },
    {
      id: "radio-2",
      name: "radio-group",
      value: "2",
      label: "Label 2 (disabled)",
      disabled: true,
    },
    {
      id: "radio-3",
      name: "radio-group",
      value: "3",
      label: "Label 3",
    },
    {
      id: "radio-4",
      name: "radio-group",
      value: "4",
      label: "Label 4",
    },
  ];
  const longRadios = [
    {
      id: "radio_long",
      name: "radio-group",
      value: "5",
      label:
        "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself.",
    },
    {
      id: "radio_long2",
      name: "radio-group",
      value: "6",
      label:
        "Enough with these long labels already...put it on your blog, Shakespeare.",
    },
  ];
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "pistachio", label: "Pistachio" },
    { value: "mint chocolate chip", label: "Mint Chocolate Chip" },
    { value: "cookie dough", label: "Cookie Dough" },
  ];
  return (
    <Form
      id="Form"
      title="Form Header"
      subtitle="This is the subtitle"
      description="Just think about these things in your mind - then bring them into your world. Isn't that fantastic?  All you need to paint is a few tools, a little instruction, and a vision in your mind."
    >
      <FormSection title="Group 1">
        <TextInput
          id="firstName"
          label="First Name"
          placeholder="John"
          helpText="The one that your parents gave you"
        />
        <TextInput
          id="lastName"
          label="Last Name"
          placeholder="Williams"
          helpText="The one that comes after.."
        />
      </FormSection>
      <FormSection title="Group 2">
        <CheckboxGroup
          id="Section Name"
          label="Checkbox Group Label"
          data={shortBoxes}
          helpText="Hang in there, buddy, I'm here to help!"
          columns="2"
        />
        <CheckboxGroup data={longBoxes} columns="1" />
        <SelectMenu
          multiSelect
          label="Multi-Select"
          placeholder="Choose One Or More..."
          helpText="Help text for the SelectMenu component"
          options={options}
        />
      </FormSection>
      <FormSection title="Group 3">
        <RadioGroup
          id="Section Name"
          label="Radio Group Label"
          data={shortRadios}
          helpText="Hang in there, buddy, I'm here to help!"
          columns="2"
        />
        <RadioGroup data={longRadios} columns="1" />
      </FormSection>
    </Form>
  );
}
MockForm.propTypes = {
  // stuff
};
MockForm.defaultProps = {
  // stuff
};

function MockDetails({
  image, title, data, footer,
}) {
  return (
    <Template>
      <Image src={image || StaticMap} width="100%" />
      {data ? <FieldGroup id={title} title={title} data={data} />
        : (
          <FieldGroup id="Physical Characteristics" title={title || "Physical Characteristics"}>
            <Field
              id="No. of Buildings"
              label="No. of Buildings"
              value="3"
            />
            <Field
              id="GBA"
              label="GBA"
              value="25,344"
            />
            <Field
              id="No. of Stories"
              label="No. of Stories"
              value="1"
            />
            <Field
              id="No. of Units"
              label="No. of Units"
              value="4"
            />
            <Field
              id="Year Built"
              label="Year Built"
              value="1978"
            />
          </FieldGroup>
        )}
      {footer}
    </Template>
  );
}
MockDetails.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
};
MockDetails.defaultProps = {
  data: null,
  footer: null,
  image: null,
  title: null,
};

function MockTabs({ data }) {
  const [activeSingleTab, setActiveSingleTab] = useState("tab1");
  const tabButtons = [
    {
      id: "Tab 1",
      label: "Overview",
      isSelected: activeSingleTab === "tab1",
      onClick: () => { setActiveSingleTab("tab1"); },
    },
    {
      id: "Tab 2",
      label: "Zoning",
      isSelected: activeSingleTab === "tab2",
      onClick: () => { setActiveSingleTab("tab2"); },
    },
    {
      id: "Tab 3",
      label: "Transactions",
      isSelected: activeSingleTab === "tab3",
      onClick: () => { setActiveSingleTab("tab3"); },
    },
    {
      id: "Tab 4",
      label: "Assessment & Tax",
      isSelected: activeSingleTab === "tab4",
      onClick: () => { setActiveSingleTab("tab4"); },
    },
    {
      id: "Tab 5",
      label: "Tenants",
      isSelected: activeSingleTab === "tab5",
      onClick: () => { setActiveSingleTab("tab5"); },
    },
  ];
  return (
    <Tabs data={data || tabButtons} />
  );
}
MockTabs.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
MockTabs.defaultProps = {
  data: null,
};

function MockButtons() {
  return (
    <ButtonGroup columns="5">
      <Button label="Button" />
      <Button label="Button" />
      <Button label="Button" />
      <Button label="Button" />
      <Button label="Button" />
    </ButtonGroup>
  );
}
MockButtons.propTypes = {
  // stuff
};
MockButtons.defaultProps = {
  // stuff
};

export {
  MockButtons,
  MockCardGrid,
  MockData,
  MockDetails,
  MockFooter,
  MockForm,
  MockHeader,
  MockHeaderGlobal,
  MockPalette,
  MockMenu,
  MockTable,
  MockTabs,
  MockWorkflow,
};
