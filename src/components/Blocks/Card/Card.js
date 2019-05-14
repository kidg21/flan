import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Switch from "atoms/Switch/Switch";
import IconBlock from "blocks/IconBlock/IconBlock";

// style={{ fontFamily: "arial", fontWeight: 400, fontSize: "12px" }}

const blockStyle = {
  width: "60px",
  color: "lightgrey"
};

const CardTitle = styled.h5`
  font-weight: 600;
`;
/////Navigation consts
const HeaderLayout = styled.div`
  align-items: flex;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 1em 0.6em 0.5em 0.8em;
  border-bottom: 0.25px solid #eaeded;
  box-shadow: 0 0 0px rgba(0, 0, 0, 0.08);
`;

//   <Icon icon={["far", "angle-down"]} />
// ) : (
//   <Icon icon={["far", "angle-up"]} />

function Card({ title, switchProps, ...props }) {
  return (
    <div>
      <HeaderLayout
        layer={props.layer}
        info={props.info}
        navigation={props.navigation}
      >
        <div>
          {props.layer ? (
            <div style={{ display: "flex" }}>
              {" "}
              <Switch {...switchProps} />{" "}
              <CardTitle style={{ flex: "auto", paddingLeft: "1.5em" }}>
                {title}
              </CardTitle>{" "}
            </div>
          ) : props.navigation ? (
            <CardTitle>{title}</CardTitle>
          ) : props.info ? (
            <CardTitle>{title}</CardTitle>
          ) : null}
        </div>
        <div>
          {props.layer ? (
            <IconBlock style={blockStyle}>
              <Icon icon={["far", "expand-arrows"]} />
              <Icon icon={["far", "share"]} />
              <Icon icon={["far", "filter"]} />
            </IconBlock>
          ) : props.navigation ? (
            <Icon icon={["far", "angle-right"]} />
          ) : props.info ? (
            <Icon icon={["far", "angle-up"]} />
          ) : null}
        </div>
      </HeaderLayout>
    </div>
  );
}

Card.defaultProps = {
  title: "Information Header",
  layer: false,
  info: false,
  navigation: false
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  layer: PropTypes.bool,
  navigation: PropTypes.bool,
  info: PropTypes.bool
};

export default Card;