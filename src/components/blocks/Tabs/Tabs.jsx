import React, { useState } from "react"
import styled, { css, keyframes } from "styled-components"
import { colors, shadows } from "Variables"
import PropTypes from "prop-types"
import Card from "layout/Card"
import {Darken} from "helpers/Placeholders"

const StyledTab = styled.div`
  display: grid;
  grid-gap: 0.25rem;
  flex: auto;
  align-items: center;
  line-height: normal;
  text-align: center;
  width: min-content;
  /* font-size: 1.1em; */
  // transition: all 0.7s ease-in-out;
  color: ${props => (props.isSelected ? colors.white : colors.grey_40)};
  background: ${props => (props.isSelected ? colors.anchor : colors.white)};
  background-image: ${props => (props.isSelected ? "linear-gradient(#85b1c9, #68b0cd)" : "")};
  border: 1px solid ${colors.grey_20};
  // border-color: ${props => (props.isSelected ? colors.success : colors.anchor)};
  padding: .25em;
  /* font-weight: bold; */
  // font-weight: ${props => (props.isSelected ? "700" : "600")};
  // letter-spacing: 1px;
  cursor: pointer;
  // transition: all 0.7s ease-in;


 &:hover { ${Darken};}
`
const TabLabel = styled.span`
  cursor: pointer;
  font-size: 12px;
  line-height: normal;
  user-select: none;
`

const TabsWrapper = styled.section`
  display: flex;
  /* flex-wrap: wrap; */
  /* width: 100%; */
  /* height: auto; */
  /* max-height: 100vh; */
  /* margin: 0; */
  /* left: 0; */
`
function Tab({ label, icon, isSelected, ...props }) {
  // Toggle Tab
  const [selectedTab, setSelected] = useState(false)
  function toggleTab() {
    // selectedTab = true ? setSelected(!selectedTab) : setSelected(selectedTab)
    setSelected(!selectedTab)
  }
  // const [selectedTab, setSelected] = useState({ selectedValue: "" })
  // const handleCheckboxChange = event => {
  //   setSelected({ selectedValue: event.target.value })
  // }
  return (
    <StyledTab
      isSelected={selectedTab}
      onClick={toggleTab}
      // value={props.value}
      // isSelected={selectedTab.selectedValue === props.value}
      // onChange={handleCheckboxChange}
    >
      {/* {icon ? <ButtonIcon icon={icon} /> : null} */}
      <TabLabel>{label}</TabLabel>
    </StyledTab>
  )
}

function Tabs({ ...props }) {
  return <TabsWrapper>{props.children}</TabsWrapper>
}

Tab.defaultProps = {
  label: "Tab Name"
}
Tab.propTypes = {
  label: PropTypes.string
}

export { Tabs as default, Tab }
