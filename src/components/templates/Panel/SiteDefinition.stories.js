/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Legend from "blocks/Legend";
import styled from "styled-components";
import Card, { CardList } from "elements/Card";
import Layout from "layout/Layout";
import Button from "atoms/Button";
import Bar from "blocks/Bar";
import LBLogo from "images/LightBoxLogo.png";
import Title, { Description, SubTitle } from "base/Typography";
import Icon from "atoms/Icon";
import Panel from "layout/Panel";
import List, { ListItem } from "blocks/List";

const Logo = styled.img`
  width: 9em;
  margin-left: 1rem;
  height: 3.8rem;
`;

const image = {
  src: LBLogo,
  alt: "DMP",
};

const lotData = [
  { id: "a", name: "Land Use", value: "Commercial" },
  { id: "b", name: "Land Description", value: "Miscellaneous Commercial" },
  { id: "c", name: "Lot Area", value: "62,344 SF | 1.43 Acres" },
];

const ownerData = [
  { id: "a", name: "Owner", value: "1830 La Cienga LLC" },
  { id: "b", name: "Last Transfer", value: "12/31/14" },
  { id: "c", name: "Last Market Sale", value: "10/31/13 for $11,000,110" },
  { id: "d", name: "Opportunity Zone ", value: "No" },
];

const buildingData = [
  { id: "a", name: "Value", value: "$11,851,071" },
  { id: "b", name: "Square Feet", value: "34,529 SF" },
  { id: "c", name: "# of Units", value: "1" },
  { id: "d", name: "Year Built", value: "1950" },
];

const summaryData = [
  { id: "a", name: "Parcels", value: "1" },
  { id: "b", name: "Owners", value: "1" },
  { id: "c", name: "Buildings", value: "1" },
  { id: "d", name: "Square Footage", value: "1950" },
  { id: "a", name: "Acreage", value: "298" },
  { id: "b", name: "Topography", value: "Urban" },
  { id: "c", name: "Last Trans Date", value: "1/27/03" },
  { id: "d", name: "Sites Included", value: "Rockefeller" },
];


