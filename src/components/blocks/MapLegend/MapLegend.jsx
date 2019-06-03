import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Form, {Section, SectionName, InputGroup } from 'layout/Form';


const data = [
  {id: 'a', color: 'red', name: 'Devin'},
  {id: 'b', color: 'blue', name: 'Gabe'},
  {id: 'c', color: 'green', name: 'Kim'},
]

const LI = styled.li`
list-style: none;
`

const UL = styled.ul`
display: flex;
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
        <UL>
          {data.map(item => <LI key={item.id}>
          {item.color} {item.name} </LI>)}
        </UL>
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