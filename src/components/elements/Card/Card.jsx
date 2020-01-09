/* eslint-disable linebreak-style */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import { Spacer } from "helpers/Display";
import { Darken } from "Variables";
import Grid from "layout/Grid";
import Bar from "blocks/Bar";
import { Headline, SubTitle, Body } from "base/Typography";
import Icon from "atoms/Icon";
import Command from "atoms/Command";
import Image from "atoms/Image";
import Avatar from "atoms/Avatar";
import Menu from "blocks/Menu";
import Expander from "utils/Expander";

const CardSectionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  color: ${(props) => {
    return props.theme.text[props.sectionColor] || "";
  }};
  background-color: ${(props) => {
    return props.theme.background[props.sectionBackground] || "";
  }};
  padding: ${(props) => {
    return props.sectionPadding || "0.5em 1em";
  }};
  justify-content: ${(props) => {
    return props.sectionJustify || "";
  }};
  cursor: ${(props) => {
    return props.onClick ? "pointer" : "";
  }};
  z-index: 1;
  max-height: ${(props) => {
    return props.open ? "0" : "100vh";
  }}; 
  transition: all 0.25s ease-in-out;
  a {
  color: ${(props) => {
    return props.theme.text[props.sectionColor] || "";
  }};
  }
`;

const Media = styled(CardSectionWrapper)`
  height: ${(props) => {
    return props.image ? "12em" : "";
  }};
  padding: 0;
  overflow: hidden;
  + ${CardSectionWrapper} {
    margin-top: 1px;
  }
