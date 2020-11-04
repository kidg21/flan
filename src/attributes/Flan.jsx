/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import Flan from "images/flan.jpg";

const Logo = styled.img`

`;

const image = {
  src: Flan,
  alt: "Flan",
};


function FlanLogo() {
  return <Logo src={image.src} alt={image.alt} />;
}

export default FlanLogo;
