/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import Button from "atoms/Button";
import Panel from "layout/Panel";
import ModernExterior1 from "images/residential/modern exterior 1.jpg";
import Banner from "blocks/Banner";
import Modal from "layout/Modal";

// const ModalNotes = markdown.require("./Modal.md");

storiesOf("Layout|Modal", module)
  // .addParameters({
  //   info: {
  //     text: "Modal info goes here..."
  //   },
  //   notes: {
  //     markdown: ModalNotes
  //   }
  // })
  .add(
    "Documentation",
    () => {
      return React.createElement(() => {
        const [visible, setVisible] = useState(false);
        const handleOpen = () => {
          setVisible(true);
        };
        const handleClose = () => {
          setVisible(false);
        };
        return (
          <>
            <Modal onClose={handleClose} visible={visible}>
              <Banner
                title="This is a Standard notification telling you stuff."
                onClose={handleClose}
              />
            </Modal>
            <Button
              label="Open Modal"
              style={{ marginLeft: "3rem" }}
              onClick={handleOpen}
            />
          </>
        );
      });
    });

storiesOf("Layout|Modal", module)
  .addDecorator(withKnobs)
  .add("Knobs", () => {
    return React.createElement(() => {
      const [visible, setVisible] = useState(false);
      const handleOpen = () => {
        setVisible(true);
      };
      const handleClose = () => {
        setVisible(false);
      };
      const buttonStyle = { margin: "10vh 30vw" };
      return (
        <>
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
            image={text("Image URL", ModernExterior1, "Modal")}
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
            onClose={handleClose}
            visible={visible}
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
          <Panel
            header={
              <Button
                label="Open Modal"
                onClick={handleOpen}
                style={buttonStyle}
              />
            }
          />
        </>
      );
    });
  });
storiesOf("Layout|Modal", module)
  .add("Default Modal", () => {
    return React.createElement(() => {
      const [visible, setVisible] = useState(false);
      const handleOpen = () => {
        setVisible(true);
      };
      const handleClose = () => {
        setVisible(false);
      };
      const buttonStyle = { margin: "10vh 30vw" };
      return (
        <>
          <Modal onClose={handleClose} visible={visible}>
            <Banner
              title="This is a Standard notification telling you stuff."
              onClose={handleClose}
            />
          </Modal>
          <Panel
            header={
              <Button
                label="Default Modal"
                onClick={handleOpen}
                style={buttonStyle}
              />
            }
          >
          </Panel>
        </>
      );
    });
  })
  .add("Text Modal", () => {
    return React.createElement(() => {
      const [visible, setVisible] = useState(false);
      const handleOpen = () => {
        setVisible(true);
      };
      const handleClose = () => {
        setVisible(false);
      };
      const buttonStyle = { margin: "10vh 30vw" };
      return (
        <>
          <Modal
            type="text"
            text="This is a very special message just for you..."
            onClose={handleClose}
            visible={visible}
          />
          <Panel
            header={
              <Button
                label="Text Modal"
                onClick={handleOpen}
                style={buttonStyle}
              />
            }
          />
        </>
      );
    });
  })
  .add("Image Modal", () => {
    return React.createElement(() => {
      const [visible, setVisible] = useState(false);
      const handleOpen = () => {
        setVisible(true);
      };
      const handleClose = () => {
        setVisible(false);
      };
      const handleOnClick = () => {
        alert("Image Clicked!");
      };
      const buttonStyle = { margin: "10vh 30vw" };
      return (
        <>
          <Modal
            type="image"
            image={ModernExterior1}
            onClick={handleOnClick}
            onClose={handleClose}
            visible={visible}
          />
          <Panel
            header={
              <Button
                label="Image Modal"
                onClick={handleOpen}
                style={buttonStyle}
              />
            }
          />
        </>
      );
    });
  });