`;

const CardImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const CardAudio = styled.audio`
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom: ${(props) => {
    return props.ghost ? `1px solid ${props.theme.divider}` : "";
  }};
  border-radius: 5px;
  flex: none;
  background-color: ${(props) => {
    return props.cardBackground ? props.theme.background[props.cardBackground] : props.theme.background.default;
  }};
  padding: ${(props) => {
    return props.cardPadding || "";
  }};
  color: ${(props) => {
    return props.cardColor ? props.theme.text[props.cardColor] : props.theme.text.primary;
  }};
  filter: ${(props) => {
    return props.theme.shadows[props.cardShadow] || "";
  }};
  a {
  color: ${(props) => {
    return props.theme.text[props.cardColor] || "";
  }};
  }
  ${CardSectionWrapper} {
    &:first-of-type {
      border-radius: 5px 5px 0 0;
    }
    &:last-of-type {
      border-radius: 0 0 5px 5px;
    }
    &:only-of-type {
      border-radius: 5px;
    }
  }
  ${CardSectionWrapper}:not(${Media}) {
    &:first-of-type {
      padding: 0.75em 1em 0.5em;
    }
    &:last-of-type {
      padding: 0.5em 1em 0.75em;
    }
    &:only-of-type {
      padding: 0.75em 1em;
    }
    &:last-of-type,
    &:only-of-type {
      flex: auto;
      height: inherit;
    }
  }
  /* Prototype Content - displays when a Card is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      color: ${(props) => {
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
    filter: ${(props) => {
    return props.theme.shadows.shadow1;
  }};
    transition: all 0.25s ease-in-out;
    &:hover {
      ${Darken};
      filter: ${(props) => {
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

function ExpandingSection({ description, icon, id, label, more, title, }) {
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
      {more}
    </Expander>
  );
}

function CardSection({ children, className, header, footer, id, onClick, padding, type }) {
  let sectionColor;
  let sectionBackground;
  let sectionPadding;
  let sectionJustify;
  switch (type) {
    case "info":
      sectionColor = "inverse";
      sectionBackground = "info";
      break;
    case "success":
      sectionColor = "inverse";
      sectionBackground = "success";
      break;
    case "warning":
      sectionColor = "inverse";
      sectionBackground = "warning";
      break;
    case "alert":
      sectionColor = "inverse";
      sectionBackground = "alert";
      break;
    default:
      break;
  }
  switch (padding) {
    case "none":
      sectionPadding = "0";
      break;
    case "1x":
      sectionPadding = "0.25em 1em";
      break;
    case "2x":
      sectionPadding = "0.5em 1em";
      break;
    case "3x":
      sectionPadding = "1em";
      break;
    case "4x":
      sectionPadding = "1.25em 1em";
      break;
    default:
      break;
  }
  if (header) {
    sectionJustify = "flex-start";
  }
  if (footer) {
    sectionJustify = "flex-end";
  }
  return (
    <CardSectionWrapper
      className={className}
      footer={footer}
      header={header}
      id={id}
      onClick={onClick}
      sectionBackground={sectionBackground}
      sectionColor={sectionColor}
      sectionPadding={sectionPadding}
      sectionJustify={sectionJustify}
      type={type}
    >
      {children}
    </CardSectionWrapper>
  );
}

CardSection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  padding: PropTypes.oneOf(["none", "1x", "2x", "3x", "4x"]),
  type: PropTypes.oneOf(["info", "success", "warning", "alert"]),
  onClick: PropTypes.func,
};
CardSection.defaultProps = {
  children: null,
  className: null,
  id: null,
  padding: null,
  type: null,
  onClick: null,
}

function Card({
  body,
  children,
  className,
  commands,
  description,
  icon,
  id,
  imageAlt,
  inverse,
  label,
  more,
  onClick,
  padding,
  title,
  type,
  media,
  source,
  shadow,
  mediaSource,
}) {
  let cardColor;
  let cardBackground;
  if (inverse) {
    cardColor = "inverse";
    cardBackground = "inverse";
  }

  let cardPadding;
  switch (padding) {
    case "none":
      cardPadding = "0";
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

  let cardShadow;
  switch (shadow) {
    case "none":
      cardShadow = null;
      break;
    case "2x":
      cardShadow = "shadow1";
      break;
    default:
      cardShadow = "shadow0";
      break;
  }

  let headerSection;
  if (more) {
    headerSection = (
      <CardSection type={type}>
        <ExpandingSection
          title={title}
          description={description}
          label={label}
          icon={icon}
          more={more}
        />
      </CardSection>
    )
  } else {
    headerSection = (
      <CardSection type={type} onClick={onClick}>
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

  let mediaType;
  switch (media) {
    case "audio":
      mediaType = "audio";
      break;
    case "video":
      mediaType = "video";
      break;
    case "iframe":
      mediaType = "iframe";
      break;
    default:
    case "image":
      mediaType = "image";
      break;
  }

  let mediaSection;
  if (mediaType === "image") {
    mediaSection = (
      <Media image>
        <CardImage
          src={mediaSource}
          alt={imageAlt || `${"Card Image:" + " "}${mediaSource}`}
          width="100%"
        />
      </Media>
    )
  } else if (mediaType === "audio") {
    mediaSection = (
      <CardSection>
        <CardAudio controls>
          <source
            src={mediaSource}
            type="audio/mp3"
          />
          <source
            src={mediaSource}
            type="audio/ogg"
          />
          <source
            src={mediaSource}
            type="audio/wav"
          />
          Your browser does not support the audio element.
        </CardAudio>
      </CardSection>
    )
  } else if (mediaType === "video") {
    mediaSection = (
      <Media>
        <video width="100%" controls>
          <source
            src={mediaSource}
            type="video/mp4"
          />
          <source
            src={mediaSource}
            type="video/webm"
          />
          <source
            src={mediaSource}
            type="video/ogg"
          />
          Your browser does not support the video element.
        </video>
      </Media>
    )
  } else if (mediaType === "iframe") {
    mediaSection = (
      <Media>
        <iframe src={mediaSource} width="100%" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
      </Media>
    )
  }

  let commandElements = null;
  if (commands) {
    // 2 Commands
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
            // More than 2 Commands sends overflow to Menu
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
      cardBackground={cardBackground}
      cardColor={cardColor}
      mediaType={mediaType}
      cardPadding={cardPadding}
      cardShadow={cardShadow}
      className={className}
      id={id}
      inverse={inverse}
      media={media}
      source={source}
      mediaSource={mediaSource}
      shadow={shadow}
      tyoe={type}
    >
      {mediaSource ? mediaSection : null}
      {title || description ? headerSection : null}
      {body ? (
        <CardSection onClick={onClick}>
          <Body text={body} />
        </CardSection>
      ) : null}
      {children}
      {commandElements ? <CardSection footer>{commandElements}</CardSection> : null}
    </CardWrapper>
  );
}

Card.propTypes = {
  audio: PropTypes.string,
  body: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  commands: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
  })),
  description: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  inverse: PropTypes.bool,
  label: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  mediaHeader: PropTypes.bool,
  more: PropTypes.node,
  onClick: PropTypes.func,
  padding: PropTypes.oneOf(["none", "1x", "2x", "3x", "4x"]),
  shadow: PropTypes.oneOf(["none", "standard", "2x"]),
  title: PropTypes.string,
  video: PropTypes.string,
  vimeo: PropTypes.string,
  youtube: PropTypes.string,
};
Card.defaultProps = {
  audio: null,
  body: null,
  children: null,
  className: null,
  commands: null,
  description: null,
  icon: null,
  id: null,
  inverse: null,
  label: null,
  image: null,
  imageAlt: null,
  mediaHeader: null,
  more: null,
  padding: null,
  shadow: null,
  title: null,
  video: null,
  vimeo: null,
  youtube: null,
}

function CardList({ children, className, columns, data, gap, id, inverse, rows, }) {
  return (
    <CardListWrapper
      className={className}
      columns={columns}
      gap={gap}
      id={id}
      rows={rows}
    >
      {children ||
        data.map((item) => {
          return (
            <Card
              audio={item.audio}
              body={item.body}
              commands={item.commands}
              description={item.description}
              icon={item.icon}
              id={item.id}
              inverse={inverse}
              key={item.id}
              label={item.label}
              image={item.image}
              more={item.more}
              imageAlt={item.imageAlt}
              onClick={item.onClick}
              title={item.title}
              type={item.type}
              video={item.video}
              vimeo={item.vimeo}
              youtube={item.youtube}
            />
          );
        })}
    </CardListWrapper>
  );
}

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
CardList.defaultProps = {
  children: null,
  className: null,
  columns: null,
  gap: null,
  id: null,
  rows: null,
}

export { Card as default, CardSection, CardList };
