import React, { useContext } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import { DisabledContext } from "States";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/** TODO: move these to Variables */
const iconHover = css`
  filter: brightness(85%) contrast(150%);
`;
const iconActive = css`
  filter: brightness(105%);
`;

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
    ${(props) => {
    return props.onClick ? iconHover : "";
  }};
  }
  &:active {
    ${(props) => {
    return props.onClick ? iconActive : "";
  }};
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${(props) => {
    return props.color || "inherit";
  }};
  border: ${(props) => {
    return props.border ? "2px solid" : "";
  }};
  border-color: ${(props) => {
    return props.border ? colors.grey_20 : "";
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
  address: "map-marked-alt",
  alert_triangle: ["far", "exclamation-triangle"],
  alert: "exclamation",
  analytics: "analytics",
  apn: ["far", "hashtag"],
  attach: ["far", "paperclip"],
  bookmark_solid: "bookmark",
  bookmark: ["far", "bookmark"],
  call: "phone",
  chat: ["far", "comments-alt"],
  check: "check",
  check_circle: "check-circle",
  circle_solid: "circle",
  circle: ["far", "circle"],
  clone: ["far", "clone"],
  close: "times",
  compare: ["far", "equals"],
  configure: "cogs",
  contact: "address-card",
  contacts: "address-book",
  copy: ["far", "copy"],
  delete: ["far", "trash-alt"],
  directions: ["far", "directions"],
  draw: ["far", "pencil"],
  drawings: ["far", "pencil-ruler"],
  edit: ["far", "edit"],
  exchange: ["far", "exchange-alt"],
  exclude: "layer-minus",
  file: ["far", "file-alt"],
  filter: ["far", "filter"],
  gps: ["far", "globe"],
  heatmap: ["far", "chart-scatter"],
  help: "question-circle",
  home: "home-alt",
  include: "layer-plus",
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
  minus: "minus",
  more: ["far", "ellipsis-h"],
  my_location: ["far", "location-arrow"],
  notification_solid: "bell",
  notification: ["far", "bell"],
  open: ["far", "folder-open"],
  options: ["far", "ellipsis-v"],
  owner: "user-tag",
  photos: "images",
  plus: "plus",
  plus_square: ["far", "plus-square"],
  preferences: ["far", "sliders-h"],
  print: ["far", "print"],
  redo: ["far", "redo-alt"],
  report: "file-chart-line",
  save: "download",
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
  support: "user-headset",
  sync: ["far", "sync-alt"],
  table: ["far", "table"],
  undo: ["far", "undo-alt"],
  user_add: "user-plus",
  user_circle: "user-circle",
  user: "user",
  users: "users",
  view: "eye",
  wifi_none: ["far", "wifi-slash"],
  wifi: ["far", "wifi"],
  zoom_extents: ["far", "expand-arrows"],
  zoom_in: ["far", "search-plus"],
  zoom_out: ["far", "search-minus"],
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
  type,
}) {
  let color;
  icon = iconHash[icon.toLowerCase()] || ["far", icon.toLowerCase()];
  switch (type && type.toLowerCase()) {
    case "info":
      color = colors.anchor;
      break;
    case "success":
      color = colors.success;
      break;
    case "warning":
      color = colors.warning;
      break;
    case "alert":
      color = colors.alert;
      break;
    case "inverse":
      color = colors.white;
      break;
    default:
      break;
  }

  if (onClick) color = colors.anchor;

  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) color = colors.grey_40;

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
  /** Options: 'info', 'success', 'warning', 'alert', 'inverse' */
  /** Options: '90', '180', '270' */
  rotation: PropTypes.number,
  /** Icons inherit the 'font-size' of the parent container and are relatively sized.
   * Options: 'xs', 'sm', 'lg', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'
   */
  size: PropTypes.string,
  /** Smooth rotation */
  spin: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
};

Icon.defaultProps = {
  border: false,
  className: null,
  disabled: false,
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
  type: null,
};

export default Icon;
