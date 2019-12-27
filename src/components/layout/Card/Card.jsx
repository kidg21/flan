/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import { Spacer } from "helpers/Display";
import { Lighten, Darken } from "Variables";
import Grid from "layout/Grid";
import Bar from "blocks/Bar";
import Title, { Headline, SubTitle, Description, Body } from "base/Typography";
import Icon from "atoms/Icon";
import Command from "atoms/Command";
import Image from "atoms/Image";
import Avatar from "atoms/Avatar";
import Menu from "blocks/Menu";
import MediaBlock from "blocks/MediaBlock";
import Expander from "utils/Expander";

const CardSectionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  /* order: ${props => {
    return props.order || "1";
  }}; */
  background-color: ${props => {
    return props.theme.palette[props.backgroundColor] || props.theme.palette.default;
  }};
  padding: ${props => {
    return props.sectionPadding || "0.75em 1em";
  }};
  cursor: ${props => {
    return props.onClick ? "pointer" : "";
  }};
  z-index: 1;
  max-height: ${props => {
    return props.open ? "0" : "100vh";
  }}; 
  transition: all 0.25s ease-in-out;
  &:before,
  &:after {
    ${props => {
    return (props.border || props.divider) && css`
        content: "";
        position: absolute;
        top: 100%;
        left: 1rem;
        right: 1rem;
        height: 1px;
        background-color: ${props => {
        return props.theme.palette.grey5;
      }};
      `;
  }};
  }
  &:after {
    ${props => {
    return props.border && css`
        top: 0;
      `;
  }};
  }
