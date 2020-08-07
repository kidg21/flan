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
import Command from "atoms/Command";
import Template from "layout/Template";
import Tabs, { TabItem } from "blocks/Tabs";
import List, { ListItem } from "blocks/List";
import Grid from "layout/Grid";
import Form, { FormSection } from "layout/Form";
import Divider from "atoms/Divider";
import MapBox from "layout/Map";
import TextInput from "atoms/TextInput";
import Media from "atoms/Media";
import Field, { FieldGroup } from "atoms/Field";
import Text, { Title, Link } from "base/Typography";
import Card, { CardSection, CardGrid } from "elements/Card";
import Modal from "layout/Modal";
import ParcelMap from "images/maps/map-parcel.png";
import ReportTemp from "images/rural.jpg";
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

function doNothing() {
  // do nothing
}

// storiesOf("Templates|Applications/Appraisal/Project Details", module)
//   .addDecorator(FullScreen)
//   .add(
//     "Overview",
//     () => {
//       return React.createElement(() => {
//         const [leftOpen, setLeftOpen] = useState(true);
//         const toggleLeft = () => { setLeftOpen(!leftOpen); };

//         const menuDetails = [
//           {
//             id: "Overview",
//             title: "Overview",
//             isSelected: true,
//           },
//           {
//             id: "Define Site",
//             title: "Define Site",
//           },
//           {
//             id: "Assessment",
//             title: "Assessment",
//             disabled: true,
//           },
//           {
//             id: "Transactions",
//             title: "Transactions",
//             disabled: true,
//           },
//           {
//             id: "Zoning",
//             title: "Zoning",
//             disabled: true,
//           },
//           {
//             id: "Maps",
//             title: "Maps",
//             disabled: true,
//           },
//           {
//             id: "Review",
//             title: "Review",
//             disabled: true,
//           },
//           {
//             id: "Export",
//             title: "Export",
//             disabled: true,
//           },
//         ];

//         return (
//           <Layout
//             header={{
//               id: "Header",
//               content: <MockHeaderGlobal menuClick={toggleLeft} />,
//             }}
//             left={{
//               id: "Left",
//               content: <MockMenu />,
//               visible: leftOpen,
//             }}
//             main={{
//               id: "Main",
//               content: (
//                 <Panel
//                   padding="0"
//                   header={
//                     <MockHeader />
//                   }
//                 >
//                   <Template
//                     id="Overview"
//                     template="C_02"

//                     A={{
//                       id: "A",
//                       content: (
//                         <MockWorkflow
//                           title="Project Menu"
//                           data={menuDetails}
//                         />
//                       ),
//                     }}
//                     B={{
//                       id: "B",
//                       content: <MockTabs />,
//                     }}
//                     C={{
//                       id: "C",
//                       content: (
//                         <Template
//                           id="Details"
//                           template="B_01"
//                           A={{
//                             id: "A",
//                             content: <MockData />,
//                           }}
//                           B={{
//                             id: "B",
//                             content: (
//                               <MockDetails
//                                 footer={<Button label="View on Map" fullWidth />}
//                               />
//                             ),
//                           }}
//                         />
//                       ),
//                     }}
//                   />
//                 </Panel>
//               ),
//             }}
//           />
//         );
//       });
//     },
//   );

