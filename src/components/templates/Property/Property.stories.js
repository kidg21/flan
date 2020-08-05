/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { useState } from "hooks";
import { FullScreen } from "helpers/Display";
import Panel from "layout/Panel";
import Icon from "atoms/Icon";
import Loader from "atoms/Loader";
import Button, { ButtonGroup } from "atoms/Button";
import Bar from "layout/Bar";
import Container from "atoms/Container";
import Layout from "layout/Layout";
import Command from "atoms/Command";
import Template from "layout/Template";
import Tabs, { TabItem } from "blocks/Tabs";
import SearchBar from "blocks/Search";
import Menu from "blocks/Menu";
import List, { ListItem } from "blocks/List";
import Grid from "layout/Grid";
import Form, { FormSection } from "layout/Form";
import Image from "atoms/Image";
import Divider from "atoms/Divider";
import MapBox from "layout/Map";
import TextInput from "atoms/TextInput";
import Media from "atoms/Media";
import Field, { FieldGroup, FieldSection } from "atoms/Field";
import Text, { Title, Link } from "base/Typography";
import Card, { CardSection, CardGrid } from "elements/Card";
import Modal from "layout/Modal";
import ParcelMap from "images/maps/map-thumb.png";
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

storiesOf("Templates|Applications/Research/Property", module)
  .addDecorator(FullScreen)
  .add(
    "Property Main",
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
                <ListItem title="Dashboard" />
                <ListItem title="Projects" />
                <ListItem title="Properties" isSelected />
              </List>),
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={(
                    <Card
                      id="Card_Header"
                      padding="0"
                    >
                      <CardSection variant="light" padding="1x">
                        <Bar
                          contentAlign="center"
                          padding="0"
                          left={{
                            content: (
                              <Title size="xl" text="Properties" weight="bold" />),
                            align: "left",
                          }}
                          right={{
                            content: (
                              <Button icon="options" isRound isPlain variant="neutral" />
                            ),
                          }}
                        />
                      </CardSection>
                    </Card>
)}
                >
                  <Panel
                    padding="0"
                    header={(
                      <Bar
                        padding="1x"
                        contentAlign="center"
                        left={{
                          content: (
                            <SearchBar />),
                        }}
                        center={{
                          content: (<Title text="309 results" size="lg" />),
                          align: "right",
                        }}
                        right={{
                          content: (<Button label="View Results" isSolid />),
                          width: "fit-content",
                        }}
                      />
                )}
                  >
                    <Template
                      id="Assessment"
                      isOverlay
                      template="D_02"
                      A={{
                        id: "A",
                        content: (
                          <Container width="4rem">
                            <Card padding="2x">
                              <ButtonGroup gap="3xl" columns="1">
                                <Button label="Measure" icon="measure" isPlain size="sm" alignCenter />
                                <Button label="Draw" icon="draw" isPlain size="sm" alignCenter />
                                <Button label="Layers" icon="layers" isPlain size="sm" alignCenter />
                                <Button label="Legend" icon="list" isPlain size="sm" alignCenter />
                                <Button label="View" icon="map" isPlain size="sm" alignCenter />
                                <Button label="Reset" icon="sync" isPlain size="sm" alignCenter />
                                <Button label="More" icon="more" isPlain size="sm" alignCenter />
                              </ButtonGroup>
                            </Card>
                          </Container>
                        ),
                      }}
                    />
                    <MapBox />
                  </Panel>
                </Panel>),
            }}
          />
        );
      });
    },
  )
  .add(
    "Property Details",
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
              content: (
                <List title="Research" isInteractive isInverse>
                  <ListItem title="Dashboard" />
                  <ListItem title="Projects" />
                  <ListItem title="Properties" isSelected />
                </List>),
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={(
                    <Card
                      id="Card_Header"
                      padding="0"
                    >
                      <CardSection variant="light" padding="1x">
                        <Bar
                          contentAlign="center"
                          padding="0"
                          left={{
                            content: (
                              <Title size="xl" text="Properties" weight="bold" />),
                            align: "left",
                          }}
                          right={{
                            content: (
                              <Button icon="options" isRound isPlain variant="neutral" />
                            ),
                          }}
                        />
                      </CardSection>
                    </Card>
                  )}
                >
                  <Panel
                    padding="0"
                    header={(
                      <Bar
                        padding="1x"
                        contentAlign="center"
                        left={{
                          content: (
                            <SearchBar />),
                        }}
                        center={{
                          content: (<Title text="309 results" size="lg" />),
                          align: "right",
                        }}
                        right={{
                          content: (<Button label="View Results" isSolid />),
                          width: "fit-content",
                        }}
                      />
                )}
                  >
                    <Template
                      id="Main Content"
                      template="B_01"
                      A={{
                        id: "A",
                        content: (
                          <Panel padding="0">
                            <Template
                              id="Assessment"
                              isOverlay
                              template="D_02"
                              A={{
                                id: "A",
                                content: (
                                  <Container width="4rem">
                                    <Card padding="2x">
                                      <ButtonGroup gap="3xl" columns="1">
                                        <Button label="Measure" icon="measure" isPlain size="sm" alignCenter />
                                        <Button label="Draw" icon="draw" isPlain size="sm" alignCenter />
                                        <Button label="Layers" icon="layers" isPlain size="sm" alignCenter />
                                        <Button label="Legend" icon="list" isPlain size="sm" alignCenter />
                                        <Button label="View" icon="map" isPlain size="sm" alignCenter />
                                        <Button label="Reset" icon="sync" isPlain size="sm" alignCenter />
                                        <Button label="More" icon="more" isPlain size="sm" alignCenter />
                                      </ButtonGroup>
                                    </Card>
                                  </Container>
                                ),
                              }}
                            />
                            <MapBox />
                          </Panel>),
                      }}
                      B={{
                        id: "B",
                        content: (
                          <Panel
                            header={(
                              <Bar
                                contentAlign="center"
                                padding="2x"
                                left={<Title size="lg" weight="medium" text="22902 Trabuco Rd., Mission Viejo CA" />}
                                right={{
                                  content: (<Icon icon="export" onClick />),
                                  width: "fit-content",
                                }}
                              />
                          )}
                          >
                            <Grid columns="1" gap="lg">
                              <Bar
                                padding="0"
                                center={
                                  <Image width="20rem" src="https://cdn.facilityexecutive.com/wp-content/uploads/2019/09/38391858_ml-800x418-1-574x300.jpg" />
}
                              />
                              <FieldSection>
                                <FieldGroup columns="1" title="Property">
                                  <Field label="Parcel No." value="808-221-12" onClick />
                                  <Field label="Land User" value="Commercial Shopping Center" />
                                  <Field label="Building Area" value="25,344 SF" />
                                  <Field label="Lot Area" value="171,143 SF (3.93 Acres)" onClick />
                                  <Field label="Building/Lot" value="0.15" />
                                  <Field label="No. of Units" value="" />
                                  <Field label="Year Built" value="1978" />
                                </FieldGroup>
                                <FieldGroup columns="1" title="Owners">
                                  <Field label="Owners" value="SCF-Los Alisos LLC" onClick />
                                  <Field label="Owner Address" value="2 Park Plz Ste 700 Irvine, CA 92614" />
                                  <Field label="Adjacent Lots" value="2 (4.48 Total Acres)" onClick />
                                  <Field label="Last Sale" value="10/2/15 for $11,500,000" onClick />
                                  <Field label="Total Assd Value" value="$10,045,870" />

                                </FieldGroup>
                              </FieldSection>
                            </Grid>

                          </Panel>),
                      }}
                    />
                  </Panel>
                </Panel>),
            }}
          />
        );
      });
    },
  )
  .add(
    "Property Overview",
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
                    <MockHeader />
                  }
                >
                  <Panel header={<MockTabs />}>
                    <Template
                      id="overview"
                      template="B_07"
                      A={{
                        id: "A",
                        content: (
                          <Template>
                            <FieldSection columns="2" title="General Information">
                              <FieldGroup columns="1">
                                <Field
                                  align="edge"
                                  id="Property Name"
                                  label="Property Name"
                                  value="22902 Trabuco Rd"
                                />
                                <Field
                                  align="edge"
                                  id="Property Type"
                                  label="Property Type"
                                  value="Shopping Center"
                                />
                                <Field
                                  align="edge"
                                  id="Lat / Long"
                                  label="Lat / Long"
                                  value="33.629211 / -117.663988"
                                />
                                <Field
                                  align="edge"
                                  id="Street Address"
                                  label="Street Address"
                                  value="22902 Trabuco Road"
                                />
                                <Field
                                  align="edge"
                                  id="City, State Zip"
                                  label="City, State Zip"
                                  value="Mission Viejo, CA 92691"
                                />
                              </FieldGroup>
                              <FieldGroup columns="1">
                                <Field
                                  align="edge"
                                  id="Census Tract"
                                  label="Census Tract"
                                  value=""
                                />
                                <Field
                                  align="edge"
                                  id="Census Block"
                                  label="Census Block"
                                  value=""
                                />
                                <Field
                                  align="edge"
                                  id="County"
                                  label="County"
                                  value="Orange"
                                />
                                <Field
                                  align="edge"
                                  id="CBSA"
                                  label="CBSA"
                                  value="Los Angeles-Long Beach-Anaheim"
                                />
                              </FieldGroup>
                            </FieldSection>
                            <FieldSection columns="2">
                              <FieldGroup columns="1" id="Site Characteristics" title="Site Characteristics">
                                <Field
                                  align="edge"
                                  id="Land SF"
                                  label="Land SF"
                                  value="171,143"
                                />
                                <Field
                                  align="edge"
                                  id="Acres"
                                  label="Acres"
                                  value="3.93000"
                                />
                                <Field
                                  align="edge"
                                  id="Land Use"
                                  label="Land Use"
                                  value="Shopping Center"
                                />
                                <Field
                                  align="edge"
                                  id="Street Address"
                                  label="Street Address"
                                  value="22902 Trabuco Road"
                                />
                              </FieldGroup>
                              <div />
                            </FieldSection>
                          </Template>
                        ),
                      }}

                      B={{
                        id: "B",
                        content: (
                          <Template>
                            <Bar
                              padding="0"
                              center={
                                <Image src={ParcelMap} width="20rem" alt="mockImage" />
}
                            />
                            <Bar center={<Command label="View Map" />} />
                            <FieldGroup columns="1" id="Physical Characteristics" title="Physical Characteristics">
                              <Field
                                align="edge"
                                id="No. of Buildings"
                                label="No. of Buildings"
                                value="3"
                              />
                              <Field
                                align="edge"
                                id="GBA"
                                label="GBA"
                                value="25,344"
                              />
                              <Field
                                align="edge"
                                id="No. of Stories"
                                label="No. of Stories"
                                value="1"
                              />
                              <Field
                                align="edge"
                                id="No. of Units"
                                label="No. of Units"
                                value="4"
                              />
                              <Field
                                align="edge"
                                id="Year Built"
                                label="Year Built"
                                value="1978"
                              />
                            </FieldGroup>
                          </Template>
                        ),
                      }}
                    />
                  </Panel>
                </Panel>
              ),
            }}
          />
        );
      });
    },
  );
