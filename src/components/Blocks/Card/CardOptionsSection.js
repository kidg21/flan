import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Container from '../../atoms/Container/Container';
import Label from  '../../atoms/Label/Label';
import Checkbox from '../../atoms/Checkbox/Checkbox';


const BodyLayout =styled.div`
  align-items: center;
  padding-left: 2rem;
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

const OL = styled.ol`
padding: 0px 0px 0px;
`

const LI = styled.li`
list-style-type: none;
padding-bottom: 3px;
`


function CardOptionsSection() {
    return (
        <BodyLayout>
          <LeftSide>
<OL>
  <LI><Checkbox/></LI>
  <LI><Checkbox/></LI>
  <LI><Checkbox/></LI>
</OL>
          </LeftSide>
          <RightSide>
<OL>
<LI><Checkbox/></LI>
<LI><Checkbox/></LI>
<LI><Checkbox/></LI>
</OL>
          </RightSide>
        </BodyLayout>
    )
  }

export default CardOptionsSection;