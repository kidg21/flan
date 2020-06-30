/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Panel from "layout/Panel";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Tabs, { TabItem } from "blocks/Tabs";
import Legend from "blocks/Legend";

import Page, { PageSection } from "layout/Page";

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

storiesOf("Templates|Detail Page/", module)
  .add(
    "Default",
    () => {
      return React.createElement(() => {
        return (
          <Panel
            header={
              <MainPanelHeader id="Detail_Header" title="19-0942231 123 Main St. Washington, DC 23820" menuData={data} />
            }
          >
            <Page>

              <Tabs>
                <TabItem label="RFP Details" isSelected />
                <TabItem label="Property Details" />
                <TabItem label="Scope of Work" />
                <TabItem label="Business Intelligence" />
                <TabItem label="Files" />
              </Tabs>
              <PageSection>
                <Legend id="Detail_Legend" data={options} />
              </PageSection>

            </Page>
          </Panel>

        );
      });
    },
  );
