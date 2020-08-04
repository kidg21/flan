/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { Title } from "base/Typography";
import Command from "atoms/Command";
import Bar from "layout/Bar";
import Template from "layout/Template";
import Layout from "layout/Layout";
import {
  MockDetails,
  MockCardGrid,
  MockMenu,
  MockTable,
} from "helpers/Mocks";

storiesOf("Layout|Layout/", module)
  .add(
    "Main Section Only",
    () => {
      return (
        <Layout
          main={{ id: "Main", content: "" }}
        />
      );
    },
  )
  .add(
    "With Left/Right Sections",
    () => {
      return (
        <Layout
          left={{ id: "Left", content: "" }}
          main={{ id: "Main", content: "" }}
          right={{ id: "Right", content: "" }}
        />
      );
    },
  )
  .add(
    "Adding A Botton Section",
    () => {
      return (
        <Layout
          left={{ id: "Left", content: "" }}
          main={{ id: "Main", content: "" }}
          right={{ id: "Right", content: "" }}
          bottom={{ id: "Bottom", content: "" }}
        />
      );
    },
  )
  .add(
    "With Fixed Header/Footer",
    () => {
      return (
        <Layout
          header={{ id: "Header", content: "" }}
          left={{ id: "Left", content: "" }}
          main={{ id: "Main", content: "" }}
          right={{ id: "Right", content: "" }}
          bottom={{ id: "Bottom", content: "" }}
          footer={{ id: "Footer", content: "" }}
        />
      );
    },
  )
  .add(
    "Summary and Detail (separate)",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(false);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };
        const [rightOpen, setRightOpen] = useState(false);
        const toggleRight = () => { setRightOpen(!rightOpen); };
        const [bottomOpen, setBottomOpen] = useState(false);
        const toggleBottom = () => { setBottomOpen(!bottomOpen); };
        return (
          <Layout
            header={{
              id: "Header",
              content: (
                <Bar
                  contentAlign="center"
                  padding="2x"
                  left={{
                    content: (
                      <Command
                        icon="left"
                        label="Toggle"
                        onClick={toggleLeft}
                      />
                    ),
                  }}
                  right={{
                    content: (
                      <Command
                        icon="right"
                        label="Toggle"
                        align="right"
                        onClick={toggleRight}
                      />
                    ),
                  }}
                />
              ),
            }}
            left={{
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{
              content: (
                <Template
                  id="Details"
                  template="B_01"
                  A={{
                    id: "A",
                    content: <Mapbox />,
                  }}
                  B={{
                    id: "B",
                    content: (
                      <MockCardGrid />
                    ),
                  }}
                />
              ),
            }}
            right={{
              content: <MockDetails />,
              visible: rightOpen,
            }}
            bottom={{
              content: <MockTable />,
              visible: bottomOpen,
            }}
          />
        );
      });
    },
  )
  .add(
    "Summary and Detail (shared)",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(false);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };
        const [bottomOpen, setBottomOpen] = useState(false);
        const toggleBottom = () => { setBottomOpen(!bottomOpen); };
        const [detailsOpen, setDetailsOpen] = useState("right");
        const toggleDetails = () => {
          if (detailsOpen === "right") {
            setDetailsOpen("");
          } else if (detailsOpen === "") {
            setDetailsOpen("right");
          }
        };
        return (
          <Layout
            header={{
              id: "Header",
              content: (
                <Bar
                  contentAlign="center"
                  padding="2x"
                  left={{
                    content: (
                      <Command
                        icon="left"
                        label="Toggle"
                        onClick={toggleLeft}
                      />
                    ),
                  }}
                  right={{
                    content: (
                      <Command
                        icon="right"
                        label="Toggle"
                        align="right"
                        onClick={toggleDetails}
                      />
                    ),
                  }}
                />
              ),
            }}
            left={{
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{
              content: (
                <Template
                  id="Details"
                  template="B_01"
                  A={{
                    id: "A",
                    content: <Mapbox />,
                  }}
                  B={{
                    id: "B",
                    content: (
                      <React.Fragment>
                        <MockCardGrid />
                        <MockDetails offcanvas={detailsOpen} />
                      </React.Fragment>
                    ),
                  }}
                />
              ),
            }}
            bottom={{
              content: <MockTable />,
              visible: bottomOpen,
            }}
          />
        );
      });
    },
  )
  .add(
    "Full / Interactive (configured)",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(false);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };
        const [rightOpen, setRightOpen] = useState(false);
        const toggleRight = () => { setRightOpen(!rightOpen); };
        const [bottomOpen, setBottomOpen] = useState(false);
        const toggleBottom = () => { setBottomOpen(!bottomOpen); };
        return (
          <Layout
            header={{
              id: "Header",
              content: (
                <Bar
                  contentAlign="center"
                  padding="2x"
                  left={{
                    content: (
                      <Command
                        icon="left"
                        label="Toggle"
                        onClick={toggleLeft}
                      />
                    ),
                  }}
                  center={{
                    content: (
                      <Title text="Header" />
                    ),
                  }}
                  right={{
                    content: (
                      <Command
                        icon="right"
                        label="Toggle"
                        align="right"
                        onClick={toggleRight}
                      />
                    ),
                  }}
                />
              ),
            }}
            left={{
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{ content: <Mapbox /> }}
            right={{
              content: <MockDetails />,
              visible: rightOpen,
            }}
            bottom={{
              content: <MockTable />,
              visible: bottomOpen,
            }}
            footer={{
              id: "Footer",
              content: (
                <Bar
                  contentAlign="center"
                  padding="2x"
                  left={{
                    content: (
                      <Title text="Footer" />
                    ),
                  }}
                  center={{
                    content: (
                      <Command
                        icon="down"
                        label="Toggle"
                        onClick={toggleBottom}
                      />
                    ),
                  }}
                  /** Don't do this 'div workaround'.
                  * TODO: We will address alignment issues in Bar
                  */
                  right={{
                    content: <div />,
                  }}
                />
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Single Region Active (small screens)",
    () => {
      return React.createElement(() => {
        const [visibility, setVisibility] = useState({
          left: false,
          right: false,
          bottom: false,
        });
        const toggleLeft = () => {
          setVisibility({ left: !visibility.left, right: false, bottom: false });
        };
        const toggleRight = () => {
          setVisibility({ left: false, right: !visibility.right, bottom: false });
        };
        const toggleBottom = () => {
          setVisibility({ left: false, right: false, bottom: !visibility.bottom });
        };

        return (
          <Layout
            header={{
              id: "Header",
              content: (
                <Bar
                  contentAlign="center"
                  padding="2x"
                  left={{
                    content: (
                      <Command
                        icon="left"
                        label="Toggle"
                        onClick={toggleLeft}
                      />
                    ),
                  }}
                  center={{
                    content: (
                      <Title text="Header" />
                    ),
                  }}
                  right={{
                    content: (
                      <Command
                        icon="right"
                        label="Toggle"
                        align="right"
                        onClick={toggleRight}
                      />
                    ),
                  }}
                />
              ),
            }}
            left={{
              content: <MockMenu />,
              visible: visibility.left,
            }}
            main={{ content: <Mapbox /> }}
            right={{
              content: <MockDetails />,
              visible: visibility.right,
            }}
            bottom={{
              content: <MockTable />,
              visible: visibility.bottom,
            }}
            footer={{
              id: "Footer",
              content: (
                <Bar
                  contentAlign="center"
                  padding="2x"
                  left={{
                    content: (
                      <Title text="Footer" />
                    ),
                  }}
                  center={{
                    content: (
                      <Command
                        icon="down"
                        label="Toggle"
                        onClick={toggleBottom}
                      />
                    ),
                  }}
                  /** Don't do this 'div workaround'.
                  * TODO: We will address alignment issues in Bar
                  */
                  right={{
                    content: <div />,
                  }}
                />
              ),
            }}
          />
        );
      });
    },
  );
