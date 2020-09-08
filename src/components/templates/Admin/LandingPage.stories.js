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
import Logo from "images/LightBox.Logo_white.png";

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
                            content: (<Flex justifyContent="center" flex="auto" flexDirection="columns" alignItems="center" height="100%" width="100%" >
                              <Image src={Logo} alt="Logo" width="20%"/>
                            </Flex>),
                          }}
                        />
                        <Image src={Chicago} width="100%" alt="Chicago" />
                      </React.Fragment>),
                    }}
                    B={{
                      id: "B",
                      content: (
                        <Flex justifyContent="center" flex="auto" flexDirection="columns" alignItems="center" height="100%" width="100%" >
                          <Bar center={
                              <CardGrid columns="8">
                                <div/>
                                <div/>
                                <Card padding="2x" body={(
                                  <Grid columns="1">
                                    <Bar center={<Icon icon="star" size="xl" />} />
                                    <Bar padding="0" center={<Text text="JOBS" />} />
                                  </Grid>
                                  )}
                                />
                                <Card padding="2x" body={(
                                  <Grid columns="1">
                                    <Bar center={<Icon icon="star" size="xl" />} />
                                    <Bar padding="0" center={<Text text="RESEARCH" />} />
                                  </Grid>
                                  )}
                                />
                                <Card padding="2x" body={(
                                  <Grid columns="1">
                                    <Bar center={<Icon icon="star" size="xl" />} />
                                    <Bar padding="0" center={<Text text="REPORT WRITER" />} />
                                  </Grid>
                                  )}
                                />
                                <Card padding="2x" body={(
                                  <Grid columns="1">
                                    <Bar center={<Icon icon="star" size="xl" />} />
                                    <Bar padding="0" center={<Text text="INSIGHTS" />} />
                                  </Grid>
                                  )}
                                />
                                   <div/>
                                <div/>
                              </CardGrid>}/>
                         </Flex>),

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
