/* eslint-disable linebreak-style */
import { css } from "styled-components";

// Codes for color palette
export const colors = {
  // legacy values
  anchor: "hsl(204, 61%, 43%)",
  anchor_tint: "hsl(204, 61%, 83%)",
  anchor_light: "#66b1e3",
  anchor_dark: "hsl(204, 61%, 53%)",
  success: "hsl(90, 46%, 46%)",
  success_tint: "hsl(90, 46%, 90%)",
  success_light: "hsl(90, 46%, 59%)",
  success_dark: "hsl(90, 46%, 42%)",
  warning: "hsl(34, 88%, 52%)",
  warning_tint: "hsl(34, 88%, 80%)",
  warning_light: "hsl(34, 88%, 62%)",
  warning_dark: "hsl(34, 88%, 46%)",
  alert: "hsl(1, 55%, 50%)",
  alert_tint: "hsl(1, 55%, 90%)",
  alert_light: "hsl(1, 55%, 60%)",
  alert_dark: "hsl(1, 55%, 44%)",
  generalIndustry: "hsl(194, 59%, 35%)",
  government: "hsl(166, 100%, 28%)",
  insurance: "hsl(89, 39%, 50%)",
  homeBuilding: "hsl(43, 65%, 49%)",
  realEstate: "hsl(12, 61%, 50%)",

  // new values (standard)
  black: "hsl(34, 5%, 12%)",

  blue: "hsl(201, 61%, 43%)",
  blueBright: "hsl(207, 85%, 56%)",
  blueDark: "hsl(200, 100%, 25%)",
  blueLight: "hsl(204, 69%, 65%)",
  blueTint: "hsl(200, 59%, 95%)",

  glassDark: "hsla(34, 5%, 28%, 0.85)",
  glassLight: "hsl(34, 5%, 95%, 0.85)",

  green: "hsl(89, 46%, 42%)",
  greenBright: "hsl(135, 79%, 37%)",
  greenDark: "hsl(87, 91%, 22%)",
  greenLight: "hsl(89, 50%, 49%)",
  greenTint: "hsl(76, 59%, 96%)",

  grey20: "hsl(34, 5%, 88%)",
  grey40: "hsl(34, 5%, 72%)",
  grey60: "hsl(34, 5%, 58%)",
  grey80: "hsl(34, 5%, 36%)",
  greyDark: "hsl(34, 5%, 28%)",
  greyLight: "hsl(34, 5%, 96%)",

  orange: "hsl(30, 82%, 48%)",
  orangeBright: "hsl(30, 100%, 50%)",
  orangeDark: "hsl(30, 92%, 24%)",
  orangeLight: "hsl(30, 89%, 70%)",
  orangeTint: "hsl(30, 96%, 97%)",

  red: "hsl(3, 61%, 44%)",
  redBright: "hsl(3, 76%, 56%)",
  redDark: "hsl(3, 92%, 24%)",
  redLight: "hsl(3, 83%, 76%)",
  redTint: "hsl(3, 96%, 97%)",

  white: "hsl(0, 20%, 99%)",
};

export const DMPTheme = {
  background: {
    active: colors.greenTint,
    alert_active: colors.redTint,
    app: colors.greyLight,
    default: colors.white,
    glass_light: colors.greenLight,
    glass_dark: colors.greenDark,
    info_active: colors.blueTint,
    success_active: colors.greenTint,
    warning_active: colors.orangeTint,
  },
  border: colors.grey40,
  divider: colors.grey20,
  text: {
    alert: colors.red,
    disabled: colors.grey60,
    info: colors.blueBright,
    inverse: colors.white,
    link: colors.blue,
    primary: colors.grey80,
    secondary: colors.grey60,
    success: colors.greenBright,
    warning: colors.orangeBright,
  },
  palette: {
    alert: colors.red,
    alertBright: colors.redBright,
    alertDark: colors.redDark,
    alertLight: colors.redLight,
    alertTint: colors.redTint,
    black: colors.black,
    disabled: colors.greyLight,
    grey: colors.greyDark,
    grey2: colors.grey80,
    grey3: colors.grey60,
    grey4: colors.grey40,
    grey5: colors.grey20,
    grey6: colors.greyLight,
    info: colors.blue,
    infoBright: colors.blueBright,
    infoDark: colors.blueDark,
    infoLight: colors.blueLight,
    infoTint: colors.blueTint,
    inverse: colors.white,
    primary: colors.blue,
    primaryDark: colors.blueDark,
    primaryLight: colors.blueLight,
    primaryTint: colors.blueTint,
    secondary: colors.green,
    secondaryDark: colors.greenDark,
    secondaryLight: colors.greenLight,
    secondaryTint: colors.greenTint,
    success: colors.green,
    successBright: colors.greenBright,
    successDark: colors.greenDark,
    successLight: colors.greenLight,
    successTint: colors.greenTint,
    warning: colors.orange,
    warningBright: colors.orangeBright,
    warningDark: colors.orangeDark,
    warningLight: colors.orangeLight,
    warningTint: colors.orangeTint,
    white: colors.white,
  },
  accents: {
    alert: colors.red,
    black: colors.black,
    info: colors.blue,
    success: colors.green,
    warning: colors.orange,
    white: colors.white,
  },
};

