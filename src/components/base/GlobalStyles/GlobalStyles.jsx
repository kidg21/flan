import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
// Import variables
// import { colors, fontName, fontSize } from "../variables";
import { colors, fontName, fontSize } from "../Variables/Variables";
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
        font-family: ${fontName.body}; /* Muli */
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
        font-family: ${fontName.headline}; /* Muli */
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
        font-family: ${fontName.data};
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
`;

export default GlobalStyles;
