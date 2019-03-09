import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Container from '../../atoms/Container/Container';
import CardHeader from "./CardHeader";
import CardOptions from "./CardOptionsSection";
import Divider from './CardDivider';
import Table from './SimpleDataTable';
import floodzoneFile from './floodzone.png';

const image = {
    src: floodzoneFile,
    alt: 'Flood'
};


function TrialCard() {
    return (
        <Container>
            <CardHeader/>
            <img src={image.src} alt={image.alt}/> 
            <Divider/>
            <CardOptions/>
            <Table/>
        </Container>
    )
  }

export default TrialCard;