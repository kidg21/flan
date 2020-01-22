/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { screen } from "Variables";
import Tabs, { Tab } from "blocks/Tabs";
import Card, { CardList } from "layout/Card";
import Layout from "layout/Layout";
import Panel from "layout/Panel";
import Form, { Section } from "layout/Form";
import TextInput from "atoms/TextInput";
import { CheckboxGroup } from "atoms/Checkbox";
import { RadioGroup } from "atoms/Radio";
import SelectMenu from "atoms/SelectMenu";

const LayoutNotes = markdown.require("./Layout.md");

const shortBoxes = [
  {
    id: "box-1",
    label: "Label 1",
  },
  {
    id: "box-2",
    label: "Label 2 (disabled)",
    disabled: true,
  },
  {
    id: "box-3",
    label: "Label 3",
  },
  {
    id: "box-4",
    label: "Label 4",
  },
];
const longBoxes = [
  {
    id: "box_long",
    label:
      "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself.",
  },
  {
    id: "box_long2",
    label:
      "Enough with these long labels already...put it on your blog, Shakespeare.",
  },
];
const shortRadios = [
  {
    id: "radio-1",
    name: "radio-group",
    value: "1",
    label: "Label 1",
  },
  {
    id: "radio-2",
    name: "radio-group",
    value: "2",
    label: "Label 2 (disabled)",
  },
  {
    id: "radio-3",
    name: "radio-group",
    value: "3",
    label: "Label 3",
    disabled: true,
  },
  {
    id: "radio-4",
    name: "radio-group",
    value: "4",
    label: "Label 4",
  },
];
const longRadios = [
  {
    id: "radio_long",
    name: "radio-group",
    value: "5",
    label:
      "My label is really long so, if I don't wrap nicely, you may want to give me a row all to myself.",
    disabled: true,
  },
  {
    id: "radio_long2",
    name: "radio-group",
    value: "6",
    label:
      "Enough with these long labels already...put it on your blog, Shakespeare.",
  },
];
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "pistachio", label: "Pistachio" },
  { value: "mint chocolate chip", label: "Mint Chocolate Chip" },
  { value: "cookie dough", label: "Cookie Dough" },
];