export const darkTheme = {
  background: {
    default: "rgb(28, 28, 30)",
    app: "#f4f6fc",
  },
  border: colors.grey20,
  divider: "#E2E1DF",
  text: {
    primary: "#ffffff",
    secondary: "#99958F",
    inverse: "#000000",
    link: "#66b1e3",
    alert: "#7d0000",
    disabled: "hsl(34, 5%, 72%)",
    info: "#66b1e3",
    success: "rgb(36, 138, 61)",
    warning: "rgb(178, 80, 0)",
  },
  palette: {
    primary: "#5FD1E2",
    primaryLight: "#66b1e3",
    primaryTint: "#9fc7dc",
    primaryDark: "#005681",
    secondary: "#CDE575",
    secondaryLight: "#9dcc67",
    secondaryTint: "#cadf90",
    secondaryDark: "#3d6c05",
    info: "#0a84ff",
    alert: "#FF453A",
    alertLight: "#ffafab",
    alertTint: "#c98383",
    alertDark: "#7d0000",
    warning: "#f5c000",
    success: "#30D158",
    successLight: "#c1f9a5",
    successDark: "#2d4e1f",
    white: "#ffffff",
    black: "#000000",
    // disabled: "#E2E1DF",
    disabled: "hsl(34, 5%, 94%)",
    inverse: "#000000",
    grey: "rgb(142, 142, 147)",
    grey2: "rgb(99, 99, 102)",
    grey3: "rgb(72, 72, 74)",
    grey4: "rgb(58, 58, 60)",
    grey5: "rgb(44, 44, 46)",
    grey6: "rgb(28, 28, 30)",
  },
  accents: {
    white: "#ffffff",
    black: "#000000",
    green: "green",
    waterwayBlue: "#44A3D8",
    burntOrange: "#B84438",
  },
};

export const Darken = css`
  filter: brightness(0.98) saturate(1.25) contrast(1);
`;

export const Lighten = css`
  filter: brightness(115%);
`;

// Typefaces
export const fonts = {
  headline: "Muli, Arial, sans-serif",
  body: "Muli, Arial, sans-serif",
  data: "Muli, Arial, sans-serif",
  numbers: "Lato, sans-serif",
};

// Sizes for typography scale
export const fontSize = {
  base: "12px",
  // paragraph: '1rem',
  // h1: '2.75rem',
  // h2: '2.3125rem',
  // h3: '1.6875rem',
  // h4: '1.4375rem',
  // h5: '1.125rem',
  // h6: '1rem',
  // xs: '12px',
  // sm: '14px',
  // lg: '18px',
  // xl: '20px',
  // xxl: '24px',
  // xxxl: '30px',
  // xxxxl: '36px'
};

// Sizes for typography scale
export const shadows = {
  cardShadow:
    "drop-shadow(0 0 1px hsl(34, 5%, 72%)) drop-shadow(0.25rem 0.25rem 0.25rem hsla(34, 5%, 58%, 0.333333));",
  dropShadow: "hsl(34, 5%, 36%) 0rem 0rem 1px, hsla(34, 5%, 36%, 0.333333) 0.25rem 0.25rem 0.5rem;",
  panelSectionShadow:
    "hsl(34, 5%, 88%)  0rem 0rem 1px, hsla(34, 5%, 92%, 0.333333) 0 0rem 0.5rem 0.25rem;",
  lightBorderShadow:
    "hsl(34, 5%, 95%) -1px -1px 0 0 inset, hsl(34, 5%, 95%) 1px 1px 0 0 inset, hsla(34, 5%, 36%, 0.333333) 0.25rem 0.25rem 0.5rem",
  lightBorderInner: "hsl(34, 5%, 72%) -1px -1px 0 0 inset, hsl(34, 5%, 72%) 1px 1px 0 0 inset",
  border20: "hsl(34, 5%, 95%) 0px 0px 0px 1px",
  border40: "hsl(34, 5%, 88%) 0px 0px 0px 1px",
  checkedShadow:
    "hsl(34, 5%, 95%) -1px -1px 0 0 inset, hsl(34, 5%, 95%) 1px 1px 0 0 inset, hsla(34, 5%, 36%, 0.2) 2px 2px 2px",
  radioShadow:
    "hsl(34, 5%, 95%) -1px -1px 0 0 inset, hsl(34, 5%, 95%) 1px 1px 0 0 inset, hsl(34, 5%, 95%) -1px 1px 0 0 inset, hsl(34, 5%, 95%) 1px -1px 0 0 inset, hsla(34, 5%, 36%, 0.2) 2px 2px 2px",
};

// Media Queries
const viewport = {
  small: "640px",
  medium: "641px",
  large: "1025px",
  xlarge: "1441px",
  xxlarge: "1921px",
};
export const screen = {
  small: `only screen and (max-width: ${viewport.small})`,
  medium: `only screen and (min-width: ${viewport.medium})`,
  // medium: `only screen and (min-width: ${
  //   viewport.medium
  // }) and (orientation: portrait)`,
  // medium_l: `only screen and (min-width: ${
  //   viewport.medium
  // }) and (orientation: landscape)`,
  large: `only screen and (min-width: ${viewport.large})`,
  xlarge: `only screen and (min-width: ${viewport.xlarge})`,
  xxlarge: `only screen and (min-width: ${viewport.xxlarge})`,
};
