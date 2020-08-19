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
import Inline from "layout/Inline";
import Command from "atoms/Command";
import Template from "layout/Template";
import Tabs, { TabItem } from "blocks/Tabs";
import Search from "blocks/Search";
import Tag from "atoms/Tag";
import Menu from "blocks/Menu";
import List, { ListItem } from "blocks/List";
import Grid from "layout/Grid";
import Form, { FormSection } from "layout/Form";
import Checkbox from "atoms/Checkbox";
import Image from "atoms/Image";
import Divider from "atoms/Divider";
import Field, { FieldGroup, FieldSection } from "atoms/Field";
import Text, { Title, Label, Link } from "base/Typography";
import Card, { CardSection } from "elements/Card";
import SelectMenu from "atoms/SelectMenu";
import Switch from "atoms/Switch";
import ParcelMap from "images/maps/map-thumb.png";
import {
  MockHeader,
  MockHeaderGlobal,
  MockMenu,
  MockTabs,
  MockData,
  MockDetails,
  MockFooter,
  MockForm,
  MockWorkflow,
  MockTable,
} from "helpers/Mocks";

function doNothing() {
  // do nothing
}

storiesOf("Templates|Applications/Research/Property", module)
  .addDecorator(FullScreen)

  .add(
    "View Ratios",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        const [rightOpen, setRightOpen] = useState(false);
        const openRight = () => { setRightOpen(true); };
        const closeRight = () => { setRightOpen(false); };
        const toggleRight = () => { setRightOpen(!rightOpen); };

        const [fade, setFade] = useState("0");
        const openOverlay = () => { setFade("1"); };
        const closeOverlay = () => { setFade("0"); };
        const toggleOverlay = () => {
          if (fade === "1") {
            setFade("0");
          } else {
            setFade("1");
          }
        };

        const [filterArea, setFilterArea] = useState("Current View");
        const filterCurrent = () => { setFilterArea("Current View"); };
        const filterCircle = () => { setFilterArea("Circle 1"); };
        const filterShape = () => { setFilterArea("Shape 2"); };

        const [bottomMax, setBottomMax] = useState(false);
        const toggleBottomMax = () => { setBottomMax(!bottomMax); };
        const [bottomState, setBottomState] = useState(false);
        const openBottom = () => { setBottomState(true); };
        const closeBottom = () => {
          setBottomState(false);
          setBottomMax(false);
        };
        const toggleBottom = () => {
          setBottomState(!bottomState);
          setBottomMax(false);
        };

        const menuMain = [
          {
            id: "Projects",
            title: "Projects",
          },
          {
            id: "Properties",
            title: "Properties",
            isSelected: true,
          },
          {
            id: "History",
            title: "History",
          },
          {
            id: "Data",
            title: "Data",
          },
          {
            id: "Toggle Overlay",
            title: "Toggle Overlay",
            onClick: toggleOverlay,
          },
          {
            id: "Toggle Right",
            title: "Toggle Right",
            onClick: toggleRight,
          },
          {
            id: "Toggle Bottom",
            title: "Toggle Bottom",
            onClick: toggleBottom,
          },
        ];

        let toggleIcon;

        if (bottomMax === true) {
          toggleIcon = 180;
        } else {
          toggleIcon = null;
        }

        const actionsTable = [
          <Icon icon="share" onClick={() => { }} />,
          <Icon icon="delete" onClick={() => { }} />,
          <Icon icon="up" rotation={toggleIcon} onClick={toggleBottomMax} />,
          <Icon icon="close" onClick={closeBottom} />,
        ];

        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: (
                <MockMenu
                  title="Research"
                  data={menuMain}
                />
              ),
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={(
                    <Card>
                      <CardSection padding="0" variant="light">
                        <Bar
                          padding="1x"
                          contentAlign="center"
                          left={{
                            content: (
                              <Search />),
                            width: "30rem",
                          }}
                          center={{
                            content: (
                              // <Button label="View 309 Results" onClick={openBottom} isSolid variant="" size="sm" />
                              <Link text="View 309 Results" size="xl" weight="bold" onClick={openBottom} />
                            ),
                            align: "left",
                          }}
                          right={{
                            content: (
                              <Menu
                                data={[
                                  { id: "a", label: "Action" },
                                  { id: "b", label: "Action" },
                                  { id: "c", label: "Action" },
                                ]}
                                position="bottomLeft"
                              />
                            ),
                            width: "max-content",
                          }}
                        />
                      </CardSection>
                      <CardSection padding="0" isInverse>
                        <Bar
                          left={{
                            content: (
                              <Command id="filter" command="filter" />
                              /* <Button icon="filter" label="Filter" size="sm" /> */
                              /* <Inline spacingX="" spacingY="">
                                <Button icon="list" label="View" size="sm" onClick={openBottom} />
                                <Title text="309 results for:" size="lg" />
                              </Inline> */
                            ),
                            width: "max-content",
                          }}
                          center={{
                            content: (
                              <Inline spacingX="0" spacingY="0.5rem">
                                <Tag label="'Your Search Phrase'" variant="success" brand2="brand4" icon="close" onClickIcon={() => { }} />
                                <Tag label="Shopping Center" brand="brand1" icon="close" onClickIcon={() => { }} />
                                <Tag label="California" brand="brand1" icon="close" onClickIcon={() => { }} />
                                <Tag label="Expensive " brand="brand1" icon="close" onClickIcon={() => { }} />
                                <Tag label="EX: Boundary 1" brand="brand1" icon="close" onClickIcon={() => { }} />
                                <Tag label="IN: Boundary 3" brand="brand1" icon="close" onClickIcon={() => { }} />
                              </Inline>
                            ),
                            align: "left",
                          }}
                          right={{
                            content: (
                              <Inline spacingX="0.5rem" spacingY="0">
                                <Label text="Filter Area:" />
                                <Menu
                                  data={[
                                    { id: "view", label: "Current View", onClick: filterCurrent },
                                    { id: "circle-1", label: "Circle 1", onClick: filterCircle },
                                    { id: "shape-2", label: "Shape 2", onClick: filterShape },
                                    { id: "create", label: "Create Area" },
                                  ]}
                                  position="bottomLeft"
                                >
                                  <Link text={filterArea} size="lg" weight="bold" />
                                </Menu>
                              </Inline>
                            ),
                            width: "max-content",
                          }}
                        />
                      </CardSection>
                    </Card>
                  )}
                >
                  <Template
                    id="Map Overlay"
                    template="B_05"
                    isOverlay
                    hasShadows
                    A={{
                      id: "A",
                      content: (
                        <Card padding="2x">
                          <ButtonGroup gap="lg" columns="1">
                            <Button label="Measure" icon="measure" isPlain size="sm" alignCenter />
                            <Button label="Draw" icon="draw" isPlain size="sm" alignCenter />
                            <Button label="Layers" icon="layers" isPlain size="sm" alignCenter />
                            <Button label="Legend" icon="legend" isPlain size="sm" alignCenter />
                            <Button label="View" icon="view" isPlain size="sm" alignCenter />
                          </ButtonGroup>
                        </Card>
                      ),
                    }}
                    B={{
                      id: "B",
                      content: <MockDetails actionClose={closeOverlay} />,
                      opacity: fade,
                      overflow: "hidden",
                    }}
                  />
                  <Mapbox map="satellite" center={[-117.6582, 33.5969]} zoom={[17]} mapClick={openOverlay} />
                </Panel>
              ),
            }}
            right={{
              id: "Summary Panel",
              content: (
                <MockDetails actionClose={closeRight} />
              ),
              visible: rightOpen,
            }}
            bottom={{
              id: "Results List",
              content: (
                <MockTable actionsTable={actionsTable} />
              ),
              max: bottomMax,
              visible: bottomState,
            }}
          />
        );
      });
    },
  )

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
                      <CardSection variant="light" padding="0">
                        <Bar
                          contentAlign="center"
                          padding="1x"
                          left={{
                            content: (
                              <Title text="Properties" />),
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
                            <Search />),
                          width: "30rem",
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
                                <Button label="More" icon="more" isPlain size="sm" alignCenter />
                              </ButtonGroup>
                            </Card>
                          </Container>
                        ),
                      }}
                    />
                    <Mapbox />
                  </Panel>
                </Panel>),
            }}
            bottom={{
              id: "Bottom",
              content: (<Title text="Table goes here" />),
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
                <Layout
                  header={{
                    content: (
                      <React.Fragment>
                        <Bar
                          padding="1x"
                          contentAlign="center"
                          left={{
                            content: (
                              <Search />),
                            width: "30rem",
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
                        <Inline spacingX="0.2em" spacingY="0.3em">
                          <Text text="Filters :" weight="medium" />
                          <Tag label="Shopping Center" brand="brand1" icon="close" />
                          <Tag label="California" brand="brand1" icon="close" />
                          <Tag label="Expensize " brand="brand1" icon="close" />
                          <Tag label="EX: Boundary 1" brand="brand1" icon="close" />
                          <Tag label="IN: Boundary 3" brand="brand1" icon="close" />
                          <Tag label="Add More" icon="plus" />
                          <Button label="Inclusion" size="sm" />
                          <Button label="Exclusion" size="sm" />
                        </Inline>

                      </React.Fragment>),
                  }}
                  main={{
                    id: "Map",
                    content: (
                      <Layout
                        main={{
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
                              <Mapbox />
                            </Panel>),
                        }}
                        right={{
                          content: (
                            <Panel
                              padding="0"
                              header={(
                                <Bar
                                  contentAlign="center"
                                  padding="2x"
                                  left={(
                                    <React.Fragment>
                                      <Title size="2xl" weight="medium" text="22902 Trabuco Rd.," />
                                      <Text text="Mission Viejo CA" />
                                    </React.Fragment>
                                  )}
                                  right={{
                                    content: (<Icon icon="export" onClick={doNothing} />),
                                    width: "fit-content",
                                  }}
                                />
                              )}
                            >
                              {/* <Grid columns="1" gap="sm"> */}

                              <Image width="100%" src="https://cdn.facilityexecutive.com/wp-content/uploads/2019/09/38391858_ml-800x418-1-574x300.jpg" />
                              {/* <Form> */}
                              <FieldSection>
                                <FieldGroup gap="sm" columns="1">
                                  <Field align="edge" label="Parcel No." value="808-221-12" onClick />
                                  <Field align="edge" label="Land User" value="Commercial Shopping Center" />
                                  <Field align="edge" label="Building Area" value="25,344 SF" />
                                  <Field align="edge" label="Lot Area" value="171,143 SF (3.93 Acres)" onClick />
                                  <Field align="edge" label="Building/Lot" value="0.15" />
                                  <Field align="edge" label="No. of Units" value="" />
                                  <Field align="edge" label="Year Built" value="1978" />
                                </FieldGroup>
                                <FieldGroup gap="sm" columns="1" title="Owners">
                                  <Field align="edge" label="Owners" value="SCF-Los Alisos LLC" onClick />
                                  <Field align="edge" label="Owner Address" value="2 Park Plz Ste 700 Irvine, CA 92614" />
                                  <Field align="edge" label="Adjacent Lots" value="2 (4.48 Total Acres)" onClick />
                                  <Field align="edge" label="Last Sale" value="10/2/15 for $11,500,000" onClick />
                                  <Field align="edge" label="Total Assd Value" value="$10,045,870" />

                                </FieldGroup>
                              </FieldSection>
                              {/* </Form> */}
                              {/* </Grid> */}

                            </Panel>
                          ),
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
