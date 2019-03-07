import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Container from '../../atoms/Container/Container';
import Label from  '../../atoms/Label/Label';
import Checkbox from '../../atoms/Checkbox/Checkbox';


const BodyLayout =styled.div`
  align-items: center
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "left right";
}
 `

const LeftSide = styled.div`
justify-content: flex-start;
grid-area: left;
display: flex;
`

const RightSide = styled.div`
justify-content: flex-start;
grid-area: right;
display: flex;
`

const LI = styled.li`
list-style-type: none;
padding-bottom: 3px;
`


function Options() {
    return (
        <Container>
        <BodyLayout>
          <LeftSide>
<ul>
  <LI><Checkbox/></LI>
  <LI><Checkbox/></LI>
  <LI><Checkbox/></LI>
</ul>
          </LeftSide>
          <RightSide>
<ol>
<LI><Checkbox/></LI>
<LI><Checkbox/></LI>
<LI><Checkbox/></LI>
</ol>
          </RightSide>
        </BodyLayout>
                </Container>
    )
  }

export default CardContainer;