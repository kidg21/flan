/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Panel from "layout/Panel";
import Card, { CardGrid } from "elements/Card";
import Title from "base/Typography";
import Image from "atoms/Image";
import Template from "./Template.jsx";

const TemplateNotes = markdown.require("./Template.md");

storiesOf("Layout |App Layout/", module)
  .addParameters({
    info: {
      text: "Layout info goes here...",
    },
    notes: {
      markdown: TemplateNotes,
    },
  })

  .add(
    "Template (base)",
    () => {
      return (
        <Template
          header
          left
          main
          right
          footer={{content: ""}}
        />
      );
    },
  )
  .add(
    "Template (configured)",
    () => {
      return (
        <Template
          header={{
            iconLeft: "left",
            content: <Title text="Header Title Goes Here" />,
            iconRight: "right"
          }}
          left={{
            content:
              <Panel>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
                  alt="This is alt text for this image"
                  width={"100%"}
                />
              </Panel>,
          }}
          main={
            <Panel
              id="Panel"
            >
              <CardGrid>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </CardGrid>
            </Panel>
          }
          right={{
            content:
              <Panel>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
                  alt="This is alt text for this image"
                  width={"100%"}
                />
              </Panel>,
          }}
          footer={{
            content: <Title text="Primary footer content goes here." />,
          }}
        />
      );
    },
  );
