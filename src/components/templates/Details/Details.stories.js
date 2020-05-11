/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import Panel from "layout/Panel";
import List, { ListItem } from "blocks/List";
import Grid from "layout/Grid";
import Icon from "atoms/Icon";
import Button from "atoms/Button";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Tabs, { TabItem } from "blocks/Tabs";
import { Link } from "base/Typography";
import Image from "atoms/Image";
import Card from "elements/Card";
import Legend from "blocks/Legend";
import Text from "base/Typography";
import Page, {PageSection} from "layout/Page";
import DialogBox from "elements/DialogBox";
import Bar from "layout/Bar";
import Form, {FormSection} from "layout/Form";


const data = [
  { id: "a", label: "Save" },
  { id: "b", label: "Filter" },
  { id: "c", label: "Something" },
  { id: "d", label: "Filter" },
  { id: "e", label: "Layer" },
];

const options = [
  { label: "Requested by", value: "Steve Davidson, Banking Bank USA" },
  { label: "Report Requested", value: "Evaluation Report, Narrative" },
  { label: "Response Due by", value: "Nov 02, 2019" },
  { label: "Report Requested by", value: "Nov 10,2019" },
];

storiesOf("Templates|Details", module)
  .add(
    "Default",
    () => {
      return React.createElement(() => {

        return (
            <Panel 
            header={
              <MainPanelHeader title="19-0942231 123 Main St. Washington, DC 23820" menuData={data} />
            }>
              <Page>
           
              <Tabs>
              <TabItem label="RFP Details" isSelected/>
              <TabItem label="Property Details" />
              <TabItem label="Scope of Work"/>
              <TabItem label="Business Intelligence"/>
              <TabItem label="Files"/>
            </Tabs>
<PageSection>
            <Legend data={options} />
</PageSection>

            </Page>
          </Panel>
                     
        );
      });
    },
  )
  .add(
    "Section",
    () => {
      return React.createElement(() => {

        return (
            <Panel 
            header={

              <MainPanelHeader title="19-0942231 123 Main St. Washington, DC 23820" menuData={data} />

            }>
              <Page>
              <Tabs>
              <TabItem label="RFP Details" />
              <TabItem label="Property Details" isSelected/>
              <TabItem label="Scope of Work"/>
              <TabItem label="Business Intelligence"/>
              <TabItem label="Files"/>
            </Tabs>
              <PageSection>
            <Legend data={options} />
            </PageSection>
            </Page>
          </Panel>
                     
        );
      });
    },
  );