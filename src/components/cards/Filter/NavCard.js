import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../../atoms/Icon/Icon';


const HeaderSection = styled.div`
overflow: hidden;
background: white;
border-bottom: 0.25px solid #EAEDED;
padding: .8em 1em .8em;
cursor: pointer;
line-height: normal;
justify-content: space-between;
display: flex;

`

const H4 = styled.h4`
margin: 0;

`

const navProps = {
    nameProp: ["far", "angle-right"],
    colorProp: "dimgray"
  };




const CardContainer = ({title, ...props}) => {
    return (
        <HeaderSection>
          <H4>{title}</H4>
          <Icon {...navProps}/>
        </HeaderSection>
    )
  }


export default CardContainer;