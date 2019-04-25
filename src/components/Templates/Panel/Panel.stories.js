import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Header from "blocks/Panel/Header";
import Table from "blocks/Table";
import Card from "blocks/Card/Card";
import Group from "blocks/Panel/Group";
import Container from "atoms/Container";
import Accordion from "blocks/Accordion/Accordion";
import Panel, { PanelSection, PanelBody } from "layout/Panel";

storiesOf("Templates|Panel", module)
  .add("Property Info Panel", () =>
    React.createElement(() => {
      const [visibility, setVisibility] = useState(false);
      const [visibility2, setVisibility2] = useState(false);
      return (
        <Panel>
          <PanelSection>
            <Header
              title="5201 California Ave. Irvine, California"
              property={true}
            />
          </PanelSection>
          <PanelBody>
            <Container>
              <Table />
            </Container>
            <Accordion
              header={<Card title="Ownership" info={true} />}
              visibility={visibility}
              onClick={() => {
                setVisibility(!visibility);
              }}
            >
              <Container>
                <Table />
              </Container>
            </Accordion>
            <Accordion
              header={<Card title="Acquisitions" info={true} />}
              visibility={visibility2}
              onClick={() => {
                setVisibility2(!visibility2);
              }}
            >
              <Container>
                <Table />
              </Container>
            </Accordion>
          </PanelBody>
          <PanelSection />
        </Panel>
      );
    })
  )

  .add("Layer Panel", () =>
    React.createElement(() => {
      const [checked, setChecked] = useState(false);
      const [checked2, setChecked2] = useState(false);
      const [checked3, setChecked3] = useState(false);
      const [checked4, setChecked4] = useState(false);
      const [checked5, setChecked5] = useState(false);
      const [checked6, setChecked6] = useState(false);
      const [checked7, setChecked7] = useState(false);
      const [checked8, setChecked8] = useState(false);
      const [visibility, setVisibility] = useState(false);

      return (
        <Panel>
          <PanelSection>
            <Header title="Layers" twoParts={true} />
          </PanelSection>
          <PanelBody>
            <Card
              title="DOT Traffic"
              layer={true}
              switchProps={{
                checked: checked,

                onChange: () => {
                  setChecked(!checked);
                }
              }}
            />

            <Card
              title="Qualified Opportunities"
              layer={true}
              switchProps={{
                checked: checked2,

                onChange: () => {
                  setChecked2(!checked2);
                }
              }}
            />
            <Card
              title="Parcels"
              layer={true}
              switchProps={{
                checked: checked3,

                onChange: () => {
                  setChecked3(!checked3);
                }
              }}
            />
            <Card
              title="Major Brands"
              layer={true}
              switchProps={{
                checked: checked4,

                onChange: () => {
                  setChecked4(!checked4);
                }
              }}
            />

            <Card
              title="DFIRM"
              layer={true}
              switchProps={{
                checked: checked5,

                onChange: () => {
                  setChecked5(!checked5);
                }
              }}
            />
            <Accordion
              header={<Group title="First Group" number="3" />}
              visibility={visibility}
              onClick={() => {
                setVisibility(!visibility);
              }}
            >
              <Container>
                <Card
                  title="Wetlands"
                  layer={true}
                  switchProps={{
                    checked: checked6,

                    onChange: () => {
                      setChecked6(!checked6);
                    }
                  }}
                />

                <Card
                  title="Field Sites"
                  layer={true}
                  switchProps={{
                    checked: checked7,

                    onChange: () => {
                      setChecked7(!checked7);
                    }
                  }}
                />

                <Card
                  title="Builder Sites"
                  layer={true}
                  switchProps={{
                    checked: checked8,

                    onChange: () => {
                      setChecked8(!checked8);
                    }
                  }}
                />
              </Container>
            </Accordion>
          </PanelBody>
          <PanelSection />
        </Panel>
      );
    })
  );
