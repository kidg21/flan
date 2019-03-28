import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Icon from '../../atoms/Icon/Icon';
import Results from "../../atoms/Label/Results";

const Container = styled.div`
align-items: center;
display: flex;
padding-top: 5px;
paddomg-bottom: 20px;
justify-content: flex-end;
padding-right: 10px;
padding-left: 10px;
background: white;
`

const HeaderLayout =styled.div`
  align-items: center;
  background: white;
  line-height: normal;
  font-size: 20px;
  display: grid;
  padding: .5em 1em .5em .5em;
  border-bottom: 0.25px solid #EAEDED;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 2rem;
  grid-template-areas: "left center right";
  box-shadow: 0 0 0px rgba(0, 0, 0, .08);
}
 `

 const PanelNav = styled.div`
 justify-content: flex-start;
 grid-area: left;
 display: flex;
 cursor: pointer;
 `


const CardTitle = styled.div`
justify-content: center;
grid-area: center;
display: flex;
`


const CardCommands = styled.div`
justify-content: flex-end;
grid-area: right;
display: flex;
cursor: pointer;
`


const defaultProps = {
    navProps: {nameProp: ["far", "angle-left"],
                colorProp: "dimgray"},
    iconProps: {nameProp: ["far", "ellipsis-v"],
                colorProp: "dimgray"},
    exitProps: {nameProp: ["fal", "times"],
                colorProp: "dimgray"},
  };


  const LayerPanelHeader = ({title, ...props}) => {
    return (
      <div>
      <Container>
      <Icon {...props.exitProps}/>
    </Container>
        <HeaderLayout>
                <PanelNav>
                </PanelNav>
                <CardTitle>
                    <h4 style={{margin: 0}}>{title}</h4>
                </CardTitle>
                <CardCommands>
                    <Icon {...props.iconProps}/>
                </CardCommands>
                </HeaderLayout>
                </div>
    )
  }

LayerPanelHeader.defaultProps = defaultProps;
export default LayerPanelHeader;