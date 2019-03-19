import React from 'react';
import styled, { css } from 'styled-components';
import LegendNav from './LegendHeader';
import Button from "../../atoms/Button/Button";

const Container = styled.div`
  text-align: left;
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`

const CardWrapper = styled.div`
  overflow: hidden;
  padding-left: 5px;
  padding-right: 5px;
  font-family: Quicksand, arial, sans-serif;
`

const CardHeader = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  
`

const PanelFooter = styled.footer`
position: center;
  
text-align: center;
padding-top: 20px;
padding-bottom: 20px;
`


// const CardFieldset = styled.fieldset`
//   position: relative;
//   padding: 0;
//   margin: 0;
//   border: 0;

//   & + & {
//     margin-top: 24px;
//   }

//   &:nth-last-of-type(2) {
//     margin-top: 32px;
//   }

//   &:last-of-type {
//     text-align: center;
//   }
// `




function Panel() {
    return (
        <Container>
      <CardWrapper>
      <CardHeader>
          <LegendNav/>
        </CardHeader>
<PanelFooter>
    <Button primary> Apply </Button>
</PanelFooter>

      </CardWrapper>
      </Container>
    )
  }


export default Panel;