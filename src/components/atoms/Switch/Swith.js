// import React from 'react';
// import styled, {css} from 'styled-components';
// import PropTypes from 'prop-types';


// const Toggle = styled.button`
//     box-sizing: initial;
//     left: 0;
//     display: inline-block;
//     outline: 0;
//     width: 8em;
//     height: 4em;
//     position: relative;
//     cursor: pointer;
//     user-select: none;
//     background: #fbfbfb;
//     border-radius: 4em;
//     padding: 4px;
//     transition: all 0.4s ease;
//     border: 2px solid #e8eae9;


//     &:active {
//         box-sizing: initial;
//         box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08),
//           inset 0px 0px 0px 3px #9c9c9c;
//       }

//     &:after {
//         left: 50%;
//         position: relative;
//         display: block;
//         content: '';
//         width: 50%;
//         height: 100%;
//         border-radius: 4em;
//         background: #fbfbfb;
//         transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
//           padding 0.3s ease, margin 0.3s ease;
//         box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
//     }
    
//     `

//     const ToggleBackground = styled.div`
//     box-sizing: initial;
//     display: inline-block;
//     outline: 0;
//     width: 8em;
//     height: 4em;
// `




//     function Switch() {
//         return (
//                 <Toggle/>
//         )
//       }
    
    
//     export default Switch;




// //   .toggle-input:focus + .toggle-btn::after,
// //   .toggle-btn:active::after {
// //     box-sizing: initial;
// //     box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08),
// //       inset 0px 0px 0px 3px #9c9c9c;
// //   }
// //   .toggle-btn::after {
// //     left: 0;
// //     position: relative;
// //     display: block;
// //     content: '';
// //     width: 50%;
// //     height: 100%;
// //     border-radius: 4em;
// //     background: #fbfbfb;
// //     transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
// //       padding 0.3s ease, margin 0.3s ease;
// //     box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
// //   }
// //   .toggle-btn.toggle-btn-on::after {
// //     left: 50%;
// //   }
//   .toggle-btn.toggle-btn-on {
//     background: #86d993;
//   }
//   .toggle-btn.toggle-btn-on:active {
//     box-shadow: none;
//   }
//   .toggle-btn.toggle-btn-on:active::after {
//     margin-left: -1.6em;
//   }
//   .toggle-btn:active::after {
//     padding-right: 1.6em;
//   }
//   .toggle-input {
//     /* visually hidden but still accessible */
//     border: 0;
//     clip: rect(0 0 0 0);
//     height: 1px;
//     margin: -1px;
//     overflow: hidden;
//     padding: 0;
//     position: absolute;
//     width: 1px;
//     white-space: nowrap;
//   }
  