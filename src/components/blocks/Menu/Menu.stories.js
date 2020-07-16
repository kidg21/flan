/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import Menu from "blocks/Menu";
import { Padding } from "helpers/Display";
import Grid from "layout/Grid";
import Button from "atoms/Button";

export default {
  title: "Atoms/Menu",
  includeStories: [],
  decorators: [Padding],
};

const data = [
  { id: "option 1", label: "option 1", onClick: () => { /* alert("option 1"); */ } },
  {
    id: "option 2", label: "option 2", onClick: () => { /* alert("option 2"); */ },
    data: [
      { id: "nested option 1", label: "nested option 1", onClick: () => { /* alert("nested option 1"); */ } },
      {
        id: "nested option 2", label: "nested option 2", onClick: () => { /* alert("nested option 2"); */ },
        data: [
          { id: "nested option 21", label: "nested option 21", onClick: () => { /* alert("nested option 21"); */ } },
          { id: "nested option 22", label: "nested option 22", onClick: () => { /* alert("nested option 22"); */} },
        ]
      },
    ]
  },
  { id: "option 3", label: "option 3", onClick: () => { alert("option 3"); } },
];

export const SimpleMenu = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Menu data={data} visible={visible} onClick={() => { setVisible(true); }} onClose={() => { setVisible(false); }} />
  );
};

export const Position = () => {
  const [visibleMenus, setVisibleMenus] = useState({});
  return (
    <Grid columns="2">
      <Menu
        id="menu-bottomRight"
        portal={false}
        data={data}
        visible={visibleMenus.bottomRight}
        onClick={() => {
          setVisibleMenus((visible) => {
            return { ...visible, bottomRight: !visible.bottomRight };
          });
        }}
        onClose={() => {
          setVisibleMenus((visible) => {
            return { ...visible, bottomRight: false };
          });
        }}
      />
      <Menu
        id="menu-bottomLeft"
        position="bottomLeft"
        portal={false}
        data={data}
        visible={visibleMenus.bottomLeft}
        onClick={() => {
          setVisibleMenus((visible) => {
            return { ...visible, bottomLeft: !visible.bottomLeft };
          });
        }}
        onClose={() => {
          setVisibleMenus((visible) => {
            return { ...visible, bottomLeft: false };
          });
        }}
      />
      {/* new row */}
      <Menu
        id="menu-topRight"
        position="topRight"
        data={data}
        visible={visibleMenus.topRight}
        onClick={() => {
          setVisibleMenus((visible) => {
            return { ...visible, topRight: !visible.topRight };
          });
        }}
        onClose={() => {
          setVisibleMenus((visible) => {
            return { ...visible, topRight: false };
          });
        }}
      />
      <Menu
        id="menu-topLeft"
        position="topLeft"
        portal
        data={data}
        visible={visibleMenus.topLeft}
        onClick={() => {
          setVisibleMenus((visible) => {
            return { ...visible, topLeft: !visible.topLeft };
          });
        }}
        onClose={() => {
          setVisibleMenus((visible) => {
            return { ...visible, topLeft: false };
          });
        }}
      />
    </Grid>
  );
};

// /* eslint-disable linebreak-style */
// /* eslint-disable react/jsx-filename-extension, security/detect-object-injection */
// import React from "react";

// import { expect } from "chai";
// import { mount } from "enzyme";
// import { spy } from "sinon";

// import { ThemeProvider } from "styled-components";
// import { DMPTheme } from "Variables";

// import Grid from "layout/Grid";
// import { Padding } from "helpers/Display";
// import Menu from "blocks/Menu";
// import Card from "elements/Card";
// import Bar from "layout/Bar";

// const data = [
//   {
//     id: "a",
//     onClick: () => {
//       console.log("clicked Save");
//     },
//     label: "Save",
//     icon: "save",
//   },
//   {
//     id: "b",
//     onClick: () => {
//       console.log("clicked Filter");
//     },
//     label: "Filter",
//   },
//   {
//     id: "c",
//     onClick: () => {
//       console.log("clicked Share");
//     },
//     label: "Share",
//   },
//   {
//     id: "d",
//     onClick: () => {
//       console.log("clicked Refresh");
//     },
//     label: "Refresh",
//   },
//   {
//     id: "e",
//     onClick: () => {
//       console.log("clicked Layer");
//     },
//     label: "Layer",
//   },
// ];

// storiesOf("Blocks|Menu", module)
//   .addDecorator(Padding)
//   .add("Documentation", () => {
//     return (
//       <Card>
//         <Bar right={<Menu id="menu-story" data={data} position="bottomLeft" />} />
//       </Card>
//     );
//   })
//   .add("Directions", () => {
//     return (
//       <Grid columns="3">
//         <Menu id="menu-bottomRight" data={data} position="bottomRight" />
//         <Menu id="menu-bottomCenter" data={data} position="bottomCenter" />
//         <Menu id="menu-bottomLeft" data={data} position="bottomLeft" />
//         <Menu id="menu-topRight" data={data} position="topRight" />
//         <Menu id="menu-topCenter" data={data} position="topCenter" />
//         <Menu id="menu-topLeft" data={data} position="topLeft" />
//       </Grid>
//     );
//   })
//   .add("Nested Menu Example", () => {
//     const spyClick = spy(() => { });
//     const testData = [{
//       id: "a",
//       label: "A",
//       icon: "save",
//       onClick: spyClick,
//     }, {
//       id: "b",
//       label: "B",
//       onClick: spyClick,
//       disabled: true,
//     }, {
//       id: "c",
//       label: "C",
//       commands: [{ id: "c0", label: "C0", onClick: spyClick }, { id: "c1", label: "C1" }],
//     }];

