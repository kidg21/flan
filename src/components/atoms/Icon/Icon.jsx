/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Lighten, Darken } from "Variables";
import { DisabledContext } from "States";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "atoms/Badge";

const LinkedIcon = styled.a`
  color: ${(props) => { return props.theme.text.link; }};
  width: max-content;
  cursor: ${(props) => {
    if (props.disabled) {
      return "not-allowed";
    } if (props.onClick || props.href) {
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
  position: relative;
  font-size: ${(props) => {
    return props.fontSize || "";
  }};
  color: ${(props) => {
    return props.theme.palette[props.color] || "";
  }};
  vertical-align: middle;
  transition: all 0.25s ease-in-out;
`;

const IconWrapper = styled.div`
  position: relative;
  width: max-content;
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
  book: "book",
  bookmark_solid: "bookmark",
  bookmark: ["far", "bookmark"],
  calendar: ["far", "calendar-alt"],
  calendar_check: "calendar-check",
  call: "phone",
  chat: ["far", "comment-alt"],
  check_solid: "check",
  check: ["far", "check"],
  check_circle: ["far", "check-circle"],
  circle_solid: "circle",
  circle: ["far", "circle"],
  clipboard_list: "clipboard-list",
  clone: ["far", "clone"],
  cloud_download: ["far", "cloud-download"],
  cloud_upload: ["far", "cloud-upload"],
  close: ["far", "times"],
  close_solid: "times",
  compare: ["far", "equals"],
  configure: "cogs",
  contact: "address-card",
  contacts: ["far", "address-book"],
  copy: ["far", "copy"],
  database: "database",
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
  help_solid: "question",
  help_circle: ["far", "question-circle"],
  help_circle_solid: "question-circle",
  home: "home-alt",
  include: ["far", "check-circle"],
  info_circle: ["far", "info-circle"],
  info: "info",
  job: ["far", "construction"],
  labels: ["far", "tags"],
  layers: ["far", "layer-group"],
  legend: ["far", "shapes"],
  link: ["far", "link"],
  list: ["far", "list-ul"],
  loading: "spinner",
  location: ["far", "map-marker-alt"],
  mail_solid: "envelope",
  mail: ["far", "envelope"],
  map_pin: "map-pin",
  map: ["far", "map"],
  maximize: ["far", "expand-alt"],
  measure: ["far", "ruler-triangle"],
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
  rfp: "hand-holding-usd",
  save: ["far", "save"],
  scroll_top: ["far", "caret-square-up"],
  search: ["far", "search"],
  search_file: "file-search",
  search_location: ["far", "search-location"],
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
  zoom_out: ["far", "search-minus"],
};

const colorHash = {
  info: "info80",
  success: "success80",
  warning: "warning80",
  alert: "alert80",
  inverse: "neutral20",
};

const sizeHash = {
  "xs": {
    font: "0.75em",
  },
  "sm": {
    font: "0.875em",
  },
  "lg": {
    font: "1.35em",
  },
  "xl": {
    font: "1.5em",
  },
  "2xl": {
    font: "1.75em",
  },
  "3xl": {
    font: "2em",
  },
  "4xl": {
    font: "2.5em",
  },
};

function Icon({
  badge,
  brand,
  className,
  disabled,
  fixedWidth,
  flip,
  href,
  icon,
  id,
  onClick,
  pulse,
  rotation,
  size,
  spin,
  variant,
}) {
  const iconValue = iconHash[icon.toLowerCase()] || ["far", icon.toLowerCase()];
  let color = variant ? colorHash[variant.toLowerCase()] : null;
  const selectedSize = size && sizeHash[size.toLowerCase()];
  const fontSize = selectedSize ? selectedSize.font : "inherit";
  let content;

  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) color = "disabled";
  else if (!color && (onClick || href)) color = "link";

  // FontAwesomeIcon only allows values of 90, 180, or 270
  let _rotation = typeof rotation === "number" ? Math.round(rotation / 90) % 4 : null;
  _rotation = _rotation > 0 ? _rotation * 90 : null;

  if (!variant) {
    if (brand === "research") {
      color = "research";
    } if (brand === "bi") {
      color = "bi";
    } if (brand === "jobs") {
      color = "jobs";
    } if (brand === "broker") {
      color = "broker";
    } if (brand === "brand1") {
      color = "brand1";
    } if (brand === "brand2") {
      color = "brand2";
    } if (brand === "brand3") {
      color = "brand3";
    } if (brand === "brand4") {
      color = "brand4";
    }
  }

  const styledIcon = (
    <StyledIcon
      className={className}
      color={color}
      fixedWidth={fixedWidth}
      flip={flip}
      fontSize={fontSize}
      icon={iconValue}
      id={id}
      pulse={pulse}
      rotation={_rotation}
      spin={spin}
    />
  );

  if (badge && !disabled) {
    if (badge === "info" || badge === "success" || badge === "warning") {
      content = (
        <IconWrapper>
          {styledIcon}
          <Badge variant={badge} />
        </IconWrapper>
      );
    } else {
      content = (
        <IconWrapper>
          {styledIcon}
          <Badge variant="alert" />
        </IconWrapper>
      );
    }
  } else {
    content = (
      styledIcon
    );
  }

  if (onClick || href) {
    content = (
      <LinkedIcon onClick={onClick} href={href} disabled={disabled}>
        {content}
      </LinkedIcon>
    );
  }

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}

Icon.propTypes = {
  /** Options: 'info', 'success', 'warning', 'alert' */
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  brand: PropTypes.string,
  /** className used for extending styles */
  className: PropTypes.string,
  disabled: PropTypes.bool,
  /** Used to set one or more icons to the same fixed width.
    * Good for vertically aligning a series of icons
    */
  fixedWidth: PropTypes.bool,
  /** Options: 'horizontal', 'vertical', 'both' */
  flip: PropTypes.string,
  href: PropTypes.string,
  /** Enter the name of the icon as the prop value. (ex. icon='circle' */
  icon: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  /** Rotation with eight (8) steps */
  pulse: PropTypes.bool,
  /** Options: '90', '180', '270' */
  rotation: PropTypes.number,
  /** Icons inherit the 'font-size' of the parent container and are relatively sized.
   * Options: 'xs', 'sm', 'lg', 'xl', '2xl', '3xl', '4xl'
   */
  size: PropTypes.string,
  /** Smooth rotation */
  spin: PropTypes.bool,
  variant: PropTypes.string,
};

Icon.defaultProps = {
  badge: false,
  brand: null,
  className: null,
  disabled: null,
  fixedWidth: false,
  flip: null,
  href: null,
  icon: null,
  id: null,
  onClick: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  variant: null,
};

export default Icon;
