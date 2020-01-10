/* eslint-disable linebreak-style */
import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import { Skeleton } from "helpers";
// Import variables
import { fonts, fontSize, Lighten, Darken } from "Variables";
// Import Fonts
import "css/fonts.css";
// Import Icons
import "icons/fontawesome";

const GlobalStyles = createGlobalStyle`

    /* Browser resets */
    ${styledNormalize}

    /** TODO: Font imports */

    /* Document resets */
    html {
        box-sizing: border-box;
        font-size: ${fontSize.base};
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    body {
        /* position: fixed; */
        width: 100%;
        height: 100%;
        font-family: ${fonts.body}; /* Muli */
        font-weight: 400;
        line-height: 1.45;
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
      line-height: inherit;
      text-decoration: none;
      padding: .5em;
      margin: -.5em;
      cursor: pointer;
      &:empty {
        &:before {
          ${Skeleton};
          height: 1.3em;
          width: 10rem;
        }
      }
      &:hover,
      &:focus {
        ${Darken};
      }
      &:active {
        ${Lighten};
      }
      img { border: none; }
      }

    /* Default paragraph styles */
    h1, h2, h3, h4, h5, h6, p {
        font-style: normal;
        color: inherit;
        width: fit-content;
    }
    p {
        font-family: inherit;
        margin: 0 0 1rem;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${fonts.headline}; /* Muli */
        font-weight: 600;
        margin: 0 0 .5rem;
        line-height: 1.35;
    }
    h1 {
        font-size: 1.383em;
        &:empty {
            &:before {
              ${Skeleton};
              height: 1.3em;
              width: 5em;
            }
          }
    }
    h2 {
        font-size: 1.296em;
        &:empty {
            &:before {
              ${Skeleton};
              height: 1.3em;
              width: 10rem;
            }
          }
    }
    h3 {
        font-size: 1.215em;
        &:empty {
            &:before {
              ${Skeleton};
              height: 1.3em;
              width: 10rem;
            }
          }
    }
    h4 {
        font-size: 1.138em;
        &:empty {
            &:before {
              ${Skeleton};
              height: 1.4rem;
              width: 40vw;
            }
          }
    }
    h5 {
        font-size: 1.067em;
        &:empty {
            &:before {
              ${Skeleton};
              height: 1.5em;
              width: 10rem;
            }
          }
    }
    h6 {
        font-size: 1em;
        &:empty {
            &:before {
              ${Skeleton};
              height: 1.3em;
              width: 10rem;
            }
          }
    }
    img, object {
        &:empty {
            &:before {
              ${Skeleton};
              height: 2em;
              width: 2rem;
            }
          }
    }
    code {
        font-family: ${fonts.data};
        font-size: 0.85rem;
        line-height: 1rem;
        letter-spacing: 1px;
        font-weight: normal;
        color: inherit;
    }

/* Forms */
/* Placeholder */
    ::placeholder {
        &:empty {
          &:before {
            ${Skeleton};
            height: 1.3em;
            width: 10rem;
          }
        }
    }

    ::selection {

    }
/* Labels */
    label {
      font-family: ${fonts.data};
      font-size: 0.876rem;
      font-weight: 600;
      letter-spacing: 1px;
      &:empty {
        &:before {
          ${Skeleton};
          height: 1.3em;
          width: 5rem;
        }
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
    input[type="range"],
    textarea,
    select {
      box-sizing: border-box;
      width: 100%;
      font-family: ${fonts.data};
      letter-spacing: 2px;
      border-radius: 5px;
      transition: border-color 0.1s linear, background 0.1s linear;
      appearance: none;
      &:focus {
        outline: none;
      }
      &[disabled],
      &[readonly] {
        cursor: not-allowed;
        pointer-events: none;
        user-select: none;
      }
      ::-webkit-datetime-edit-day-field,
      ::-webkit-datetime-edit-week-field,
      ::-webkit-datetime-edit-month-field,
      ::-webkit-datetime-edit-year-field,
      ::-webkit-datetime-edit-hour-field,
      ::-webkit-datetime-edit-minute-field,
      ::-webkit-datetime-edit-second-field,
      ::-webkit-datetime-edit-millisecond-field,
      ::-webkit-datetime-edit-ampm-field,
      ::-webkit-datetime-edit-text {
        &:focus {
        }
      }
    }
    input[type="checkbox"],
    input[type="radio"] {
      &[disabled],
      &[readonly] {
        cursor: not-allowed;
        pointer-events: none;
        user-select: none;
      }
    }
    input[type="range"] {
      &[disabled],
      &[readonly] {
        }
      }
    `;

export default GlobalStyles;
