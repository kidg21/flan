import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Icon from '../../atoms/Icon/Icon';

const HeaderLayout =styled.div`
  align-items: center;
  background: white;
  line-height: normal;
  font-size: 20px;
  display: grid;
  padding: .8em 1em .5em;
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
  };


  const FilterDetailHeader = ({title, ...props}) => {
    return (
        <HeaderLayout>
                <PanelNav>
                <Icon {...props.navProps}/>
                </PanelNav>
                <CardTitle>
                    <h4 style={{margin: 0}}>{title}</h4>
                </CardTitle>
                <CardCommands>
                    <Icon {...props.iconProps}/>
                </CardCommands>
                </HeaderLayout>
    )
  }

FilterDetailHeader.defaultProps = defaultProps;
export default FilterDetailHeader;