storiesOf("Templates|Applications/Research", module)
  .addDecorator(FullScreen)
  .add(
    "Overview",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={
                    <MockHeader percentage="0" />
                  }
                >
                  <Template
                    id="Assessment"

                    template="B_02"
                    A={{
                      id: "A",
                      content: (
                        <List title="Project Menu" isInteractive isLight>
                          <ListItem title="Overview" isSelected />
                          <ListItem title="Define Site" />
                          <Divider />
                          <ListItem title="Assessment" disabled />
                          <ListItem title="Transactions" disabled />
                          <ListItem title="Zoning" disabled />
                          <ListItem title="Maps" disabled />
                          <ListItem title="Review" disabled />
                          <ListItem title="Export" disabled />
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
                              <Panel padding="0" header={<Bar padding="2x" contentAlign="center" left={<Title size="xl" text="Project Overview" weight="bold" />} right={<Button icon="share_content" isRound isPlain />} />}>
                                <Template
                                  id="Details"
                                  template="B_01"

                                  A={{
                                    id: "A",
                                    content: (
                                      <Panel>
                                        <Bar center={(
                                          <Form>
                                            <FormSection>
                                              <Field align="edge" label="Project Name" value="22902 Trabuco Rd." />
                                              <Field align="edge" label="Job Number" value="1402-20-12345" />
                                              <Field align="edge" label="Property Type" value="Shopping Center" />
                                            </FormSection>
                                            <FormSection>
                                              <Field align="edge" label="Lat/Long" value="33.629211/-117.663988" />
                                            </FormSection>
                                            <FormSection>
                                              <Field align="edge" label="Street Address" value="22902 Trabuco Road" />
                                              <Field align="edge" label="City, State, Zip" value="Mission Viejo, CA 92691" />
                                            </FormSection>
                                            <Bar center={<Button label="Start Research" isSolid />} />
                                          </Form>
                                        )}
                                        />
                                      </Panel>),
                                  }}

                                  B={{
                                    id: "B",
                                    content: (<MockDetails />),
                                  }}
                                />
                              </Panel>)
                            ,
                          }}
                        />
                      ),
                    }}
                  />
                </Panel>
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Define Site",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={
                    <MockHeader percentage="0" />
                  }
                >
                  <Template
                    id="Define"
                    template="B_02"
                    A={{
                      id: "A",
                      content: (
                        <List title="Project Menu" isInteractive isLight>
                          <ListItem title="Overview" />
                          <ListItem title="Define Site" isSelected />
                          <Divider />
                          <ListItem title="Assessment" disabled />
                          <ListItem title="Transactions" disabled />
                          <ListItem title="Zoning" disabled />
                          <ListItem title="Maps" disabled />
                          <ListItem title="Review" disabled />
                          <ListItem title="Export" disabled />
                        </List>

                      ),
                    }}
                    B={{
                      id: "B",
                      content: (
                        <Template
                          id="Details"
                          template="B_06"
                          A={{
                            id: "A",
                            content: (
                              <Panel
                                padding="0"
                                footer={(
                                  <Bar
                                    padding="0"
                                    contentAlign="bottom"
                                    left={{
                                      content: (
                                        <Icon icon="database" size="xs" onClick={() => { }} />),
                                      width: "fit-content",
                                    }}
                                    center={{
                                      content: (<Text size="sm" text="Data Source: EASI, Last Updated: 01/01/2020" />),
                                      align: "left",
                                    }}
                                  />
                                )}
                              >
                                <Template
                                  template="E_01"
                                  isOverlay
                                  A={{
                                    id: "A",
                                    content: (
                                      <Card padding="1x">
                                        <Bar
                                          padding="0"

                                          contentAlign="center"
                                          left={{
                                            content: (
                                              <Text text=".  Select Parcels on Map to Define Site" />
                                            ),
                                            width: "fit-content",
                                          }}
                                          center={{
                                            content: (
                                              <ButtonGroup columns="5">
                                                <Button alignCenter variant="neutral" size="sm" isPlain icon="draw" label="Draw" />
                                                <Button alignCenter variant="neutral" size="sm" isPlain icon="layers" label="Layers" />
                                                <Button variant="neutral" alignCenter size="sm" isPlain icon="list" label="Legend" />
                                                <Button alignCenter variant="neutral" size="sm" isPlain icon="map" label="Map Type" />
                                                <Button label="Reset" icon="sync" alignCenter size="sm" isPlain variant="neutral" />
                                              </ButtonGroup>
                                            ),

                                          }}
                                        />
                                      </Card>
                                    ),
                                  }}
                                />
                                <MapBox map="satellite" />
                              </Panel>
                            ),
                          }}
                          B={{
                            id: "B",
                            content: (
                              <Panel
                                padding="0"
                                header={
                                  <Bar contentAlign="center" left={<Title size="xl" text="Site Parcels" />} right={<Button label="Show Related Parcels" />} />
                                }
                                footer={(
                                  <Bar right={{
                                    content: (<Button label="Define Site" isSolid />),
                                  }}
                                  />
                                )}
                              >
                                <Form>
                                  <Card
                                    padding="0"
                                    body={(
                                      <Grid columns="1" gap="sm">
                                        <Bar
                                          padding="0"
                                          alignContent="top"
                                          left={{
                                            content: (<Title text="Parcel APN: 93084203492" />),
                                          }}
                                          right={{
                                            content: (<Command label="View Details" />),
                                            width: "fit-content",
                                          }}
                                        />
                                        <Bar
                                          padding="0"
                                          contentAlign="bottom"
                                          left={{
                                            content: (
                                              <FieldGroup
                                                id="Group1"
                                                isDense
                                              >
                                                <Field
                                                  id="Field 1"
                                                  label="Address"
                                                  value="42 Wallaby Way, Sydney, Australia"
                                                />
                                                <Field
                                                  id="Field 1"
                                                  label="Owner"
                                                  value="Forrest Gump"
                                                />
                                                <Field
                                                  id="Field 3"
                                                  label="Last Sale"
                                                  value="10/23/86"
                                                />
                                                <Field
                                                  id="Field 3"
                                                  label="Doc #"
                                                  value="837489274927"
                                                />
                                              </FieldGroup>
                                            ),
                                            align: "left",
                                          }}
                                          right={{
                                            content: (
                                              <Button label="Remove" variant="alert" />
                                            ),
                                            width: "fit-content",
                                            align: "right",
                                          }}
                                        />
                                      </Grid>
                                    )}
                                  />

                                  <Card
                                    padding="0"
                                    body={(
                                      <Grid columns="1" gap="sm">
                                        <Bar
                                          padding="0"
                                          alignContent="top"
                                          left={{
                                            content: (<Title text="Parcel APN: 93084203492" />),
                                          }}
                                          right={{
                                            content: (<Command label="View Details" />),
                                            width: "fit-content",
                                          }}
                                        />
                                        <Bar
                                          padding="0"
                                          contentAlign="bottom"
                                          left={{
                                            content: (
                                              <FieldGroup
                                                id="Group1"
                                                isDense
                                              >
                                                <Field
                                                  id="Field 1"
                                                  label="Address"
                                                  value="42 Wallaby Way, Sydney, Australia"
                                                />
                                                <Field
                                                  id="Field 1"
                                                  label="Owner"
                                                  value="Forrest Gump"
                                                />
                                                <Field
                                                  id="Field 3"
                                                  label="Last Sale"
                                                  value="10/23/86"
                                                />
                                                <Field
                                                  id="Field 3"
                                                  label="Doc #"
                                                  value="837489274927"
                                                />
                                              </FieldGroup>
                                            ),
                                            align: "left",
                                          }}
                                          right={{
                                            content: (
                                              <Button label="Remove" variant="alert" />
                                            ),
                                            width: "fit-content",
                                            align: "right",
                                          }}
                                        />
                                      </Grid>
                                    )}
                                  />
                                  <Card
                                    padding="0"
                                    body={(
                                      <Grid columns="1" gap="sm">
                                        <Bar
                                          padding="0"
                                          alignContent="top"
                                          left={{
                                            content: (<Title text="Parcel APN: 93084203492" />),
                                          }}
                                          right={{
                                            content: (<Command label="View Details" />),
                                            width: "fit-content",
                                          }}
                                        />
                                        <Bar
                                          padding="0"
                                          contentAlign="bottom"
                                          left={{
                                            content: (
                                              <FieldGroup
                                                id="Group1"
                                                isDense
                                              >
                                                <Field
                                                  id="Field 1"
                                                  label="Address"
                                                  value="42 Wallaby Way, Sydney, Australia"
                                                />
                                                <Field
                                                  id="Field 1"
                                                  label="Owner"
                                                  value="Forrest Gump"
                                                />
                                                <Field
                                                  id="Field 3"
                                                  label="Last Sale"
                                                  value="10/23/86"
                                                />
                                                <Field
                                                  id="Field 3"
                                                  label="Doc #"
                                                  value="837489274927"
                                                />
                                              </FieldGroup>
                                            ),
                                            align: "left",
                                          }}
                                          right={{
                                            content: (
                                              <Button label="Remove" variant="alert" />
                                            ),
                                            width: "fit-content",
                                            align: "right",
                                          }}
                                        />
                                      </Grid>
                                    )}
                                  />
                                  <Card
                                    padding="0"
                                    body={(
                                      <Grid columns="1" gap="sm">
                                        <Bar
                                          padding="0"
                                          alignContent="top"
                                          left={{
                                            content: (<Title text="Parcel APN: 93084203492" />),
                                          }}
                                          right={{
                                            content: (<Command label="View Details" />),
                                            width: "fit-content",
                                          }}
                                        />
                                        <Bar
                                          padding="0"
                                          contentAlign="bottom"
                                          left={{
                                            content: (
                                              <FieldGroup
                                                id="Group1"
                                                isDense
                                              >
                                                <Field
                                                  id="Field 1"
                                                  label="Address"
                                                  value="42 Wallaby Way, Sydney, Australia"
                                                />
                                                <Field
                                                  id="Field 1"
                                                  label="Owner"
                                                  value="Forrest Gump"
                                                />
                                                <Field
                                                  id="Field 3"
                                                  label="Last Sale"
                                                  value="10/23/86"
                                                />
                                                <Field
                                                  id="Field 3"
                                                  label="Doc #"
                                                  value="837489274927"
                                                />
                                              </FieldGroup>
                                            ),
                                            align: "left",
                                          }}
                                          right={{
                                            content: (
                                              <Button label="Remove" variant="alert" />
                                            ),
                                            width: "fit-content",
                                            align: "right",
                                          }}
                                        />
                                      </Grid>
                                    )}
                                  />
                                  <Card
                                    padding="0"
                                    body={(
                                      <Grid columns="1" gap="sm">
                                        <Bar
                                          padding="0"
                                          alignContent="top"
                                          left={{
                                            content: (<Title text="Parcel APN: 93084203492" />),
                                          }}
                                          right={{
                                            content: (<Command label="View Details" />),
                                            width: "fit-content",
                                          }}
                                        />
                                        <Bar
                                          padding="0"
                                          contentAlign="bottom"
                                          left={{
                                            content: (
                                              <FieldGroup
                                                id="Group1"
                                                isDense
                                              >
                                                <Field
                                                  id="Field 1"
                                                  label="Address"
                                                  value="42 Wallaby Way, Sydney, Australia"
                                                />
                                                <Field
                                                  id="Field 1"
                                                  label="Owner"
                                                  value="Forrest Gump"
                                                />
                                                <Field
                                                  id="Field 3"
                                                  label="Last Sale"
                                                  value="10/23/86"
                                                />
                                                <Field
                                                  id="Field 3"
                                                  label="Doc #"
                                                  value="837489274927"
                                                />
                                              </FieldGroup>
                                            ),
                                            align: "left",
                                          }}
                                          right={{
                                            content: (
                                              <Button label="Remove" variant="alert" />
                                            ),
                                            width: "fit-content",
                                            align: "right",
                                          }}
                                        />
                                      </Grid>
                                    )}
                                  />
                                  <Card
                                    padding="0"
                                    body={(
                                      <Grid columns="1" gap="sm">
                                        <Bar
                                          padding="0"
                                          alignContent="top"
                                          left={{
                                            content: (<Title text="Parcel APN: 93084203492" />),
                                          }}
                                          right={{
                                            content: (<Command label="View Details" />),
                                            width: "fit-content",
                                          }}
                                        />
                                        <Bar
                                          padding="0"
                                          contentAlign="bottom"
                                          left={{
                                            content: (
                                              <FieldGroup
                                                id="Group1"
                                                isDense
                                              >
                                                <Field
                                                  id="Field 1"
                                                  label="Address"
                                                  value="42 Wallaby Way, Sydney, Australia"
                                                />
                                                <Field
                                                  id="Field 1"
                                                  label="Owner"
                                                  value="Forrest Gump"
                                                />
                                                <Field
                                                  id="Field 3"
                                                  label="Last Sale"
                                                  value="10/23/86"
                                                />
                                                <Field
                                                  id="Field 3"
                                                  label="Doc #"
                                                  value="837489274927"
                                                />
                                              </FieldGroup>
                                            ),
                                            align: "left",
                                          }}
                                          right={{
                                            content: (
                                              <Button label="Remove" variant="alert" />
                                            ),
                                            width: "fit-content",
                                            align: "right",
                                          }}
                                        />
                                      </Grid>
                                    )}
                                  />
                                  <Card
                                    padding="0"
                                    body={(
                                      <Grid columns="1" gap="sm">
                                        <Bar
                                          padding="0"
                                          alignContent="top"
                                          left={{
                                            content: (<Title text="Parcel APN: 93084203492" />),
                                          }}
                                          right={{
                                            content: (<Command label="View Details" />),
                                            width: "fit-content",
                                          }}
                                        />
                                        <Bar
                                          padding="0"
                                          contentAlign="bottom"
                                          left={{
                                            content: (
                                              <FieldGroup
                                                id="Group1"
                                                isDense
                                              >
                                                <Field
                                                  id="Field 1"
                                                  label="Address"
                                                  value="42 Wallaby Way, Sydney, Australia"
                                                />
                                                <Field
                                                  id="Field 1"
                                                  label="Owner"
                                                  value="Forrest Gump"
                                                />
                                                <Field
                                                  id="Field 3"
                                                  label="Last Sale"
                                                  value="10/23/86"
                                                />
                                                <Field
                                                  id="Field 3"
                                                  label="Doc #"
                                                  value="837489274927"
                                                />
                                              </FieldGroup>
                                            ),
                                            align: "left",
                                          }}
                                          right={{
                                            content: (
                                              <Button label="Remove" variant="alert" />
                                            ),
                                            width: "fit-content",
                                            align: "right",
                                          }}
                                        />
                                      </Grid>
                                    )}
                                  />

                                </Form>
                              </Panel>
                            ),
                          }}
                        />
                      ),
                    }}
                  />
                </Panel>
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Assessment",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        const [activeSingleTab, setActiveSingleTab] = useState("tab1");
        const tabsAssessment = [
          {
            id: "Parcel 1",
            label: "Parcel 1",
            isSelected: activeSingleTab === "tab1",
            onClick: () => { setActiveSingleTab("tab1"); },
          },
          {
            id: "Parcel 2",
            label: "Parcel 2",
            isSelected: activeSingleTab === "tab2",
            onClick: () => { setActiveSingleTab("tab2"); },
          },
        ];

        const fieldData = [
          {
            label: "Tax Authority Link",
            value: <Link size="lg" text="Orange County Tax Authority" />,
            onClick: () => { },
          },
          {
            label: "Site Land Assessment",
            value: "$7,216,214",
          },
          {
            label: "Site Assessment Improvement",
            value: "$4,829,284",
          },
          {
            label: "Site Other Assessment",
            value: "$0",
          },
          {
            label: "Site Total Assessment",
            value: "$12,045,498",
          },
          {
            label: "Site Total Assessment",
            value: "$121,926",
          },
        ];

        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={
                    <MockHeader percentage="25" />
                  }
                >
                  <Template
                    id="Assessment"
                    template="B_02"
                    A={{
                      id: "A",
                      content: (
                        <List title="Project Menu" isInteractive isLight>
                          <ListItem title="Overview" />
                          <ListItem title="Define Site" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <Divider />
                          <ListItem title="Assessment" isSelected />
                          <ListItem title="Transactions" />
                          <ListItem title="Zoning" />
                          <ListItem title="Maps" />
                          <ListItem title="Review" />
                          <ListItem title="Export" />
                        </List>

                      ),
                    }}
                    B={{
                      id: "B",
                      content: (
                        <Template
                          id="Details"
                          template="B_06"
                          A={{
                            id: "A",
                            content: (
                              <Panel
                                header={(
                                  <Bar
                                    left={{
                                      content: (
                                        <Tabs>
                                          <TabItem label="Parcel 1" isSelected />
                                          <TabItem label="Parcel 2" />
                                        </Tabs>

                                      ),
                                      width: "fit-content",
                                    }}
                                  />
                                )}
                                padding="0"
                                footer={(
                                  <Bar
                                    padding="0"
                                    contentAlign="bottom"
                                    left={{
                                      content: (
                                        <Icon icon="database" size="xs" onClick={() => { }} />),
                                      width: "fit-content",
                                    }}
                                    center={{
                                      content: (<Text size="sm" text="Data Source: EASI, Last Updated: 01/01/2020" />),
                                      align: "left",
                                    }}
                                  />
                                )}
                              >

                                <Form>
                                  <Field align="edge" label="Direct Parcel Link:" value="808-23093" onClick={() => { }} />
                                  <TextInput label="Assessment Year(s)" value="2019" />
                                  <TextInput label="Land Assessment" value="$6,155,006" />
                                  <TextInput label="Improvement Assessment" value="$3,890,864" />
                                  <TextInput label="Other Assessment" />
                                  <TextInput label="Total Assessment" value="$10,045,870" />
                                  <TextInput label="Total Taxes" value="$101,680" />
                                </Form>
                                <Bar
                                  contentAlign="bottom"
                                  left={{
                                    content: (
                                      <Button label="Attachments" />),
                                  }}

                                  right={{
                                    content: (
                                      <ButtonGroup columns="2">
                                        <Button label="Save" isSolid />
                                        <Button label="Save & Next" isSolid />
                                      </ButtonGroup>),
                                  }}
                                />
                              </Panel>
                            ),
                          }}
                          B={{
                            id: "B",
                            content: (
                              <Bar
                                padding="2x"
                                left={
                                  <MockDetails title="Site Assessment Totals" data={fieldData} />
                                }
                              />
                            ),
                          }}
                        />
                      ),
                    }}
                  />
                </Panel>
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Zoning",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };
        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={
                    <MockHeader percentage="50" />
                  }
                >
                  <Template
                    id="Zoning"
                    template="B_02"

                    A={{
                      id: "A",
                      content: (
                        <List title="Project Menu" isInteractive isLight>
                          <ListItem title="Overview" />
                          <ListItem title="Define Site" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <Divider />
                          <ListItem title="Assessment" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <ListItem title="Transactions" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <ListItem title="Zoning" isSelected />
                          <ListItem title="Maps" />
                          <ListItem title="Review" />
                          <ListItem title="Export" />
                        </List>

                      ),
                    }}
                    B={{
                      id: "B",
                      content: (

                        <Template
                          id="Details"
                          template="B_01"
                          A={{
                            id: "A",
                            content: (
                              <Panel
                                padding="0"
                                footer={(
                                  <Bar
                                    padding="0"
                                    contentAlign="bottom"
                                    left={{
                                      content: (
                                        <Icon icon="database" size="xs" onClick={() => { }} />),
                                      width: "fit-content",
                                    }}
                                    center={{
                                      content: (<Text size="sm" text="Data Source: EASI, Last Updated: 01/01/2020" />),
                                      align: "left",
                                    }}
                                  />
                                )}
                              >
                                <Template
                                  template="E_01"
                                  isOverlay
                                  A={{
                                    id: "A",
                                    content: (
                                      <Card padding="1x">
                                        <Bar
                                          padding="0"

                                          contentAlign="center"
                                          left={{
                                            content: (
                                              <Text text=".   Fulfillment Complete" />
                                            ),
                                            width: "fit-content",
                                          }}
                                          center={{
                                            content: (
                                              <ButtonGroup columns="5">
                                                <Button alignCenter variant="neutral" size="sm" isPlain icon="draw" label="Draw" />
                                                <Button alignCenter variant="neutral" size="sm" isPlain icon="layers" label="Layers" />
                                                <Button variant="neutral" alignCenter size="sm" isPlain icon="list" label="Legend" />
                                                <Button alignCenter variant="neutral" size="sm" isPlain icon="photos" label="Map Capture" />
                                                <Button alignCenter variant="neutral" size="sm" isPlain icon="map" label="Map Type" />
                                              </ButtonGroup>
                                            ),

                                          }}
                                        />
                                      </Card>
                                    ),
                                  }}
                                />
                                <MapBox map="satellite" />
                              </Panel>
                            ),
                          }}
                          B={{
                            id: "B",
                            content: (
                              <Panel
                                padding="0"
                                footer={(
                                  <Bar
                                    contentAlign="bottom"
                                    left={<Button label="Attachments" />}
                                    center={<Button label="Save" isSolid />}
                                    right={{
                                      content: (
                                        <Button label="Save & Next" isSolid />),
                                    }}
                                  />
                                )}
                                header={(
                                  <Bar
                                    left={{
                                      content: (
                                        <Tabs>
                                          <TabItem label="Zone 1" isSelected />
                                          <TabItem label="Zone 2" />
                                        </Tabs>),
                                      width: "fit-content",
                                    }}
                                    right={{
                                      content: (
                                        <Button label="Request Correction" />),
                                      width: "fit-content",
                                    }}
                                  />
                                )}
                              >
                                <Form>
                                  <FormSection>
                                    <Field align="edge" label="Zoning Authority" value="City of Mission Viejo" onClick={() => { }} />
                                  </FormSection>
                                  <TextInput label="Zoning District" value="Commercial" />
                                  <TextInput label="Zoning" value="CN" />
                                  <TextInput label="Zoning Type" value="Commercial Neighborhood" />
                                  <TextInput label="Zoned Density" value="0.75" />
                                  <TextInput label="Zoning Summary" value="This zone is intended for small-scale business" />
                                  <TextInput label="Maximum Site Coverage" value="50%" />
                                </Form>
                              </Panel>
                            ),
                          }}
                        />
                      ),
                    }}
                  />
                </Panel>
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Maps",
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
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={
                    <MockHeader percentage="75" />
                  }
                >
                  <Template
                    id="Maps"
                    template="B_02"

                    A={{
                      id: "A",
                      content: (
                        <List title="Project Menu" isInteractive isLight>
                          <ListItem title="Overview" />
                          <ListItem title="Define Site" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <Divider />
                          <ListItem title="Assessment" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <ListItem title="Transactions" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <ListItem title="Zoning" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <ListItem title="Maps" isSelected />
                          <ListItem title="Review" />
                          <ListItem title="Export" />
                        </List>

                      ),
                    }}
                    B={{
                      id: "B",
                      content: (
                        <Template
                          id="Details"
                          template="B_01"
                          A={{
                            id: "A",
                            content: (
                              <Panel
                                header={(
                                  <Bar
                                    padding="1x"
                                    left={{
                                      content: (
                                        <Tabs>
                                          <TabItem label="Subject Map" />
                                          <TabItem label="Flood" isSelected />
                                          <TabItem label="Wetlands" />
                                          <TabItem label="Traffic & Transit" />
                                          <TabItem label="Market Boundaries" />
                                          <TabItem label="Schools" />
                                          <TabItem label="Other" />
                                        </Tabs>),
                                      width: "fit-content",
                                    }}
                                  />
                                )}
                                padding="0"
                                footer={(
                                  <Bar
                                    padding="0"
                                    contentAlign="bottom"
                                    left={{
                                      content: (
                                        <Icon icon="database" size="xs" onClick={() => { }} />),
                                      width: "fit-content",
                                    }}
                                    center={{
                                      content: (<Text size="sm" text="Data Source: EASI, Last Updated: 01/01/2020" />),
                                      align: "left",
                                    }}
                                  />
                                )}
                              >
                                <Template
                                  template="E_01"
                                  isOverlay
                                  A={{
                                    id: "A",
                                    content: (
                                      <Card padding="1x">
                                        <Bar
                                          padding="0"

                                          contentAlign="center"
                                          left={{
                                            content: (
                                              <ButtonGroup columns="7">
                                                <Button alignCenter variant="neutral" size="sm" isPlain icon="draw" label="Draw" />
                                                <Button alignCenter variant="neutral" size="sm" isPlain icon="measure" label="Measure" />
                                                <Button alignCenter variant="neutral" size="sm" isPlain icon="layers" label="Layers" />
                                                <Button variant="neutral" alignCenter size="sm" isPlain icon="list" label="Legend" />
                                                <Button alignCenter variant="neutral" size="sm" isPlain icon="photos" label="Map Capture" />
                                                <Button alignCenter variant="neutral" size="sm" isPlain icon="map" label="Map Type" />
                                                <Button alignCenter variant="neutral" size="sm" isPlain icon="sync" label="Reset" />
                                              </ButtonGroup>
                                            ),

                                          }}
                                        />
                                      </Card>
                                    ),
                                  }}
                                />
                                <MapBox map="satellite" />
                              </Panel>
                            ),
                          }}
                          B={{
                            id: "B",
                            content: (
                              <Panel
                                padding="0"
                                footer={(
                                  <Bar
                                    contentAlign="bottom"
                                    left={<Button label="Map Images" />}
                                    center={<Button label="Save" isSolid />}
                                    right={{
                                      content: (
                                        <Button label="Save & Next" isSolid />),
                                    }}
                                  />
                                )}
                              >
                                <Form title="FEMA Flood">
                                  <TextInput label="Flood Zone" value="X" />
                                  <TextInput label="In 100-yr Zone" value="No" />
                                  <TextInput label="DFIRM ID" value="06037C" />
                                  <TextInput label="Flood Panel" value="06037C1617G" />
                                  <TextInput label="Effective Date" value="12/21/2018" />
                                </Form>
                              </Panel>
                            ),
                          }}
                        />
                      ),
                    }}
                  />
                </Panel>
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Review",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        const [sectionState, setSectionState] = useState(true);

        // const reportSections = [
        //   {
        //     id: "Define Site",
        //     label: "Define Site",
        //     value: "Review",
        //     onClick: () => { },
        //     disabled: sectionState,
        //   },
        //   {
        //     id: "Data Extraction",
        //     label: "Data Extraction",
        //     value: "Review",
        //     onClick: () => { },
        //     disabled: sectionState,
        //   },
        //   {
        //     id: "Assessment Data",
        //     label: "Assessment Data",
        //     value: "Review",
        //     onClick: () => { },
        //     disabled: sectionState,
        //   },
        //   {
        //     id: "Zoning",
        //     label: "Zoning",
        //     value: "Review",
        //     onClick: () => { },
        //     disabled: sectionState,
        //   },
        //   {
        //     id: "Demographics",
        //     label: "Demographics",
        //     value: "Review",
        //     onClick: () => { },
        //     disabled: sectionState,
        //   },
        //   {
        //     id: "Maps",
        //     label: "Maps",
        //     value: "Review",
        //     onClick: () => { },
        //     disabled: sectionState,
        //   },
        //   {
        //     id: "Appendices",
        //     label: "Appendices",
        //     value: "Review",
        //     onClick: () => { },
        //     disabled: sectionState,
        //   },
        // ];

        const buttonLabelOne = (
          "Create Report"
        );
        const buttonLabelTwo = (
          "Update Report"
        );

        const empty = (
          <Template>
            <Media
              media={ReportTemp}
            />
            <Title
              text="We'll lay all these little funky little things in there. The least little bit can do so much. Let's go up in here, and start having some fun."
              weight="bold"
            />
            <Text
              text="The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. You can bend rivers. But when I get home, the only thing I have power over is the garbage. We touch the canvas, the canvas takes what it wants. We don't have anything but happy trees here. Don't fiddle with it all day."
            />
          </Template>
        );

        const report = (
          <Media
            id="Web Site"
            media="https://www.lightboxre.com/"
          />
        );

        const [firstReport, setButtonState] = useState(true);
        const [buttonLabel, setButtonLabel] = useState(buttonLabelOne);
        const [reportWindow, setWindow] = useState(empty);

        const [visible, setVisible] = useState(false);
        const handleOpen = () => {
          setVisible(true);
          setSectionState(true);
          setWindow(empty);
          setButtonState(false);
          setTimeout(() => {
            setVisible(false);
            setSectionState(false);
            setButtonState(true);
            setButtonLabel(buttonLabelTwo);
            setTimeout(() => {
              setWindow(report);
            }, 300);
          }, 5000);
        };

        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={
                    <MockHeader percentage="100" />
                  }

                >
                  <Template
                    id="Maps"
                    template="B_02"
                    A={{
                      id: "A",
                      content: (
                        <List title="Project Menu" isInteractive isLight>
                          <ListItem title="Overview" />
                          <ListItem title="Define Site" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <Divider />
                          <ListItem title="Assessment" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <ListItem title="Transactions" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <ListItem title="Zoning" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <ListItem title="Maps" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <ListItem title="Review" isSelected />
                          <ListItem title="Export" />
                        </List>

                      ),
                    }}
                    B={{
                      id: "B",
                      content: (
                        <Panel
                          header={<Bar padding="2x" left={<Title size="xl" text="Review" />} />}
                          footer={
                            <Bar padding="2x" contentAlign="center" left={<Button label="Attachments" />} right={<Button label="Complete" isSolid />} />
                          }
                        >
                          <Template
                            id="Review"
                            template="B_04"
                            A={{
                              id: "A",
                              content: (
                                <Form>
                                  <Link text="Site Overview" />
                                  <Link text="Subject Map" />
                                  <Link text="Assessment" />
                                  <Link text="Transactions" />
                                  <Link text="Zoning" />
                                  <Link text="Demographics" />
                                  <Link text="Flood" />
                                  <Link text="Wetlands" />
                                  <Link text="Traffic" />
                                  <Link text="Market Boundaries" />
                                  <Link text="Schools" />
                                  <Link text="Other" />
                                </Form>

                              ),
                            }}
                            B={{
                              id: "B",
                              content: (
                                <React.Fragment>
                                  <Modal
                                    id="Modal_Text"
                                    visible={visible}
                                    animationDuration={0.5}
                                  >

                                    <Card>
                                      <CardSection>
                                        <Bar
                                          padding="2x"
                                          center={(
                                            <Icon
                                              icon="file"
                                              size="4xl"
                                              fixedWidth
                                              disabled
                                            />
                                          )}
                                        />
                                        <Text text="Please wait 5 seconds while we build your report..." />
                                        <Loader />
                                      </CardSection>
                                    </Card>

                                  </Modal>
                                  {reportWindow}
                                </React.Fragment>
                              ),
                            }}
                          />
                        </Panel>),
                    }}
                  />
                </Panel>
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Export",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };
        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={
                    <MockHeader percentage="100" />
                  }
                >
                  <Template
                    id="Report"
                    template="B_02"

                    A={{
                      id: "A",
                      content: (
                        <List title="Project Menu" isInteractive isLight>
                          <ListItem title="Overview" />
                          <ListItem title="Define Site" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <Divider />
                          <ListItem title="Assessment" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <ListItem title="Transactions" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <ListItem title="Zoning" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <ListItem title="Maps" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <ListItem title="Review" post={{ type: "icon", icon: "check", variant: "success" }} />
                          <ListItem title="Export" isSelected />
                        </List>

                      ),
                    }}
                    B={{
                      id: "B",
                      content: (
                        <Panel
                          header={<Bar padding="2x" left={<Title size="xl" text="Export" />} />}
                        >
                          <Template
                            template="A_02"
                            A={{
                              id: "A",
                              content: (
                                <React.Fragment>
                                  <Bar
                                    padding="3x"
                                    center={(
                                      <Grid columns="1">
                                        <Title
                                          text="You have completed your research for this project. "
                                          size="2xl"
                                          weight="bold"
                                        />
                                        <Title
                                          text=" Download and Publish your work."
                                          size="2xl"
                                          weight="bold"
                                        />
                                      </Grid>
                                    )}
                                  />
                                  <Grid columns="1">

                                    <Bar
                                      contentAlign="center"
                                      padding="2x"
                                      left={<Title text="Report" />}
                                      center={{
                                        content: <Text text="1402-20-12345_Research_Report.pdf" />,
                                        width: "50%",
                                        align: "left",
                                      }}
                                      right={(
                                        <Button
                                          label="View"
                                          fullWidth
                                          onClick={doNothing}
                                        />
                                      )}
                                    />
                                    <Bar
                                      contentAlign="center"
                                      padding="2x"
                                      left={<Title text="Attachments" />}
                                      center={{
                                        content: <Text text="1402-20-12345_Attachments.zip" />,
                                        width: "50%",
                                        align: "left",
                                      }}
                                      right={(
                                        <Button
                                          label="Download"
                                          fullWidth
                                          onClick={doNothing}
                                        />
                                      )}
                                    />
                                    <Bar
                                      contentAlign="center"
                                      padding="2x"
                                      left={<Title text="All Files" />}
                                      center={{
                                        content: <Text text="1402-20-12345_All.zip" />,
                                        width: "50%",
                                        align: "left",
                                      }}
                                      right={(
                                        <Button
                                          label="Download"
                                          fullWidth
                                          onClick={doNothing}
                                        />
                                      )}
                                    />
                                    <Bar center={(
                                      <Button
                                        label="Complete Project and Publish"
                                        onClick={doNothing}
                                        isSolid
                                      />
                                    )}
                                    />

                                  </Grid>
                                </React.Fragment>
                              ),
                            }}
                          />
                        </Panel>
                      ),
                    }}
                  />

                </Panel>
              ),
            }}
          />
        );
      });
    },
  );
