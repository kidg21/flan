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

  blue20: "hsl(200, 59%, 95%)",
  blue40: "hsl(204, 69%, 65%)",
  blue60: "hsl(207, 85%, 56%)",
  blue80: "hsl(201, 61%, 43%)",
  blue100: "hsl(200, 100%, 25%)",


  greenTint: "hsl(76, 59%, 96%)",
  greenLight: "hsl(89, 50%, 49%)",
  greenBright: "hsl(135, 79%, 37%)",
  green: "hsl(89, 46%, 42%)",
  greenDark: "hsl(87, 91%, 22%)",

  orangeTint: "hsl(30, 96%, 97%)",
  orangeLight: "hsl(30, 89%, 70%)",
  orangeBright: "hsl(30, 100%, 50%)",
  orange: "hsl(30, 82%, 48%)",
  orangeDark: "hsl(30, 92%, 24%)",

  redTint: "hsl(3, 96%, 97%)",
  redLight: "hsl(3, 83%, 76%)",
  redBright: "hsl(3, 76%, 56%)",
  red: "hsl(3, 61%, 44%)",
  redDark: "hsl(3, 92%, 24%)",

  black: "hsl(34, 5%, 12%)",

  white: "hsl(0, 100%, 100%)",
  lightBlue: "hsl(201, 100%, 98%)",

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

  grey10: "hsl(240, 24%, 96%)",
  grey20: "hsl(240, 11%, 91%)",
  grey30: "hsl(240, 6%, 83%)",
  grey40: "hsl(240, 5%, 79%)",
  grey50: "hsl(240, 3%, 69%)",
  grey60: "hsl(240, 2%, 57%)",
  grey70: "hsl(240, 1%, 39%)",
  grey80: "hsl(240, 1%, 29%)",
  grey90: "hsl(240, 2%, 23%)",
  grey100: "hsl(240, 2%, 18%)",


  lightBoxNavy: "hsl(216.6,72%,21%)",
  lightBoxCyan: "hsl(204.9,63.4%,56.1%)",
  lightBoxGold: "hsl(46,64.2%,52.9%)",
  lightBoxGrey: "hsl(200,2.6%,77.1%)",
  softGrey: "hsl(270, 5%, 92.2%)",
  softBlue: "hsl(180, 33.3%, 88.8%)",
  moss: "hsl(197, 12.9%, 55.9%)",
  robinBlue: "hsl(196, 51.5%, 59.6%)",
  seafoam: "hsl(179, 93.4%, 35.9%)",
  blueSteel: "hsl(207, 88.5%, 30.6%)",
  tangerine: "hsl(26, 89.3%, 56.1%)",
  lemon: "hsl(45, 100%, 50%)",

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
    disabled: colors.grey20,
    info: colors.blue80,
    inverse: colors.black,
    neutral: colors.grey60,
    success: colors.green,
    warning: colors.orange,
  },
  text: {
    active: colors.greenDark,
    alert: colors.redBright,
    dark: colors.black,
    disabled: colors.grey60,
    info: colors.blue60,
    inverse: colors.white,
    light: colors.white,
    link: colors.blue80,
    primary: colors.grey100,
    secondary: colors.grey80,
    selected: colors.grey40,
    success: colors.greenBright,
    warning: colors.orangeBright,
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
    disabled: colors.grey30,
    foreground: colors.black,
    grey: colors.grey60,
    grey2: colors.grey50,
    grey3: colors.grey40,
    grey4: colors.grey30,
    grey5: colors.grey20,
    grey6: colors.grey10,
    info: colors.blue80,
    infoBright: colors.blue60,
    infoDark: colors.blue100,
    infoLight: colors.blue40,
    infoTint: colors.blue20,
    inverse: colors.white,
    link: colors.blue60,
    primary: colors.blue60,
    primaryDark: colors.blue80,
    primaryLight: colors.blue40,
    primaryTint: colors.blue20,
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
    app: colors.grey100,
    default: colors.black,
    disabled: colors.grey80,
    info: colors.blue100,
    inverse: colors.white,
    neutral: colors.grey50,
    success: colors.greenDark,
    warning: colors.orangeDark,
  },
  text: {
    active: colors.greenTint,
    alert: colors.redTint,
    disabled: colors.grey40,
    info: colors.blue20,
    inverse: colors.black,
    link: colors.blue80,
    primary: colors.grey50,
    secondary: colors.grey60,
    selected: colors.grey40,
    success: colors.greenTint,
    warning: colors.orangeTint,
  },
  borders: {
    border: borders.borderPrimary,
    radiusMin: borders.radiusMin,
    radiusMax: borders.radiusMax,
  },
  shadows: shadows,
  palette: {
    alert: colors.redBright,
    alertBright: colors.redBright,
    alertDark: colors.redLight,
    alertLight: colors.redLight,
    alertTint: colors.redLight,
    background: colors.black,
    black: colors.black,
    disabled: colors.grey60,
    foreground: colors.white,
    grey: colors.grey100,
    grey2: colors.grey90,
    grey3: colors.grey80,
    grey4: colors.grey70,
    grey5: colors.grey60,
    grey6: colors.grey50,
    info: colors.blue80,
    infoBright: colors.blue60,
    infoDark: colors.blue100,
    infoLight: colors.blue40,
    infoTint: colors.blue20,
    inverse: colors.black,
    link: colors.blue80,
    primary: colors.blue80,
    primaryDark: colors.blue100,
    primaryLight: colors.blue40,
    primaryTint: colors.blue20,
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
