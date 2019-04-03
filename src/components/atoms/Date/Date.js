import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colors, fonts, fontSize, shadows } from "../../../attributes/Variables/Variables.jsx";


const Calendar = styled.input.attrs({ type: "date" })`
text-align: center;
margin-top: 2px;
padding: 0;
idth: 256px;
border-color: #c9f0f5;
  
`





// const StyledDateRangePicker = styled(DateRangePicker)`
//     .CalendarDay{
//         background-color: red;
//     }
// `;


// .openemr-calendar .ui-datepicker {
//     width: 191px;
// }

// .ui-datepicker table {
//     width: 256px;
//     table-layout: fixed;
// }

// .openemr-calendar .ui-datepicker table {
//     width: 191px;
//     table-layout: fixed;
// }

// .ui-datepicker-header {
//     background-color: #3e9aba !important;
//     background-image: none !important;
//     border-radius: 0;
// }

// .openemr-calendar .ui-datepicker-header {
//     background-color: #e6f7f9 !important;
//     border-width: 1px;
//     border-color: #c9f0f5;
//     border-style: solid;
// }

// .ui-datepicker-title {
//     line-height: 35px !important;
//     margin: 0 10px !important;
// }

// .openemr-calendar .ui-datepicker-title {
//     line-height: 20px !important;
// }

// .ui-datepicker-prev span {
//     display: none !important;
// }

// .ui-datepicker-next {
//     text-align: center;
// }

// .ui-datepicker-next span {
//     display: none !important;
// }

// .ui-datepicker-prev {
//     background-color: transparent 




function Date() {
    return (
      <Calendar/>
    );
}
export default Date;