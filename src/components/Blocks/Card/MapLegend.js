import React from 'react';
import styled, { css } from 'styled-components';

const Legend = styled.div`
padding: 0em 2em 1em 2em;
`
const Title = styled.h1`
text-align: left;
margin-bottom: 5px;
color: black;
font-weight: bold;
font-size: 90%;
`
const MyLegendLegendScale = styled.ul`
margin: 0;
margin-bottom: 5px;
padding: 0;
list-style: none;
`
const LegendText = styled.li`
font-size: 80%;
display: flex;
list-style: none;
margin-left: 0;
line-height: 18px;
margin-bottom: 2px;
`

const LegendLabels = styled.li`
display: flex;
float: left;
height: 16px;
width: 30px;
margin-right: 5px;
margin-left: 0;
border: 1px solid #999;
`

function MapLegend() {
    return (
<Legend>
    <Title>Title of legend</Title>
    <MyLegendLegendScale>
            <LegendLabels style={{background: '#8DD3C7'}}/><LegendText>One</LegendText>
            <LegendLabels styled={{background: '#FFFFB3'}}/><LegendText>Two</LegendText>
            <LegendLabels style={{background:'#BEBADA'}}/><LegendText>Three</LegendText>
            <LegendLabels style={{background: '#FB8072'}}/><LegendText>Four</LegendText>
            <LegendLabels style={{background: '#80B1D3'}}/><LegendText>Five</LegendText>
    </MyLegendLegendScale>
</Legend>

)
}

export default MapLegend;
