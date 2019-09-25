import React, { useContext } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Lighten, Darken } from "Variables";
import { DisabledContext } from "States";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkedIcon = styled.a`
  cursor: ${(props) => {
    if (props.disabled) {
      return "not-allowed";
    } else if (props.onClick) {
      return "pointer";
    }
    return "";
  }};
  pointer-events: ${(props) => {
    return props.disabled ? "none" : "";
  }};
  user-select: ${(props) => {
    return props.disabled ? "none" : "";
  }};
  &:hover {
    ${Darken};
  }
  &:active {
    ${Lighten};
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${(props) => {
    return props.theme.palette[props.color] || props.theme.text.primary;
  }};
  border: ${(props) => {
    return props.border ? "2px solid" : "";
  }};
  border-color: ${(props) => {
    return props.theme.palette[props.border] || "";
  }};
  border-radius: ${(props) => {
    return props.border ? "5px" : "";
  }};
`;

const iconHash = {
  // Brand
  apple: ["fab", "apple"],
  facebook: ["fab", "facebook"],
  firefox: ["fab", "firefox"],
  internet_explorer: ["fab", "internet-explorer"],
  twitter: ["fab", "twitter-square"],
  windows: ["fab", "windows"],
  // Navigation
  down: ["far", "angle-down"],
  left: ["far", "angle-left"],
  menu: ["far", "bars"],
  right: ["far", "angle-right"],
  up: ["far", "angle-up"],
  // App
  address: ["far", "map-marked"],
  alert_triangle: ["far", "exclamation-triangle"],
  alert: "exclamation",
  analytics: "analytics",
  apn: ["far", "hashtag"],
  attach: ["far", "paperclip"],
  bookmark_solid: "bookmark",
  bookmark: ["far", "bookmark"],
  call: "phone",
  chat: ["far", "comments-alt"],
  check: ["far", "check"],
  check_circle: "check-circle",
  circle_solid: "circle",
  circle: ["far", "circle"],
  clone: ["far", "clone"],
  close: ["far", "times"],
  configure: "cogs",
  contact: ["far", "address-card"],
  contacts: ["far", "address-book"],
  copy: ["far", "copy"],
  delete: ["far", "trash-alt"],
  directions: ["far", "directions"],
  draw: ["far", "pencil"],
  drawings: ["far", "pencil-ruler"],
  edit: ["far", "edit"],
  exclusion: ["far", "layer-minus"],
  file: ["far", "file-alt"],
  filter: ["far", "filter"],
  gps: ["far", "globe"],
  heatmap: ["far", "chart-scatter"],
  help: ["far", "question-circle"],
  home: "home-alt",
  inclusion: ["far", "layer-plus"],
  info_circle: "info-circle",
  info: "info",
  labels: ["far", "tags"],
  layers: ["far", "layer-group"],
  link: ["far", "link"],
  list: ["far", "list-ul"],
  loading: "spinner",
  location: "map-marker-alt",
  mail_solid: "envelope",
  mail: ["far", "envelope"],
  map_pin: "map-pin",
  map: ["far", "map"],
  maximize: ["far", "expand-alt"],
  measure: ["far", "ruler-combined"],
  message: ["far", "comment-alt"],
  minimize: ["far", "compress-alt"],
  minus_square: ["far", "minus-square"],
  minus: ["far", "minus"],
  more: ["far", "ellipsis-h"],
  my_location: ["far", "location-arrow"],
  notification_solid: "bell",
  notification: ["far", "bell"],
  open: ["far", "folder-open"],
  options: ["far", "ellipsis-v"],
  owner: "user-tag",
  plus_square: ["far", "plus-square"],
  plus: ["far", "plus"],
  print: ["far", "print"],
  report: ["far", "file-chart-line"],
  scroll_top: ["far", "caret-square-up"],
  search: ["far", "search"],
  settings_user: ["far", "user-cog"],
  settings_users: ["far", "users-cog"],
  settings: "cog",
  share: "share-square",
  share_content: ["far", "share-alt"],
  sign_in: ["far", "sign-in"],
  sign_out: ["far", "sign-out"],
  signal_none: ["far", "signal-slash"],
  signal: ["far", "signal"],
  star_solid: "star",
  star: ["far", "star"],
  table: ["far", "table"],
  user_add: "user-plus",
  user_circle: "user-circle",
  user: "user",
  users: "users",
  wifi_none: ["far", "wifi-slash"],
  wifi: ["far", "wifi"],
  zoom_extents: ["far", "expand-arrows"],
  zoom_in: ["far", "search-plus"],
  zoom_out: ["far", "search-minus"],
};

function Icon({
  id,
  icon,
  type,
  size,
  fixedWidth,
  rotation,
  flip,
  spin,
  pulse,
  border,
  onClick,
  disabled,
  className,
}) {
  let color;
  icon = iconHash[icon.toLowerCase()] || ["far", icon.toLowerCase()];
  switch (type && type.toLowerCase()) {
    case "info":
      color = "info";
      break;
    case "success":
      color = "success";
      break;
    case "warning":
      color = "warning";
      break;
    case "alert":
      color = "alert";
      break;
    case "primary":
      color = "primaryLight";
      break;
    case "secondary":
      color = "secondaryDark";
      break;
    case "disabled":
      color = "disabled";
      break;
    case "inverse":
      color = "inverse";
      break;
    case "white":
      color = "white";
      break;
    default:
      break;
  }

  if (onClick) color = "info";

  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) color = "disabled";

  const styledIcon = (
    <StyledIcon
      id={id}
      icon={icon}
      color={color}
      size={size}
      fixedWidth={fixedWidth}
      rotation={rotation}
      flip={flip}
      spin={spin}
      pulse={pulse}
      border={border}
      className={className}
    />
  );

  return onClick ? (
    <LinkedIcon onClick={onClick} disabled={disabled}>
      {styledIcon}
    </LinkedIcon>
  ) : (
    styledIcon
  );
}

Icon.propTypes = {
  id: PropTypes.string,
  /** Options: 'info', 'success', 'warning', 'alert', 'inverse' */
  type: PropTypes.string,
  /** Enter the name of the icon as the prop value. (ex. icon='circle' */
  icon: PropTypes.string,
  /** Icons inherit the 'font-size' of the parent container and are relatively sized.
   * Options: 'xs', 'sm', 'lg', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'
   */
  size: PropTypes.string,
  /** Used to set one or more icons to the same fixed width.
   * Good for vertically aligning a series of icons
   */
  fixedWidth: PropTypes.bool,
  /** Options: '90', '180', '270' */
  rotation: PropTypes.number,
  /** Options: 'horizontal', 'vertical', 'both' */
  flip: PropTypes.string,
  /** Smooth rotation */
  spin: PropTypes.bool,
  /** Rotation with eight (8) steps */
  pulse: PropTypes.bool,
  border: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  /** className used for extending styles */
  className: PropTypes.string,
};

Icon.defaultProps = {
  id: null,
  type: null,
  icon: null,
  size: null,
  fixedWidth: false,
  rotation: null,
  flip: null,
  spin: false,
  pulse: false,
  border: false,
  onClick: null,
  disabled: false,
  className: null,
};

export default Icon;
