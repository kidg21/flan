/* eslint-disable linebreak-style */
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Bar from "layout/Bar";
import Icon from "atoms/Icon";
import Expander from "utils/Expander";
import Text, { Title } from "base/Typography";

const CardText = (
  <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
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
      {expanded ? <Text text={CardText} /> : null}
    </Expander>);
}

ExpandingSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node,
  onClick: PropTypes.func,
  open: PropTypes.bool,
};

ExpandingSection.defaultProps = {
  id: null,
  title: null,
  onClick: null,
  open: false,
};

export default ExpandingSection;
