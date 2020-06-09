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
  grey40: "hsl(240, 3%, 69%)",
  grey50: "hsl(240, 2%, 57%)",
  grey60: "hsl(240, 1%, 39%)",
  grey70: "hsl(240, 1%, 29%)",
  grey80: "hsl(240, 2%, 23%)",
  grey90: "hsl(240, 2%, 18%)",
  grey100: "hsl(34, 5%, 12%)", // blackish


  lightBoxNavy: "hsl(216.6,72%,21%)",
  lightBoxCyan: "hsl(197,100%,44%)",
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

// need to have hex key to work with old draw tools
export const drawPalette = {
  "#EBEAEC": colors.softGrey,
  "#D9ECEC": colors.softBlue,
  "#80959D": colors.moss,
  "#63B1CD": colors.robinBlue,
  "#06BFAE": colors.seafoam,
  "#095593": colors.blueSteel,
  "#F3822B": colors.tangerine,
  "#FFBF00": colors.lemon,
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
  outlineShadow: `
    ${colors.shade3} 0 0 1px 1px
    `,
  dropShadow: `
    ${colors.shade3} 0 0 1px 1px,
    ${colors.shade4} 0.15rem 0.15rem 0.25rem
    `,
  dropShadow2: `
    ${colors.shade3} 0 0 1px 1px,
    ${colors.shade3} 0.35rem 0.35rem 0.5rem
    `,
  outerShadow: `
    ${colors.shade2} 0 0 0.25rem 0,
    ${colors.shade1} 0 0 0.25rem 0.25rem
    `,
  innerShadow: `
    ${colors.shade4} 0 1px 0 0 inset,
    ${colors.shade8} 0 0.35rem 0.5rem -0.35rem inset,
    ${colors.shade4} 0 -1px 0 0 inset,
    ${colors.shade8} 0 -0.35rem 0.5rem -0.35rem inset
    `,
};

export const borders = {
  radiusMin: "0.5rem",
  radiusMax: "5rem",
};

export const DMPTheme = {
  typography: {
    primary: fonts.body,
    secondary: fonts.data,
  },
  background: {
    alert: colors.red80,
    active: colors.green40,
    app: colors.white40,
    default: colors.white60,
    disabled: colors.grey10,
    info: colors.blue100,
    inverse: colors.grey100,
    modal: colors.shade10,
    selected: colors.blue40,
    success: colors.green100,
    warning: colors.orange80,
  },
  text: {
    alert: colors.red80,
    disabled: colors.grey40,
    inverse: colors.white60,
    inverseHover: colors.grey20,
    link: colors.blue80,
    primary: colors.grey100,
    secondary: colors.grey60,
    selected: colors.blue80,
    success: colors.green80,
    warning: colors.orange60,
  },
  borders: {
    radiusMin: borders.radiusMin,
    radiusMax: borders.radiusMax,
  },
  shadows: shadows,
  swatches: drawPalette,
  palette: {
    research: colors.lemon,
    jobs: colors.seafoam,
    bi: colors.robinBlue,
    broker: colors.blueSteel,
    brand1: colors.moss,
    brand2: colors.tangerine,
    brand3: colors.softGrey,
    brand4: colors.softBlue,
    action20: colors.blue20,
    action40: colors.blue40,
    action60: colors.blue60,
    action80: colors.blue80,
    action100: colors.blue100,
    alert20: colors.red20,
    alert40: colors.red40,
    alert60: colors.red60,
    alert80: colors.red80,
    alert100: colors.red100,
    disabled: colors.grey40,
    info20: colors.blue20,
    info40: colors.blue40,
    info60: colors.blue60,
    info80: colors.blue80,
    info100: colors.blue100,
    inverse: colors.white60, // inverse is the same as background.default
    link: colors.blue80,
    neutral20: colors.grey10,
    neutral40: colors.grey20,
    neutral60: colors.grey30,
    neutral80: colors.grey40,
    neutral100: colors.grey50,
    selectedLight: colors.blue40,
    selected: colors.blue80,
    success20: colors.green20,
    success40: colors.green40,
    success60: colors.green60,
    success80: colors.green80,
    success100: colors.green100,
    warning20: colors.orange20,
    warning40: colors.orange40,
    warning60: colors.orange60,
    warning80: colors.orange80,
    warning100: colors.orange100,
  },
};

export const darkTheme = {
  typography: {
    primary: fonts.body,
    secondary: fonts.data,
  },
  background: {
    active: colors.green80,
    alert: colors.red60,
    app: colors.grey100,
    default: colors.grey100,
    disabled: colors.grey80,
    info: colors.blue60,
    inverse: colors.white60,
    modal: colors.shade10,
    selected: colors.blue80,
    success: colors.green60,
    warning: colors.orange60,
  },
  text: {
    alert: colors.red20,
    disabled: colors.grey40,
    inverse: colors.grey100,
    inverseHover: colors.grey80,
    link: colors.blue80,
    primary: colors.grey50,
    secondary: colors.grey60,
    selected: colors.blue80,
    success: colors.green20,
    warning: colors.orange20,
  },
  borders: {
    border: borders.borderPrimary,
    radiusMin: borders.radiusMin,
    radiusMax: borders.radiusMax,
  },
  shadows: shadows,
  swatches: drawPalette,
  palette: {
    action20: colors.blue100,
    action40: colors.blue80,
    action60: colors.blue60,
    action80: colors.blue40,
    action100: colors.blue20,
    alert20: colors.red100,
    alert40: colors.red80,
    alert60: colors.red60,
    alert80: colors.red40,
    alert100: colors.red20,
    disabled: colors.grey60,
    info20: colors.blue100,
    info40: colors.blue80,
    info60: colors.blue60,
    info80: colors.blue40,
    info100: colors.blue20,
    inverse: colors.grey100,
    link: colors.blue80,
    neutral20: colors.grey100,
    neutral40: colors.grey90,
    neutral60: colors.grey80,
    neutral80: colors.grey60,
    neutral100: colors.grey50,
    selected: colors.blue80,
    selectedLight: colors.blue80,
    success20: colors.green100,
    success40: colors.green80,
    success60: colors.green60,
    success80: colors.green40,
    success100: colors.green20,
    warning20: colors.orange100,
    warning40: colors.orange80,
    warning60: colors.orange60,
    warning80: colors.orange40,
    warning100: colors.orange20,
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
export const viewport = {
  small: "640px",
  medium: "641px",
  large: "1025px",
  xlarge: "1441px",
  xxlarge: "1921px",
};
export const screen = {
  small: `only screen and(max-width: ${viewport.small})`,
  medium: `only screen and(min-width: ${viewport.medium})`,
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
