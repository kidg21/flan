/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import LBLogo from "images/LightBoxLogo.png";

const Logo = styled.img`
  width: 20%;
  height: 4.7%;
`;

const image = {
  src: LBLogo,
  alt: "LightBox",
};


function LightBoxLogo() {
  return <Logo src={image.src} alt={image.alt} />;
}

export default LightBoxLogo;
