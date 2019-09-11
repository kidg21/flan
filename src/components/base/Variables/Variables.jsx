import { css } from "styled-components";

export const DMPTheme = {
  background: {
    default: "#ffffff",
    app: "#f4f6fc",
  },
  divider: "#E2E1DF",
  text: {
    primary: "#5e5a62",
    secondary: "#99958F",
    inverse: "#ffffff",
    link: "#5FD1E2",
    disabled: "#E2E1DF",
  },
  colors: {
    primary: "#2B82B1",
    secondary: "#6c9b39",
  },
  status: {
    info: "#206bca",
    alert: "#b41313",
    warning: "#ca8720",
    success: "#07843f",
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
    default: "#333332",
    app: "#f4f6fc",
  },
  divider: "#E2E1DF",
  text: {
    primary: "#ffffff",
    secondary: "#99958F",
    inverse: "#000000",
    link: "#5FD1E2",
    disabled: "#E2E1DF",
  },
  colors: {
    primary: "#5FD1E2",
    secondary: "#CDE575",
  },
  status: {
    info: "#7bc7fa",
    alert: "#eb8775",
    warning: "#e5da66",
    success: "#AFE575",
  },
  accents: {
    white: "#ffffff",
    black: "#000000",
    green: "green",
    waterwayBlue: "#44A3D8",
    burntOrange: "#B84438",
  },
};

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
  anchor_light: "hsl(204, 61%, 73%)",
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
