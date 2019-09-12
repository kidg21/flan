import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  cell-padding: 1rem;
  border-radius: 5px;
  cell-spacing: 1rem;
  border: 1px solid lightgrey;
`;

const THEAD = styled.thead`
  text-align: left;
  color: black;
`;

const Row = styled.tr`
  margin: 1em;
`;

const TH = styled.th`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
`;

//   height:300px;
//   overflow-x:auto;
//   margin-top: 0px;
//   border: 1px solid rgba(255,255,255,0.3);
// }
// th{
//   padding: 20px 15px;
//   text-align: left;
//   font-weight: 500;
//   font-size: 12px;
//   color: #fff;
//   text-transform: uppercase;
// }
// td{
//   padding: 15px;
//   text-align: left;
//   vertical-align:middle;
//   font-weight: 300;
//   font-size: 12px;
//   color: #fff;
//   border-bottom: solid 1px rgba(255,255,255,0.1);
// }

// /* demo styles */

// @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
// body{
//   background: -webkit-linear-gradient(left, #25c481, #25b7c4);
//   background: linear-gradient(to right, #25c481, #25b7c4);
//   font-family: 'Roboto', sans-serif;
// }
// section{
//   margin: 50px;
// }

// /* follow me template */
// .made-with-love {
//   margin-top: 40px;
//   padding: 10px;
//   clear: left;
//   text-align: center;
//   font-size: 10px;
//   font-family: arial;
//   color: #fff;
// }
// .made-with-love i {
//   font-style: normal;
//   color: #F50057;
//   font-size: 14px;
//   position: relative;
//   top: 2px;
// }
// .made-with-love a {
//   color: #fff;
//   text-decoration: none;
// }
// .made-with-love a:hover {
//   text-decoration: underline;
// }

// /* for custom scrollbar for webkit browser*/

// ::-webkit-scrollbar {
//     width: 6px;
// }
// ::-webkit-scrollbar-track {
//     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
// }
// ::-webkit-scrollbar-thumb {
//     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
// }

function TableExample() {
  return (
    <Table>
      <THEAD>
        <Row>
          <TH>Code</TH>
          <TH>Company</TH>
          <TH>Price</TH>
          <TH>Change</TH>
          <TH>Change %</TH>
        </Row>
      </THEAD>
      <Row>
        <td>AAC</td>
        <td>AUSTRALIAN COMPANY </td>
        <td>$1.38</td>
        <td>+2.01</td>
        <td>-0.36%</td>
      </Row>
      <Row>
        <td>AAD</td>
        <td>AUSENCO</td>
        <td>$2.38</td>
        <td>-0.01</td>
        <td>-1.36%</td>
      </Row>
      <Row>
        <td>AAX</td>
        <td>ADELAIDE</td>
        <td>$3.22</td>
        <td>+0.01</td>
        <td>+1.36%</td>
      </Row>
      <Row>
        <td>XXD</td>
        <td>ADITYA BIRLA</td>
        <td>$1.02</td>
        <td>-1.01</td>
        <td>+2.36%</td>
      </Row>
      <Row>
        <td>AAC</td>
        <td>AUSTRALIAN COMPANY </td>
        <td>$1.38</td>
        <td>+2.01</td>
        <td>-0.36%</td>
      </Row>
      <Row>
        <td>AAD</td>
        <td>AUSENCO</td>
        <td>$2.38</td>
        <td>-0.01</td>
        <td>-1.36%</td>
      </Row>
      <Row>
        <td>AAX</td>
        <td>ADELAIDE</td>
        <td>$3.22</td>
        <td>+0.01</td>
        <td>+1.36%</td>
      </Row>
      <Row>
        <td>XXD</td>
        <td>ADITYA BIRLA</td>
        <td>$1.02</td>
        <td>-1.01</td>
        <td>+2.36%</td>
      </Row>
    </Table>
  );
}
export default TableExample;
