/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Panel from "layout/Panel";
import Button from "atoms/Button";
import Bar from "layout/Bar";
import Card, { CardSection, CardGrid } from "elements/Card";
import Image from "atoms/Image";
import Avatar from "atoms/Avatar";
import Flex from "layout/Flex";
import Inline from "layout/Inline";
import Layout from "layout/Layout";
import Hero from "images/branding/lightbox/hero_city_01.png";
import Logo from "images/branding/lightbox/LightBoxLogo_white.png";
import Asset1 from "images/Asset1.svg";
import Asset2 from "images/Asset2.svg";
import Asset3 from "images/Asset3.svg";
import Asset4 from "images/Asset4.svg";
import Template from "layout/Template";
import Text from "base/Typography";
import Menu from "blocks/Menu";

storiesOf("Templates|Applications/Jobs Portal", module)
  .add(
    "Landing Page",
    () => {
      return React.createElement(() => {
        const width = window.innerWidth;
        const breakpoint = 414; // iPhone 6 ( just in case )
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
                  <CardSection padding="0" />
                  <CardSection padding="0">
                    <Flex justifyContent="center">
                      <Template isOverlay gap="lg">
                        <Flex alignItems="center" justifyContent="center">
                          <Image
                            src={Logo}
                            alt="Lightbox Logo"
                            width={(width <= breakpoint) ? "35%" : "22%"}
                          />
                        </Flex>
                        <Flex alignItems="center" justifyContent="center">
                          <h1 style={{ // TODO: Add Typography props for affecting text directly
                            fontFamily: "Roboto, Arial, sans-serif",
                            fontSize: `{(${width} <= ${breakpoint}) ? "6vw" : "5vw"}`,
                            fontWeight: "300",
                            letterSpacing: "1px",
                            color: "white",
                          }}
                          >
                            Welcome to Valuation Studio
                          </h1>
                        </Flex>
                      </Template>
                      <Image src={Hero} alt="Background" />
                    </Flex>
                  </CardSection>
                </Card>
              ),
            }}
            main={{
              content: (
                <Panel
                  padding="0"
                >
                  <div style={{ // Adding that light grey background behind the buttons
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#f9f9f9",
                    paddingTop: "2rem",
                  }}
                  >
                    <Flex alignItems="center" justifyContent="center" overflow="auto">
                      <Flex width={(width <= breakpoint) ? "80%" : "60%"} justifyContent="center">
                        <CardGrid
                          columns={(width <= breakpoint) ? 2 : 4}
                          rows={(width <= breakpoint) ? "repeat(2,minmax(36vw,1fr))" : "14vw"}
                          gap="4xl"
                        >
                          <Card padding2="4x" onClick={() => { }}>
                            <CardSection padding="0">
                              <Flex justifyContent="center">
                                <Template gap="xl" rows="1fr 1fr">
                                  <Flex alignItems="center" justifyContent="center">
                                    <Image
                                      src={Asset1}
                                      alt="Jobs"
                                      width={(width <= breakpoint) ? "8vw" : "4vw"}
                                      height={(width <= breakpoint) ? "8vw" : "4vw"}
                                    />
                                  </Flex>
                                  <Flex height="100%" alignItems="center" justifyContent="flex-end">
                                    <Text text="JOBS" size2="sm" weight="medium" />
                                  </Flex>
                                </Template>
                              </Flex>
                            </CardSection>
                          </Card>
                          <Card padding2="4x" onClick={() => { }}>
                            <CardSection padding="0">
                              <Flex justifyContent="center">
                                <Template gap="xl" rows="1fr 1fr">
                                  <Flex alignItems="center" justifyContent="center">
                                    <Image
                                      src={Asset2}
                                      alt="Research"
                                      width={(width <= breakpoint) ? "8vw" : "4vw"}
                                      height={(width <= breakpoint) ? "8vw" : "4vw"}
                                    />
                                  </Flex>
                                  <Flex height="100%" alignItems="center" justifyContent="flex-end">
                                    <Text text="RESEARCH" size2="sm" weight="medium" />
                                  </Flex>
                                </Template>
                              </Flex>
                            </CardSection>
                          </Card>
                          <Card padding2="4x" onClick={() => { }}>
                            <CardSection padding="0">
                              <Flex justifyContent="center">
                                <Template gap="xl" rows="1fr 1fr">
                                  <Flex alignItems="center" justifyContent="center">
                                    <Image
                                      src={Asset3}
                                      alt="Report Writer"
                                      width={(width <= breakpoint) ? "8vw" : "4vw"}
                                      height={(width <= breakpoint) ? "8vw" : "4vw"}
                                    />
                                  </Flex>
                                  <Flex height="100%" alignItems="center" justifyContent="flex-end">
                                    <Text text="REPORT WRITER" size2="sm" weight="medium" />
                                  </Flex>
                                </Template>
                              </Flex>
                            </CardSection>
                          </Card>
                          <Card padding2="4x" onClick={() => { }}>
                            <CardSection padding="0">
                              <Flex justifyContent="center">
                                <Template gap="xl" rows="1fr 1fr">
                                  <Flex alignItems="center" justifyContent="center">
                                    <Image
                                      src={Asset4}
                                      alt="Insights"
                                      width={(width <= breakpoint) ? "8vw" : "4vw"}
                                      height={(width <= breakpoint) ? "8vw" : "4vw"}
                                    />
                                  </Flex>
                                  <Flex height="100%" alignItems="center" justifyContent="flex-end">
                                    <Text text="INSIGHTS" size2="sm" weight="medium" />
                                  </Flex>
                                </Template>
                              </Flex>
                            </CardSection>
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
