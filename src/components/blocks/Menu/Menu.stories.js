/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { expect } from "chai";
import { mount, shallow } from "enzyme";
import { spy } from "sinon";

import { ThemeProvider } from "styled-components";
import { DMPTheme } from "Variables";

import Grid from "layout/Grid";
import { Padding } from "helpers/Display";
import Menu from "blocks/Menu";
import Card from "elements/Card";
import Bar from "blocks/Bar";

const data = [
  {
    id: "a",
    onClick: () => {
      console.log("clicked Save");
    },
    label: "Save",
  },
  {
    id: "b",
    onClick: () => {
      console.log("clicked Filter");
    },
    label: "Filter",
  },
  {
    id: "c",
    onClick: () => {
      console.log("clicked Share");
    },
    label: "Share",
    disabled: true,
  },
  {
    id: "d",
    onClick: () => {
      console.log("clicked Refresh");
    },
    label: "Refresh",
  },
  {
    id: "e",
    onClick: () => {
      console.log("clicked Layer");
    },
    label: "Layer",
  },
];

const nestedData = [
  {
    id: "a",
    onClick: () => {
      console.log(`clicked a`);
    },
    label: "Save",
  },
  {
    id: "b",
    onClick: () => {
      console.log(`clicked b`);
    },
    label: "Filter",
    commands: [
      {
        id: "b.0",
        onClick: () => {
          console.log("clicked b.0");
        },
        label: "Filter 0.0",
      },
      {
        id: "b.1",
        onClick: () => {
          console.log("clicked b.1");
        },
        label: "Filter 1.0",
        commands: [
          {
            id: "b.1.0",
            onClick: () => {
              console.log("clicked b.1.0");
            },
            label: "Filter 1.1.1",
          },
        ],
      },
    ],
  },
  {
    id: "c",
    onClick: () => {
      console.log(`clicked c`);
    },
    label: "Share",
  },
  {
    id: "d",
    onClick: () => {
      console.log(`clicked d`);
    },
    label: "Refresh",
  },
  {
    id: "e",
    onClick: () => {
      console.log(`clicked e`);
    },
    label: "Layer",
  },
  {
    id: "f",
    onClick: () => {
      console.log(`clicked b`);
    },
    label: "Filter 2",
    commands: [
      {
        id: "f.0",
        onClick: () => {
          console.log("clicked b.0");
        },
        label: "Filter 0.0",
      },
      {
        id: "f.1",
        onClick: () => {
          console.log("clicked b.1");
        },
        label: "Filter 1.0",
      },
    ],
  },
];

