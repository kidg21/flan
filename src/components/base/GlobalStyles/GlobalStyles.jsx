/* eslint-disable linebreak-style */
import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import { Skeleton } from "helpers/Skeleton";
// Import variables
import { fonts, fontSize } from "Variables";
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
    // a {
      
    //   }
    //   img { border: none; }
    //   }

    /* Default paragraph styles */
    h1, h2, h3, h4, h5, h6, p {
     
    }
    p {
        // font-family: inherit;
        // margin: 0 0 1rem;
    }
    h1, h2, h3, h4, h5, h6 {
    }
    // h1 {
  
    //         }
    //       }
    // }
    // h2 {
  
    //         }
    //       }
    // }
    // h3 {
  
    //         }
    //       }
    // }
    // h4 {
    //
    //         }
    //       }
    // }
    // h5 {
    //   
    //         }
    //       }
    // }
    // h6 {
    //  
    //         }
    //       }
    // }
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
    // label {
    //   font-family: ${fonts.data};
    //   font-size: 0.876rem;
    //   font-weight: 400;
    //   letter-spacing: 1px;
    //   &:empty {
    //     &:before {
    //       ${Skeleton};
    //       height: 1.3em;
    //       width: 5rem;
    //     }
    //   }
    // }
// /* Buttons */
//     button {
//       box-sizing: border-box;
//       &:focus {
//         outline: none;
//       }
//       &:empty {
//         &:before {
//           ${Skeleton};
//           height: 2em;
//           width: 8rem;
//         }
//       }
//     }
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
      font-family: ${fonts.body};
      letter-spacing: 1px;
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
