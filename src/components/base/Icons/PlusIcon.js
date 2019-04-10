import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PlusIcon(props) {
    return (
      <FontAwesomeIcon style={{cursor: "pointer", fontSize: "40px"}} icon={props.nameProp} color={props.colorProp} />
    );
  }
  
  PlusIcon.defaultProps = {
    nameProp: ["fal", "plus-circle"],
    colorProp: "#60aad2"
  };
  
  PlusIcon.propTypes = {
    nameProp: PropTypes.string,
    colorProp: PropTypes.string
  };
  
  export default PlusIcon;