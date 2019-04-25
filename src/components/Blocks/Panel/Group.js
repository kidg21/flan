import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Switch from "atoms/Switch/Switch";
import IconBlock from "blocks/IconBlock/IconBlock";

const blockStyle = {
  width: "60px"
};
/////Navigation consts
const HeaderLayout = styled.div`
  align-items: flex;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 1.8em 0.6em 0.25em 1.8em;
`;

//   <Icon icon={["far", "angle-down"]} />
// ) : (
//   <Icon icon={["far", "angle-up"]} />

function Group({ id, title, ...props }) {
  return (
    <div>
      <HeaderLayout id={id}>
        <div>
          <h5>{title}</h5>
        </div>
        <div>
          <Icon icon={["far", "angle-up"]} />
        </div>
      </HeaderLayout>
    </div>
  );
}

Group.defaultProps = {
  id: "",
  title: "Group"
};

Group.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string
};

export default Group;
