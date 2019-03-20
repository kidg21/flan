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
`



const Row = styled.tr`
font-family: arial;
font-size: 14px;


&:hover {
  cursor: pointer;
}
`


const Cell = styled.td`
`




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