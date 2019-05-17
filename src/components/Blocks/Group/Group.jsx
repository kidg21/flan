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
  cursor: pointer;
`;


const GroupTitle = ({ title, number }) => (
  <GroupContainer>
      <H5>{title}</H5>
      <span> | </span>
      <Num> {number} </Num>
      </GroupContainer>
  );

const H5 = styled.h5`
padding-right: 4px;
`
const Num = styled.h5`
color: ${colors.success};
padding-left: 4px;
`

const GroupContainer = styled.div`
display: flex;
`

//   <Icon icon={["far", "angle-down"]} />
// ) : (
//   <Icon icon={["far", "angle-up"]} />

function Group({ id, number, title}) {
  return (
      <HeaderLayout id={id}>
         <GroupTitle title={title} number={number}/>
          <Icon icon={["far", "angle-up"]} />
      </HeaderLayout>
  );
}
Group.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  number: PropTypes.string
};

export default Group;
