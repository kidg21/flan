import React, { Fragment, useState } from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import Button from "atoms/Button";
import Tabs, { Tab } from "blocks/Tabs";
import Card, { CardList } from "layout/Card";
import Panel, { PanelSection } from "layout/Panel";
import image from "images/residential/modern exterior 1.jpg";
import Banner from "blocks/Banner";
import Modal from "layout/Modal";

storiesOf("Layout|Modal", module).add("Modal", () =>
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
      }, 600);
    };
    return (
      <Fragment>
        <Modal
          visible={visible}
          onClose={handleClose}
          align=""
          hideBG={false}
          hideClose={false}
          opacity={transition}
          scale={transition}
          move={transition}
        >
          <Card onClose={handleClose}>
            <img src={image} />
          </Card>
          {/* <Banner
            title="This is a Standard notification telling you stuff."
            onClose={handleClose}
          /> */}
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
