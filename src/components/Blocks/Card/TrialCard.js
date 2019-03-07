import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Container from '../../atoms/Container/Container';
import CardHeader from "./CardHeader";
import CardOptions from "./CardOptionsSection";
import Divider from './CardDivider';
import Table from './SimpleDataTable';


function TrialCard() {
    return (
        <Container>
            <CardHeader/>
            <Divider/>
            <CardOptions/>
            <Divider/>
            <Table/>
        </Container>
    )
  }

export default TrialCard;