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
  optionsKnob as options,
} from "@storybook/addon-knobs";
import Button from "atoms/Button";
import Panel, { PanelSection } from "layout/Panel";
import Banner from "blocks/Banner";
import Notification from "elements/Notification";
import NotificationNotes from "./Notification.md";

storiesOf("Elements|Notification", module)
  .addParameters({
    info: {
      text: "Notification info goes here...",
    },
    notes: {
      markdown: NotificationNotes,
    },
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
              <Banner title="This is a Standard notification." onClose={handleClose} />
            </Notification>
            <Button
              buttonLabel="Show Notification"
              style={{ marginLeft: "3rem" }}
              onClick={handleOpen}
            />
          </Fragment>
        );
      }),
    ),
  );

storiesOf("Elements|Notification", module)
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
                "bottom-right": "bottomRight",
              },
              "topCenter",
              { display: "radio" },
              "Notification",
            )}
            visible={visible}
            onClose={handleClose}
            opacity={transition}
            scale={transition}
            position={transition}
          >
            <Banner
              title={text("Status Message", "This is a Standard notification.", "Notification")}
              onClose={handleClose}
            />
          </Notification>
          <Panel>
            <PanelSection body>
              <Button buttonLabel="Show Notification" onClick={handleOpen} />
            </PanelSection>
          </Panel>
        </Fragment>
      );
    }),
  );
storiesOf("Elements|Notification", module).add("Status Notification", () =>
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
            title="This is a Standard notification telling you stuff."
            onClose={handleClose}
          />
        </Notification>
        <Panel>
          <PanelSection body>
            <Button buttonLabel="Status Notification" onClick={handleOpen} />
          </PanelSection>
        </Panel>
      </Fragment>
    );
  }),
);