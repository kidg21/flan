import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";

const Fill = styled.div`
height: 0.65rem;
position: relative;
border-radius: 10px;
width: 100px;
animation: slide 1.5s linear infinite;
background-image: linear-gradient( to right, #2B82B1, #10B0F6);


  @keyframes slide
  {
      0%   {width: 0;}
      100% {width: 100%;}
  }
`;


const Chase = styled.div`
width: 100%;
height: 3rem;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
position: relative;
`;

const Dot = styled.div`
  will-change: transform;
  height: 1.25rem;
  margin: 1rem;
  width: 1.25rem;
  border-radius: 50%;
  background-image: linear-gradient( to left, #2B82B1, #10B0F6);
  animation: grow 1s ease-in-out infinite alternate;
  
  
  &:first-child{

  }
  &:nth-child(2){
    animation-delay: 0.33s;
  }
  &:last-child{
    animation-delay: 0.66s;
  }
}

@keyframes grow{
  to{
    transform: translateX(-50%) scale(0);
  }
}
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
      </Chase>);
  }

  return (
    <Fragment id={id}>
      {content}
    </Fragment>
  );
}

export default Loader;

