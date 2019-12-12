/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import Icon from "atoms/Icon";
import Expander from "utils/Expander";
import Title, { Description, Body } from "base/Typography";

const Text = (
  <Body text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
);

const Arrow = styled(Icon)`
  transform: ${(props) => { return (props.toggleOn ? "rotate(-180deg)" : "rotate(0deg)"); }};
`;

function ExpandingSection({
  id, title, onClick, open,
}) {
  let expanded = open;
  let setExpanded = onClick;
  if (!setExpanded) [expanded, setExpanded] = useState(open);
  function toggleDropdown() {
    setExpanded(!expanded);
  }
  return (
    <Expander
      id={id}
      header={
        <Bar
          contentAlign="center"
          onClick={toggleDropdown}
          left={<Title size="sm" text={title} />}
          right={<Arrow icon="up" toggleOn={expanded} size="lg" />}
        />}
    >
      {expanded ? <Description text={Text} /> : null}
    </Expander>);
}

ExpandingSection.propTypes = {
};

ExpandingSection.defaultProps = {

};

export default ExpandingSection;