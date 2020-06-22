/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { Fragment, useState } from "react";
import Button from "atoms/Button";
import Banner from "blocks/Banner";
import Notification from "elements/Notification";

storiesOf("Elements|Notification", module)
  .add(
    "Documentation",
    () => {
      return React.createElement(() => {
        const [visible, setVisible] = useState(false);
        const [transition, setTransition] = useState("show");
        const handleOpen = (/* event */) => {
          setVisible(true);
          setTransition("show");
          setTimeout(() => {
            setTransition("hide");
            setTimeout(() => {
              setVisible(false);
            }, 500);
          }, 3000);
        };
        const handleClose = (/* event */) => {
          setTransition("hide");
          setTimeout(() => {
            setVisible(false);
          }, 500);
        };
        return (
          <Fragment>
            <Notification
              visible={visible}
              onClose={handleClose}
              animation={transition}
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
      const [transition, setTransition] = useState("show");
      const handleOpen = (/* event */) => {
        setVisible(true);
        setTransition("show");
        setTimeout(() => {
          setTransition("hide");
          setTimeout(() => {
            setVisible(false);
          }, 500);
        }, 3000);
      };
      const handleClose = (/* event */) => {
        setTransition("hide");
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
            animation={transition}
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
