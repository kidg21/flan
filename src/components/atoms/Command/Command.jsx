import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import Label from "./Label";

const Container = styled.a`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: "left right";
  grid-gap: 0.5rem;
  transition: all 0.3s ease;
  *:first-child {
    grid-area: ${props => (props.labelFirst ? "right" : "left")};
  }
  *:last-child {
    grid-area: ${props => (props.labelFirst ? "left" : "right")};
  }
  &:hover {
    opacity: 0.75;
  }
`;

const defaultProps = {
  iconProps: { nameProp: ["fal", "times"] },
  labelProp: { contentProp: "yo brother" }
};

function Command(props) {
  const _iconProps = Object.assign({}, defaultProps.iconProps, props.iconProps);
  const _labelProp = Object.assign({}, defaultProps.labelProp, props.labelProp);
  props = { iconProps: _iconProps, labelProp: _labelProp };
  return (
    <Container labelFirst={false}>
      <Icon {...props.iconProps} />
      <Label {...props.labelProp} />
    </Container>
  );
}

Command.defaultProps = defaultProps;

export default Command;
