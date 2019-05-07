import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "atoms/Container/Container";
import Tabs, { Tab } from "blocks/Tabs";
import Icon from "atoms/Icon";
import Input from "atoms/Input";
import { colors, shadows } from "Variables";

const SearchContainer = styled.div`
  width: 30%;
  // padding: 0.25em 0.6em 0.8em 0.8em;
  border-radius: 5px;
  // justify-content: space-between;
  // display: flex;
  // cursor: pointer;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const TextInput = styled.input`
  font-size: 20px;
  border: 0px solid ${colors.grey_20};
  border-bottom: 0px solid ${colors.grey_20};
  background-color: ${props => (props.error ? "#f9ebeb" : "")};
  caret-color: ${props => (props.error ? colors.alert : "")};
  min-height: 1rem;
  padding: 0.5rem 0.5rem;
  ::placeholder {
    color: ${props => (props.error ? colors.alert : "")};
  }
  &:hover {
    color: ${colors.grey_80};
  }
`;

function Search({}) {
  return (
    <SearchContainer>
      <Container
        style={{
          justifyContent: "space-between",
          display: "flex",
          verticalAlign: "baseline"
        }}
      >
        <TextInput placeholder="Search" />
        <Icon
          style={{
            filter: "brightness(170%)",
            paddingTop: "2px",
            cursor: "pointer"
          }}
          icon={["far", "search"]}
        />
      </Container>
      <Tabs>
        <Tab label="Address" />
        <Tab label="APN" />
        <Tab label="Owner" />
      </Tabs>
    </SearchContainer>
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
