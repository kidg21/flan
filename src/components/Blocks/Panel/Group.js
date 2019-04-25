import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import { colors, shadows } from "Variables";

/////Navigation consts
const HeaderLayout = styled.div`
  align-items: flex;
  border-bottom: 2px solid ${colors.grey_light};
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 1.5em 0.6em 0.25em 0.8em;
`;

//   <Icon icon={["far", "angle-down"]} />
// ) : (
//   <Icon icon={["far", "angle-up"]} />

function Group({ id, number, title, ...props }) {
  return (
    <div>
      <HeaderLayout id={id}>
        <div style={{ display: "flex" }}>
          <h5 style={{ paddingRight: "4px" }}>{title}</h5>
          <span> | </span>
          <h5 style={{ color: colors.success, paddingLeft: "4px" }}>
            {number}
          </h5>
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
  title: "Group",
  number: "0"
};

Group.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  number: PropTypes.string
};

export default Group;
