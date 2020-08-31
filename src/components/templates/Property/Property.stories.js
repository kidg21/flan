/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { useState } from "hooks";
import { FullScreen } from "helpers/Display";
import Panel from "layout/Panel";
import Icon from "atoms/Icon";
import Button, { ButtonGroup } from "atoms/Button";
import Bar from "layout/Bar";
import Container from "atoms/Container";
import Layout from "layout/Layout";
import Inline from "layout/Inline";
import Command from "atoms/Command";
import Template from "layout/Template";
import Popper from "layout/Popper";
import Search from "blocks/Search";
import Tag from "atoms/Tag";
import Menu from "blocks/Menu";
import List, { ListItem } from "blocks/List";
import Grid from "layout/Grid";
import Checkbox from "atoms/Checkbox";
import Image from "atoms/Image";
import Field, { FieldGroup, FieldSection } from "atoms/Field";
import Text, { Title } from "base/Typography";
import Card, { CardSection } from "elements/Card";
import ParcelMap from "images/maps/map-thumb.png";
import {
  MockHeader,
  MockHeaderGlobal,
  MockMenu,
  MockTabs,
  MockDetails,
  MockTable,
} from "helpers/Mocks";

storiesOf("Templates|Applications/Research/Property", module)
  .addDecorator(FullScreen)

  .add(
    "Main",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        // const [rightOpen, setRightOpen] = useState(false);
        // const openRight = () => { setRightOpen(true); };
        // const closeRight = () => { setRightOpen(false); };
        // const toggleRight = () => { setRightOpen(!rightOpen); };

        // const [stateSummary, setSummary] = useState("");
        const [fade, setFade] = useState("1");
        const openSummary = () => { setFade("1"); };
        const closeSummary = () => { setFade("0"); };
        // const toggleSummary = () => {
        //   if (fade === "1") {
        //     setFade("0");
        //   } else {
        //     setFade("1");
        //   }
        // };

        const [regionsActive, setRegions] = useState(true); // Enable/Disable Regions Button
        const [menuRegionsActive, setRegionsMenu] = useState(false); // Toggle Regions Menu
        const toggleInclusions = () => {
          setRegions(!regionsActive);
          if (regionsActive === true) {
            setRegionsMenu(false);
          }
        };
        const toggleRegions = () => {
          setRegionsMenu(!menuRegionsActive);
        };

        const [region01, setRegion01] = useState(true);
        const toggleRegion01 = () => { setRegion01(!region01); };
        // const closeRegion01 = () => { setRegion01(false); };
        const [region02, setRegion02] = useState(true);
        const toggleRegion02 = () => { setRegion02(!region02); };
        // const closeRegion02 = () => { setRegion02(false); };

        const [toolMore, setToolMore] = useState(false);
        const toggleToolMore = () => { setToolMore(!toolMore); };

        const [bottomMax, setBottomMax] = useState(false);
        const toggleBottomMax = () => { setBottomMax(!bottomMax); };
        const [bottomState, setBottomState] = useState(false);
        const openBottom = () => { setBottomState(true); };
        const closeBottom = () => {
          setBottomState(false);
          setBottomMax(false);
        };
        // const toggleBottom = () => {
        //   setBottomState(!bottomState);
        //   setBottomMax(false);
        // };

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
        ];

        /** keeping around for Summary 'toggle' interaction */
        // const [open, setOpen] = useState(false);
        // const toggleDetails = () => { setOpen(!open); };
        // let iconContent;
        // if (open) {
        //   iconContent = "minus";
        // } else {
        //   iconContent = "plus";
        // }

        let toggleIcon;

        if (bottomMax === true) {
          toggleIcon = 180;
        } else {
          toggleIcon = null;
        }

        const actionsTable = [
          <Menu
            data={[
              { id: "a", label: "Action" },
              { id: "b", label: "Action" },
              { id: "c", label: "Action" },
            ]}
            position="bottomLeft"
          >
            <Icon icon="options" />
          </Menu>,
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
                          padding="2x"
                          contentAlign="center"
                          left={{
                            content: (
                              <Text text="Properties" weight="bold" />
                            ),
                            width: "max-content",
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
                              >
                                <Icon icon="options" />
                              </Menu>
                            ),
                            width: "max-content",
                          }}
                        />
                      </CardSection>
                      <CardSection padding="0" isInverse2>
                        <Bar
                          padding="1x"
                          contentAlign="center"
                          left={{
                            content: (
                              <Search />),
                            width: "30rem",
                          }}
                          right={{
                            content: (
                              <Inline spacingX="0.5rem">
                                <Title text="309 Results" size="lg" weight="bold" />
                                <Button label="View List" isSolid onClick={openBottom} />
                              </Inline>
                            ),
                            width: "max-content",
                          }}
                        />
                      </CardSection>
                      <CardSection padding="0">
                        <Bar
                          contentAlign="center"
                          left={{
                            content: (
                              <Button id="filter" icon="filter" label="Filter" isPlain />
                            ),
                            width: "max-content",
                          }}
                          center={{
                            content: (
                              <Grid columns="auto 1fr" gap="4xl" align="center">
                                <Inline spacingX="0" spacingY="0.5rem">
                                  <Checkbox
                                    id="include"
                                    label="Include"
                                    labelVisible={false}
                                    onChange={toggleInclusions}
                                    checked={regionsActive}
                                  />
                                  <Popper
                                    usePortal
                                    isFlex
                                    visible={menuRegionsActive}
                                    anchor={(
                                      <Button
                                        id="regions_list"
                                        label="Regions"
                                        count="2"
                                        isPlain
                                        onClick={toggleRegions}
                                        disabled={!regionsActive}
                                      />
                                    )}
                                  >
                                    <Card
                                      padding="2x"
                                      shadow="2x"
                                      commands={[
                                        {
                                          id: "Command One",
                                          icon: "plus",
                                          label: "Create Region",
                                        },
                                      ]}
                                    >
                                      <Container maxHeight="16rem">
                                        <List isInteractive>
                                          <ListItem
                                            pre={{
                                              type: "checkbox", label: "Region 01", checked: region01, onClick: toggleRegion01,
                                            }}
                                            post={{ type: "icon", icon: "close" }}
                                          />
                                          <ListItem
                                            pre={{
                                              type: "checkbox", label: "Region 02", checked: region02, onClick: toggleRegion02,
                                            }}
                                            post={{ type: "icon", icon: "close" }}
                                          />
                                        </List>
                                      </Container>
                                    </Card>
                                  </Popper>
                                  <Tag label="Shopping Center" brand="brand1" icon="close" onClickIcon={() => { }} />
                                  <Tag label="California" brand="brand1" icon="close" onClickIcon={() => { }} />
                                  <Tag label="Expensive " brand="brand1" icon="close" onClickIcon={() => { }} />
                                  <Tag label="EX: Boundary 1" brand="brand1" icon="close" onClickIcon={() => { }} />
                                  {/* {region01 ? <Tag label="Region 01" variant="info" icon="close" onClickIcon={closeRegion01} /> : ""} */}
                                  {/* {region02 ? <Tag label="Region 02" variant="info" icon="close" onClickIcon={closeRegion02} /> : ""} */}
                                </Inline>
                              </Grid>
                            ),
                            align: "left",
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
                        <Card padding="2x" shadow="2x">
                          <ButtonGroup columns="1">
                            <Button label="Measure" icon="measure" isPlain size="sm" alignCenter />
                            <Button label="Draw" icon="draw" isPlain size="sm" alignCenter />
                            <Button label="Layers" icon="layers" isPlain size="sm" alignCenter />
                            <Button label="Legend" icon="list" isPlain size="sm" alignCenter />
                            <Button label="View" icon="map" isPlain size="sm" alignCenter />
                            <Popper
                              usePortal
                              isFlex
                              visible={toolMore}
                              anchor={(
                                <Button label="More" icon="more" isPlain size="sm" alignCenter onClick={toggleToolMore} />
                              )}
                            >
                              <Card padding="4x" shadow="2x">
                                <Container maxHeight="12rem">
                                  <Grid columns="1" gap="lg">
                                    <Command label="Measure" icon="measure" isPlain size="sm" onClick={toggleToolMore} />
                                    <Command label="Draw" icon="draw" isPlain size="sm" onClick={toggleToolMore} />
                                    <Command label="Layers" icon="layers" isPlain size="sm" onClick={toggleToolMore} />
                                    <Command label="Legend" icon="list" isPlain size="sm" onClick={toggleToolMore} />
                                    <Command label="View" icon="map" isPlain size="sm" onClick={toggleToolMore} />
                                  </Grid>
                                </Container>
                              </Card>
                            </Popper>
                          </ButtonGroup>
                        </Card>
                      ),
                      padding: "0.5rem",
                    }}
                    B={{
                      content: (
                        <MockDetails
                          recordTitle="22902 Trabuco Rd, Mission Viejo, CA 92691"
                          actionClose={closeSummary}
                        // offcanvas={stateSummary} // keeping for toggle interaction
                        />
                      ),
                      opacity: fade,
                    }}
                  />
                  <Mapbox
                    // map="satellite"
                    center={[-117.6582, 33.5969]}
                    zoom={[17]}
                    mapClick={openSummary}
                  />
                </Panel>
              ),
            }}
            /** Option: Summary in 'right' region of Layout */
            // right={{
            //   id: "Summary Panel",
            //   content: (
            //     <MockDetails actionClose={closeRight} />
            //   ),
            //   visible: rightOpen,
            // }}
            bottom={{
              id: "Results List",
              content: (
                <MockTable actionsTable={actionsTable} />
              ),
              fullHeight: bottomMax,
              visible: bottomState,
            }}
          />
        );
      });
    },
  )

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
