import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colors, shadows } from "Variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledIcon = styled(FontAwesomeIcon)`
  border: ${props => (props.border ? "2px solid" : "")};
  border-color: ${props => (props.border ? colors.grey_20 : "")};
  border-radius: ${props => (props.border ? "5px" : "")};
`;

function Icon({
  id,
  icon,
  type,
  name,
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
  const iconHash = {
    // Brand
    apple: ["fab", "apple"],
    facebook: ["fab", "facebook"],
    firefox: ["fab", "firefox"],
    internet_explorer: ["fab", "internet-explorer"],
    twitter: ["fab", "twitter-square"],
    windows: ["fab", "windows"],
    // Navigation
    down: ["far", "chevron-down"],
    left: ["far", "chevron-left"],
    menu: ["far", "bars"],
    right: ["far", "chevron-right"],
    up: ["far", "chevron-up"],
    // App
    address: ["far", "map-marked"],
    analytics: "analytics",
    apn: ["far", "hashtag"],
    bookmark_solid: "bookmark",
    bookmark: ["far", "bookmark"],
    check_circle: "check-circle",
    drawings: ["far", "pencil-ruler"],
    edit: ["far", "edit"],
    gps: ["far", "globe"],
    info_circle: "info-circle",
    info: "info",
    layers: ["far", "layer-group"],
    list: ["far", "list-ul"],
    location: "map-marker-alt",
    map: ["far", "map"],
    my_location: ["far", "location-arrow"],
    notification_solid: "bell",
    notification: ["far", "bell"],
    owner: "user-tag",
    report: ["far", "file-chart-line"],
    search: ["far", "search"],
    zoom_in: ["far", "search-plus"],
    zoom_out: ["far", "search-minus"],
  };
  icon = iconHash[name.toLowerCase()] || ["far", name.toLowerCase()];
  switch (type) {
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
      name={name}
      color={iconColor}
      size={size}
      fixedWidth={fixedWidth}
      rotation={rotation}
      flip={flip}
      spin={spin}
      pulse={pulse}
      border={border}
      pull={pull}
      className={className}
      style={style}
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
  /** Icons can come in multiple weight types.  The default weight is 'fas' (solid)
   * To use the weight type, simply enter the name of the icon as the prop value. (ex. icon='coffee')
   * If you want to use an icon of a different weight type, enter the prop value as an arroy of ["weight", "name"]. (ex. icon=["fal", "plus-circle"] uses the 'light' version of the icon instead of the default 'solid' version)
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
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
  style: PropTypes.string,
  onClick: PropTypes.func,
  /** className used for extending styles */
  className: PropTypes.string,
};

export default Icon;
