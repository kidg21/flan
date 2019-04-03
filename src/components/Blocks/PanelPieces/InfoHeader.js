import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Icon from '../../atoms/Icon/Icon';
import Results from "../../atoms/Label/Results";

const Container = styled.div`
display: flex;
line-height: 2;
justify-content: flex-end;
padding-right: .7em;
padding-top: 5px;
`

const HeaderLayout =styled.div`
  align-items: flex-end;
  font-size: 20px;
  display: grid;
  padding: .25em .6em .8em .8em;
  border-bottom: 0.25px solid #EAEDED;
  grid-template-columns: 80% 20%;

  grid-template-rows: 2rem;
  grid-template-areas: "left right";
  box-shadow: 0 0 0px rgba(0, 0, 0, .08);
}
 `


const CardTitle = styled.div`
justify-content: left;
align-self: center;
grid-area: left;
display: inline;
`


const Right = styled.div`
justify-content: flex-end;
line-height: normal;
vertial-align: bottom;
grid-area: right;
display: flex;
cursor: pointer;
`


const TopText = styled.div`
`

const BottomText = styled.div`
`


const defaultProps = {
    navProps: {nameProp: ["far", "angle-left"],
                colorProp: "dimgray"},
    iconProps: {nameProp: ["far", "ellipsis-v"],
                colorProp: "dimgray"},
    numberProp: {resultsProp: "0"},
    exitProps: {nameProp: ["fal", "times"],
                colorProp: "dimgray"},
  };


  const InfoHeader = ({title, layer, ...props}) => {
    return (
      <div>
        <Container>
        <Icon {...props.exitProps}/>
        </Container>
        <HeaderLayout>
                  <CardTitle>
                  <TopText><h4 style={{margin: 0, lineHeight: 1}}>{layer}</h4></TopText>
                <BottomText><h4>{title}</h4></BottomText>
                </CardTitle>
                <Right>
                    <Icon {...props.iconProps}/>
                </Right>
                </HeaderLayout>
                </div>
    )
  }

InfoHeader.defaultProps = defaultProps;
export default InfoHeader;