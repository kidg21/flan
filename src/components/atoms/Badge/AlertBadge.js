import React from "react";
import styled, { css } from "styled-components";
import Icon from "atoms/Icon";
import PropTypes from "prop-types";
import { colors, shadows } from "Variables";

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 2em;
  padding-top: 7px;
  height: 2em;
  border-radius: 20px;
  background-color: ${props =>
    props.info
      ? colors.anchor
      : props.warning
      ? colors.warning
      : props.error
      ? colors.alert
      : props.success
      ? colors.success
      : ""};
  color: black;
`;

function AlertBadge({ ...props }) {
  return (
    <div>
      {props.error ? (
        <BadgeContainer error>
          {" "}
          <Icon icon="times" inverse />{" "}
        </BadgeContainer>
      ) : null}
      {props.info ? (
        <BadgeContainer info>
          {" "}
          <Icon icon="info" inverse />{" "}
        </BadgeContainer>
      ) : null}
      {props.success ? (
        <BadgeContainer success>
          {" "}
          <Icon icon="check" inverse />{" "}
        </BadgeContainer>
      ) : null}
      {props.warning ? (
        <BadgeContainer warning>
          {" "}
          <Icon icon="exclamation" inverse />{" "}
        </BadgeContainer>
      ) : null}
    </div>
  );
}

AlertBadge.defaultProps = {
  id: "",
  error: false,
  warning: false,
  info: false,
  success: false
};

AlertBadge.propTypes = {
  id: PropTypes.string,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool
};

export { AlertBadge as default };
