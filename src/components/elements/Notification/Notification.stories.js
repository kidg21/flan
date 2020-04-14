/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { Fragment, useState } from "react";
import Button from "atoms/Button";
import Panel from "layout/Panel";
import Banner from "blocks/Banner";
import Notification from "elements/Notification";


storiesOf("Elements|Notification", module)

  .add(
    "Documentation",
    () => {
      return React.createElement(() => {
        const [visible, setVisible] = useState(false);
        const [transition, setTransition] = useState(true);
        // eslint-disable-next-line no-unused-vars
        const handleOpen = (/* event */) => {
          setVisible(true);
          setTransition(true);
          setTimeout(() => {
            setTransition(false);
            setTimeout(() => {
              setVisible(false);
            }, 500);
          }, 3000);
        };
        const handleClose = (/* event */) => {
          setTransition(false);
          setTimeout(() => {
            setVisible(false);
          }, 500);
        };
        return (
          <Fragment>
            <Notification
              visible={visible}
              onClose={handleClose}
              position={transition}
            >
              <Banner
                title="This is a Standard notification."
                onClose={handleClose}
              />
            </Notification>
            <Button label="Show Notification" onClick={handleOpen} />
          </Fragment>
        );
      });
    },
  );

storiesOf("Elements|Notification", module)
  .addDecorator(withKnobs)
  .add("Knobs", () => {
    return React.createElement(() => {
      const [visible, setVisible] = useState(false);
      const [transition, setTransition] = useState(true);
      const handleOpen = (/* event */) => {
        setVisible(true);
        setTransition(true);
        setTimeout(() => {
          setTransition(false);
          setTimeout(() => {
            setVisible(false);
          }, 500);
        }, 3000);
      };
      const handleClose = (/* event */) => {
        setTransition(false);
        setTimeout(() => {
          setVisible(false);
        }, 500);
      };
      // const buttonStyle = { margin: "30vh 30vw" };
      return (
        <Fragment>
          <Notification
            align={options(
              "Alignment",
              {
                "top-left": "topLeft",
                "top-center": "topCenter",
                "top-right": "topRight",
                "bottom-left": "bottomLeft",
                "bottom-center": "bottomCenter",
                "bottom-right": "bottomRight",
              },
              "topCenter",
              { display: "radio" },
              "Notification",
            )}
            visible={visible}
            onClose={handleClose}
            position={transition}
          >
            <Banner
              title={text(
                "Status Message",
                "This is a Standard notification.",
                "Notification",
              )}
              onClose={handleClose}
            />
          </Notification>
          <Button label="Show Notification" onClick={handleOpen} />
        </Fragment>
      );
    });
  });
