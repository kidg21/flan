import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Container from '../../atoms/Container/Container';
import CardHeader from "./CardHeader";
import CardOptions from "./CardOptionsSection";
import Divider from '../../atoms/Divider/Divider';
import MapLegend from "./MapLegend";



// iconProps: {nameProp: ["far", "angle-up"],
// colorProp: "dimgray"},




// const image = {
//     src: floodzoneFile,
//     alt: 'Flood'
// };


function LayerCard() {
    return (
        <Container>
            <CardHeader/>
            <Divider/>
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