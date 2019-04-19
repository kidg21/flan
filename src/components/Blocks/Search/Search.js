import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "atoms/Container/Container";

const Placeholder = styled.span`
  padding: 2em;
  color: #bbb8b4;
`;

function Search({}) {
  return (
    <Container>
      <Placeholder>Search</Placeholder>
    </Container>
  );
}

//   Card.defaultProps = {
//     title: "Information Header",
//     layer: false,
//     info: false,
//     navigation: false,
//     navProps: { nameProp: ["far", "angle-right"], colorProp: "dimgray" },
//     exitProps: { nameProp: ["fal", "times"], colorProp: "dimgray" },
//     directionsProps: { nameProp: ["fal", "directions"], colorProp: "#60aad2" },
//     infoSectionProps: { nameProp: ["far", "angle-up"], colorProp: "dimgray" },
//     infoOpenProps: { nameProp: ["far", "angle-down"], colorProp: "#60aad2" }
//   };

//   Card.propTypes = {
//     title: PropTypes.string.isRequired,
//     layer: PropTypes.bool,
//     navigation: PropTypes.bool,
//     info: PropTypes.bool
//   };

export default Search;
