import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Container from '../../atoms/Container/Container';
import CardHeader from "./CardHeader";
import CardOptions from "./CardOptionsSection";
import Divider from '../../atoms/Divider/Divider';
import MapLegend from "../Map/MapLegend";



// iconProps: {nameProp: ["far", "angle-up"],
// colorProp: "dimgray"},






function LayerCard() {
    return (
        <Container>
            <MapLegend/>
            <CardOptions/>
        </Container>
    )
  }

export default LayerCard;



{/* <CardHeader/>
<img src={image.src} alt={image.alt}/> 
<Divider/>
<CardOptions/>
<Table/> */}