/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import Button from "atoms/Button";
import ModernExterior1 from "images/residential/modern exterior 1.jpg";
import Banner from "blocks/Banner";
import DialogBox from "elements/DialogBox";
import Modal from "layout/Modal";

storiesOf("Utilities|Modal", module)
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
              label="Default Modal"
              onClick={handleOpen}
            />
          </React.Fragment>
        );
      });
    },
  );

storiesOf("Utilities|Modal", module)
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
      return (
        <React.Fragment>
          <Modal
            text={text(
              "Text",
              "This is a very special message just for you...",
              "Modal",
            )}
            image={text("Image URL", ModernExterior1, "Modal")}
            align={options(
              "Alignment",
              {
                top: "top",
                center: "center",
                bottom: "bottom",
              },
              "center",
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
          <Button
            label="Open Modal"
            onClick={handleOpen}
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
          <Button
            label="Dialog Modal"
            onClick={handleOpen}
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
      return (
        <React.Fragment>
          <Modal
            align="top"
            text="This is a very special message just for you..."
            onClose={handleClose}
            visible={visible}
          />
          <Button
            label="Text Modal"
            onClick={handleOpen}
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
      return (
        <React.Fragment>
          <Modal
            media={ModernExterior1}
            onClick={handleOnClick}
            onClose={handleClose}
            visible={visible}
          />
          <Button
            label="Image Modal"
            onClick={handleOpen}
          />
        </React.Fragment>
      );
    });
  });
