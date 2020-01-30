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

  green20: "hsl(76, 59%, 96%)",
  green40: "hsl(89, 50%, 49%)",
  green60: "hsl(135, 79%, 37%)",
  green80: "hsl(89, 46%, 42%)",
  green100: "hsl(87, 91%, 22%)",

  orange20: "hsl(30, 96%, 97%)",
  orange40: "hsl(30, 89%, 70%)",
  orange60: "hsl(30, 100%, 50%)",
  orange80: "hsl(30, 82%, 48%)",
  orange100: "hsl(30, 92%, 24%)",

  red20: "hsl(3, 96%, 97%)",
  red40: "hsl(3, 83%, 76%)",
  red60: "hsl(3, 76%, 56%)",
  red80: "hsl(3, 61%, 44%)",
  red100: "hsl(3, 92%, 24%)",

  white20: "hsl(200, 59%, 95%)", // /bluetint
  white40: "hsl(201, 100%, 98%)", // lightblue
  white60: "hsl(0, 100%, 100%)", // white

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
  grey110: "hsl(34, 5%, 12%)", // blackish


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
    active: colors.green40,
    app: colors.white40,
    default: colors.white60,
    disabled: colors.grey20,
    inverse: colors.grey110,
  },
  text: {
    alert: colors.red60,
    disabled: colors.grey60,
    inverse: colors.white60,
    link: colors.blue80,
    primary: colors.grey100,
    secondary: colors.grey80,
    warning: colors.orange60,
  },
  borders: {
    border: borders.borderPrimary,
    radiusMin: borders.radiusMin,
    radiusMax: borders.radiusMax,
  },
  shadows: shadows,
  palette: {
    alert: colors.red80,
    alertBright: colors.red60,
    alertDark: colors.red100,
    alertLight: colors.red40,
    alertTint: colors.red20,
    disabled: colors.grey30,
    action: colors.blue80,
    actionDark: colors.blue100,
    actionBright: colors.blue60,
    actionLight: colors.blue40,
    actionTint: colors.blue20,
    border: colors.grey50,
    borderDark: colors.grey60,
    borderBright: colors.grey30,
    borderLight: colors.grey20,
    borderTint: colors.grey10,
    info: colors.blue80,
    infoBright: colors.blue60,
    infoDark: colors.blue100,
    infoLight: colors.blue40,
    infoTint: colors.blue20,
    inverse: colors.white60, // inverse is the same as background.default
    link: colors.blue60,
    success: colors.green80,
    successBright: colors.green60,
    successDark: colors.green100,
    successLight: colors.green40,
    successTint: colors.green20,
    warning: colors.orange80,
    warningBright: colors.orange60,
    warningDark: colors.orange100,
    warningLight: colors.orange40,
    warningTint: colors.orange20,
  },
};

export const darkTheme = {
  typography: {
    primary: fonts.body,
    secondary: fonts.headline,
  },
  background: {
    active: colors.green80,
    app: colors.grey100,
    default: colors.grey110,
    disabled: colors.grey80,
    inverse: colors.white60,
  },
  text: {
    alert: colors.red20,
    disabled: colors.grey40,
    inverse: colors.grey110,
    link: colors.blue80,
    primary: colors.grey50,
    secondary: colors.grey60,
    warning: colors.orange20,
  },
  borders: {
    border: borders.borderPrimary,
    radiusMin: borders.radiusMin,
    radiusMax: borders.radiusMax,
  },
  shadows: shadows,
  palette: {
    alert: colors.red80,
    alertBright: colors.red60,
    alertDark: colors.red100,
    alertLight: colors.red40,
    alertTint: colors.red20,
    disabled: colors.grey60,
    border: colors.grey90,
    borderDark: colors.grey80,
    borderBright: colors.grey70,
    borderLight: colors.grey60,
    borderTint: colors.grey50,
    info: colors.blue80,
    infoBright: colors.blue60,
    infoDark: colors.blue100,
    infoLight: colors.blue40,
    infoTint: colors.blue20,
    inverse: colors.grey110,
    link: colors.blue80,
    action: colors.blue80,
    actionDark: colors.blue100,
    actionBright: colors.blue60,
    actionLight: colors.blue40,
    actionTint: colors.blue20,
    success: colors.green80,
    successBright: colors.green60,
    successDark: colors.green100,
    successLight: colors.green40,
    successTint: colors.green20,
    warning: colors.orange80,
    warningBright: colors.orange60,
    warningDark: colors.orange100,
    warningLight: colors.orange40,
    warningTint: colors.orange20,
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
