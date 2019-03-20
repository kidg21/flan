import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Container from '../../atoms/Container/Container';
import Label from  '../../atoms/Label/Label';
import IconGroup from '../../atoms/Icon/IconGroup';
import Icon from '../../atoms/Icon/Icon';


const HeaderSection = styled.div`
font-family: arial;
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
    labelProp: {contentProp: "Layer Card Expanded"}
  };



function CardContainer(props) {
    return (
        <HeaderSection>
          <Label {...props.labelProp}/>
          <IconGroup style={{justifyContent: "floatRight"}}/>
          {/* <Icon  {...props.iconProps}/> */}
        </HeaderSection>
    )
  }

CardContainer.defaultProps = defaultProps;
export default CardContainer;