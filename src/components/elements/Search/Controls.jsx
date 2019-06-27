import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tabs, { Tab } from "blocks/Tabs";
import { colors, shadows } from "Variables";




function Controls() {
  const [activeSingleTab, setActiveSingleTab] = useState("");
  return (
      <Tabs isRounded='true' >
            <Tab
              tabLabel="Owner"
              isSelected={activeSingleTab === 'tab1'}
              onClick={() => {
                setActiveSingleTab('tab1');
              }}
            />
            <Tab
              tabLabel="APN"
              isSelected={activeSingleTab === 'tab2'}
              onClick={() => {
                setActiveSingleTab('tab2');
              }}
            />
            <Tab
              tabLabel="Address"
              isSelected={activeSingleTab === 'tab3'}
              onClick={() => {
                setActiveSingleTab('tab3');
              }}
            />
      </Tabs>
  );
}

Controls.propTypes = {
  id: PropTypes.string
};

export default Controls;
