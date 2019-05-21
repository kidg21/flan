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

const LayerStyle = {
  flex: "auto",
  paddingLeft: "1.5em"
};

const Left = styled.div``;

const Right = styled.div``;

const LayerLeft = styled.div`
  display: flex;
`;

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


function Card({ id, title, layer, info, navigation, ...switchProps}) {
  return (
      <HeaderLayout
        id={id}
        title={title}
        layer={layer}
        info={info}
        navigation={navigation}
      >
        <Left>
          {layer ? (
            <LayerLeft>
              <Switch {...switchProps} />
              <CardTitle style={LayerStyle}>{title}</CardTitle>
            </LayerLeft>
          ) : navigation ? (
            <CardTitle>{title}</CardTitle>
          ) : info ? (
            <CardTitle>{title}</CardTitle>
          ) : null}
        </Left>
        <Right>
          {layer ? (<IconBlock style={blockStyle}>
              <Icon icon={["far", "expand-arrows"]} />
              <Icon icon={["far", "share"]} />
              <Icon icon={["far", "filter"]} />
            </IconBlock>
          ) : navigation ? (
            <Icon icon={["far", "angle-right"]} />
          ) : info ? (
            <Icon icon={["far", "angle-up"]} />
          ) : null}
        </Right>
      </HeaderLayout>
  );
}
Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  layer: PropTypes.bool,
  navigation: PropTypes.bool,
  info: PropTypes.bool
};

export default Card;
