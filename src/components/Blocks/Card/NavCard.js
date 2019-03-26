import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../../atoms/Icon/Icon';


const HeaderSection = styled.div`
overflow: hidden;
background: white;
border-bottom: 0.25px solid #EAEDED;
padding: 1em 1em 1em;
cursor: pointer;
line-height: normal;
justify-content: space-between;
display: flex;

`


const iconProps = {
    nameProp: ["far", "angle-right"],
    colorProp: "dimgray"
  };



const CardContainer = ({title}) => {
    return (
        <HeaderSection>
          <h4 style={{margin: 0}}>{title}</h4>
           <Icon {...iconProps}/>
        </HeaderSection>
    )
  }


export default CardContainer;