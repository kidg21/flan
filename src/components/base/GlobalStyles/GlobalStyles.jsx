import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import { Skeleton } from "helpers";
// Import variables
import { colors, fonts, fontSize, Lighten, Darken } from "Variables";
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
        position: fixed;
        width: 100%;
        height: 100%;
        font-family: ${fonts.body}; /* Muli */
        color: ${colors.grey_80};
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
      color: ${colors.anchor};
      line-height: inherit;
      text-decoration: none;
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
        &:empty {
          &:before {
            ${Skeleton};
            height: 1.3em;
            width: 10rem;
          }
        }
    }

    ::selection {
        color: ${colors.white};
        background-color: ${colors.anchor};
    }
/* Labels */
    label {
      font-family: ${fonts.data};
      font-size: 0.85em;
      letter-spacing: 1px;
      &:empty {
        &:before {
          ${Skeleton};
          height: 1.3em;
          width: 5rem;
        }
      }
    }
/* Buttons */
    button {
      &:focus {
        outline: none;
      }
      &:empty {
        &:before {
          ${Skeleton};
          height: 2em;
          width: 8rem;
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
      color: ${colors.grey_dark};
      font-family: ${fonts.data};
      letter-spacing: 1px;
      border-radius: 5px;
      font-size: 12px;
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
        background-color: ${colors.grey_light};
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
          color: ${colors.white};
          background-color: ${colors.success};
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
          background-color: ${colors.grey_40};
        }
      }
    `;

export default GlobalStyles;
