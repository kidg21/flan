/* eslint-disable complexity */
/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Lighten, Darken } from "Variables";
import { DisabledContext } from "States";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkedIcon = styled.a`
  cursor: ${props => {
    if (props.disabled) {
      return "not-allowed";
    } else if (props.onClick) {
      return "pointer";
    }
    return "";
  }};
  pointer-events: ${props => {
    return props.disabled ? "none" : "";
  }};
  user-select: ${props => {
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
  color: ${props => {
    return props.theme.text[props.color] || "";
  }};
  border: ${props => {
    return props.border ? "2px solid" : "";
  }};
  border-color: ${props => {
    return props.theme.palette[props.border] || "";
  }};
  border-radius: ${props => {
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
  address: ["far", "map-marker"],
  alert_triangle: ["far", "exclamation-triangle"],
  alert: "exclamation",
  analytics: ["far", "chart-bar"],
  apn: ["far", "hashtag"],
  attach: ["far", "paperclip"],
  bookmark_solid: "bookmark",
  bookmark: ["far", "bookmark"],
  call: "phone",
  chat: ["far", "comment-alt"],
  check_solid: "check",
  check: ["far", "check"],
  check_circle: ["far", "check-circle"],
  circle_solid: "circle",
  circle: ["far", "circle"],
  clone: ["far", "clone"],
  close: ["far", "times"],
  close_solid: "times",
  compare: ["far", "equals"],
  configure: "cogs",
  contact: "address-card",
  contacts: ["far", "address-book"],
  copy: ["far", "copy"],
  delete: ["far", "trash-alt"],
  directions: ["far", "directions"],
  download: ["far", "arrow-to-bottom"],
  draw: ["far", "pencil"],
  drawings: ["far", "pencil-ruler"],
  edit: ["far", "edit"],
  exchange: ["far", "exchange-alt"],
  exclude: ["far", "minus-circle"],
  export: ["far", "external-link-alt"],
  file: ["far", "file-alt"],
  filter: ["far", "filter"],
  gps: ["far", "location-arrow"],
  heatmap: ["far", "chart-scatter"],
  help: ["far", "question"],
  home: "home-alt",
  include: ["far", "check-circle"],
  info_circle: ["far", "info-circle"],
  info: "info",
  labels: ["far", "tags"],
  layers: ["far", "layer-group"],
  link: ["far", "link"],
  list: ["far", "list-ul"],
  loading: "spinner",
  location: ["far", "map-marker-alt"],
  mail_solid: "envelope",
  mail: ["far", "envelope"],
  map_pin: "map-pin",
  map: ["far", "map"],
  maximize: ["far", "expand-alt"],
  measure: ["far", "ruler-combined"],
  message: ["far", "comment-alt"],
  minimize: ["far", "compress-alt"],
  minus_square: ["far", "minus-square"],
  minus: "minus",
  more: ["far", "ellipsis-h"],
  my_location: ["far", "location-arrow"],
  notification_solid: "bell",
  notification: ["far", "bell"],
  open: ["far", "folder-open"],
  options: ["far", "ellipsis-v"],
  owner: "user-tag",
  photos: ["far", "images"],
  plus: ["far", "plus"],
  plus_circle: ["far", "plus-circle"],
  plus_square: ["far", "plus-square"],
  preferences: ["far", "sliders-h"],
  print: ["far", "print"],
  redo: ["far", "redo-alt"],
  report: ["far", "file-alt"],
  save: ["far", "save"],
  scroll_top: ["far", "caret-square-up"],
  search: ["far", "search"],
  settings_user: ["far", "user-cog"],
  settings_users: ["far", "users-cog"],
  settings: ["far", "cog"],
  share: ["far", "share"],
  share_content: ["far", "share-alt"],
  sign_in: ["far", "sign-in"],
  sign_out: ["far", "sign-out"],
  signal_none: ["far", "signal-slash"],
  signal: ["far", "signal"],
  star_solid: "star",
  star: ["far", "star"],
  support: ["far", "comment-alt"],
  sync: ["far", "sync-alt"],
  table: ["far", "table"],
  undo: ["far", "undo-alt"],
  upload: ["far", "arrow-from-bottom"],
  user_add: "user-plus",
  user_circle: ["far", "user-circle"],
  user: ["far", "user"],
  user_solid: "user",
  users: "users",
  view: ["far", "eye"],
  wifi_none: ["far", "wifi-slash"],
  wifi: ["far", "wifi"],
  zoom_extents: ["far", "expand-arrows"],
  zoom_in: ["far", "search-plus"],
  zoom_out: ["far", "search-minus"]
};

function Icon({
  border,
  className,
  disabled,
  fixedWidth,
  flip,
  icon,
  id,
  onClick,
  pulse,
  rotation,
  size,
  spin,
  title,
  type
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
      color = "primary";
      break;
    case "secondary":
      color = "secondaryDark";
      break;
    case "disabled":
      color = "disabled";
      break;
    case "primarylight":
      color = "primaryLight";
      break;
    case "white":
      color = "white";
      break;
    default:
      break;
  }

  if (onClick) color = "link";

  const isDisabled =
    typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) color = "disabled";

  const styledIcon = (
    <StyledIcon
      border={border}
      className={className}
      color={color}
      fixedWidth={fixedWidth}
      flip={flip}
      icon={icon}
      id={id}
      pulse={pulse}
      rotation={rotation}
      size={size}
      spin={spin}
      title={title} // HTML attribute (display on :hover)
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
  border: PropTypes.bool,
  /** className used for extending styles */
  className: PropTypes.string,
  /** Used to set one or more icons to the same fixed width.
   * Good for vertically aligning a series of icons
   */
  disabled: PropTypes.bool,
  fixedWidth: PropTypes.bool,
  /** Options: 'horizontal', 'vertical', 'both' */
  flip: PropTypes.string,
  /** Enter the name of the icon as the prop value. (ex. icon='circle' */
  icon: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  /** Rotation with eight (8) steps */
  pulse: PropTypes.bool,
  /** Options: 'info', 'success', 'warning', 'alert' */
  /** Options: '90', '180', '270' */
  rotation: PropTypes.number,
  /** Icons inherit the 'font-size' of the parent container and are relatively sized.
   * Options: 'xs', 'sm', 'lg', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'
   */
  size: PropTypes.string,
  /** Smooth rotation */
  spin: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string
};

Icon.defaultProps = {
  border: false,
  className: null,
  disabled: null,
  fixedWidth: false,
  flip: null,
  icon: null,
  id: null,
  onClick: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  title: null,
  type: null
};

export default Icon;