storiesOf("Templates|Site Definition", module)
  .add("Recommendations", () => {
    return (
      <Layout>
        <Layout>
          <Panel>
            <React.Fragment>
              <Bar left={<Logo src={image.src} alt={image.alt} />} />
              <Bar
                padding="2x"
                contentAlign="center"
                leftWidth="2%"
                centerAlign="left"
                left={<Icon icon="left" type="info" size="lg" />}
                center={
                  <React.Fragment>
                    <Title text="Recommended Properties" size="2x" />
                    <Description text="Choose to add parcels to your site. You may choose from our recommended list or click directly on the map parcel to add." />
                  </React.Fragment>
                }
              />
            </React.Fragment>
          </Panel>
        </Layout>
        <Layout right="0" width="50%" height="85%" top="15%">
          <Panel
            header={<Bar padding="2x" center={<Button label="Continue" />} />}
          >
            <CardList columns="1">
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
                tag="Trans Date"
                tagType="blue"
              />
              <Card
                title="5201 California Avenue, Irvine, CA 92614"
                line1="APN #23947828"
                line2="Irvine Company"
                tag="Trans Date"
                tagType="blue"
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
                tag="Adj Property"
                tagType="green"
              />
              <Card
                title="5201 California Avenue, Irvine, CA 92614"
                line1="APN #23947828"
                tag="Adj Property"
                tagType="green"
              />
              <Card
                title="5201 California Avenue, Irvine, CA 92614"
                line1="APN #23947828"
                line2="Irvine Company"
                tag="Same Owner"
              />
            </CardList>
          </Panel>
        </Layout>
        <Layout width="50%" height="85%" top="15%">
          <Mapbox />
        </Layout>
      </Layout>
    );
  })

  .add("Property Panel", () => {
    return (
      <Layout>
        <Layout>
          <Panel>
            <React.Fragment>
              <Bar left={<Logo src={image.src} alt={image.alt} />} />
              <Bar
                padding="2x"
                contentAlign="center"
                leftWidth="3%"
                centerAlign="left"
                left={<Icon icon="left" type="info" size="lg" />}
                center={
                  <React.Fragment>
                    <Title text="Confirm your Property" size="2x" />
                    <Description text="Confirm your property to continue defining your site" />
                  </React.Fragment>
                }
              />
            </React.Fragment>
          </Panel>
        </Layout>
        <Layout right="0" width="50%" height="85%" top="15%">
          <Panel
            header={<Bar padding="2x" center={<Button label="Continue" />} />}
          >
            <Card
              title="5201 California Avenue, Irvine CA 92614"
              icon="directions"
              body={
                <React.Fragment>
                  <Legend title="Lot" data={lotData} />
                  <Legend title="Owner" data={ownerData} />
                  <Legend title="Building" data={buildingData} />
                </React.Fragment>
              }
            />
            <List interactive divider>
              <ListItem
                label="Demographics"
                description="This is the description"
              />
              <ListItem
                label="Education"
                description="This is the description"
              />
              <ListItem
                label="Topography"
                description="This is the description"
              />
              <ListItem
                label="Crime Rates"
                description="This is the description"
              />
              <ListItem
                label="Elevation"
                description="This is the description"
              />
              <ListItem
                label="Population"
                description="This is the description"
              />
              <ListItem
                label="Income"
                description="This is the description"
              />
              <ListItem
                label="Opportunity Zones"
                description="This is the description"
              />
            </List>
          </Panel>
        </Layout>
        <Layout width="50%" height="85%" top="15%">
          <Mapbox />
        </Layout>
      </Layout>
    );
  })

  .add("Edit", () => {
    return (
      <Layout>
        <Layout>
          <Panel>
            <React.Fragment>
              <Bar left={<Logo src={image.src} alt={image.alt} />} />
              <Bar
                padding="2x"
                contentAlign="center"
                leftWidth="3%"
                centerAlign="left"
                left={<Icon icon="left" type="info" size="lg" />}
                center={
                  <React.Fragment>
                    <Title text="Edit your Site Geometry" size="2x" />
                    <Description text="Add or remove parcels to your site by clicking directly on the map parcel to add to list" />
                  </React.Fragment>
                }
              />
            </React.Fragment>
          </Panel>
        </Layout>
        <Layout right="0" width="50%" height="85%" top="15%">
          <Panel
            header={<Bar padding="2x" center={<Button label="Continue" />} />}
          >
            <Card
              title="5201 California Avenue, Irvine CA 92614"
              icon="directions"
              body={
                <React.Fragment>
                  <Legend title="Lot" data={lotData} />
                  <Legend title="Owner" data={ownerData} />
                  <Legend title="Building" data={buildingData} />
                </React.Fragment>
              }
            />
            <Bar
              padding="2x"
              left={<SubTitle size="sm" text="Properties Added" />}
            />
            <CardList columns="1">
              <Card
                title="Empire State Building"
                description="This is the description"
              />
              <Card
                title="Eiffel Tower"
                description="This is the description"
              />
            </CardList>
          </Panel>
        </Layout>
        <Layout width="50%" height="85%" top="15%">
          <Mapbox />
        </Layout>
      </Layout>
    );
  })

  .add("Summary", () => {
    return (
      <Layout>
        <Layout>
          <Panel>
            <React.Fragment>
              <Bar left={<Logo src={image.src} alt={image.alt} />} />
              <Bar
                padding="2x"
                contentAlign="center"
                leftWidth="3%"
                centerAlign="left"
                left={<Icon icon="left" type="info" size="lg" />}
                center={
                  <React.Fragment>
                    <Title text="Completed Site Definition" size="2x" />
                    <Description text="Submit your completed site definition by selecting the Submit button" />
                  </React.Fragment>
                }
              />
            </React.Fragment>
          </Panel>
        </Layout>
        <Layout right="0" width="50%" height="85%" top="15%">
          <Panel
            header={<Bar padding="2x" center={<Button label="Submit" />} />}
          >
            <CardList columns="1">
              <Card
                icon="download"
                title="Site Summary"
                body={
                  <React.Fragment>
                    <Legend data={summaryData} />
                  </React.Fragment>
                }
              />
              <Card
                title="5201 California Avenue, Irvine CA 92614"
                icon="directions"
                body={
                  <React.Fragment>
                    <Legend title="Lot" data={lotData} />
                    <Legend title="Owner" data={ownerData} />
                    <Legend title="Building" data={buildingData} />
                  </React.Fragment>
                }
              />
              <Bar
                padding="2x"
                left={<Title size="sm" text="Properties Added" />}
              />
              <Card
                title="Empire State Building"
                description="This is the description"
              />
              <Card
                title="Eiffel Tower"
                description="This is the description"
              />
            </CardList>
          </Panel>
        </Layout>
        <Layout width="50%" height="85%" top="15%">
          <Mapbox />
        </Layout>
      </Layout>
    );
  });
