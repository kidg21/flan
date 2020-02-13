/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Darken } from "Variables";
import Icon from "atoms/Icon";
import Grid from "layout/Grid";


const Swatch = styled.button`
width: ${(props) => {
  return props.width ;
}};
height: ${(props) => {
  return props.height ;
}};
justify-content: center;
display: flex;
vertical-align: center;
align-items: center;
color: ${(props) => {
  return props.theme.palette.inverse ;
}};
border: 0px solid ${(props) => {
  return props.theme.palette.inverse ;
}};
cursor: pointer;
border-radius: ${(props) => {
  return props.borderRadius ;
}};
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


function ColorSwatch({isSelected, color, square, onClick}) {
  let borderRadius;
  let width = "1.5rem";
  let height = "1.5rem";

  if (square) {
    borderRadius = "4px";
  } else {
    borderRadius = "100%";
  }


  return (
    
    <React.Fragment>
      {isSelected ? (
       <Swatch
       borderRadius={borderRadius}
       width={width}
       height={height}
       onClick={onClick}
       color={color}
                >
         <Icon icon="check"/>
        </Swatch>
      
      ) : (
        <Swatch
        borderRadius={borderRadius}
        width={width}
        height={height}
        onClick={onClick}
        color={color}
      />
        )}
    </React.Fragment>
  )
};


function Picker({children, columns
}) {

  return (
    <Grid
      columns={columns}
    >
      {children}

    </Grid>
  );
};



export { Picker as default, ColorSwatch };
