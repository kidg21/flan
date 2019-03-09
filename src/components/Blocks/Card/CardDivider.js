import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';

const Line = styled.hr`
height:0;
border-top: 0.25px solid #EAEDED;
font-size: 0;
`

function CardDivider() {
    return (
            <Line/>
    )
  }


export default CardDivider;