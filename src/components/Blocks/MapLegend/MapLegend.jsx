import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Form, {Section, SectionName, InputGroup } from 'layout/Form';


const data = [
  {id: 'a', color: 'red', name: 'Devin'},
  {id: 'b', color: 'blue', name: 'Gabe'},
  {id: 'c', color: 'green', name: 'Kim'},
]

const Legend = styled.div`
display: flex;
flex-direct:row;
justify-content: space-between;
`
const Container = styled.div`
width: 100wh;
border: 1px solid #ddd;
`




function MapLegend() {
  return (
    <Form>
      <Section>
        <SectionName>Hello</SectionName>
        <Container>
          {data.map(item => <div key={item.id}>
          {item.color} {item.name}</div>)}
        </Container>
      </Section>
    </Form>
  
  );
}

export default MapLegend;




 // <Legend>
     
    //   <MyLegendLegendScale>
    //     <LegendLabels style={{ background: "#CD5C5C" }} />
    //     <LegendText>One</LegendText>
    //     <LegendLabels style={{ background: "#FF9999" }} />
    //     <LegendText>Two</LegendText>
    //     <LegendLabels style={{ background: "#FA8072" }} />
    //     <LegendText>Three</LegendText>
    //     <LegendLabels style={{ background: "#E9967A" }} />
    //     <LegendText>Four</LegendText>
    //     <LegendLabels style={{ background: "#FFA07A" }} />
    //     <LegendText>Five</LegendText>
    //   </MyLegendLegendScale>
    // </Legend>