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
    disabled: colors.greyLight,
    glass_light: colors.greenLight,
    glass_dark: colors.greenDark,
    info_active: colors.blueTint,
    inverse: colors.black,
    selected: colors.greenLight,
    success_active: colors.greenTint,
    warning_active: colors.orangeTint,
  },
  border: colors.grey40,
  divider: colors.grey20,
  text: {
    active: colors.greenLight,
    alert: colors.redBright,
    dark: colors.black,
    disabled: colors.grey60,
    info: colors.blueBright,
    inverse: colors.white,
    light: colors.white,
    link: colors.blue,
    primary: colors.greyDark,
    secondary: colors.grey60,
    selected: colors.greyLight,
    success: colors.greenBright,
    warning: colors.orangeBright,
  },
  palette: {
    alert: colors.red,
    alertBright: colors.redBright,
    alertDark: colors.redDark,
    alertLight: colors.redLight,
    alertTint: colors.redTint,
    backGround: colors.white,
    black: colors.black,
    disabled: colors.greyLight,
    foreGround: colors.black,
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
    link: colors.blue,
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
  shadows: {
    cardShadow:
      "drop-shadow(0 0 1px hsl(34, 5%, 72%)) drop-shadow(0.25rem 0.25rem 0.25rem hsla(34, 5%, 58%, 0.333333));",
    dropShadow:
      "hsl(34, 5%, 36%) 0rem 0rem 1px, hsla(34, 5%, 36%, 0.333333) 0.25rem 0.25rem 0.5rem;",
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
  },
};

export const darkTheme = {
  background: {
    active: colors.greenDark,
    alert_active: colors.redDark,
    app: colors.greyDark,
    dark: colors.black,
    default: colors.black,
    disabled: colors.grey80,
    glass_light: colors.greenLight,
    glass_dark: colors.greenDark,
    info_active: colors.blueDark,
    inverse: colors.white,
    light: colors.white,
    selected: colors.greenLight,
    success_active: colors.greenDark,
    warning_active: colors.orangeDark,
  },
  border: colors.grey20,
  divider: colors.greyDark,
  text: {
    active: colors.greenLight,
    // alert: "#7d0000",
    alert: colors.redBright,
    disabled: colors.grey40,
    // info: "#66b1e3",
    info: colors.blueBright,
    inverse: colors.black,
    // link: "#66b1e3",
    link: colors.blue,
    primary: colors.greyLight,
    secondary: colors.grey60,
    selected: colors.greyLight,
    // success: "rgb(36, 138, 61)",
    success: colors.greenBright,
    // warning: "rgb(178, 80, 0)",
    warning: colors.orangeBright,
  },
  palette: {
    // alert: "#FF453A",
    // alertDark: "#7d0000",
    // alertLight: "#ffafab",
    // alertTint: "#c98383",
    alert: colors.redBright,
    alertBright: colors.redBright,
    alertDark: colors.redLight,
    alertLight: colors.redLight,
    alertTint: colors.redLight,
    backGround: colors.black,
    black: colors.black,
    disabled: colors.greyDark,
    foreGround: colors.white,
    grey: colors.greyLight,
    grey2: colors.grey20,
    grey3: colors.grey40,
    grey4: colors.grey60,
    grey5: colors.grey80,
    grey6: colors.greyDark,
    // info: "#0a84ff",
    info: colors.blue,
    infoBright: colors.blueBright,
    infoDark: colors.blueDark,
    infoLight: colors.blueLight,
    infoTint: colors.blueTint,
    inverse: colors.black,
    link: colors.blue,
    primary: colors.blue,
    primaryDark: colors.blueDark,
    primaryLight: colors.blueLight,
    primaryTint: colors.blueTint,
    // primary: "#5FD1E2",
    // primaryDark: "#005681",
    // primaryLight: "#66b1e3",
    // primaryTint: "#9fc7dc",
    secondary: colors.green,
    secondaryDark: colors.greenDark,
    secondaryLight: colors.greenLight,
    secondaryTint: colors.greenTint,
    // secondary: "#CDE575",
    // secondaryDark: "#3d6c05",
    // secondaryLight: "#9dcc67",
    // secondaryTint: "#cadf90",
    // success: "#30D158",
    // successDark: "#2d4e1f",
    // successLight: "#c1f9a5",
    success: colors.green,
    successBright: colors.greenBright,
    successDark: colors.greenDark,
    successLight: colors.greenLight,
    successTint: colors.greenTint,
    // warning: "#f5c000",
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
  shadows: {
    cardShadow:
      "drop-shadow(0 0 1px hsl(34, 5%, 72%)) drop-shadow(0.25rem 0.25rem 0.25rem hsla(34, 5%, 58%, 0.333333));",
    dropShadow:
      "hsl(34, 5%, 36%) 0rem 0rem 1px, hsla(34, 5%, 36%, 0.333333) 0.25rem 0.25rem 0.5rem;",
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
