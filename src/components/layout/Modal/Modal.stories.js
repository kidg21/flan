/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import Button from "atoms/Button";
import Panel from "layout/Panel";
import ModernExterior1 from "images/residential/modern exterior 1.jpg";
import Banner from "blocks/Banner";
import DialogBox from "elements/DialogBox";
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
          <React.Fragment>
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
          </React.Fragment>
        );
      });
    },
  );

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
        <React.Fragment>
          <Modal
            type={options(
              "Modal Type",
              {
                default: "default",
                text: "text",
                image: "image",
              },
              "default",
              { display: "select" },
              "Modal",
            )}
            text={text(
              "Text",
              "This is a very special message just for you...",
              "Modal",
            )}
            image={text("Image URL", ModernExterior1, "Modal")}
            align={options(
              "Alignment",
              {
                "default by type": "default",
                "top": "top",
                "center": "center",
                "bottom": "bottom",
              },
              "default",
              { display: "radio" },
              "Modal",
            )}
            onClose={handleClose}
            visible={visible}
          >
            <Banner
              title={text(
                "Status Message",
                "This is a Standard notification telling you stuff.",
                "Modal",
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
        </React.Fragment>
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
        <React.Fragment>
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
          />
        </React.Fragment>
      );
    });
  })
  .add("Dialog Modal", () => {
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
        <React.Fragment>
          <Modal onClose={handleClose} visible={visible}>
            <DialogBox
              title="Default Dialog"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              buttons={[
                {
                  id: "Cancel",
                  label: "Nevermind...",
                  onClick: handleClose,
                },
                {
                  id: "Confirm",
                  label: "Let's Do It!",
                  type: "Success",
                  onClick: handleClose,
                },
              ]}
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
          />
        </React.Fragment>
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
        <React.Fragment>
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
        </React.Fragment>
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
        <React.Fragment>
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
        </React.Fragment>
      );
    });
  });
