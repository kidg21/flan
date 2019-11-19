import { create } from "@storybook/theming";
import { fonts, colors, shadows } from "Variables";

export default create({
  base: "light",

  // colorPrimary: "hotpink",
  colorSecondary: colors.blue,

  // UI
  // appBg: "white",
  // appContentBg: colors.white,
  // appBorderColor: "grey",
  // appBorderRadius: 4,

  // Typography
  // fontBase: fonts.body,
  // fontCode: "monospace",

  // Text colors
  // textColor: colors.black,
  // textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  // barTextColor: "silver",
  // barSelectedColor: "black",
  // barBg: "hotpink",

  // Form colors
  //   inputBg: "white",
  //   inputBorder: "silver",
  //   inputTextColor: "black",
  //   inputBorderRadius: 4,

  brandTitle: "FLAN",
  // brandUrl: "https://example.com",
  // brandImage:
  //   "https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-tahiti/best-trips-tahiti-2.adapt.133.1.jpg"
});
