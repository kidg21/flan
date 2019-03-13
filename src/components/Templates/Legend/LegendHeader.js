import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Icon from '../../atoms/Icon/Icon';

const HeaderLayout =styled.div`
  align-items: center
  background: white;
  font-size: 20px;
  display: grid;
  margin: 5px 20px 5px;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 2rem;
  grid-template-areas: "left center right";
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
font-size: 20px;
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
                colorProp: "black"},
  };


function LegendNav(props) {
    return (
        <HeaderLayout>
                <PanelNav>
                    <Icon {...props.navProps} />
                </PanelNav>
                <CardTitle>
                    <h3>Layers Panel</h3>
                </CardTitle>
                <CardCommands>
                    <Icon {...props.iconProps}/>
                </CardCommands>
                </HeaderLayout>
    )
  }

LegendNav.defaultProps = defaultProps;
export default LegendNav;