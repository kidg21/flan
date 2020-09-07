/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Panel from "layout/Panel";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Tabs, { TabItem } from "blocks/Tabs";
import Legend from "blocks/Legend";
import Layout from "layout/Layout";
import Flex from "layout/Flex";
import Bar from "layout/Bar";
import Text, {Title} from "base/Typography";
import Icon from "atoms/Icon";
import Image from "atoms/Image";
import Card, { CardGrid } from "elements/Card";
import Grid from "layout/Grid";
import Menu from "blocks/Menu";
import Button from "atoms/Button";
import Inline from "layout/Inline";
import Avatar from "atoms/Avatar";
import Template from "layout/Template";
import Chicago from "images/chicago.png";

storiesOf("Templates|Landing Page", module)
  .add(
    "Default",
    () => {
      return React.createElement(() => {
        return (
          <Layout
            header={{
              id: "Header",
              content: (
                <Bar
                  padding="1x"
                  contentAlign="center"
                  right={{
                    content: (
                      <Inline>
                        <Menu
                          id="Help Menu"
                          data={[{
                            label: "Support Center",
                            id: "Support Center",
                          }, {
                            label: "Contact Support",
                            id: "Contact Support",
                          }, {
                            label: "About the Product",
                            id: "About the Product",
                          }]}
                          position="bottomLeft"
                        >
                          <Button
                            id="help"
                            icon="help_circle"
                            size="lg"
                            variant="neutral"
                            isRound
                            isPlain
                          />
                        </Menu>
                        <Avatar id="profile" label="AB" size="sm" variant="neutral" />
                      </Inline>
                    ),
                    width: "fit-content",
                  }}
                />
              ),
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                >
                  <Template
                    id="Template B_01"
                    template="B_03"
                    A={{
                      id: "A",
                      content: (<React.Fragment>
                        <Template
                          isOverlay
                          id="Template A_01"
                          template="A_01"
                          A={{
                            id: "A",
                            content: (<Flex justifyContent="center" flexDirection="columns" alignItems="center" ><Title size="4xl" text="Welcome to Your App Suite"/></Flex>),
                          }}
                        />
                        <Image src={Chicago} alt="Chicago" />
                      </React.Fragment>),
                    }}
                    B={{
                      id: "B",
                      content: (
                        <Panel>
                          <Bar
                            padding="2x"
                            center={(
                              <CardGrid columns="4">
                                <Card body={(
                                  <Grid columns="1">
                                    <Bar center={<Icon icon="star" size="xl" />} />
                                    <Bar center={<Text text="JOBS" />} />
                                  </Grid>
                                  )}
                                />
                                <Card body={(
                                  <Grid columns="1">
                                    <Bar center={<Icon icon="star" size="xl" />} />
                                    <Bar center={<Text text="RESEARCH" />} />
                                  </Grid>
                                  )}
                                />
                                <Card body={(
                                  <Grid columns="1">
                                    <Bar center={<Icon icon="star" size="xl" />} />
                                    <Bar center={<Text text="REPORT WRITER" />} />
                                  </Grid>
                                  )}
                                />
                                <Card body={(
                                  <Grid columns="1">
                                    <Bar center={<Icon icon="star" size="xl" />} />
                                    <Bar center={<Text text="INSIGHTS" />} />
                                  </Grid>
                                  )}
                                />
                              </CardGrid>
                      )}
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
  );
