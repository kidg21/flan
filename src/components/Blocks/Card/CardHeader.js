import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Container from '../../atoms/Container/Container';
import Label from  '../../atoms/Label/Label';
import IconGroup from '../../atoms/Icon/IconGroup';
import Icon from '../../atoms/Icon/Icon';
import Switch from "../../atoms/Switch/Switch";


const HeaderSection = styled.div`
overflow: hidden;
cursor: pointer;
justify-content: space-between;
display: flex;
`

const ViewLegend = styled.div`
line-height: normal;
cursor: pointer;
display: flex;
justify-content: flex-start;
`

const LayerCard = styled.div`
border-bottom: 0.25px solid #EAEDED;
padding: .8em 1em .8em;
`


function CardContainer({title}) {
    return (
      <LayerCard>
        <HeaderSection>
          <Switch/>
          <h4 style={{margin: 0, flex: "auto", paddingLeft: "1.5em"}}>{title}</h4>
          <IconGroup />
        </HeaderSection>
       <ViewLegend>
        <a style={{fontSize: "10px", fontWeight: "700", paddingLeft: "5.5em" }}>View Legend</a>
         </ViewLegend>
        </LayerCard>
    )
  }


export default CardContainer;