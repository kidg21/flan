import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "base/Icons";
import Switch from "atoms/Switch/Switch";
import IconBlock from "blocks/IconBlock/IconBlock";

/////Navigation consts
const HeaderLayout = styled.div`
  align-items: flex;
  font-size: 14px;
  display: flex;
  justify-content: space-between; 
  padding: .8em .6em .25em .8em;
  border-bottom: 0.25px solid #EAEDED;
  box-shadow: 0 0 0px rgba(0, 0, 0, .08);
}
 `;

function Card({ title, ...props }) {
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
              <Switch />{" "}
              <h5 style={{ flex: "auto", paddingLeft: "1.5em" }}>
                {title}
              </h5>{" "}
            </div>
          ) : props.navigation ? (
            <h5>{title}</h5>
          ) : props.info ? (
            <h5>{title}</h5>
          ) : null}
        </div>
        <div>
          {props.layer ? (
            <IconBlock />
          ) : props.navigation ? (
            <Icon {...props.navProps} />
          ) : props.info ? (
            <Icon {...props.infoOpenProps} />
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
  navigation: false,
  navProps: { nameProp: ["far", "angle-right"], colorProp: "dimgray" },
  exitProps: { nameProp: ["fal", "times"], colorProp: "dimgray" },
  directionsProps: { nameProp: ["fal", "directions"], colorProp: "#60aad2" },
  infoSectionProps: { nameProp: ["far", "angle-up"], colorProp: "dimgray" },
  infoOpenProps: { nameProp: ["far", "angle-down"], colorProp: "#60aad2" }
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  layer: PropTypes.bool,
  navigation: PropTypes.bool,
  info: PropTypes.bool
};

export default Card;
