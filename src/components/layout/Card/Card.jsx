/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import { Spacer } from "helpers/Display";
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
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  background-color: ${props => {
    return props.theme.palette[props.backgroundColor] || "";
  }};
  padding: ${props => {
    return props.sectionPadding || "0.5em 1em";
  }};
  cursor: ${props => {
    return props.onClick ? "pointer" : "";
  }};
  z-index: 1;
  transition: all 0.2s ease;
`;

const CardDivider = styled(CardSectionWrapper)`
  padding: 0;
  margin: 0.5em 1em;
  border-bottom: 1px solid;
  border-bottom-color: ${props => {
    return props.theme.palette.grey5;
  }};
`;

const CardWrapper = styled.div`
  ${CardSectionWrapper} {
    &:first-of-type {
      padding: 1em 1em 0.5em;
    }
    &:last-of-type {
      padding: 0.5em 1em 1em;
    }
    &:only-of-type {
      padding: 1em;
    }
  }
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  flex: none;
  box-shadow: ${props => {
    return props.theme.shadows[props.shadow] || "";
  }};
  border: ${props => {
    return props.border || "";
  }};
  border-color: ${props => {
    return props.theme.palette[props.borderColor] || "";
  }};
  padding: ${props => {
    return props.cardPadding || "";
  }};
  color: ${props => {
    return props.theme.text.primary;
  }};
  position: relative;
  /* Square off rounded edges of any direct children of Cards */
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
  /* Prototype Content - displays when a Card List is empty */
  ${CardWrapper} {
    height: 100%;
  }
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "{ CardList }";
    }
  }
`;

const Text = (
  <Body text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
);

const Arrow = styled(Icon)`
  transform: ${props => {
    return props.toggleOn ? "rotate(-180deg)" : "rotate(0deg)";
  }};
`;

function CardSection({ children, className, id, padding, type, onClick }) {
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
      id={id}
      onClick={onClick}
    >
      {children}
    </CardSectionWrapper>
  );
}

function ExpandingSection({ id, title, onClick, open, extra }) {
  let expanded = open;
  let setExpanded = onClick;
  if (!setExpanded) [expanded, setExpanded] = useState(open);
  function toggleDropdown() {
    setExpanded(!expanded);
  }
  return (
    <Expander
      id={id}
      header={
        <Bar
          contentAlign="center"
          onClick={toggleDropdown}
          left={<Title size="sm" text={title} />}
          right={<Arrow icon="up" toggleOn={expanded} size="lg" />}
        />
      }
    >
      {extra}
      {expanded ? <Description text={Text} /> : null}
    </Expander>
  );
}

function Card({
  children,
  className,
  id,
  padding,
  type,
  title,
  description,
  body,
  media,
  icon,
  label,
  commands,
  more,
  expands,
  onClick
}) {
  let shadow;
  let border;
  let borderColor;
  let cardPadding;
  let excess;
  switch (type) {
    case "outlined":
      border = "1px solid";
      borderColor = "grey5";
      break;
    case "elevated":
      shadow = "shadow1";
      break;
    default:
      border = "1px solid";
      borderColor = "grey5";
      break;
  }
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
    } else {
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

  if (expands) {
    excess = (
      <React.Fragment>
        <ExpandingSection title="Expand Me" />
      </React.Fragment>
    );
  }

  return (
    <CardWrapper
      border={border}
      shadow={shadow}
      borderColor={borderColor}
      cardPadding={cardPadding}
      className={className}
      id={id}
    >
      {media ? (
        <Image
          src={media}
          alt={`${"Card Image:" + " "}${media}`}
          width="100%"
          onClick={onClick}
        />
      ) : null}
      {title || description ? (
        <CardSection onClick={onClick}>
          <Bar
            contentAlign="center"
            left={
              <>
                <Headline text={title} />
                <SubTitle text={description} />
              </>
            }
            rightWidth="max-content"
            right={label || icon ? <Avatar label={label} icon={icon} /> : null}
          ></Bar>
        </CardSection>
      ) : null}
      {body ? (
        <CardSection onClick={onClick}>
          <Body text={body} />
        </CardSection>
      ) : null}
      {excess ? <CardSection>{excess}</CardSection> : null}
      {more ? (
        <CardSection>
          <Bar
            contentAlign="center"
            left={
              <>
                <Title text="More Stuff" />
              </>
            }
            rightWidth="max-content"
            right={<Icon icon="down" size="lg" />}
          ></Bar>
        </CardSection>
      ) : null}
      <CardDivider />
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
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  padding: PropTypes.oneOf(["none", "1x", "2x", "3x", "4x"])
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
