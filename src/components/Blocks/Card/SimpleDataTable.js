import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';



const Wrapper =styled.div`
  align-items: center
  padding: 5px;
  `

const Table = styled.table`
overflow: hidden;
border-radius: 5px;
border-collapse: collapse;
display: flex-block;
width: 100%;
`
const TH = styled.th`
text-align: left;
font-family: arial;
font-size: 14px;
padding: 5px 10px 5px;
`



const Row = styled.tr`
font-family: arial;
font-size: 14px;


&:hover {
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
          <Wrapper>
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
          </Wrapper>
  )
}


export default TableFunction;