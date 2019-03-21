import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
// Import variables
// import { colors, fonts, fontSize } from "../variables";
import { colors, fonts, fontSize } from "../Variables/Variables";
// Import Fonts
// import Lato_700 from "../../fonts/lato-v14-latin-700.ttf"
import "../../../css/fonts.css";

const GlobalStyles = createGlobalStyle`

    /* Browser resets */
    ${styledNormalize}

    /* Import font resources */
    ${
      "" /* @font-face {
        font-family: Lato;
        src: local("Lato");
        src: url(${Lato_700});
    } */
    }

    ${
      "" /* @import url("https://fonts.googleapis.com/css?family=Muli:200,300,400,600,700,800,900"); */
    }
    ${
      "" /* @import url("https://fonts.googleapis.com/css?family=Lato:300,400,700,900"); */
    }

    /* Document resets */
    html {
        box-sizing: border-box;
        font-size: ${fontSize.base};
        line-height: 1.5rem;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    body {
        font-family: ${fonts.body}; /* Muli */
        color: ${colors.grey_80};
        font-weight: 400;
    }

    /* Typography resets */
    div,
    dl,
    dt,
    dd,
    ul,
    ol,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    pre,
    form,
    p,
    blockquote,
    th,
    td {
      margin:0;
      padding:0;
    }

    /* Default Link Styles */
    a {
      color: ${colors.anchor};
      line-height: inherit;
      text-decoration: none;
      cursor: pointer;

      &:hover,
      &:focus {
        ${"" /* color: $anchor-font-color-hover; */}
        }
      img { border: none; }
      }

    /* Default paragraph styles */
    h1, h2, h3, h4, h5, h6, p {
        font-style: normal;
        color: inherit;
        text-rendering: optimizeLegibility;
    }
    p {
        font-family: inherit;
        margin: 0 0 1rem;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${fonts.headline}; /* Muli */
        font-weight: 700;
        margin: 0 0 .5rem;
    }
    h1 {
        font-size: 2rem;
        ${"" /* font-size: calc((${fontSize.base}) * 2); */}
        line-height: 2.25rem;
    }
    h2 {
        font-size: 1.5rem;
        line-height: 2.25rem;
    }
    h3 {
        font-size: 1.3rem;
        line-height: 2.25rem;
    }
    h4 {
        font-size: 1rem;
        line-height: 1.5rem;
    }
    h5 {
        font-size: 0.9rem;
        line-height: 1.5rem;
    }
    h6 {
        font-size: 0.8rem;
        line-height: 1.5rem;
    }
    code {
        font-family: ${fonts.data};
        font-weight: bold;
        font-size: 0.85rem;
        line-height: 1.5rem;
        letter-spacing: 1px;
        background-color: ${colors.grey_20};
        margin: 0 .1rem;
        padding: 0.125rem 0.3125rem 0.0625rem;
        border: 1px solid ${colors.grey_40};
        font-weight: normal;
        color: inherit;
    }

/* Placeholder */
    ::placeholder {
        color: ${colors.grey_60};
        letter-spacing: 1px;
        font-weight: 400;
    }  

/* Labels */
    label {
        font-family: ${fonts.data};
    }
/* Inputs */
    input:not([type]),
    input[type="text"],
    input[type="password"],
    input[type="date"],
    input[type="datetime"],
    input[type="datetime-local"],
    input[type="month"],
    input[type="week"],
    input[type="email"],
    input[type="number"],
    input[type="search"],
    input[type="tel"],
    input[type="time"],
    input[type="url"],
    input[type="color"],
    textarea,
    select {
        box-sizing: border-box;
        width: 100%;
        ${"" /* background-color: ${colors.white}; */}
        color: ${colors.grey_dark};
        ${"" /* font-family: inherit; */}
        font-family: ${fonts.data};
        font-weight: 700;
        letter-spacing: 2px;
        border-radius: 0;

        /* border: 1px solid transparent;
        border-bottom: 2px solid ${colors.grey_40}; */

        ${"" /* border-color: ${props => (props.error ? colors.alert : "")}; */}
        ${"" /* background-color: ${props => (props.error ? "#f9ebeb" : "")}; */}
        ${"" /* caret-color: ${props => (props.error ? colors.alert : "")}; */}

        ${"" /* border: 1px solid transparent; */}
        ${"" /* border-bottom: 2px solid ${colors.grey_40}; */}
        transition: border-color 0.25s linear, background 0.25s linear;
        -webkit-appearance: none;
    &::selection {
        color: ${colors.white};
        background: ${colors.success};
    }
    &:focus {
        outline: none;
        ${"" /* caret-color: ${colors.success}; */}
        ${
          "" /* background-color: ${props => (props.error ? "#f9ebeb" : "#f1f8eb")}; */
        }
        ${
          "" /* border-color: ${props => (props.error ? colors.alert : colors.success)}; */
        }
        /* background: ${colors.success};
        background-color: #f1f8eb;
        border: 1px solid #c8e1af;
        border-bottom: 2px solid ${colors.success}; */
    }
    &[disabled],
    &[readonly] {
        cursor: not-allowed;
        pointer-events: none;
        user-select: none;
        background-color: ${colors.grey_light};
        border-bottom: 2px solid ${colors.grey_20};
        ::placeholder {
            color: ${colors.grey_40};
        }  
    }
}
`;

export default GlobalStyles;
