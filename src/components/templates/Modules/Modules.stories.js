/* eslint-disable linebreak-style */
/* eslint-disable complexity */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { FullScreen } from "helpers/Display";
import Panel from "layout/Panel";
import { Title, Link } from "base/Typography";
import Button, { ButtonGroup } from "atoms/Button";
import Bar from "layout/Bar";
import Card, { CardSection, CardGrid } from "elements/Card";
import Layout from "layout/Layout";
import Menu from "blocks/Menu";
import Page, { PageSection } from "layout/Page";
import Tabs from "blocks/Tabs";
import Form, { FormSection } from "layout/Form";
import TextInput from "atoms/TextInput";
import { CheckboxGroup } from "atoms/Checkbox";
import { RadioGroup } from "atoms/Radio";
import SelectMenu from "atoms/SelectMenu";
import Legend from "blocks/Legend";

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

function doNothing() {
  // do nothing
}

storiesOf("Templates|Panels/", module)
  .addDecorator(FullScreen)
  .addDecorator(checkA11y)
  .add(
    "View/Edit Record",
    () => {
      return React.createElement(() => {
        const [menu2, setMenu2] = useState("right");
        const showMenu1 = () => {
          setMenu2("right");
        };
        const showMenu2 = () => {
          if (menu2 === "right") {
            setMenu2(null);
          } else {
            setMenu2("right");
          }
        };

        const recordData = [
          {
            id: "1",
            title: "Record 1",
            description: "Record Description Goes Here",
            commands: [
              {
                id: "View 1",
                label: "View/Edit",
              },
            ],
            // children: (
            //   <Bar
            //     contentAlign="center"
            //     left={{
            //       content: (
            //         <Title text="Record 1" size="lg" weight="bold" />
            //       ),
            //     }}
            //     right={{
            //       content: (
            //         <Command icon="right" label="View/Edit" align="right" />
            //       ),
            //     }}
            //   />
            // ),
            onClick: showMenu2,
          },
          {
            id: "2",
            title: "Record 2",
            description: "Record Description Goes Here",
            commands: [
              {
                id: "View 2",
                label: "View/Edit",
              },
            ],
            // children: (
            //   <Bar
            //     contentAlign="center"
            //     left={{
            //       content: (
            //         <Title text="Record 2" size="lg" weight="bold" />
            //       ),
            //     }}
            //     right={{
            //       content: (
            //         <Command icon="right" label="View/Edit" align="right" />
            //       ),
            //     }}
            //   />
            // ),
            onClick: showMenu2,
          },
        ];

        const recordList = (
          <CardGrid data={recordData} />
        );

        const recordDetails = (
          <Form>
            <FormSection title="">
              <TextInput
                id="firstName"
                label="Text Input"
                value="I'm the info that came with the app..."
                helpText="The one that your parents gave you"
              />
              <TextInput
                id="lastName"
                label="Text Input"
                value="I don't like myself, please change me."
                helpText="The one that comes after.."
              />
              <TextInput
                id="lastName"
                label="Text Area"
                value="I'm pretty much a run-on sentence because someone didn't think that I was worth bringing in a copywriter for..."
                helpText="The one that comes after.."
                type="textarea"
              />
            </FormSection>
            <FormSection title="">
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
            <FormSection title="">
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

        const attachments = [
          { label: <Link text="Document 1" />, value: "01/10/2019" },
          { label: <Link text="Document 2" />, value: "02/22/2019" },
          { label: <Link text="Document 3" />, value: "04/15/2019" },
        ];

        const recordAttachments = (
          <Page>
            <PageSection>
              <Legend id="AttachDocs_Legend" title="Attached Documents" data={attachments} />
            </PageSection>
          </Page>
        );

        //
        const [recordSection, setRecordSection] = useState(recordList);
        const showModuleA = () => { setRecordSection(recordList); };
        const showModuleB = () => { setRecordSection(recordAttachments); };

        const [footerSection, setFooterSection] = useState(false);
        const toggleFooter = () => { setFooterSection(!footerSection); };

        const [activeSingleTab, setActiveSingleTab] = useState("tab1");
        const tabButtons = [
          {
            id: "Records",
            label: "Records",
            count: "2",
            isSelected: activeSingleTab === "tab1",
            onClick: () => { setActiveSingleTab("tab1"); showModuleA(); toggleFooter(); },
          },
          {
            id: "Attachments",
            label: "Attachments",
            count: "3",
            isSelected: activeSingleTab === "tab2",
            onClick: () => { setActiveSingleTab("tab2"); showModuleB(); toggleFooter(); },
          },
        ];

        return (
          <Layout
            main={{
              content: (
                <React.Fragment>
                  <Panel
                    id="Menu 1"
                    header={
                      <React.Fragment>
                        <Bar
                          contentAlign="center"
                          padding="2x"
                          left={{
                            content: (
                              <Title text="[Category] Information" weight="bold" />
                            ),
                          }}
                          right={{
                            content: (
                              <Menu
                                id="Menu_1_Actions"
                                data={[
                                  { id: "a", label: "Action" },
                                  { id: "c", label: "Action" },
                                  { id: "b", label: "Action" },
                                ]}
                                position="bottomLeft"
                              />
                            ),
                            width: "min-content",
                          }}
                        />
                        <Tabs data={tabButtons} />
                      </React.Fragment>
                    }
                    footer={
                      footerSection ?
                        <Card id="Menu_1_Footer">
                          <CardSection>
                            <ButtonGroup columns="1">
                              <Button label="Add Files" isSolid />
                            </ButtonGroup>
                          </CardSection>
                        </Card>
                        : ""
                    }
                  >
                    {recordSection}
                  </Panel>
                  <Panel
                    id="Menu 2"
                    offcanvas={menu2}
                    header={
                      <Card
                        id="Menu_2_Header"
                        title="Record 1"
                        description="Record Description Goes Here"
                      />
                    }
                    footer={
                      <Card id="Menu_2_Footer">
                        <CardSection>
                          <ButtonGroup columns="2">
                            <Button label="Cancel" onClick={showMenu1} />
                            <Button label="Update" variant="success" isSolid onClick={showMenu1} />
                          </ButtonGroup>
                        </CardSection>
                      </Card>
                    }
                  >
                    {recordDetails}
                  </Panel>
                </React.Fragment>
              ),
            }}
          />
        );
      });
    },
  );
