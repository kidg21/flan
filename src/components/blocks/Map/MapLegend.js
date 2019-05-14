import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Legend = styled.div`
  padding: 0em 2em 1em 2em;
`;
const Title = styled.h4`
  text-align: left;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const MyLegendLegendScale = styled.ul`
  margin: 0;
  margin-bottom: 5px;
  padding: 0;
  list-style: none;
`;
const LegendText = styled.li`
  font-size: 80%;
  display: flex;
  list-style: none;
  margin-left: 0;
  line-height: 18px;
  margin-bottom: 2px;
`;

const LegendLabels = styled.li`
  display: flex;
  float: left;
  height: 16px;
  width: 30px;
  margin-right: 5px;
  margin-left: 0;
  border: 1px solid #999;
`;

function MapLegend() {
  return (
    <Legend>
      <Title>Title of legend</Title>
      <MyLegendLegendScale>
        <LegendLabels style={{ background: "#CD5C5C" }} />
        <LegendText>One</LegendText>
        <LegendLabels style={{ background: "#FF9999" }} />
        <LegendText>Two</LegendText>
        <LegendLabels style={{ background: "#FA8072" }} />
        <LegendText>Three</LegendText>
        <LegendLabels style={{ background: "#E9967A" }} />
        <LegendText>Four</LegendText>
        <LegendLabels style={{ background: "#FFA07A" }} />
        <LegendText>Five</LegendText>
      </MyLegendLegendScale>
    </Legend>
  );
}

export default MapLegend;