storiesOf("Layout |App Layout/", module)
  .addParameters({
    info: {
      text: "Layout info goes here...",
    },
    notes: {
      markdown: LayoutNotes,
    },
  })

  .add(
    "Documentation",
    withInfo()(() => {
      return <Layout height="25%" />;
    }),
  )

  .add("2 Panel - Row", () => {
    return (
      <Layout>
        <Layout width="70%" />
        <Layout width="30%" right="0" backgroundColor="lightyellow" />
      </Layout>
    );
  })

  .add("2 Panel - Column", () => {
    return (
      <Layout>
        <Layout height="60%" />
        <Layout height="40%" top="60%" backgroundColor="lightgreen" />
      </Layout>
    );
  })

  .add("3 Panel", () => {
    return (
      <Layout>
        <Layout width="70%" height="60%" />
        <Layout
          width="70%"
          height="40%"
          top="60%"
          backgroundColor="lightgreen"
        />
        <Layout width="30%" right="0" backgroundColor="lightyellow" />
      </Layout>
    );
  })

  .add("Standard Layout (Containers)", () => {
    return React.createElement(() => {
      // Left
      const [innerState, setInnerState] = useState("leftCover");
      const [activeLeft, setActiveLeft] = useState(false);
      function toggleLeft() {
        if (innerState === "leftUncover") {
          setInnerState("leftCover");
          setActiveLeft(false);
        } else {
          setInnerState("leftUncover");
          setActiveLeft(true);
        }
        return false;
      }
      // Main
      const [mainState, setMainState] = useState("rightOffscreen");
      // Right
      const [rightState, setRightState] = useState("rightOffscreen");
      const [activeRight, setActiveRight] = useState(false);
      function toggleRight() {
        if (rightState === "rightOnscreen" || rightState === "fullScreen") {
          setRightState("rightOffscreen");
          setMainState("rightOffscreen");
          setActiveRight(false);
        } else {
          setRightState("rightOnscreen");
          setMainState("rightOnscreen");
          setActiveRight(true);
          setInnerState("leftCover");
          setActiveLeft(false);
        }
        return false;
      }
      function toggleRightFullscreen() {
        if (rightState === "fullScreen") {
          setRightState("rightOnscreen");
        } else {
          setRightState("fullScreen");
        }
        return false;
      }
      // Middle
      const [middleState, setMiddleState] = useState("bottomOffscreen");
      // Bottom
      const [bottomState, setBottomState] = useState("bottomOffscreen");
      const [activeBottom, setActiveBottom] = useState(false);
      function toggleBottom() {
        if (bottomState === "bottomOnscreen" || bottomState === "fullScreen") {
          setBottomState("bottomOffscreen");
          setMiddleState("bottomOffscreen");
          setActiveBottom(false);
        } else {
          setBottomState("bottomOnscreen");
          setMiddleState("bottomOnscreen");
          setActiveBottom(true);
        }
        return false;
      }
      function toggleBottomFullscreen() {
        if (bottomState === "fullScreen") {
          setBottomState("bottomOnscreen");
        } else {
          setBottomState("fullScreen");
        }
        return false;
      }
      // Controls
      const screenSmall = window.matchMedia(screen.small);
      const screenMedium = window.matchMedia(screen.medium);
      let controlsAlign;
      if (screenMedium.matches) {
        controlsAlign = "right";
      } else if (screenSmall.matches) {
        controlsAlign = "bottom";
      }

      return (
        <Layout id="outer" type="outerWrapper">
          <Layout id="inner" type="innerWrapper" state={innerState}>
            <Layout id="left" type="leftWrapper" />
            <Layout id="main" type="mainWrapper" state={mainState}>
              <Layout id="middle" type="middleWrapper" state={middleState} />
              <Layout id="bottom" type="bottomWrapper" state={bottomState}>
                <Card>
                  <Tabs align="bottom">
                    <Tab
                      tabLabel="Toggle Bottom Fullscreen"
                      onClick={toggleBottomFullscreen}
                    />
                  </Tabs>
                </Card>
              </Layout>
            </Layout>
            <Layout id="right" type="rightWrapper" state={rightState}>
              <Card>
                <Tabs align="bottom">
                  <Tab
                    tabLabel="Toggle Right Fullscreen"
                    onClick={toggleRightFullscreen}
                  />
                </Tabs>
              </Card>
            </Layout>
          </Layout>
          <Layout id="controls" type="controlsWrapper">
            <Tabs align={controlsAlign}>
              <Tab
                tabLabel="Toggle Left Wrapper"
                onClick={toggleLeft}
                isSelected={activeLeft}
              />
              <Tab
                tabLabel="Toggle Right Wrapper"
                onClick={toggleRight}
                isSelected={activeRight}
              />
              <Tab
                tabLabel="Toggle Bottom Wrapper"
                onClick={toggleBottom}
                isSelected={activeBottom}
              />
            </Tabs>
          </Layout>
        </Layout>
      );
    });
  })

  .add("Standard Layout (Content)", () => {
    return React.createElement(() => {
      // Left
      const [innerState, setInnerState] = useState("leftCover");
      const [activeLeft, setActiveLeft] = useState(false);
      function toggleLeft() {
        if (innerState === "leftUncover") {
          setInnerState("leftCover");
          setActiveLeft(false);
        } else {
          setInnerState("leftUncover");
          setActiveLeft(true);
        }
        return false;
      }
      // Main
      const [mainState, setMainState] = useState("rightOffscreen");
      // Right
      const [rightState, setRightState] = useState("rightOffscreen");
      const [activeRight, setActiveRight] = useState(false);
      function toggleRight() {
        if (rightState === "rightOnscreen" || rightState === "fullScreen") {
          setRightState("rightOffscreen");
          setMainState("rightOffscreen");
          setActiveRight(false);
        } else {
          setRightState("rightOnscreen");
          setMainState("rightOnscreen");
          setActiveRight(true);
          setInnerState("leftCover");
          setActiveLeft(false);
        }
        return false;
      }
      function toggleRightFullscreen() {
        if (rightState === "fullScreen") {
          setRightState("rightOnscreen");
        } else {
          setRightState("fullScreen");
        }
        return false;
      }
      // Middle
      const [middleState, setMiddleState] = useState("bottomOffscreen");
      // Bottom
      const [bottomState, setBottomState] = useState("bottomOffscreen");
      const [activeBottom, setActiveBottom] = useState(false);
      function toggleBottom() {
        if (bottomState === "bottomOnscreen" || bottomState === "fullScreen") {
          setBottomState("bottomOffscreen");
          setMiddleState("bottomOffscreen");
          setActiveBottom(false);
        } else {
          setBottomState("bottomOnscreen");
          setMiddleState("bottomOnscreen");
          setActiveBottom(true);
        }
        return false;
      }
      function toggleBottomFullscreen() {
        if (bottomState === "fullScreen") {
          setBottomState("bottomOnscreen");
        } else {
          setBottomState("fullScreen");
        }
        return false;
      }
      // Controls
      const screenSmall = window.matchMedia(screen.small);
      const screenMedium = window.matchMedia(screen.medium);
      let controlsAlign;
      if (screenMedium.matches) {
        controlsAlign = "right";
      } else if (screenSmall.matches) {
        controlsAlign = "bottom";
      }

      return (
        <Layout id="outer" type="outerWrapper">
          <Layout id="inner" type="innerWrapper" state={innerState}>
            <Layout id="left" type="leftWrapper">
              <Panel>
                <Form
                  title="Form Header"
                  subtitle="This is the subtitle"
                  description="Just think about these things in your mind - then bring them into your world. Isn't that fantastic?  All you need to paint is a few tools, a little instruction, and a vision in your mind."
                >
                  <Section title="Group 1">
                    <TextInput
                      label="First Name"
                      placeholder="John"
                      helpText="The one that your parents gave you"
                    />
                    <TextInput
                      label="Last Name"
                      placeholder="Williams"
                      helpText="The one that comes after.."
                    />
                  </Section>
                  <Section title="Group 2">
                    <CheckboxGroup
                      id="Section Name"
                      label="Checkbox Group Label"
                      data={shortBoxes}
                      helpText="Hang in there, buddy, I'm here to help!"
                      columns="2"
                    />
                    <CheckboxGroup data={longBoxes} columns="1" />
                    <SelectMenu
                      multiSelect
                      label="Multi-Select"
                      placeholder="Choose One Or More..."
                      helpText="Help text for the SelectMenu component"
                      options={options}
                    />
                  </Section>
                  <Section title="Group 3">
                    <RadioGroup
                      id="Section Name"
                      label="Radio Group Label"
                      data={shortRadios}
                      helpText="Hang in there, buddy, I'm here to help!"
                      columns="2"
                    />
                    <RadioGroup data={longRadios} columns="1" />
                  </Section>
                </Form>
              </Panel>
            </Layout>

            <Layout id="main" type="mainWrapper" state={mainState}>
              <Layout id="middle" type="middleWrapper" state={middleState}>
                <Mapbox />
              </Layout>

              <Layout id="bottom" type="bottomWrapper" state={bottomState}>
                <Panel
                  header={
                    <Card>
                      <Tabs>
                        <Tab tabLabel="List" onClick={toggleBottomFullscreen} />
                      </Tabs>
                    </Card>
                  }
                >
                  <CardList>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                  </CardList>
                </Panel>
              </Layout>
            </Layout>

            <Layout id="right" type="rightWrapper" state={rightState}>
              <Panel
                header={
                  <Card>
                    <Tabs>
                      <Tab tabLabel="Filters" onClick={toggleRightFullscreen} />
                    </Tabs>
                  </Card>
                }
              />
            </Layout>
          </Layout>

          <Layout id="controls" type="controlsWrapper">
            <Tabs align={controlsAlign}>
              <Tab
                icon="location"
                tabLabel="Property"
                onClick={toggleLeft}
                isSelected={activeLeft}
              // noBorder
              />
              <Tab
                icon="layers"
                tabLabel="Layers"
              // onClick={toggleLeft}
              // isSelected={activeLeft}
              // noBorder
              />
              <Tab
                icon="filter"
                tabLabel="Filters"
                onClick={toggleRight}
                isSelected={activeRight}
              // noBorder
              />

              <Tab
                icon="drawings"
                tabLabel="Draw"
              // onClick={toggleLeft}
              // isSelected={activeLeft}
              // noBorder
              />
              <Tab
                icon="list"
                tabLabel="List"
                onClick={toggleBottom}
                isSelected={activeBottom}
              // noBorder
              />
            </Tabs>
          </Layout>
        </Layout>
      );
    });
  });
