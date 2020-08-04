/* eslint-disable linebreak-style */
/* eslint-disable complexity */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { FullScreen, Padding } from "helpers/Display";
import Panel from "layout/Panel";
import Avatar from "atoms/Avatar";
import Text, { Title, Link } from "base/Typography";
import Button, { ButtonGroup } from "atoms/Button";
import Accordion from "atoms/Accordion";
import Icon from "atoms/Icon";
import Divider from "atoms/Divider";
import Bar from "layout/Bar";
import Image from "atoms/Image";
import Command from "atoms/Command";
import Popper from "layout/Popper";
import Grid from "layout/Grid";
import Card, { CardSection, CardGrid } from "elements/Card";
import Layout from "layout/Layout";
import Menu from "blocks/Menu";
import DialogBox from "elements/DialogBox";
import Template from "layout/Template";
import Field from "atoms/Field";
import InputBlock from "blocks/InputBlock";
import Tabs from "blocks/Tabs";
import Form, { FormSection } from "layout/Form";
import Image from "atoms/Image";
import TextInput from "atoms/TextInput";
import Checkbox, { CheckboxGroup } from "atoms/Checkbox";
import { RadioGroup } from "atoms/Radio";
import SelectMenu from "atoms/SelectMenu";
import Legend from "blocks/Legend";
import MapStreets from "images/maps/map-streets.png";
import MapSatellite from "images/maps/map-satellite.jpg";
import MapHybrid from "images/maps/map-hybrid.jpg";
import {
  MockMapPalettes,
} from "helpers/Mocks";

const mapOptions = [
  { label: <Icon icon="star_solid" />, value: "Value 0" },
  { label: <Icon icon="star_solid" />, value: "Value 1" },
  { label: <Icon icon="star_solid" />, value: "Value 2" },
  { label: <Icon icon="star_solid" />, value: "Value 3" },
  { label: <Icon icon="star_solid" />, value: "Value 4" },
  { label: <Icon icon="star_solid" />, value: "Value 5" },
];

const inputsOne = [
  {
    id: "ID 1",
    name: "ID 100",
    type: "text",
    placeholder: "Price",
    pattern: "[A-Za-z]{3}",
  },
];
const domains = [
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "AU", label: "AU" },
];

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

const tabRFPButtons = [
  {
    id: "RFPs",
    label: "RFP Details",
    isSelected: true,
  },
  {
    id: "Bid",
    label: "Bid Details",
  },
  {
    id: "Complete",
    label: "Completion",
  },
];

const tabRFPButtonsTwo = [
  {
    id: "RFPs",
    label: "RFP Details",
  },
  {
    id: "Bid",
    label: "Bid Details",
    isSelected: true,
  },
  {
    id: "Complete",
    label: "Completion",
  },
];

