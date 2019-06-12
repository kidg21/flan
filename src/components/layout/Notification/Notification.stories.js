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
import Notification from "layout/Notification";
import NotificationNotes from "./Notification.md";

storiesOf("Layout|Notification", module)
  .addParameters({
    info: {
      text: "Notification info goes here..."
    },
    notes: {
      markdown: NotificationNotes
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
          setTimeout(() => {
            setTransition(false);
            setTimeout(() => {
              setVisible(false);
            }, 500);
          }, 3000);
        };
        const handleClose = event => {
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
              opacity={transition}
              scale={transition}
              position={transition}
            >
              <Banner
                title="This is a Standard notification."
                onClose={handleClose}
              />
            </Notification>
            <Button
              buttonLabel="Show Notification"
              style={{ marginLeft: "3rem" }}
              onClick={handleOpen}
            />
          </Fragment>
        );
      })
    )
  );

storiesOf("Layout|Notification", module)
  .addDecorator(withKnobs)
  .add("Knobs", () =>
    React.createElement(() => {
      const [visible, setVisible] = useState(false);
      const [transition, setTransition] = useState(true);
      const handleOpen = event => {
        setVisible(true);
        setTransition(true);
        setTimeout(() => {
          setTransition(false);
          setTimeout(() => {
            setVisible(false);
          }, 500);
        }, 3000);
      };
      const handleClose = event => {
        setTransition(false);
        setTimeout(() => {
          setVisible(false);
        }, 500);
      };
      const buttonStyle = { margin: "30vh 30vw" };
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
                "bottom-right": "bottomRight"
              },
              "topCenter",
              { display: "radio" },
              "Notification"
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
                "This is a Standard notification.",
                "Notification"
              )}
              onClose={handleClose}
            />
          </Notification>
          <Panel>
            <PanelSection body>
              <Button
                buttonLabel="Show Notification"
                onClick={handleOpen}
                style={buttonStyle}
              />
            </PanelSection>
          </Panel>
        </Fragment>
      );
    })
  );
storiesOf("Layout|Notification", module).add("Status Notification", () =>
  React.createElement(() => {
    const [visible, setVisible] = useState(false);
    const [transition, setTransition] = useState(true);
    const handleOpen = event => {
      setVisible(true);
      setTransition(true);
      setTimeout(() => {
        setTransition(false);
        setTimeout(() => {
          setVisible(false);
        }, 500);
      }, 3000);
    };
    const handleClose = event => {
      setTransition(false);
      setTimeout(() => {
        setVisible(false);
      }, 500);
    };
    const buttonStyle = { margin: "30vh 30vw" };
    return (
      <Fragment>
        <Notification
          type={options(
            "Notification Type",
            {
              default: "default"
              // status: "status"
            },
            "default",
            { display: "select" },
            "Notification"
          )}
          align={options(
            "Alignment",
            {
              "default to type": "default",
              top: "top",
              center: "center",
              bottom: "bottom"
            },
            "default",
            { display: "radio" },
            "Notification"
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
              "Notification"
            )}
            onClose={handleClose}
          />
        </Notification>
        <Panel>
          <PanelSection body>
            <Button
              buttonLabel="Status Notification"
              onClick={handleOpen}
              style={buttonStyle}
            />
          </PanelSection>
        </Panel>
      </Fragment>
    );
  })
);
