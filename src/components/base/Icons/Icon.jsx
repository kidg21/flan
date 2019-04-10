import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon(props) {
  return (
    <FontAwesomeIcon style={{cursor: "pointer"}} icon={props.nameProp} color={props.colorProp} />
  );
}

Icon.defaultProps = {
  nameProp: ["fas", "circle"]
};

Icon.propTypes = {
  nameProp: PropTypes.string,
  colorProp: PropTypes.string
};

export default Icon;
