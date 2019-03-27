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
border-bottom: 0.25px solid #EAEDED;
padding: .8em 10px .8em;
cursor: pointer;
justify-content: space-between;
display: flex;
`


const defaultProps = {
    // iconProps: {nameProp: ["far", "angle-up"],
    //             colorProp: "dimgray"},
  };



function CardContainer({title}) {
    return (
        <HeaderSection>
          <Switch/>
          <h4 style={{margin: 0, flex: "auto", paddingLeft: "1.5em"}}>{title}</h4>
          <IconGroup />
          {/* <Icon  {...props.iconProps}/> */}
        </HeaderSection>
    )
  }

CardContainer.defaultProps = defaultProps;
export default CardContainer;