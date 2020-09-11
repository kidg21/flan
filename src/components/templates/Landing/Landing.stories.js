/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { FullScreen } from "helpers/Display";
import Panel from "layout/Panel";
import Icon from "atoms/Icon";
import Button from "atoms/Button";
import Search from "blocks/Search";
import Bar from "layout/Bar";
import Card from "elements/Card";
import Image from "atoms/Image";
import Grid from "layout/Grid";
import Avatar from "atoms/Avatar";
import Flex from "layout/Flex";
import Inline from "layout/Inline";
import Layout from "layout/Layout";
import Hero from "images/Hero.png";
import Asset1 from "images/Asset1.svg";
import Asset2 from "images/Asset2.svg";
import Asset3 from "images/Asset3.svg";
import Asset4 from "images/Asset4.svg";
import Template from "layout/Template";
import Text from "base/Typography";

storiesOf("Templates|Applications/Jobs Portal", module)
  .addDecorator(FullScreen)
  .add(
    "Landing Page",
    () => {
      return React.createElement(() => {
        return (
          <Layout
            header={{
              id: "Header",
              content: (
                <Bar
                  contentAlign="center"
                  right={{
                    content: (
                      <Inline>
                        <Button
                          id="help"
                          icon="help_circle"
                          size="lg"
                          variant="neutral"
                          isRound
                          isPlain
                        />
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

                <Template
                  id="Assessment"
                  template="B_03"
                  A={{
                    id: "A",
                    content: (
                      <Image src={Hero} alt="Lightbox Logo" width="140%" />

                    ),
                  }}
                  B={{
                    id: "B",
                    content: (
                      <Panel>
                        <Flex justifyContent="center" alignItems="center" height="100%" width="100%">
                          <Grid columns="8">
                              <div/>
                              <div/>
                            <Card
                              body={(
                                  <Grid columns="1">
                                <Bar center={<Image src={Asset1} alt="Jobs" width="40%" />} />
                                <Bar padding="0" center={<Text text="JOBS"/>} />
                                </Grid>
                                )}
                            />
                            <Card
                              body={(
                                  <Grid columns="1">
                                <Bar center={<Image src={Asset2} alt="Research" width="40%" />} />
                                <Bar padding="0" center={<Text text="RESEARCH"/>} />
                                </Grid>
                            )}
                            />
                            <Card
                              body={(
                                  <Grid columns="1">
                                <Bar center={<Image src={Asset3} alt="Report Writer" width="38%" />} />
                                <Bar padding="0" center={<Text text="REPORT WRITER"/>} />
                                </Grid>
                          )}
                            />
                            <Card
                              body={(
                                  <Grid columns="1">
                                <Bar center={<Image src={Asset4} alt="Insights" width="38%" />} />
                                <Bar padding="0" center={<Text text="INSIGHTS"/>} />
                                </Grid>
                          )}
                            />
                            <div/>
                            <div/>
                          </Grid>
                        </Flex>
                      </Panel>
                    ),
                  }}
                />

              ),
            }}
          />
        );
      });
    },
  );
