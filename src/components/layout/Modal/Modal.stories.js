import React, { Fragment, useState } from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import Button from "atoms/Button";
import Tabs, { Tab } from "blocks/Tabs";
import Card, { CardList } from "layout/Card";
import Panel, { PanelSection } from "layout/Panel";
import ModernExterior_1 from "images/residential/modern exterior 1.jpg";
import Banner from "blocks/Banner";
import Modal from "layout/Modal";

storiesOf("Layout|Modal", module).add("Modal (with logic)", () =>
  React.createElement(() => {
    const [visible, setVisible] = useState(false);
    const [transition, setTransition] = useState(true);
    const handleOpen = event => {
      setVisible(true);
      setTransition(true);
    };
    const handleClose = event => {
      setTransition(false);
      setTimeout(() => {
        setVisible(false);
      }, 500);
    };
    return (
      <Fragment>
        <Modal
          type=""
          text="This is a very special message just for you..."
          image={ModernExterior_1}
          align=""
          visible={visible}
          onClose={handleClose}
          opacity={transition}
          scale={transition}
          move={transition}
        >
          <Banner
            title="This is a Standard notification telling you stuff."
            onClose={handleClose}
          />
        </Modal>
        <Panel>
          <PanelSection body>
            <CardList col_1>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </CardList>
          </PanelSection>
          <PanelSection>
            <Tabs>
              <Tab tabLabel="Open Modal" onClick={handleOpen} />
            </Tabs>
          </PanelSection>
        </Panel>
      </Fragment>
    );
  })
);

storiesOf("Layout|Modal", module).add("Modal (no logic)", () => (
  <Fragment>
    <Modal
      type=""
      text="This is a very special message just for you..."
      image={ModernExterior_1}
      align=""
    >
      <Banner title="This is a Standard notification telling you stuff." />
    </Modal>
    <Panel>
      <PanelSection body>
        <CardList col_1>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardList>
      </PanelSection>
      <PanelSection>
        <Tabs>
          <Tab tabLabel="Open Modal" />
        </Tabs>
      </PanelSection>
    </Panel>
  </Fragment>
));
