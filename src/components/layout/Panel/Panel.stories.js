/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { FullScreen } from "helpers/Display";
import Bar from "layout/Bar";
import Card, { CardGrid } from "elements/Card";
import Panel from "layout/Panel";
import Title from "base/Typography";
import SearchBar from "blocks/Search";

storiesOf("Layout|Panel", module)
  .addDecorator(FullScreen)
  .addDecorator(checkA11y)
  .add("Panel", () => {
    return <Panel />;
  })
  .add("Panel with header", () => {
    return (
      <Panel
        header={
          <Bar
            contentAlign="center"
            padding="2x"
            center={{
              content: <Title text="Header" />,
              align: "center",
            }}
          />}
      />
    );
  })
  .add("Panel with Search in header", () => {
    const results = [
      {
        title: "White House",
        description: "123 Malibu Drive, CA 92660",
      },
      {
        title: "Orange House",
        description: "1224 Malibu Drive, CA 92660",
      },
      {
        title: "Red House",
        description: "123 Malibu Drive, CA 92660",
      },
      {
        title: "Green House",
        description: "123 Malibu Drive, CA 92660",
      },
      {
        title: "Black House",
        description: "123 Malibu Drive, CA 92660",
      },
      {
        title: "Blue House",
        description: "123 Malibu Drive, CA 92660",
      },
      {
        title: "Address",
        description: "123 Malibu Drive, CA 92660",
      },
      {
        title: "APN",
        description: "123 Malibu Drive, CA 92660",
      },
      {
        title: "Owner",
        description: "123 Malibu Drive, CA 92660",
      },
      {
        title: "Address",
        description: "123 Malibu Drive, CA 92660",
      },
      {
        title: "Address",
        description: "123 Malibu Drive, CA 92660",
      },
      {
        title: "APN",
        description: "123 Malibu Drive, CA 92660",
      },
      {
        title: "Owner",
        description: "123 Malibu Drive, CA 92660",
      },
      {
        title: "Address",
        description: "123 Malibu Drive, CA 92660",
      },
    ];
    const [stateResults, setResultsState] = useState(false);
    const toggleResults = () => { setResultsState(!stateResults); };

    return React.createElement(() => {
      return (
        <Panel
          padding="0"
          header={(
            <SearchBar
              id="Search_Error"
              placeholder="Search Location"
              error2
              results={stateResults ? results : null}
              onSearch={toggleResults}
            />
          )}
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
      );
    });
  })
  .add("Panel with footer", () => {
    return (
      <Panel
        footer={
          <Bar
            contentAlign="center"
            padding="2x"
            center={{
              content: <Title text="Footer" />,
              align: "center",
            }}
          />}
      />
    );
  })
  .add("Panel with header/footer", () => {
    return (
      <Panel
        header={
          <Bar
            contentAlign="center"
            padding="2x"
            center={{
              content: <Title text="Header" />,
              align: "center",
            }}
          />}
        footer={
          <Bar
            contentAlign="center"
            padding="2x"
            center={{
              content: <Title text="Footer" />,
              align: "center",
            }}
          />}
      />
    );
  })
  .add("Panel - with Card List", () => {
    return (
      <Panel
        id="Panel"
        header={
          <Bar
            contentAlign="center"
            padding="2x"
            center={{
              content: <Title text="Header" />,
              align: "center",
            }}
          />}
        footer={
          <Bar
            contentAlign="center"
            padding="2x"
            center={{
              content: <Title text="Footer" />,
              align: "center",
            }}
          />}
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
    );
  });

// Knob Values
const knobGroups = ["Panel"];
const offCanvas = {
  "On Canvas": "",
  "Off Canvas-Top": "top",
  "Off Canvas-Right": "right",
  "Off Canvas-Bottom": "bottom",
  "Off Canvas-Left": "left",
};

export default {
  title: "Layout|Panel/Tests",
  component: Panel,
  parameters: {
    docs: { page: null },
  },
  includeStories: ["Knobs"],
  decorators: [FullScreen, withKnobs],
};

export const Knobs = () => {
  const offcanvas = options("Off Canvas", offCanvas, "", { display: "radio" }, knobGroups[0]);
  return (
    <Panel
      id="Panel"
      offcanvas={offcanvas}
      header={
        <Bar
          contentAlign="center"
          padding="2x"
          center={{
            content: <Title text="Header" />,
            align: "center",
          }}
        />}
      footer={
        <Bar
          contentAlign="center"
          padding="2x"
          center={{
            content: <Title text="Footer" />,
            align: "center",
          }}
        />}
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
  );
};
Knobs.story = {
  parameters: {
    parameters: {
      viewMode: "story",
    },
  },
};
