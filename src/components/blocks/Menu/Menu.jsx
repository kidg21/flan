import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "atoms/Icon";
import Card from "layout/Card";
import Title from "base/Typography";
import { colors } from "Variables";

const Container = styled.div`
  cursor: pointer;
  background-color: pink;
  // position: relative;
  line-height: 1.5;
  display: inline-block;
`;

const EditMenu = styled.ul`
  background: yellowgreen;
  border-radius: 3px;
  list-style: none;
  z-index: 500;
  padding: 0.25em;
  padding-top: 0.8em;
  padding-bottom: 0.8em;
  bottom: ${(props) => { return props.badgeBottom || ""; }};
  left: ${(props) => { return props.badgeLeft || ""; }};
  transform: ${(props) => { return props.setTransform || ""; }};
  width: auto;
  min-width: 10em;
  position: absolute;
`;

const Item = styled.li`
  padding: 0.55em;
  z-index: 501;
  text-align: left;

  &:hover {
    background-color: ${colors.grey_light};
  }

  &:active {
    color: ${colors.black};
  }
`;

function Menu({ id, data, position }) {
  let badgeLeft = "100%";
  let badgeBottom = "100%";
  let setTransform;
  const [visibility, setVisibility] = useState(false);
  switch (position) {
    case "topLeft":
      badgeLeft = "0";
      setTransform = "translate(-100%, -5%)";
      break;
    case "topRight":
      setTransform = "translate(1%, -9%)";
      badgeLeft = "0";
      break;
    case "bottomRight":
      badgeBottom = "0";
      badgeLeft = "0";
      setTransform = "translate(6%, 95%)";
      break;
    case "bottomLeft":
      badgeBottom = "0";
      badgeLeft = "0";
      setTransform = "translate(-106%, 95%)";
      break;
    case "bottomCenter":
      badgeBottom = "0";
      badgeLeft = "0";
      setTransform = "translate(-45%, 98%)";
      break;
    case "topCenter":
      badgeBottom = "0";
      badgeLeft = "0";
      setTransform = "translate(-45%, -17%)";
      break;
    default:
      break;
  }
  return (
    <Container
      id={id}
      onClick={() => {
        setVisibility(!visibility);
      }}
    >
      <Icon icon="options" size="lg" />
      {visibility ? (
        <Card>
          <EditMenu
            setTransform={setTransform}
            badgeLeft={badgeLeft}
            badgeBottom={badgeBottom}
          >
            {data.map((item) => {
              return (
                <Item key={item.id} onClick={item.onClickLink}
                 onHover={
                  () => {
                    setVisibility(!visibility);
                  }
                }>
                  <Title text={item.name} weight="normal" />
                </Item>
              );
            })}
          </EditMenu>
        </Card>
      ) : null}
      {/* {visibility ? (<Card><SubMenu 
            setTransform="translate(-200%, 105%)">{data.map((item) => {
              return (
                <Item key={item.id} onClick={item.onClickLink}
                 onHover={
                  () => {
                    setVisibility(!visibility);
                  }
                }>
                  <Title text={item.name} weight="normal" />
                </Item>
              );
            })}</SubMenu></Card>) : null} */}
    </Container>
  );
}

Menu.propTypes = {
  id: PropTypes.string,
  object: PropTypes.node,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    onClickLink: PropTypes.func,
  })).isRequired,
  position: PropTypes.oneOf([
    "topLeft",
    "topRight",
    "bottomRight",
    "bottomLeft",
    "bottomCenter",
    "topCenter",
    "default",
  ]),
};

Menu.defaultProps = {
  id: null,
  object: null,
  position: "default",
};

export default Menu;
