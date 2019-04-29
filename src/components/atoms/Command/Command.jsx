import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { colors } from "Variables"
import Icon from "atoms/Icon"

const CommandContainer = styled.a`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: ${props =>
    props.iconRight ? "'name icon'" : "'icon name'"};
  grid-gap: 0.5rem;
  align-items: center;
  width: max-content;
  transition: all 0.3s ease;
  &:hover {
    /* opacity: 0.75; */
  }
  &:active {
    /* color: red; */
  }
`
const CommandName = styled.h6`
  grid-area: name;
  font-size: inherit;
  line-height: inherit;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
`

const CommandIcon = styled(Icon)`
  grid-area: icon;
  /* width: 1.25rem; */
`

function Command({ id, label, icon, iconRight, style, className, ...props }) {
  return (
    <CommandContainer
      id={id}
      label={label}
      icon={icon}
      iconRight={iconRight}
      style={style}
      className={className}
    >
      {icon ? <CommandIcon icon={icon} /> : null}
      <CommandName>{label}</CommandName>
    </CommandContainer>
  )
}
Command.defaultProps = {
  id: "",
  label: "Command",
  icon: "circle",
  iconRight: false
}
Command.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  iconRight: PropTypes.bool
}

// export default Command;
export { Command as default }
