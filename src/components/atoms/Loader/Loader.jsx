import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";

const Fill = styled.div`
height: 0.65rem;
position: relative;
border-radius: 10px;
width: 100px;
animation: slide 2s linear infinite;
background-image: linear-gradient( to right,
  ${(props) => {
    return props.theme.palette.primary;
  }},
  ${(props) => {
    return props.theme.palette.primaryTint;
  }}
  );


  @keyframes slide
  {
      0%   {width: 0;}
      100% {width: 100%;}
  }
`;


const Chase = styled.div`
    width: 60px;
    height: 60px;
    position: relative;
    animation:  rotation 2.5s infinite linear both;
    @keyframes rotation {
      100% { transform: rotate(360deg); } 
    }
    ;

    `;

const Dot = styled.div`
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0; 
      animation: dotrotate 2.0s infinite ease-in-out both; 
  
    
  &:before {
      content: '';
      display: block;
      width: 25%;
      height: 25%;
      background-color: 
        ${(props) => {
    return props.theme.palette.primary;
  }};
      border-radius: 100%;
      animation: dotrotatebefore 2.0s infinite ease-in-out both; 
    }
    
    &:nth-child(1) { animation-delay: -1.1s; }
    &:nth-child(2) { animation-delay: -1.0s; }
    &:nth-child(3) { animation-delay: -0.9s; }
    &:nth-child(4) { animation-delay: -0.8s; }
    &:nth-child(5) { animation-delay: -0.7s; }
    &:nth-child(6) { animation-delay: -0.6s; }
    &:nth-child(1):before { animation-delay: -1.1s; }
    &:nth-child(2):before { animation-delay: -1.0s; }
    &:nth-child(3):before { animation-delay: -0.9s; }
    &:nth-child(4):before { animation-delay: -0.8s; }
    &:nth-child(5):before { animation-delay: -0.7s; }
    &:nth-child(6):before { animation-delay: -0.6s; }
    
    
    @keyframes dotrotate {
      80%, 100% { transform: rotate(360deg); } 
    }
    
    @keyframes dotrotatebefore {
      50% {
        transform: scale(0.4); 
      } 100%, 0% {
        transform: scale(1.0); 
      } 
    }
  }
  ;

  `;

function Loader({ line, id }) {
  let content;
  if (line) {
    content = (
      <Fill />
    );
  } else {
    content = (
      <Chase>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </Chase>);
  }

  return (
    <Fragment id={id}>
      {content}
    </Fragment>
  );
}

export default Loader;

