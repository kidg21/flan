import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Container from '../../atoms/Container/Container';
import Label from  '../../atoms/Label/Label';
import Icon from '../../atoms/Icon/Icon';

const HeaderLayout =styled.div`
  align-items: center
  display: grid;
  padding: 5px;
  grid-template-columns: 75% 25%;
  grid-template-rows: 2rem;
  grid-template-areas: "left right";
}
 `

const CardTitle = styled.div`
justify-content: flex-start;
grid-area: left;
display: flex;
`


const CardCommands = styled.div`
justify-content: flex-end;
grid-area: right;
display: flex;
`


const defaultProps = {
    iconProps: {nameProp: ["fal", "times"],
                colorProp: "purple"},
    labelProp: {contentProp: "yo brother"}
  };


function CardContainer(props) {
    return (
        <Container>
        <HeaderLayout>
                <CardTitle>
                    <Label {...props.labelProp}/>
                </CardTitle>
                <CardCommands>
                    <Icon {...props.iconProps}/>
                </CardCommands>
                </HeaderLayout>
                </Container>
    )
  }

CardContainer.defaultProps = defaultProps;
export default CardContainer;