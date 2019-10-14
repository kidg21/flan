import { css } from "styled-components";

// Codes for color palette
export const colors = {
  white: "hsl(0, 100%, 100%)",
  grey_light: "hsl(34, 5%, 95%)",
  grey_light_glass: "hsl(34, 5%, 95%, 0.85)",
  grey_20: "hsl(34, 5%, 88%)",
  grey_40: "hsl(34, 5%, 72%)",
  grey_60: "hsl(34, 5%, 58%)",
  grey_80: "hsl(34, 5%, 36%)",
  grey_dark: "hsl(34, 5%, 28%)",
  grey_dark_glass: "hsla(34, 5%, 28%, 0.85)",
  black: "hsl(34, 5%, 12%)",
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
};

export const DMPTheme = {
  background: {
    default: "#ffffff",
    app: "#f4f6fc",
  },
  divider: "#E2E1DF",
  text: {
    primary: "#605C57",
    secondary: "#99958F",
    inverse: "#ffffff",
    link: "#5FD1E2",
    alert: "hsl(1, 55%, 50%)",
    disabled: "#b1b2b3",
    info: "hsl(204, 61%, 43%)",
    success: "rgb(36, 138, 61)",
    warning: "rgb(178, 80, 0)",
  },
  palette: {
    primary: "#2B82B1",
    primaryLight: "#66b1e3",
    primaryTint: "#bcd6e3",
    primaryDark: "#005681",
    secondary: "#6c9b39",
    secondaryLight: "#80bc3f",
    secondaryTint: "#cadf90",
    secondaryDark: "#3d6c05",
    info: "rgb(0, 122, 225)",
    alert: "#ed2318",
    alertLight: "#ffafab",
    alertTint: "#e09d9d",
    alertDark: "#7d0000",
    warning: "rgb(255, 204, 0)",
    success: "#14a839",
    successLight: "#c1f9a5",
    successDark: "#2d4e1f",
    white: "#ffffff",
    black: "#000000",
    disabled: "#f1f1f1",
    border: "#BBB8B4",
    inverse: "#ffffff",
    grey: "rgb(142, 142, 147)",
    grey2: "rgb(174, 174, 178)",
    grey3: "rgb(199, 199, 204)",
    grey4: "rgb(209, 209, 214)",
    grey5: "rgb(229, 229, 234)",
    grey6: "rgb(242, 242, 247)",
  },
  accents: {
    white: "#ffffff",
    black: "#000000",
    green: "green",
    waterwayBlue: "#44A3D8",
    burntOrange: "#B84438",
  },
};

export const darkTheme = {
  background: {
    default: "rgb(28, 28, 30)",
    app: "#f4f6fc",
  },
  divider: "rgb(99, 99, 102)",
  text: {
    primary: "#ffffff",
    secondary: "#f7f4f0",
    inverse: "#000000",
    link: "#66b1e3",
    alert: "#ff5252",
    disabled: "#E2E1DF",
    info: "#66b1e3",
    success: "rgb(36, 138, 61)",
    warning: "rgb(178, 80, 0)",
  },
  palette: {
    primary: "#4ebbf2",
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
    white: "#000000",
    black: "#ffffff",
    disabled: "rgb(99, 99, 102)",
    border: "#2935aa",
    inverse: "#000000",
    grey: "rgb(28, 28, 30)",
    grey2: "rgb(44, 44, 46)",
    grey3: "rgb(58, 58, 60)",
    grey4: "rgb(72, 72, 74)",
    grey5: "rgb(99, 99, 102)",
    grey6: "rgb(142, 142, 147)",
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
  filter: brightness(85%) contrast(150%);
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
