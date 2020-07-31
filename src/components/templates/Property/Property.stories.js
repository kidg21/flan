/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { FullScreen } from "helpers/Display";
import Panel from "layout/Panel";
import Icon from "atoms/Icon";
import Loader from "atoms/Loader";
import Button, { ButtonGroup } from "atoms/Button";
import Bar from "layout/Bar";
import Layout from "layout/Layout";
import Command from "atoms/Command";
import Template from "layout/Template";
import Tabs, { TabItem } from "blocks/Tabs";
import List, { ListItem } from "blocks/List";
import Grid from "layout/Grid";
import Form, { FormSection } from "layout/Form";
import Image from "atoms/Image";
import Divider from "atoms/Divider";
import MapBox from "layout/Map";
import TextInput from "atoms/TextInput";
import Media from "atoms/Media";
import Field, { FieldGroup } from "atoms/Field";
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

storiesOf("Templates|Applications/Research/Property Details", module)
  .addDecorator(FullScreen)
  .add(
    "Overview",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        const menuDetails = [
          {
            id: "Overview",
            title: "Overview",
            isSelected: true,
          },
          {
            id: "Define Site",
            title: "Define Site",
          },
          {
            id: "Assessment",
            title: "Assessment",
            disabled: true,
          },
          {
            id: "Transactions",
            title: "Transactions",
            disabled: true,
          },
          {
            id: "Zoning",
            title: "Zoning",
            disabled: true,
          },
          {
            id: "Maps",
            title: "Maps",
            disabled: true,
          },
          {
            id: "Review",
            title: "Review",
            disabled: true,
          },
          {
            id: "Export",
            title: "Export",
            disabled: true,
          },
        ];

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
                            <FieldGroup columns="1" gap="lg" id="General Information" title="General Information">
                              <Field
                                id="Property Name"
                                label="Property Name"
                                value="22902 Trabuco Rd"
                              />
                              <Field
                                id="Property Type"
                                label="Property Type"
                                value="Shopping Center"
                              />
                              <Field
                                id="Lat / Long"
                                label="Lat / Long"
                                value="33.629211 / -117.663988"
                              />
                              <Field
                                id="Street Address"
                                label="Street Address"
                                value="22902 Trabuco Road"
                              />
                              <Field
                                id="City, State Zip"
                                label="City, State Zip"
                                value="Mission Viejo, CA 92691"
                              />
                              <Field
                                id="Census Tract"
                                label="Census Tract"
                                value=""
                              />
                              <Field
                                id="Census Block"
                                label="Census Block"
                                value=""
                              />
                              <Field
                                id="County"
                                label="County"
                                value="Orange"
                              />
                              <Field
                                id="CBSA"
                                label="CBSA"
                                value="Los Angeles-Long Beach-Anaheim"
                              />
                            </FieldGroup>
                            <FieldGroup columns="1" gap="lg" id="Site Characteristics" title="Site Characteristics">
                              <Field
                                id="Land SF"
                                label="Land SF"
                                value="171,143"
                              />
                              <Field
                                id="Acres"
                                label="Acres"
                                value="3.93000"
                              />
                              <Field
                                id="Land Use"
                                label="Land Use"
                                value="Shopping Center"
                              />
                              <Field
                                id="Street Address"
                                label="Street Address"
                                value="22902 Trabuco Road"
                              />
                            </FieldGroup>
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

                            <FieldGroup gap="lg" columns="1" id="Physical Characteristics" title="Physical Characteristics">
                              <Field
                                id="No. of Buildings"
                                label="No. of Buildings"
                                value="3"
                              />
                              <Field
                                id="GBA"
                                label="GBA"
                                value="25,344"
                              />
                              <Field
                                id="No. of Stories"
                                label="No. of Stories"
                                value="1"
                              />
                              <Field
                                id="No. of Units"
                                label="No. of Units"
                                value="4"
                              />
                              <Field
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
