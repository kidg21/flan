import { createGlobalStyle } from "styled-components"
import styledNormalize from "styled-normalize"
// Import variables
import { colors, fonts, fontSize } from "Variables"
// Import Fonts
import "../../../css/fonts.css"
// Import Icons
import "../../../icons/fontawesome"

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

    /* Document resets */
    html {
        box-sizing: border-box;
        font-size: ${fontSize.base};
        line-height: 1.2;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    body {
        position: fixed;
        width: 100%;
        height: 100%;
        font-family: ${fonts.body}; /* Muli */
        color: ${colors.grey_80};
        font-weight: 400;
        overscroll-behavior: none;
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
      color: ${colors.grey_40};
      font-size: smaller;
      font-weight: 400;
      font-family: Arial;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: ${colors.anchor_light};
      }
      &:focus {
        ${colors.grey_60};
        }
      img { border: none; }
      }

    /* Default paragraph styles */
    h1, h2, h3, h4, h5, h6, p {
        font-style: normal;
        color: inherit;
        letter-spacing: 0.015em;
    }
    p {
        font-family: inherit;
        font-size: 1rem;
        line-height: 1.5rem;
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
        ${"" /* line-height: 2.25rem; */}
        line-height: 2.4rem;
    }
    h2 {
        font-size: 1.5rem;
        ${"" /* line-height: 2.25rem; */}
        line-height: 2rem;
    }
    h3 {
        font-size: 1.3rem;
        ${"" /* line-height: 2.25rem; */}
        line-height: 1.8rem;
    }
    h4 {
        font-size: 1rem;
        ${"" /* line-height: 1.5rem; */}
        line-height: 1.4rem;
    }
    h5 {
        font-size: 0.9rem;
        ${"" /* line-height: 1.5rem; */}
        line-height: 1.3rem;
    }
    h6 {
        font-size: 0.8rem;
        ${"" /* line-height: 1.5rem; */}
        line-height: 1.2rem;
    }
    code {
        font-family: ${fonts.data};
        font-size: 12px;
        font-size: 0.85rem;
        line-height: 1rem;
        letter-spacing: 1px;
        background-color: ${colors.grey_20};
        margin: 0 .1rem;
        padding: 0.125rem 0.3125rem 0.0625rem;
        border: 1px solid ${colors.grey_60};
        font-weight: normal;
        color: inherit;
    }

/* Forms */
/* Placeholder */
    ::placeholder {
        color: ${colors.grey_60};
    }
    ::selection {
        color: ${colors.white};
        background-color: ${colors.anchor};
    }
/* Labels */
    label {
        font-family: ${fonts.data};
        font-size: smaller;
    }
/* Buttons */
    button {
        &:focus {
            outline: none;
        }
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
        color: ${colors.grey_dark};
        font-family: ${fonts.data};
        letter-spacing: 1px;
        border-radius: 5px;
        font-size: 12px;
        transition: border-color 0.1s linear, background 0.1s linear;
        -webkit-appearance: none;
        &:focus {
            outline: none;
        }
        &[disabled],
        &[readonly] {
            cursor: not-allowed;
            pointer-events: none;
            user-select: none;
            background-color: ${colors.grey_20};
        }
    }

    `
    

export default GlobalStyles
