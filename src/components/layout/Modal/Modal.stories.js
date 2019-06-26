import React, { Fragment, useState } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
  number,
  button,
  files,
  optionsKnob as options
} from "@storybook/addon-knobs";
import Button from "atoms/Button";
import Panel, { PanelSection } from "layout/Panel";
import ModernExterior_1 from "images/residential/modern exterior 1.jpg";
import Banner from "blocks/Banner";
import Modal from "layout/Modal";
import ModalNotes from "./Modal.md";

storiesOf("Layout|Modal", module)
  .addParameters({
    info: {
      text: "Modal info goes here..."
    },
    notes: {
      markdown: ModalNotes
    }
  })
  .add(
    "Documentation",
    withInfo()(() =>
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
              visible={visible}
              onClose={handleClose}
              opacity={transition}
              scale={transition}
              position={transition}
            >
              <Banner
                title="This is a Standard notification telling you stuff."
                onClose={handleClose}
              />
            </Modal>
            <Button
              buttonLabel="Open Modal"
              style={{ marginLeft: "3rem" }}
              onClick={handleOpen}
            />
          </Fragment>
        );
      })
    )
  );

storiesOf("Layout|Modal", module)
  .addDecorator(withKnobs)
  .add("Knobs", () =>
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
      const buttonStyle = { margin: "10vh 30vw" };
      return (
        <Fragment>
          <Modal
            type={options(
              "Modal Type",
              {
                default: "default",
                text: "text",
                image: "image"
              },
              "default",
              { display: "select" },
              "Modal"
            )}
            text={text(
              "Text",
              "This is a very special message just for you...",
              "Modal"
            )}
            image={text("Image URL", ModernExterior_1, "Modal")}
            align={options(
              "Alignment",
              {
                "default by type": "default",
                top: "top",
                center: "center",
                bottom: "bottom"
              },
              "default",
              { display: "radio" },
              "Modal"
            )}
            visible={visible}
            onClose={handleClose}
            opacity={transition}
            scale={transition}
            position={transition}
          >
            <Banner
              title={text(
                "Status Message",
                "This is a Standard notification telling you stuff.",
                "Modal"
              )}
              onClose={handleClose}
            />
          </Modal>
          <Panel>
            <PanelSection body>
              <Button
                buttonLabel="Open Modal"
                onClick={handleOpen}
                style={buttonStyle}
              />
            </PanelSection>
          </Panel>
        </Fragment>
      );
    })
  );
storiesOf("Layout|Modal", module)
  .add("Default Modal", () =>
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
      const buttonStyle = { margin: "10vh 30vw" };
      return (
        <Fragment>
          <Modal
            visible={visible}
            onClose={handleClose}
            opacity={transition}
            scale={transition}
            position={transition}
          >
            <Banner
              title="This is a Standard notification telling you stuff."
              onClose={handleClose}
            />
          </Modal>
          <Panel>
            <PanelSection body>
              <Button
                buttonLabel="Default Modal"
                onClick={handleOpen}
                style={buttonStyle}
              />
            </PanelSection>
          </Panel>
        </Fragment>
      );
    })
  )
  .add("Text Modal", () =>
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
      const buttonStyle = { margin: "10vh 30vw" };
      return (
        <Fragment>
          <Modal
            type="text"
            text="This is a very special message just for you..."
            visible={visible}
            onClose={handleClose}
            opacity={transition}
            scale={transition}
            position={transition}
          />
          <Panel>
            <PanelSection body>
              <Button
                buttonLabel="Text Modal"
                onClick={handleOpen}
                style={buttonStyle}
              />
            </PanelSection>
          </Panel>
        </Fragment>
      );
    })
  )
  .add("Image Modal", () =>
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
      const buttonStyle = { margin: "10vh 30vw" };
      return (
        <Fragment>
          <Modal
            type="image"
            image={ModernExterior_1}
            visible={visible}
            onClose={handleClose}
            opacity={transition}
            scale={transition}
            position={transition}
          />
          <Panel>
            <PanelSection body>
              <Button
                buttonLabel="Image Modal"
                onClick={handleOpen}
                style={buttonStyle}
              />
            </PanelSection>
          </Panel>
        </Fragment>
      );
    })
  );
