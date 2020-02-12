/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Darken } from "Variables";
import Icon from "atoms/Icon";
import Grid from "layout/Grid";


const Swatch = styled.button`
width: 2rem;
height: 2rem;
color: white;
border: 0px solid white;
cursor: pointer;
border-radius: 100%;
background-color: ${(props) => {
  return props.theme.palette[props.color];
}};
&:hover { 
  ${Darken};
};
&:focus {
  outline: none;
}
`;


function ColorSwatch({isSelected, color, onClick}) {
  return (
    
    <React.Fragment>
      {isSelected ? (
       <Swatch
       onClick={onClick}
       color={color}
                >
         <Icon icon="check"/>
        </Swatch>
      
      ) : (
        <Swatch
        onClick={onClick}
        color={color}
      />
        )}
    </React.Fragment>
  )
};


function Picker({children
}) {

  return (
    <Grid
      columns="8"
    >
      {children}

    </Grid>
  );
};



export { Picker as default, ColorSwatch };
