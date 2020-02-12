/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Card from "elements/Card";
import IconBlock from "blocks/IconBlock";

const CardPicker = styled(Card)`
width: 35%;
`;

function Picker({
  id,
}) {

  return (
    <CardPicker
      id={id}
      padding="2x"
    >
        <IconBlock>
            <Icon icon="circle_solid" size="2x" type="warning"/>
            <Icon icon="circle_solid" size="2x" type="success"/>
            <Icon icon="circle_solid" size="2x" type="alert"/>
            <Icon icon="circle_solid" size="2x" type="info"/>
            <Icon icon="circle_solid" size="2x" brand="research"/>
            <Icon icon="circle_solid" size="2x" brand="bi"/>
            <Icon icon="circle_solid" size="2x" brand="jobs"/>
            <Icon icon="circle_solid" size="2x" brand="brand1"/>
            <Icon icon="circle_solid" size="2x" brand="brand2"/>
        </IconBlock>

    </CardPicker>
  );
}



export default Picker;