const tabRFPButtonsFour = [
  {
    id: "RFPs",
    label: "RFP Details",
  },
  {
    id: "Bid",
    label: "Bid Details",

  },
  {
    id: "Complete",
    label: "Completion",
    isSelected: true,
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

storiesOf("Templates/Modules/Maps", module)
  .addDecorator(FullScreen)
  .addDecorator(checkA11y)
  .add("Map Tools", () => {
    return (
      <React.Fragment>
        <Template
          id="Template Regions"
          // template="B_05"
          template="C_04"
          isOverlay
          A={{
            id: "A",
            content: (
              // Set the 'columns' value to the # of Buttons
              <ButtonGroup columns="1">
                <Button label="Layers" icon="layers" alignCenter />
                <Button label="Map" icon="map" alignCenter />
                <Button label="Draw" icon="draw" alignCenter />
                <Button label="List" icon="list" alignCenter />
                <Button label="Legend" icon="legend" alignCenter />
              </ButtonGroup>
            ),
          }}
          B={{
            id: "B",
            content: <MockMapPalettes />,
          }}
          C={{
            id: "C",
            content: (
              // Set the 'columns' value to the # of Buttons
              <CardGrid columns="3">
                <Card shadow="2x">
                  <Image src={MapStreets} width="75" onClick={() => { }} />
                </Card>
                <Card shadow="2x">
                  <Image src={MapSatellite} width="75" onClick={() => { }} />
                </Card>
                <Card shadow="2x">
                  <Image src={MapHybrid} width="75" onClick={() => { }} />
                </Card>
              </CardGrid>
            ),
          }}
        />
        <Mapbox />
      </React.Fragment>
    );
  });

storiesOf("Templates/Modules/Panels", module)
  .addDecorator(FullScreen)
  .addDecorator(checkA11y)
  .add("Layers Panel", () => {
    return (
      <Panel
        header={(
          <Bar
            contentAlign="center"
            padding="2x"
            left={{
              content: (
                <Title text="Layers Panel" weight="bold" />
              ),
            }}
            right={{
              content: (
                <Menu
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
        )}
      >
        <Accordion
          open
          header={(
            <Checkbox
              label="Layer One"
              id="checkbox-id"
            />
          )}
        >
          <Card><Legend data={mapOptions} /></Card>
        </Accordion>
        <Accordion
          header={(
            <Checkbox
              label="Layer Two"
              id="checkbox-id"
            />
          )}
        >
          <Card><Legend data={mapOptions} /></Card>
        </Accordion>
        <Accordion
          header={(
            <Checkbox
              label="Layer Three"
              id="checkbox-id"
            />
          )}
        >
          <Card><Legend data={mapOptions} /></Card>
        </Accordion>
        <Accordion
          header={(
            <Checkbox
              label="Layer Four"
              id="checkbox-id"
            />
          )}
        >
          <Card><Legend data={mapOptions} /></Card>
        </Accordion>
      </Panel>
    );
  })
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
          <Template>
            <Legend id="AttachDocs_Legend" title="Attached Documents" data={attachments} />
          </Template>
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
                    header={(
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
                    )}
                    footer={
                      footerSection
                        ? (
                          <Card id="Menu_1_Footer">
                            <CardSection>
                              <ButtonGroup columns="1">
                                <Button label="Add Files" isSolid />
                              </ButtonGroup>
                            </CardSection>
                          </Card>
                        )
                        : ""
                    }
                  >
                    {recordSection}
                  </Panel>
                  <Panel
                    id="Menu 2"
                    offcanvas={menu2}
                    header={(
                      <Card
                        id="Menu_2_Header"
                        title="Record 1"
                        description="Record Description Goes Here"
                      />
                    )}
                    footer={(
                      <Card id="Menu_2_Footer">
                        <CardSection>
                          <ButtonGroup columns="2">
                            <Button label="Cancel" onClick={showMenu1} />
                            <Button label="Update" variant="success" isSolid onClick={showMenu1} />
                          </ButtonGroup>
                        </CardSection>
                      </Card>
                    )}
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

storiesOf("Templates/Modules/Create", module)
  .addDecorator(Padding)
  .addDecorator(checkA11y)
  .add("Create Job", () => {
    return (
      <DialogBox
        title="Create Job"
        buttons={[
          {
            id: "Cangel",
            label: "Cancel",
          },
          {
            id: "Create",
            label: "Create",
          },
        ]}
      >

        <Form>
          <FormSection>
            <TextInput

              label="Job Number"
              value="19-12341234"
            />
            <TextInput

              label="Job Name"
              placeholder="New LightBox Job"
            />
          </FormSection>

          <Divider />
          <FormSection columns="2" title="Property Info">

            <TextInput

              label="Address"
            />
            <TextInput

              label="City"
            />
            <SelectMenu
              label="State"
              placeholder=""
            />
            <TextInput

              label="Zip"
            />
            <SelectMenu

              label="Property Type"
            />
            <SelectMenu

              label="Property Sub-Type"
            />

          </FormSection>
        </Form>
      </DialogBox>
    );
  })
  .add("After Job", () => {
    return (
      <DialogBox
        buttons={[
          {
            id: "Done",
            label: "Done",
          },
          {
            id: "Create",
            label: "Create Another",
          },
        ]}
      >
        <Bar
          padding="2x"
          center={(
            <Grid columns="1">
              <Title size="2xl" text="Job Successfully Created!" />
              <Text text="You can choose to begin work on your job or create another job" />
            </Grid>
          )}
        />
        <Bar center={<Button label="View Job" variant="success" />} />
        <Divider />

        <Bar
          contentAlign="bottom"
          padding="2x"
          left={(
            <Grid columns="1">
              <Text size="lg" text="Add the following data and services to your job:" />
              <Title weight="bold" text="Add Research" />
              <Text text="Complete research for your job. Define and discover data for your property including Assessment Data, Demographics, and Zoning." />
            </Grid>
          )}
          right={<Button label="Start Research" />}
        />
        <Bar
          padding="2x"
          contentAlign="bottom"
          left={(
            <Grid columns="1">
              <Title weight="bold" text="Add Report Writing" />
              <Text text="You can use Project360 or Narrative1 to author your reports. You can select your scope of work and templates here with the Report Writing tools." />
            </Grid>
          )}
          right={<Button label="Start Report" />}
        />
        <Divider />

      </DialogBox>
    );
  })
  .add("Create RFP", () => {
    return (
      <DialogBox
        title="Create RFP"
        buttons={[
          {
            id: "Cancel",
            label: "Cancel",
          },
          {
            id: "Next",
            label: "Next",
          },
        ]}
      >
        <Tabs data={tabRFPButtons} />
        <Form>
          <FormSection>
            <TextInput

              label="RFP Number"
              value="19-12341234"
            />
            <TextInput

              label="RFP Name"
              placeholder="New LightBox Project"
            />
          </FormSection>

          <Divider />
          <FormSection columns="2" title="Property Info">
            <TextInput

              label="Address"
            />
            <TextInput

              label="City"
            />

            <SelectMenu
              label="State"
              placeholder=""
            />
            <TextInput

              label="Zip"
            />
            <SelectMenu

              label="Property Type"
            />
            <SelectMenu

              label="Property Sub-Type"
            />

          </FormSection>
        </Form>

      </DialogBox>
    );
  })
  .add("Create RFP Client", () => {
    return (
      <DialogBox
        title="Create RFP"
        buttons={[
          {
            id: "Cancel",
            label: "Cancel",
          },
          {
            id: "Complete",
            label: "Complete",
          },
        ]}
      >
        <Tabs data={tabRFPButtonsTwo} />
        <Form>
          <Grid columns="2">
            <div>
              <FormSection title="Client Details">
                <TextInput

                  label="Client Name"
                  value=""
                />
                <TextInput

                  label="Client Company"
                  placeholder=""
                />
                <TextInput

                  label="Address"
                />
                <TextInput

                  label="City"
                />
              </FormSection>
              <FormSection columns="2">
                <SelectMenu
                  label="State"
                  placeholder=""
                  options={[{
                    value: "Alabama",
                    label: "Alabama",
                  }, {
                    value: "Alaska",
                    label: "Alaska",
                  }, {
                    value: "Arizona",
                    label: "Arizona",
                  }, {
                    value: "Arkansas",
                    label: "Arkansas",
                  }, {
                    value: "California",
                    label: "California",
                  }, {
                    value: "Colorado",
                    label: "Colorado",
                  }, {
                    value: "Connecticut",
                    label: "Connecticut",
                  }, {
                    value: "Delaware",
                    label: "Delaware",
                  }, {
                    value: "Florida",
                    label: "Florida",
                  }, {
                    value: "Georgia",
                    label: "Georgia",
                  }, {
                    value: "Hawaii",
                    label: "Hawaii",
                  }, {
                    value: "Idaho",
                    label: "Idaho",
                  },
                  ]}
                />
                <TextInput

                  label="Zip"
                />
              </FormSection>
            </div>
            <div>
              <FormSection title="Bid Details">
                <TextInput

                  label="Scope of Work"
                  value=""
                />
                <InputBlock
                  label="Bid Amount"
                  options={domains}
                  selectOptions={domains[0].value}
                  textInputs={inputsOne}
                />
                <TextInput
                  label="Turnaround Time"
                />
                <TextInput
                  type="date"
                  label="Expected Delivery Date"
                />
                <TextInput type="textarea" label="Additional Notes" />
              </FormSection>
            </div>
          </Grid>
        </Form>
      </DialogBox>
    );
  })
  .add("After RFP", () => {
    return (
      <DialogBox
        title="Create RFP"
        buttons={[
          {
            id: "Done",
            label: "Done",
          },
          {
            id: "Create",
            label: "Create Another",
          },
        ]}
      >
        <Tabs data={tabRFPButtonsFour} />
        <Bar
          padding="2x"
          center={(
            <Grid columns="1">
              <Title size="2xl" text="RFP Successfully Created!" />
              <Text text="You can choose to begin work on your RFP or create another RFP" />
            </Grid>
          )}
        />
        <Bar center={<Button label="View RFP" variant="success" />} />

      </DialogBox>
    );
  })
  .add("Account Info", () => {
    return (
      <Popper
        visible
        isFlex
        position="bottomRight"
        anchor={<Avatar label="JD" variant="neutral" />}
      >
        <Card padding="2x">
          <Grid columns="1" gap="lg">
            <Bar
              padding="1x"
              center={{
                content: (
                  <Avatar label="JD" size="xl" />
                ),
              }}
            />
            <Bar
              padding="0"
              center={{
                content: (
                  <Grid columns="1" gap="xs">
                    <Title text="Jane Doe" size="lg" />
                    <Text text="janedoe@gmail.com" />
                    <Text text="Organization" />
                    <Text text="Job Title" />

                  </Grid>
                ),
              }}
            />
            <Bar
              padding="2x"
              center={<Command label="Manage my Profile" icon="edit"  />}
            />
            <Bar
              padding="2x"
              center={<Button label="Sign Out" icon="sign_out" isSolid />}
            />
          </Grid>
        </Card>
      </Popper>
    );
  });
