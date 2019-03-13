import React from 'react';
import styled, { css } from 'styled-components';

const Line = styled.hr`
height:0;
border-top: 0.25px solid #EAEDED;
font-size: 0;
`

function Divider() {
    return (
            <Line/>
    )
  }


export default Divider;