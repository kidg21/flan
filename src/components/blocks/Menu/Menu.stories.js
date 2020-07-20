/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Menu from "blocks/Menu";
import { Padding, CenterDecorator, Container } from "helpers/Display";
import Grid from "layout/Grid";
import Button from "atoms/Button";

export default {
  title: "Atoms/Menu/Tests", // storyshots - .js & .mdx file
  parameters: {
    docs: { page: null }, // canvas view for these stories
  },
  decorators: [CenterDecorator, Container, Padding, Padding],
  excludeStories: /.*Mock$/,
};

export const textMock = `Live the California dream at this modern paradise right on the beach in Malibu. Whether it's
 your escape from the city or new full time residence; nothing beats waking up to the sound of waves and having coffee on
 the sun drenched deck with dolphins swimming by in the morning. Located just minutes away from Santa Monica and walking
 distance to Malibu's hottest restaurant Moonshadows. It's time to buy that stand up paddleboard, get back in tune with
 nature and start living your Malibu dream now. This is the best deal under $4 million on the beach.
`;


const dataMock = [{
  label: "Save",
  id: "save",
  onClick: action("Save Clicked"),
}, {
  label: "Filter",
  id: "filter",
  onClick: action("Filter Clicked"),
}, {
  label: "Share",
  id: "share",
  onClick: action("Share Clicked"),
}, {
  label: "Delete",
  id: "delete",
  onClick: action("Delete Clicked"),
}];

const nestedMock = [{
  id: "save",
  label: "Save",
  onClick: action("Save Clicked"),
}, {
  id: "filter",
  label: "Filter",
  onClick: action("Filter Clicked"),
}, {
  id: "share",
  label: "Share",
  onClick: action("Share Clicked"),
  data: [{
    id: "nested-share-1",
    label: "Nested Share 1",
    onClick: action("Nested 1 Clicked"),
  }, {
    id: "nested-share-2",
    label: "Nested Share 2",
    onClick: action("Nested 2 Clicked"),
    data: [{
      id: "toast",
      label: "Toast",
      onClick: action("Toast Clicked"),
    }, {
      id: "popcorn",
      label: "Popcorn",
      onClick: action("Popcorn Clicked"),
    }],
  }],
}, {
  id: "delete",
  label: "Delete",
  onClick: action("Delete Clicked"),
}];

export const PortalPositions = () => {
  return (
    <Grid columns={4}>
      <Menu
        id="menu-portal-position-bottomRight"
        initVisible
        portal
        data={dataMock}
        position="bottomRight"
      >
        <Button id="button-bottomRight" icon="options" isSolid />
      </Menu>
      <Menu
        id="menu-portal-position-topRight"
        initVisible
        portal
        data={dataMock}
        position="topRight"
      >
        <Button id="button-topRight" icon="options" isSolid />
      </Menu>
      <Menu
        id="menu-portal-position-bottomLeft"
        initVisible
        portal
        data={dataMock}
        position="bottomLeft"
      >
        <Button id="button-bottomLeft" icon="options" isSolid />
      </Menu>
      <Menu
        id="menu-portal-position-topLeft"
        initVisible
        portal
        data={dataMock}
        position="topLeft"
      >
        <Button id="button-topLeft" icon="options" isSolid />
      </Menu>
    </Grid>
  );
};

export const FlexPositons = () => {
  return (
    <Grid columns={4}>
      <Menu
        id="menu-flex-position-bottomRight"
        initVisible
        isFlex
        data={dataMock}
        position="bottomRight"
      >
        <Button id="button-bottomRight" icon="options" isSolid />
      </Menu>
      <Menu
        id="menu-flex-position-topRight"
        initVisible
        isFlex
        data={dataMock}
        position="topRight"
      >
        <Button id="button-topRight" icon="options" isSolid />
      </Menu>
      <Menu
        id="menu-flex-position-bottomLeft"
        initVisible
        isFlex
        data={dataMock}
        position="bottomLeft"
      >
        <Button id="button-bottomLeft" icon="options" isSolid />
      </Menu>
      <Menu
        id="menu-flex-position-topLeft"
        initVisible
        isFlex
        data={dataMock}
        position="topLeft"
      >
        <Button id="button-topLeft" icon="options" isSolid />
      </Menu>
    </Grid>
  );
};

export const PortalFlexPositions = () => {
  return (
    <Grid columns={4}>
      <Menu
        id="menu-portal-flex-bottomRight"
        initVisible
        portal
        isFlex
        data={dataMock}
        position="bottomRight"
      >
        <Button id="button-bottomRight" icon="options" isSolid />
      </Menu>
      <Menu
        id="menu-portal-flex-topRight"
        initVisible
        portal
        isFlex
        data={dataMock}
        position="topRight"
      >
        <Button id="button-topRight" icon="options" isSolid />
      </Menu>
      <Menu
        id="menu-portal-flex-bottomLeft"
        initVisible
        portal
        isFlex
        data={dataMock}
        position="bottomLeft"
      >
        <Button id="button-bottomLeft" icon="options" isSolid />
      </Menu>
      <Menu
        id="menu-portal-flex-topLeft"
        initVisible
        portal
        isFlex
        data={dataMock}
        position="topLeft"
      >
        <Button id="button-topLeft" icon="options" isSolid />
      </Menu>
    </Grid>
  );
};

export const NestedPositions = () => {
  return (
    <Grid columns={4}>
      <Menu
        id="menu-nested-position-bottomRight"
        initVisible
        data={nestedMock}
        position="bottomRight"
      />
      <Menu
        id="menu-nested-position-topRight"
        initVisible
        data={nestedMock}
        position="topRight"
      />
      <Menu
        id="menu-nested-position-bottomLeft"
        initVisible
        data={nestedMock}
        position="bottomLeft"
      />
      <Menu
        id="menu-nested-position-topLeft"
        initVisible
        data={nestedMock}
        position="topLeft"
      />
    </Grid>
  );
};

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
