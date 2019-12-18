/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Card from "elements/Card";
import Layout from "layout/Layout";
import Panel, { PanelSection } from "layout/Panel";

storiesOf("Templates|SI Panel", module).add("Property Panel", () => {
  return (
    <Layout>
      <Layout width="70%">
        <Panel>
          <PanelSection body>
            <Card
              title="5201 California Avenue, Irvine, CA 92614"
              line1="APN #23947828"
              line2="Irvine Company"
              tag="Same Owner"
            />
            <Card
              title="5201 California Avenue, Irvine, CA 92614"
              line1="APN #23947828"
              line2="Irvine Company"
              tag="Same Owner"
            />
            <Card
              title="5201 California Avenue, Irvine, CA 92614"
              line1="APN #23947828"
              line2="Irvine Company"
              tag="Same Owner"
            />
            <Card
              title="5201 California Avenue, Irvine, CA 92614"
              line1="APN #23947828"
              line2="Irvine Company"
              tag="Same Owner"
            />
            <Card
              title="5201 California Avenue, Irvine, CA 92614"
              line1="APN #23947828"
              line2="Irvine Company"
              tag="Same Owner"
            />
            <Card
              title="5201 California Avenue, Irvine, CA 92614"
              line1="APN #23947828"
              line2="Irvine Company"
              tag="Same Owner"
            />
            <Card
              title="5201 California Avenue, Irvine, CA 92614"
              line1="APN #23947828"
              line2="Irvine Company"
              tag="Same Owner"
            />
          </PanelSection>
        </Panel>
      </Layout>
      <Layout right="0" width="30%">
        <Mapbox />
      </Layout>
    </Layout>
  );
});
