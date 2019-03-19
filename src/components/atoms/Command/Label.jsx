import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Content = styled.h6`
  font-weight: 800;
  letter-spacing: .1em;
  margin: 0;
  line-height: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;


function Label(props) {
  return <Content>{props.contentProp}</Content>;
}

Label.defaultProps = {
  contentProp: "Label"
};

Label.propTypes = {
  contentProp: PropTypes.string
};

export default Label;
// export {Label as default, Content};
