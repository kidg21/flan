import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colors, shadows } from "Variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.iconColor || ""};
  border: ${props => (props.border ? "2px solid" : "")};
  border-color: ${props => (props.border ? colors.grey_20 : "")};
  border-radius: ${props => (props.border ? "5px" : "")};
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
  pull,
  style,
  onClick,
  className,
}) {
  let iconColor;
  icon = iconHash[icon.toLowerCase()] || ["far", icon.toLowerCase()];
  switch (type && type.toLowerCase()) {
    case "info":
      iconColor = colors.anchor;
      break;
    case "success":
      iconColor = colors.success;
      break;
    case "warning":
      iconColor = colors.warning;
      break;
    case "alert":
      iconColor = colors.alert;
      break;
    case "inverse":
      iconColor = colors.white;
      break;
    default:
      break;
  }
  let _icon = (
    <StyledIcon
      id={id}
      icon={icon}
      iconColor={iconColor}
      size={size}
      fixedWidth={fixedWidth}
      rotation={rotation}
      flip={flip}
      spin={spin}
      pulse={pulse}
      border={border}
      pull={pull}
      className={className}
    />
  );

  if (onClick) {
    _icon = <a onClick={onClick}>{_icon}</a>;
  }

  return <React.Fragment>{_icon}</React.Fragment>;
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
  /** Options: 'left', 'right' */
  pull: PropTypes.string,
  border: PropTypes.bool,
  onClick: PropTypes.func,
  /** className used for extending styles */
  className: PropTypes.string,
};

export default Icon;