//     const story = <Menu id="menu-test" data={testData} />;

//     specs(() => {
//       let output;
//       return describe("Menu Tests", () => {
//         before(() => {
//           output = mount(story, {
//             wrappingComponent: ThemeProvider,
//             wrappingComponentProps: { theme: DMPTheme },
//           });
//         });

//         after(() => {
//           output.unmount();
//         });

//         it("everything is fine :D", () => {
//           expect(true).to.be.true;
//         });

//         it("should make the menu visible on click", () => {
//           expect(output.find("div#menupopper-menu-test")).to.have.lengthOf(0);
//           output.find("Menu").childAt(0).simulate("click"); // open menu
//           expect(output.find("div#menupopper-menu-test")).to.have.lengthOf(1);
//           expect(output.find("Menu").children()).to.have.lengthOf(2);
//         });

//         it("should create list items from the data prop", () => {
//           expect(output.find("li")).to.have.lengthOf(3);
//           for (let i = 0; i < testData.length; i++) {
//             const item = output.find(`li#item-${testData[i].id}`).childAt(0);
//             expect(item.props()).to.deep.include({
//               title: testData[i].label,
//               disabled: !!testData[i].disabled,
//               pre: { icon: testData[i].icon },
//             });
//           }
//         });

//         it("should close when clicking outside the menu", () => {
//           output.find("Menu").childAt(0).simulate("click"); // close menu
//           expect(output.find("div#menupopper-menu-test")).to.have.lengthOf(0);
//           expect(output.find("Menu").children()).to.have.lengthOf(1);
//         });

//         it("should change the open direction", () => {
//           output.find("Menu").childAt(0).simulate("click"); // open menu
//           let menu = output.find("#menu-test").at(1);
//           expect(menu.props()).to.include({
//             transform: "",
//             submenuDirection: "right",
//           });

//           output.setProps({ position: "topLeft" });
//           menu = output.find("#menu-test").at(1);
//           expect(menu.props()).to.include({
//             transform: "translate(-100%, -110%)",
//             submenuDirection: "left",
//           });

//           output.setProps({ position: "topRight" });
//           menu = output.find("#menu-test").at(1);
//           expect(menu.props()).to.include({
//             transform: "translate(10%, -110%)",
//             submenuDirection: "right",
//           });

//           output.setProps({ position: "topCenter" });
//           menu = output.find("#menu-test").at(1);
//           expect(menu.props()).to.include({
//             transform: "translate(-50%, -110%)",
//             submenuDirection: "right",
//           });

//           output.setProps({ position: "bottomLeft" });
//           menu = output.find("#menu-test").at(1);
//           expect(menu.props()).to.include({
//             transform: "translate(-100%, -5%)",
//             submenuDirection: "left",
//           });

//           output.setProps({ position: "bottomCenter" });
//           menu = output.find("#menu-test").at(1);
//           expect(menu.props()).to.include({
//             transform: "translate(-45%, -5%)",
//             submenuDirection: "right",
//           });

//           output.setProps({ position: "bottomRight" });
//           menu = output.find("#menu-test").at(1);
//           expect(menu.props()).to.include({
//             transform: "",
//             submenuDirection: "right",
//           });
//         });

//         it("should click an entry and close the menu", () => {
//           output.find("li#item-a").simulate("click"); // close menu
//           expect(output.find("div#menupopper-menu-test")).to.have.lengthOf(0);
//           expect(output.find("Menu").children()).to.have.lengthOf(1);
//           expect(spyClick.withArgs("a").callCount).to.equal(1);
//         });

//         it("should not call onClick on a disabled entry", () => {
//           output.find("Menu").childAt(0).simulate("click"); // open menu
//           output.find("li#item-b").simulate("click"); // close menu
//           expect(output.find("div#menupopper-menu-test")).to.have.lengthOf(0);
//           expect(output.find("Menu").children()).to.have.lengthOf(1);
//           expect(spyClick.withArgs("b").callCount).to.equal(0);
//         });

//         it("should open nested menu on mouseOver", () => {
//           // positioning should be correctly updated
//           output.find("Menu").childAt(0).simulate("click"); // open menu

//           // simulate mouseOver cannot mock getBoundingClientRect/offsetParent easily
//           output.find("li#item-c").prop("onMouseOver")({ // open nested menu
//             target: {
//               value: "test",
//             },
//             currentTarget: {
//               offsetParent: {
//                 getBoundingClientRect: () => {
//                   return { top: 100, width: 150 };
//                 },
//               },
//               getBoundingClientRect: () => {
//                 return { top: 50, width: 150 };
//               },
//             },
//           });
//           output.update();
//           expect(output.find("div#menupopper-c")).to.have.lengthOf(1);
//           expect(output.find("ul#listwrapper-c").children()).to.have.lengthOf(3);
//           let item = output.find("li#item-c0");
//           expect(item).to.have.lengthOf(1);
//           expect(item.childAt(0).prop("title")).to.equal(testData[2].commands[0].label);
//           item = output.find("li#item-c1");
//           expect(item).to.have.lengthOf(1);
//           expect(item.childAt(0).prop("title")).to.equal(testData[2].commands[1].label);
//         });

//         it("should click a nested entry and close all menus", () => {
//           output.find("li#item-c0").simulate("click");
//           expect(output.find("div#menupopper-menu-test")).to.have.lengthOf(0);
//           expect(output.find("Menu").children()).to.have.lengthOf(1);
//           expect(spyClick.withArgs("c0").callCount).to.equal(1);
//         });
//       });
//     });

//     return (
//       <Card>
//         <Bar
//           center={story}
//         />
//       </Card>
//     );
//   });
