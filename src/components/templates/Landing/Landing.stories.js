/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { FullScreen, ContainerLarge } from "helpers/Display";
import Panel from "layout/Panel";
import Icon from "atoms/Icon";
import Button, { ButtonGroup } from "atoms/Button";
import Search from "blocks/Search";
import Bar from "layout/Bar";
import Card, { CardSection, CardGrid } from "elements/Card";
import Image from "atoms/Image";
import Container from "atoms/Container";
import Grid from "layout/Grid";
import Avatar from "atoms/Avatar";
import Flex from "layout/Flex";
import Inline from "layout/Inline";
import Layout from "layout/Layout";
import Hero from "images/branding/lightbox/hero_city_01.png";
import HeroReferemce from "images/Hero.png";
import Logo from "images/branding/lightbox/LightBoxLogo.png";
import Asset1 from "images/Asset1.svg";
import Asset2 from "images/Asset2.svg";
import Asset3 from "images/Asset3.svg";
import Asset4 from "images/Asset4.svg";
import Template from "layout/Template";
import Text, { Title, Label } from "base/Typography";
import Menu from "blocks/Menu";

storiesOf("Templates|Applications/Jobs Portal", module)
  // .addDecorator(ContainerLarge)
  .add(
    "Landing Page",
    () => {
      return React.createElement(() => {
        return (
          <Layout
            header={{
              content: (
                <Card padding="0">
                  <Bar
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
                  <CardSection padding="0">
                    {/* <Image src={HeroReferemce} azlt="HeroReferemce" /> */}
                  </CardSection>
                  <CardSection padding="0">
                    <Template isOverlay>
                      <div style={{ padding: "1.5rem 0" }} />
                      <Flex alignItems="center" justifyContent="center">
                        <Image src={Logo} alt="Lightbox Logo" width="22%" />
                      </Flex>
                      <Flex alignItems="center" justifyContent="center">
                        <h1 style={{
                          fontFamily: "Roboto, Arial, sans-serif", fontSize: "3.875rem", fontWeight: "300", letterSpacing: "1px", color: "white",
                        }}
                        >
                          Welcome to Your App Suite
                        </h1>
                      </Flex>
                    </Template>
                    <Image src={Hero} alt="Background" />
                  </CardSection>
                </Card>
              ),
            }}
            main={{
              content: (
                <Panel
                  padding="0"
                >
                  <div style={{
                    backgroundColor: "#f9f9f9", width: "100vw", height: "100vh", paddingTop: "2rem",
                  }}
                  >
                    <Flex alignItems="center" justifyContent="center" overflow="auto">
                      <Flex width="60%" justifyContent="center">
                        <CardGrid
                          columns="4"
                          gap="4xl"
                        >
                          <Card padding="4x" onClick={() => { }}>
                            <Flex width2="inherit" align="center" justify="center">
                              <Grid columns="1" rows="5rem auto" align="center" justify="center" gap="2xl">
                                <Image src={Asset1} alt="Jobs" width="30%" />
                                <Label text="JOBS" size="sm" />
                              </Grid>
                            </Flex>
                          </Card>
                          <Card padding="4x" onClick={() => { }}>
                            <Flex width2="inherit" justify="center">
                              <Grid columns="1" rows="5rem auto" align="center" justify="center" gap="2xl">
                                <Image src={Asset2} alt="Research" width="30%" />
                                <Label text="RESEARCH" size="sm" />
                              </Grid>
                            </Flex>
                          </Card>
                          <Card padding="4x" onClick={() => { }}>
                            <Flex width2="inherit" justify="center">
                              <Grid columns="1" rows="5rem auto" align="center" justify="center" gap="2xl">
                                <Image src={Asset3} alt="Report Writer" width="30%" />
                                <Label text="REPORT WRITER" size="sm" />
                              </Grid>
                            </Flex>
                          </Card>
                          <Card padding="4x" onClick={() => { }}>
                            <Flex width2="100%" justifyContent="center">
                              <Grid columns="1" rows="5rem auto" align="center" justify="center" gap="2xl">
                                <Image src={Asset4} alt="Insights" width="30%" />
                                <Label text="INSIGHTS" size="sm" />
                              </Grid>
                            </Flex>
                          </Card>
                        </CardGrid>
                      </Flex>
                    </Flex>
                  </div>
                </Panel>
              ),
            }}
          />
        );
      });
    },
  );
