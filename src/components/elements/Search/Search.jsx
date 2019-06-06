import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tabs, { Tab } from "blocks/Tabs";
import Controls from "./Controls.jsx";
import Bar from "blocks/Bar"
import Icon from "atoms/Icon";
import { colors, shadows } from "Variables";

const SearchContainer = styled.div`
  width: 30%;
  display: flex-block;
  border: .5px solid ${colors.grey_20};
  border-radius: 5px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Container = styled.div`
display: flex;
cursor: pointer;
padding-left: 1em;

`

const TextInputContainer = styled.div`
  display: grid;
  margin: 0;
  grid-template-columns: auto 30px;
  align-content: flex-start;
`


const TextInput = styled.input`
  border: 0px solid ${colors.grey_20};
  border-bottom: 0px solid ${colors.grey_20};
  border-color: "";
  border-radius: "";
  background-color: "";
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;
  &:hover {
    ::placeholder {
      color: ${colors.grey_80};
    }
  }
  &:focus {
    ::placeholder {
      color: ${colors.grey_80};
    }
  }
`

const Iconstyle = styled.span`
  position: abolsute;
  lineHeight: normal;
  margin: auto;
  cursor: pointer;
`

function SearchText () {
  return (
  <Container>
    <Iconstyle>
  <Icon icon={['far','search']} style={{filter: 'brightness(180%)'}} />
  </Iconstyle>

         <TextInput placeholder="Search" /> 
         </Container>
)};

function Search({id}) {
  const [activeSingleTab, setActiveSingleTab] = useState("tab1");
  return (
    <SearchContainer
    id={id}>
        <TextInputContainer> 
          <SearchText/> 
         {/* <span style={ICONSTYLE}>
            <Icon icon={['fas','microphone']} style={{filter: 'brightness(160%)'}} /> 
            </span>  */}
            </TextInputContainer>
      <Tabs isSearch='true'>
            <Tab
              tabLabel="Owner"
              halfSize='true'
              isSelected={activeSingleTab === 'tab1'}
              onClick={() => {
                setActiveSingleTab('tab1');
              }}
            />
            <Tab
              tabLabel="APN"
              halfSize='true'
              isSelected={activeSingleTab === 'tab2'}
              onClick={() => {
                setActiveSingleTab('tab2');
              }}
            />
            <Tab
              tabLabel="Address"
              halfSize='true'
              isSelected={activeSingleTab === 'tab3'}
              onClick={() => {
                setActiveSingleTab('tab3');
              }}
            />
      </Tabs>
    </SearchContainer>
  );
}

Search.propTypes = {
  id: PropTypes.string
};

export default Search;


///this one will need more work on setting up for logic like Autocomplete and everything else
