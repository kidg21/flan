import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Table = styled.table`
overflow: hidden;
box-shadow: 0 0 20px rgba(0, 0, 0, .08);
border-radius: 5px;
border-collapse: collapse;
display: flex-block;
width: 100%;
`
const TH = styled.th`
text-align: left;
font-family: arial;
font-size: 12px;
padding: 5px 10px 5px;
border-bottom: 1px solid #ddd;
`

const Row = styled.tr`
font-family: arial;
font-size: 12px;

&:nth-child(even) {
  background-color: #f2f2f2;
}

&:hover {
  background-color: #ddd;
  transition: background .05s ease-in;
  cursor: pointer;
}
`


const Cell = styled.td`
padding: 5px 10px 5px;
`

// const headers = ['Band', 'Singer', 'Inception', 'Label'];

// const rows = [  
// ['Napalm Death', 'Barney Greenway', '1981', 'Century Media'],
// ['Carcass', 'Jeff Walker', '1985', 'Earache'],
// ['Extreme Noise Terror', 'Dean Jones', '1985', 'Candlelight'],
// ['Discordance Axis', 'Jon Chang', '1992', 'Hydrahead']
// ]; 

//<Table rows={rows} headers={headers} />

// class TableFunction extends React.Component {
//   render() {
//     return (
//       <Table>
//         <Tr>
//           {this.props.headers.map((header, i) => 
//             <th scope='col' key={i}>{header}</th>
//             )}
//         </Tr>
//         {this.props.rows.map((row, i) =>
//           <TR key={i}>
//           {row.map((cell, i) =>
//             <TD key={i}>{cell}</TD>
//         )}
//         </TR>
//         )}
//       </Table>
//     );
//   }
// }



function TableFunction() {
  return (
          <Table>
            <Row>
              <TH> Data Category</TH>
              <TH> Data Result </TH>
              </Row>
              <Row>
                <Cell>Row one, first cell</Cell>
                <Cell>Row one, second cell</Cell>
            </Row>
            <Row>
                <Cell>Row one, first cell</Cell>
                <Cell>Row one, second cell</Cell>
            </Row>
            <Row>
                <Cell>Row one, first cell</Cell>
                <Cell>Row one, second cell</Cell>
            </Row>
            <Row>
                <Cell>Row one, first cell</Cell>
                <Cell>Row one, second cell</Cell>
            </Row>
          </Table>
  )
}


export default TableFunction;