`;

const CardWrapper = styled.div`
  ${CardSectionWrapper} {
    /* &:first-of-type {
      padding: 1em 1em 0.5em;
    } */
    /* &:last-of-type {
      padding: 0.5em 1em 1em;
    } */
    /* &:only-of-type {
      padding: 1em;
    } */
  }
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  flex: none;
  background-color: ${props => {
    return props.theme.background.default;
  }};
  padding: ${props => {
    return props.cardPadding || "";
  }};
  color: ${props => {
    return props.theme.text.primary;
  }};
  filter: ${props => {
    return props.raised ? props.theme.shadows.shadow1 : props.theme.shadows.shadow0;
  }};

  /* Prototype Content - displays when a Card is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      color: ${props => {
    return props.theme.text.primary;
  }};
      content: "Card";
      padding: 2rem;
    }
  }
`;

const CardListWrapper = styled(Grid)`
  ${CardWrapper} {
    height: 100%;
    filter: ${props => {
    return props.theme.shadows.shadow1;
  }};
    transition: all 0.25s ease-in-out;
    &:hover {
      ${Darken};
      filter: ${props => {
    return props.theme.shadows.shadow3;
  }};
    }
  }
  /* Prototype Content - displays when a Card List is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "{ CardList }";
    }
  }
`;

function CardSection({ border, children, className, divider, open, id, padding, type, onClick }) {
  let sectionPadding;
  let backgroundColor;
  switch (type) {
    case "info":
      backgroundColor = "info";
      break;
    case "success":
      backgroundColor = "success";
      break;
    case "warning":
      backgroundColor = "warning";
      break;
    case "alert":
      backgroundColor = "alert";
      break;
    default:
      break;
  }
  switch (padding) {
    case "none":
      sectionPadding = "0em";
      break;
    case "1x":
      sectionPadding = "0.25em";
      break;
    case "2x":
      sectionPadding = "0.5em";
      break;
    case "3x":
      sectionPadding = "0.75em";
      break;
    case "4x":
      sectionPadding = "1em";
      break;
    default:
      break;
  }
  return (
    <CardSectionWrapper
      backgroundColor={backgroundColor}
      sectionPadding={sectionPadding}
      className={className}
      divider={divider}
      border={border}
      open={open}
      id={id}
      onClick={onClick}
    >
      {children}
    </CardSectionWrapper>
  );
}

function ExpandingSection({ id, more, onClick, title, description, label, icon, }) {
  const [open, setOpen] = useState(!open);
  function toggleDropdown() {
    setOpen(!open);
  }
  return (
    <Expander
      id={id}
      header={
        title || description || label || icon ? (
          <Bar
            contentAlign="center"
            onClick={toggleDropdown}
            leftWidth="max-content"
            left={
              label || icon ? <Avatar label={label} icon={icon} /> : null
            }
            centerAlign="left"
            center={
              <>
                {title ? <Headline text={title} /> : null}
                {description ? <SubTitle text={description} /> : null}
              </>
            }
            rightWidth="max-content"
            right={more ? <Icon icon="up" size="lg" toggle={open} /> : null}
          ></Bar>
        ) : null}
    >
      <CardSection open={open}>{more}</CardSection>
    </Expander>
  );
}

function Card({
  body,
  children,
  className,
  commands,
  description,
  icon,
  id,
  label,
  media,
  mediaDesc,
  more,
  onClick,
  padding,
  raised,
  title,
}) {
  let cardPadding;
  switch (padding) {
    case "none":
      cardPadding = "0em";
      break;
    case "1x":
      cardPadding = "0.25em";
      break;
    case "2x":
      cardPadding = "0.5em";
      break;
    case "3x":
      cardPadding = "0.75em";
      break;
    case "4x":
      cardPadding = "1em";
      break;
    default:
      break;
  }

  let headerSection;
  if (more) {
    headerSection = (
      <ExpandingSection
        title={title}
        description={description}
        label={label}
        icon={icon}
        more={more}
      />
    )
  } else {
    headerSection = (
      <CardSection onClick={onClick}>
        <Bar
          contentAlign="center"
          leftWidth="max-content"
          left={
            label || icon ? <Avatar label={label} icon={icon} /> : null
          }
          centerAlign="left"
          center={
            <>
              {title ? <Headline text={title} /> : null}
              {description ? <SubTitle text={description} /> : null}
            </>
          }
        ></Bar>
      </CardSection>
    )
  }


  let commandElements = null;
  if (commands) {
    // Exactly 2 Commands
    if (commands.length >= 2) {
      commandElements = (
        <Bar
          leftWidth="90%"
          left={
            <Grid columns="2">
              <Command
                label={commands[0].label}
                onClick={commands[0].onClick}
                disabled={commands[0].disabled}
              />
              <Command
                label={commands[1].label}
                onClick={commands[1].onClick}
                disabled={commands[1].disabled}
              />
            </Grid>
          }
          rightWidth="10%"
          right={
            // More than 2 Commands
            commands.length > 2 ? (
              <Menu data={commands.slice(2)} position="topLeft" />
            ) : (
                <Spacer />
              )
          }
        />
      );
      // Single Command
    } else if (commands.length === 1) {
      commandElements = (
        <Bar
          left={
            <Command
              label={commands[0].label}
              onClick={commands[0].onClick}
              disabled={commands[0].disabled}
            />
          }
        />
      );
    }
  }

  return (
    <CardWrapper
      cardPadding={cardPadding}
      className={className}
      id={id}
      raised={raised}
    >
      {media ? (
        <Image
          src={media}
          alt={mediaDesc || `${"Card Media:" + " "}${media}`}
          width="100%"
          onClick={onClick}
        />
      ) : null}
      {title || description || label || icon ? headerSection : null}
      {body ? (
        <CardSection onClick={onClick}>
          <Body text={body} />
        </CardSection>
      ) : null}
      {children}
      {commandElements ? <CardSection>{commandElements}</CardSection> : null}
    </CardWrapper>
  );
}

function CardList({ children, className, columns, gap, id, rows }) {
  return (
    <CardListWrapper
      id={id}
      className={className}
      columns={columns}
      gap={gap}
      rows={rows}
    >
      {children}
    </CardListWrapper>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  padding: PropTypes.oneOf(["none", "1x", "2x", "3x", "4x"]),
  raised: PropTypes.bool,
};
CardList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Defines the widths of grid columns
   *
   * Options: Any switch case or any standard value accepted by the CSS Grid property, 'grid-template-columns'.
   */
  columns: PropTypes.oneOf([
    "default (auto)",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "[grid-template-columns]"
  ]),
  /** Sets the 'gutter' between grid items
   *
   * Options: Any switch case or any standard value accepted by the CSS Grid property, 'grid-gap'.
   */
  gap: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      "none",
      "tiny",
      "small",
      "default (normal)",
      "large",
      "xlarge",
      "xxlarge",
      "[grid-template-rows]"
    ])
  ]),
  id: PropTypes.string,
  /** Defines the heights of grid rows
   *
   * Options: Any switch case or any standard value accepted by the CSS Grid property, 'grid-template-rows'.
   */
  rows: PropTypes.oneOf(["default (auto)", "[grid-template-rows]"])
};

export { Card as default, CardList, CardSection };