storiesOf("Blocks|Menu", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  // .add("Trial", () => <TrialMenu />)
  .add("Documentation", () => {
    const story = (
      <Card>
        <Bar right={<Menu id="menu-story" data={data} position="bottomLeft" />} />
      </Card>
    );

    specs(() => {
      let output;
      const spyClick = spy(() => {});
      const testData = [
        { id: "a", label: "A", onClick: spyClick },
        { id: "b", label: "B", onClick: spyClick, disabled: true },
        { id: "c", label: "C", commands: [{ id: "c0", label: "C0", onClick: spyClick }, { id: "c1", label: "C1" }] },
      ];
      return describe("Menu Tests", () => {
        before(() => {
          output = mount(<Menu id="menu-test" data={testData} />, {
            wrappingComponent: ThemeProvider,
            wrappingComponentProps: { theme: DMPTheme },
          });
        });

        after(() => {
          output.unmount();
        });

        it("everything is fine :D", () => {
          expect(true).to.be.true;
        });

        it("should make the menu visible on click", () => {
          expect(output.find("div#menupopper-menu-test").length).to.equal(0);
          output.find("Menu").childAt(0).simulate("click"); // open menu
          expect(output.find("div#menupopper-menu-test").length).to.equal(1);
          expect(output.find("Menu").children().length).to.equal(2);
        });

        it("should create list items from the data prop", () => {
          expect(output.find("li").length).to.equal(3);
          for (let i = 0; i < testData.length; i++) {
            const item = output.find(`li#item-${testData[i].id}`).childAt(0);
            expect(item.prop("title")).to.equal(testData[i].label);
            expect(item.prop("disabled")).to.equal(!!testData[i].disabled);
          }
        });

        it("should close when clicking outside the menu", () => {
          output.find("Menu").childAt(0).simulate("click"); // close menu
          expect(output.find("div#menupopper-menu-test").length).to.equal(0);
          expect(output.find("Menu").children().length).to.equal(1);
        });

        it("should change the open direction", () => {
          output.find("Menu").childAt(0).simulate("click"); // open menu
          let menu = output.find("#menu-test").at(1);
          expect(menu.prop("transform")).to.equal("");
          expect(menu.prop("submenuDirection")).to.equal("right");

          output.setProps({ position: "topLeft" });
          menu = output.find("#menu-test").at(1);
          expect(menu.prop("transform")).to.equal("translate(-100%, -110%)");
          expect(menu.prop("submenuDirection")).to.equal("left");

          output.setProps({ position: "topRight" });
          menu = output.find("#menu-test").at(1);
          expect(menu.prop("transform")).to.equal("translate(10%, -110%)");
          expect(menu.prop("submenuDirection")).to.equal("right");

          output.setProps({ position: "topCenter" });
          menu = output.find("#menu-test").at(1);
          expect(menu.prop("transform")).to.equal("translate(-50%, -110%)");
          expect(menu.prop("submenuDirection")).to.equal("right");

          output.setProps({ position: "bottomLeft" });
          menu = output.find("#menu-test").at(1);
          expect(menu.prop("transform")).to.equal("translate(-100%, -5%)");
          expect(menu.prop("submenuDirection")).to.equal("left");

          output.setProps({ position: "bottomCenter" });
          menu = output.find("#menu-test").at(1);
          expect(menu.prop("transform")).to.equal("translate(-45%, -5%)");
          expect(menu.prop("submenuDirection")).to.equal("right");

          output.setProps({ position: "bottomRight" });
          menu = output.find("#menu-test").at(1);
          expect(menu.prop("transform")).to.equal("");
          expect(menu.prop("submenuDirection")).to.equal("right");
        });

        it("should click an entry and close the menu", () => {
          output.find("li#item-a").simulate("click"); // close menu
          expect(output.find("div#menupopper-menu-test").length).to.equal(0);
          expect(output.find("Menu").children().length).to.equal(1);
          expect(spyClick.withArgs("a").callCount).to.equal(1);
        });

        it("should not call onClick on a disabled entry", () => {
          output.find("Menu").childAt(0).simulate("click"); // open menu
          output.find("li#item-b").simulate("click"); // close menu
          expect(output.find("div#menupopper-menu-test").length).to.equal(0);
          expect(output.find("Menu").children().length).to.equal(1);
          expect(spyClick.withArgs("b").callCount).to.equal(0);
        });

        it("should open nested menu on mouseOver", () => {
        // positioning should be correctly updated
          output.find("Menu").childAt(0).simulate("click"); // open menu

          // simulate mouseOver cannot mock getBoundingClientRect/offsetParent easily
          output.find("li#item-c").prop("onMouseOver")({ // open nested menu
            target: {
              value: "test",
            },
            currentTarget: {
              offsetParent: {
                getBoundingClientRect: () => {
                  return { top: 100, width: 150 };
                },
              },
              getBoundingClientRect: () => {
                return { top: 50, width: 150 };
              },
            },
          });
          output.update();
          expect(output.find("div#menupopper-c").length).to.equal(1);
          expect(output.find("ul#listwrapper-c").children().length).to.equal(2);
          let item = output.find("li#item-c0");
          expect(item.length).to.equal(1);
          expect(item.childAt(0).prop("title")).to.equal(testData[2].commands[0].label);
          item = output.find("li#item-c1");
          expect(item.length).to.equal(1);
          expect(item.childAt(0).prop("title")).to.equal(testData[2].commands[1].label);
        });

        it("should click a nested entry and close all menus", () => {
          output.find("li#item-c0").simulate("click");
          expect(output.find("div#menupopper-menu-test").length).to.equal(0);
          expect(output.find("Menu").children().length).to.equal(1);
          expect(spyClick.withArgs("c0").callCount).to.equal(1);
        });
      });
    });
    return story;
  })
  .add("Directions", () => {
    return (
      <Grid columns="3">
        <Menu id="menu-bottomRight" data={data} position="bottomRight" />
        <Menu id="menu-bottomCenter" data={data} position="bottomCenter" />
        <Menu id="menu-bottomLeft" data={data} position="bottomLeft" />
        <Menu id="menu-topRight" data={data} position="topRight" />
        <Menu id="menu-topCenter" data={data} position="topCenter" />
        <Menu id="menu-topLeft" data={data} position="topLeft" />
      </Grid>
    );
  })
  .add("Nested Menu Example", () => {
    return (
      <Card>
        <Bar
          center={<Menu id="menu-nested" data={nestedData} position="bottomRight" />}
        />
      </Card>
    );
  });
