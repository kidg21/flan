/* eslint-disable linebreak-style */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Text, { Title, Link } from "base/Typography";
import Icon from "atoms/Icon";
import Image from "atoms/Image";
import IconBlock from "blocks/IconBlock";
import ProgressIndicator from "elements/ProgressIndicator";
import Divider from "atoms/Divider";
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
    <Picker id="standard" label="Color Palette" columns="3">
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
          <Grid columns="max-content 1fr" align="center">
            <Button
              icon="menu"
              variant="neutral"
              isRound
              isPlain
              onClick={menuClick}
            />
            <Image src={LightBoxLogo} alt="Lightbox Logo" width="8vw" onClick={doNothing} />
          </Grid>
        ),
        width: "12%",
      }}
      center={{
        content: (
          <ButtonGroup columns="4">
            <Button label="JOBS PORTAL" isPlain variant="neutral" />
            <Button label="RESEARCH" isPlain />
            <Button label="BI" isPlain variant="neutral" />
            <Button label="REPORT WRITING" isPlain variant="neutral" />
          </ButtonGroup>
        ),
        align: "left",
        width: "fit-content",
      }}
      right={{
        content: (
          <Grid columns="max-content max-content" gap="4xl" align="center">
            <Button icon="help_circle"  variant="neutral" isRound isPlain onClick={doNothing} />
            <Avatar label="AB" size="sm" variant="neutral" onClick={doNothing} />
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

function MockHeader({ percentage }) {
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
      <CardSection variant="light" padding="0">
        <Bar
          contentAlign="center"
          padding="2x"
          left={{
            content: (
              <Grid columns="1" gap="xs">
            <Text text="Project" size="sm"/>
            <Title weight="bold" size="lg" text="22902 Trabuco Road, Mission Viejo, CA 92691 • Shopping Center • 1402-20-12345" weight="bold" /></Grid>),
            align: "left",
          }}
          right={{
            content: <ProgressIndicator percentage={percentage}/>,
            width: "fit-content",
            align: "left",
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
      {data ? <List title={title} isInteractive isLight data={data} />
        : (
          <List title={title} isInteractive>
            <ListItem
              title="Overview"
              isSelected
            />
            <ListItem
              title="Define Site"
              post={{
                type: "icon", icon: "check", variant: "success",
              }}
            />
            <Divider/>
            <ListSection >
              <ListItem
                title="Assessment"
                disabled
              />
              <ListItem
                title="Transactions"
                disabled
              />
              <ListItem
                title="Zoning"
                disabled
              />
              <ListItem
                title="Maps"
                disabled
              />
              <ListItem
                title="Review"
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
                  <Icon icon="share" />
                  <Icon icon="delete" />
                  <Menu
                    data={[
                      { id: "a", label: "Action" },
                      { id: "b", label: "Action" },
                      { id: "c", label: "Action" },
                    ]}
                    position="bottomLeft"
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
      <Card id="MockCard_6" />
      <Card id="MockCard_7" />
    </CardGrid>
  );
}
MockCardGrid.propTypes = {
  // stuff
};
MockCardGrid.defaultProps = {
  // stuff
};

function MockMapPalettes() {
  function doNothing() {
    // do nothing
  }
  return (
    <CardGrid columns="1" gap="2xl">
      <Card
        id="Map Legend"
        title="Map Legend"
        description="Palette for visual explanation of the symbols used on the map"
        commands={[
          {
            id: "Close Map Legend",
            label: "Close",
            onClick: doNothing,
          },
        ]}
      />
      <Card
        id="Data Layers"
        title="Data Layers"
        description="Palette for turning data layers 'on' and 'off'"
        commands={[
          {
            id: "Close Map Legend",
            label: "Close",
            onClick: doNothing,
          },
        ]}
      />
      <MockPalette id="Color Palette" />
      <Card
        id="Drawing Tools"
        title="Drawing Tools"
        description="Palette for selecting a tool for drawing on the map"
        commands={[
          {
            id: "Close Map Legend",
            label: "Close",
            onClick: doNothing,
          },
        ]}
      />
    </CardGrid>
  );
}
MockMapPalettes.propTypes = {
  // stuff
};
MockMapPalettes.defaultProps = {
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
      <Image src={image || StaticMap} width="100%" alt="mockImage" />
      {data ? <FieldGroup id={title} title={title} data={data} />
        : (
          <FieldGroup id="Physical Characteristics" >
            <Field
              id="No. of Buildings"
              label="Project Owner"
              value="Steve Davidson"
            />
            <Field
              id="GBA"
              label="Project Due"
              value="06/25/2020"
            />
            <Field
              id="No. of Stories"
              label="Project Status"
              value="Open"
            />
            <Field
              id="No. of Units"
              label="Project Created"
              value="6/14/2020 8:00 am PT"
            />
            <Field
              id="Year Built"
              label="Project Edited"
              value="6/16/2020 12:15 pm PT"
            />
            <Field
              id="Year Built"
              label="Project Edited"
              value={<Link text="1804"/>}
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
    <Bar left={
    <Tabs data={data || tabButtons} />}/>
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
  MockMapPalettes,
  MockMenu,
  MockTable,
  MockTabs,
  MockWorkflow,
};
