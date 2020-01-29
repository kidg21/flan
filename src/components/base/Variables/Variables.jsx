/* eslint-disable linebreak-style */
import { css } from "styled-components";


export const fonts = {
  headline: "Nunito, Arial, sans-serif",
  body: "Nunito, Arial, sans-serif",
  data: "Lato, Arial, sans-serif",
  numbers: "Nunito, sans-serif",
};

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
  lightBlue: "hsl(201, 100%, 98%)",
  lightBoxNavy: "hsl(216.6,72%,21%)",
  lightBoxCyan: "hsl(204.9,63.4%,56.1%)",
  lightBoxGold: "hsl(46,64.2%,52.9%)",
  lightBoxGrey: "hsl(200,2.6%,77.1%)",

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

  white: "hsl(0, 100%, 100%)",

  shade1: "hsla(34, 5%, 12%, 0.05)",
  shade2: "hsla(34, 5%, 12%, 0.1)",
  shade3: "hsla(34, 5%, 12%, 0.15)",
  shade4: "hsla(34, 5%, 12%, 0.2)",
  shade5: "hsla(34, 5%, 12%, 0.25)",
  shade6: "hsla(34, 5%, 12%, 0.3)",
  shade7: "hsla(34, 5%, 12%, 0.35)",
  shade8: "hsla(34, 5%, 12%, 0.4)",
  shade9: "hsla(34, 5%, 12%, 0.45)",
  shade10: "hsla(34, 5%, 12%, 0.5)",

  // softGrey: "hsl(270, 5%, 92.2%)",
  // soft


};

export const shadows = {
  shadow0: `drop-shadow(${colors.shade6} 0 0 1px)`,
  shadow1: `
    drop-shadow(${colors.shade6} 0 0 1px)
    drop-shadow(${colors.shade6} 0.1rem 0.1rem 0.15rem)
  `,
  shadow2: `
    drop-shadow(${colors.shade6} 0 0 1px)
    drop-shadow(${colors.shade5} 0.2rem 0.2rem 0.25rem)
  `,
  shadow3: `
    drop-shadow(${colors.shade6} 0 0 1px)
    drop-shadow(${colors.shade4} 0.3rem 0.3rem 0.35rem)
  `,
  shadow4: `
    drop-shadow(${colors.shade6} 0 0 1px)
    drop-shadow(${colors.shade3} 0.4rem 0.4rem 0.45rem)
  `,
  shadow5: `
    drop-shadow(${colors.shade6} 0 0 1px)
    drop-shadow(${colors.shade2} 0.5rem 0.5rem 0.55rem)
  `,
  dropShadow: `
    ${colors.shade6} 0 0 1px,
    ${colors.shade5} 0.2rem 0.2rem 0.25rem
    `,
  innerShadow: `
    ${colors.shade4} 0 1px 0 0 inset,
    ${colors.shade8} 0 0.35rem 0.5rem -0.35rem inset,
    ${colors.shade4} 0 -1px 0 0 inset,
    ${colors.shade8} 0 -0.35rem 0.5rem -0.35rem inset
  `,
};

export const borders = {
  borderPrimary: `1px solid ${colors.grey40}`,
  radiusMin: "0.5rem",
  radiusMax: "5rem",
};

export const DMPTheme = {
  typography: {
    primary: fonts.body,
    secondary: fonts.data,
  },
  background: {
    active: colors.greenLight,
    alert: colors.red,
    app: colors.lightBlue,
    default: colors.white,
    disabled: colors.greyLight,
    info: colors.blue,
    inverse: colors.black,
    neutral: colors.greyDark,
    success: colors.green,
    warning: colors.orange,
  },
  text: {
    active: colors.greenDark,
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
  accents: {
    black: colors.black,
    white: colors.white,
    bloodOrange: colors.bloodorange7,
  },
  borders: {
    border: borders.borderPrimary,
    radiusMin: borders.radiusMin,
    radiusMax: borders.radiusMax,
  },
  shadows: shadows,
  palette: {
    alert: colors.red,
    alertBright: colors.redBright,
    alertDark: colors.redDark,
    alertLight: colors.redLight,
    alertTint: colors.redTint,
    background: colors.white,
    black: colors.black,
    disabled: colors.greyLight,
    foreground: colors.black,
    grey: colors.grey5,
    grey2: colors.grey4,
    grey3: colors.grey3,
    grey4: colors.grey2,
    grey5: colors.grey1,
    grey6: colors.grey0,
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
};

export const darkTheme = {
  typography: {
    primary: fonts.body,
    secondary: fonts.headline,
  },
  background: {
    active: colors.green,
    alert: colors.redDark,
    app: colors.greyDark,
    default: colors.black,
    disabled: colors.grey80,
    info: colors.blueDark,
    inverse: colors.white,
    neutral: colors.greyLight,
    success: colors.greenDark,
    warning: colors.orangeDark,
  },
  text: {
    active: colors.greenTint,
    // alert: "#7d0000",
    alert: colors.redTint,
    disabled: colors.grey40,
    // info: "#66b1e3",
    info: colors.blueTint,
    inverse: colors.black,
    // link: "#66b1e3",
    link: colors.blue,
    primary: colors.greyLight,
    secondary: colors.grey60,
    selected: colors.greyLight,
    // success: "rgb(36, 138, 61)",
    success: colors.greenTint,
    // warning: "rgb(178, 80, 0)",
    warning: colors.orangeTint,
  },
  accents: {
    black: colors.black,
    white: colors.white,
    bloodOrange: colors.bloodorange3,
  },
  borders: {
    border: borders.borderPrimary,
    radiusMin: borders.radiusMin,
    radiusMax: borders.radiusMax,
  },
  shadows: shadows,
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
    background: colors.black,
    black: colors.black,
    disabled: colors.greyDark,
    foreground: colors.white,
    grey: colors.grey10,
    grey2: colors.grey9,
    grey3: colors.grey8,
    grey4: colors.grey7,
    grey5: colors.grey6,
    grey6: colors.grey5,
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
};

export const Darken = css`
  filter: brightness(0.90) saturate(1.25) contrast(1);
`;

export const Lighten = css`
  filter: brightness(115%) saturate(80%) ;
`;


// Sizes for typography scale
export const fontSize = {
  base: "14px",
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
  small: `only screen and(max - width: ${viewport.small})`,
  medium: `only screen and(min - width: ${viewport.medium})`,
  // medium: `only screen and(min - width: ${
  //   viewport.medium
  // }) and (orientation: portrait)`,
  // medium_l: `only screen and (min-width: ${
  //   viewport.medium
  // }) and (orientation: landscape)`,
  large: `only screen and (min-width: ${viewport.large})`,
  xlarge: `only screen and (min-width: ${viewport.xlarge})`,
  xxlarge: `only screen and (min-width: ${viewport.xxlarge})`,
};
