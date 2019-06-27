import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextInput from "atoms/TextInput";
import Icon from "atoms/Icon";
import Tabs, { Tab } from "blocks/Tabs";
import { colors, shadows } from "Variables";

const IconWrapper = styled.span`
  /* Needed for passing properties to children (animation, etc.) */
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  ${IconWrapper} {
    position: absolute;
    right: 0;
    background-color: ${colors.white};
    margin: 0.2em;
    padding: 0.7em;
    cursor: pointer;
  }
`;

function Search({ id, ...inputProps }) {
  const [activeSingleTab, setActiveSingleTab] = useState("tab1");
  return (
    <SearchContainer id={id}>
      <Input {...inputProps}>
        <IconWrapper>
          <Icon icon={["far", "search"]} type="info" />
        </IconWrapper>
      </Input>
      <Tabs isSearch="true">
        <Tab
          tabLabel="Owner"
          halfSize="true"
          isSelected={activeSingleTab === "tab1"}
          onClick={() => {
            setActiveSingleTab("tab1");
          }}
        />
        <Tab
          tabLabel="APN"
          halfSize="true"
          isSelected={activeSingleTab === "tab2"}
          onClick={() => {
            setActiveSingleTab("tab2");
          }}
        />
        <Tab
          tabLabel="Address"
          halfSize="true"
          isSelected={activeSingleTab === "tab3"}
          onClick={() => {
            setActiveSingleTab("tab3");
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
