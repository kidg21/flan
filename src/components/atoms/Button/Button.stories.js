/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

// import GlobalStyles from "GlobalStyles";
import { DMPTheme } from "Variables";
import { ThemeProvider } from "styled-components";

import { expect } from "chai";
import { mount } from "enzyme";

import { Padding } from "helpers/Display";
import Grid from "layout/Grid";

import Button from "atoms/Button";
// import ButtonNotes from "./Button.md";
const ButtonNotes = markdown.require("./Button.md");

storiesOf("Atoms|Button", module)
  .addParameters({
    info: {
      text:
        "A control that executes your custom code in response to user interactions.  When you tap a button, or select a button that has focus, the button performs any actions attached to it. You communicate the purpose of a button using a text label, an image, or both. The appearance of buttons is configurable, so you can tint buttons or format titles to match the design of your app. You can add buttons to your interface programmatically or using Interface Builder. -- 'developer.apple.com'"
    },
    notes: {
      markdown: ButtonNotes
    }
  })
  .addDecorator(Padding)
  .addDecorator(withKnobs)
  .add(
    "Documentation",
    withInfo()(() => {
      return <Button label="Standard Button" />;
    })
  )
  .add("Skeleton", () => {
    return <Button />;
  })
  .add("Knobs", () => {
    return (
      <Button
        icon={select(
          "icon",
          {
            "no icon": null,
            user: "user",
            down: "down",
            bookmark: "bookmark_solid",
            plus: "plus",
            print: "print"
          },
          null,
          "Button"
        )}
        label={text("label", "Button Label", "Button")}
        color={options(
          "color",
          {
            "primary (default)": "primary",
            secondary: "secondary",
            success: "success",
            info: "info",
            warning: "warning",
            alert: "alert"
          },
          "primary",
          { display: "radio" },
          "Button"
        )}
        size={options(
          "size",
          {
            small: "small",
            "medium ( default )": "default",
            large: "large"
          },
          "default",
          { display: "radio" },
          "Button"
        )}
        fullWidth={boolean("fullWidth", false, "Button")}
        fill={boolean("fill", false, "Button")}
        noBorder={boolean("noBorder", false, "Button")}
        disabled={boolean("disabled", false, "Button")}
      />
    );
  })
  .add("The Button Family", () => {
    const story = (
      <Grid columns="2">
        <Button label="Standard Primary" />
        <Button label="Solid Primary" solid />
        <Button label="Standard Secondary" color="secondary" />
        <Button label="Solid Secondary" solid color="secondary" />
        <Button label="Underline Primary" underlined />
        <Button
          label="Underline Secondary"
          underlined
          color="secondary"
        />
        <Button label="Disabled Button" color="secondary" disabled />
        <Button label="Disabled Underline" underlined disabled />
      </Grid>
    );

    specs(() => {
      let output = null;
      return describe("The Button Family", () => {
        before(() => {
          output = mount(
            <ThemeProvider theme={DMPTheme}>{story}</ThemeProvider>
          );
        });

        after(() => {
          output.unmount();
        });

        it("Is wrapped by a Two-Column Grid", () => {
          const grid = output.find("Grid");
          expect(grid.prop("columns")).to.equal("repeat(2, minmax(0, 1fr))");
        });

        it("Can render multiple Buttons", () => {
          const buttons = output.find("button");
          expect(buttons).to.have.lengthOf(11);
        });

        it('Accepts a "label" prop', () => {
          const button = output.find("button").first();
          const label = button.children();
          expect(label.text()).to.equal("Standard Primary");
        });

        it("Can change the background color", () => {
          const button = output.find("Button").at(1);
          expect(button.prop("fontColor")).to.equal("white");
          expect(button.prop("backgroundColor")).to.equal("primary");
        });

        it("Can change the font color", () => {
          const button = output.find("Button").at(2);
          expect(button.prop("fontColor")).to.equal("secondary");
        });

        it("Can change font and background color", () => {
          const button = output.find("Button").at(3);
          expect(button.prop("fontColor")).to.equal("white");
          expect(button.prop("backgroundColor")).to.equal("secondary");
        });

        it("Can be underlined", () => {
          const button = output.find("Button").at(4);
          expect(button.prop("fontColor")).to.equal("primary");
          expect(button.prop("underlineColor")).to.equal("primary");
        });

        it("Can be underlined with a different color", () => {
          const button = output.find("Button").at(5);
          expect(button.prop("fontColor")).to.equal("secondary");
          expect(button.prop("underlineColor")).to.equal("secondary");
        });

        it("Can be inline", () => {
          const button = output.find("Button").at(6);
          expect(button.prop("border")).to.equal("2px solid transparent");
          expect(button.prop("fontColor")).to.equal("primary");
          expect(button.prop("backgroundColor")).to.equal("default");
        });

        it("Can be inline with a different color", () => {
          const button = output.find("Button").at(7);
          expect(button.prop("border")).to.equal("2px solid transparent");
          expect(button.prop("fontColor")).to.equal("secondary");
          expect(button.prop("backgroundColor")).to.equal("default");
        });

        it("Can be disabled", () => {
          const button = output.find("Button").at(8);
          expect(button.prop("fontColor")).to.equal("white");
          expect(button.prop("backgroundColor")).to.equal("grey4");
        });

        it("Can be underlined and disabled", () => {
          const button = output.find("Button").at(9);
          expect(button.prop("fontColor")).to.equal("grey4");
          expect(button.prop("underlineColor")).to.equal("grey4");
        });

        it("Can be inline and disabled", () => {
          const button = output.find("Button").at(10);
          expect(button.prop("border")).to.equal("2px solid transparent");
          expect(button.prop("fontColor")).to.equal("grey4");
        });
      });
    });

    return story;
  });
