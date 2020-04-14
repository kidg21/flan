/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Fill = styled.div`
  height: 0.65rem;
  position: relative;
  width: 100px;
  animation: slide 1.5s linear infinite;
  background: ${(props) => {
    return props.theme.palette.action80;
  }};
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
  height: 0.8rem;
  margin: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  &:nth-child(1) {
    animation: ld4 4s linear infinite 0s; }
  &:nth-child(2) {
    animation: ld4 4s linear infinite 0.15s; }
  &:nth-child(3) {
    animation: ld4 4s linear infinite 0.3s; }
  &:nth-child(4) {
    animation: ld4 4s linear infinite 0.45s; }
  @keyframes ld4 {
    0% {
      opacity: 0;
      transform: scale(0.5);
      background: ${(props) => {
    return props.theme.palette.action80;
  }}; }
    25% {
      opacity: 1;
      transform: scale(1.5);
      background: ${(props) => {
    return props.theme.palette.action80;
  }}; }
    50% {
      opacity: 0;
      transform: scale(0.5);
      background: ${(props) => {
    return props.theme.palette.action80;
  }}; }
    75% {
      opacity: 1;
      transform: scale(1.5);
      background: ${(props) => {
    return props.theme.palette.action80;
  }}; }
    100% {
      opacity: 0;
    }
  }
`;

function Loader({ isLine, id }) {
  let content;
  if (isLine) {
    content = (
      <Fill id={id} />
    );
  } else {
    content = (
      <Chase id={id}>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </Chase>);
  }

  return content;
}

Loader.propTypes = {
  id: PropTypes.string,
  isLine: PropTypes.bool,
};

Loader.defaultProps = {
  id: null,
  isLine: null,
};

export default Loader;

