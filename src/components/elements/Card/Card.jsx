/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable linebreak-style */
/* eslint-disable complexity */
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import { Spacer } from "helpers/Display.jsx";
import { Darken } from "Variables";
import Grid from "layout/Grid";
import Bar from "blocks/Bar";
import Text, { Title } from "base/Typography";
import Icon from "atoms/Icon";
import Command from "atoms/Command";
import Image from "atoms/Image";
import Avatar from "atoms/Avatar";
import Menu from "blocks/Menu";
import Expander from "utils/Expander";
import { DisableTransitionContext } from "States";
import mime from "mime";

const LinkedWrapper = styled.a`
  flex: auto;
`;

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
  max-height: ${(props) => {
    return props.open ? "0" : "100vh";
  }}; 
  transition: ${(props) => {
    return props.disableTransition ? "" : "all 0.25s ease-in-out";
  }};
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
  max-width: inherit;
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
  cursor: ${(props) => {
    return props.onClick ? "pointer" : "";
  }};
  flex-direction: column;
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

const CardGridWrapper = styled(Grid)`
  ${CardWrapper} {
    height: 100%;
    border-radius: ${(props) => {
    return props.theme.borders.radiusMin;
  }};
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
    ${CardSectionWrapper} {
      &:first-of-type {
        border-radius: ${(props) => {
    return `${props.theme.borders.radiusMin} ${props.theme.borders.radiusMin} 0 0`;
  }};
      }
      &:last-of-type {
        border-radius: ${(props) => {
    return `0 0 ${props.theme.borders.radiusMin} ${props.theme.borders.radiusMin}`;
  }};
      }
      &:only-of-type {
        border-radius: ${(props) => {
    return props.theme.borders.radiusMin;
  }};
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
  }
  /* Prototype Content - displays when a Card List is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "{ CardGrid }";
    }
  }
`;

function ExpandingSection({
  children, description, icon, id, label, onClick, open, title,
}) {
  let rotation;
  if (open) {
    rotation = 180;
  } else {
    rotation = 0;
  }
  return (
    <Expander
      id={id}
      onClick={onClick}
      open={open}
      header={
        title || description || label || icon ? (
          <Bar
            contentAlign="center"
            left={label || icon ? {
              content: <Avatar label={label} icon={icon} />,
              width: "max-content",
            } : null}
            center={{
              content: (
                <React.Fragment>
                  {title ? <Title text={title} /> : null}
                  {description ? <Text text={description} /> : null}
                </React.Fragment>
              ),
              align: "left",
            }}
            right={children ? {
              content: <Icon icon="up" size="lg" rotation={rotation} />,
              width: "max-content",
            } : null}
          />
        ) : null}
    >
      {children}
    </Expander>
  );
}

ExpandingSection.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
};
ExpandingSection.defaultProps = {
  children: null,
  description: null,
  icon: null,
  id: null,
  label: null,
  onClick: null,
  open: false,
  title: null,
};

function CardSection({
  children, className, footer, header, id, onClick, padding, variant,
}) {
  let sectionColor;
  let sectionBackground;
  if (variant) {
    sectionColor = "inverse";
    sectionBackground = variant.toLowerCase();
  }
  let sectionPadding;
  const numPadding = padding ? parseInt(padding, 10) : NaN;
  if (padding && padding.toLowerCase() === "0") {
    sectionPadding = "0";
  } else if (!isNaN(numPadding) && numPadding < 5) {
    sectionPadding = `${0.25 * numPadding}em 1em`;
  }
  let sectionJustify;
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
    >
      {children}
    </CardSectionWrapper>
  );
}

CardSection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  footer: PropTypes.node,
  header: PropTypes.node,
  id: PropTypes.string,
  padding: PropTypes.oneOf(["0", "1x", "2x", "3x", "4x"]),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["info", "success", "warning", "alert"]),
};
CardSection.defaultProps = {
  children: null,
  className: null,
  footer: null,
  header: null,
  id: null,
  padding: null,
  onClick: null,
  variant: null,
};

function Card({
  body,
  children,
  className,
  commands,
  description,
  icon,
  id,
  mediaDesc,
  inverse,
  label,
  media,
  href,
  more,
  onClick,
  padding,
  shadow,
  title,
  variant,
}) {
  let cardColor;
  let cardBackground;
  if (inverse) {
    cardColor = "inverse";
    cardBackground = "inverse";
  }

  let cardPadding;
  const numPadding = padding ? parseInt(padding, 10) : NaN;
  if (numPadding > 0 && numPadding < 5) {
    cardPadding = `${0.25 * numPadding}em`;
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

  const disableTransition = useContext(DisableTransitionContext);
  const [open, setOpen] = useState(false);
  function toggleDropdown() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  let centerContent;

  if (onClick) {
    centerContent = (
      <LinkedWrapper >
        <React.Fragment >
          {title ? <Title text={title} weight="bold" /> : null}
          {description ? (<Text text={description} weight="bold" />
          ) : null}
        </React.Fragment>
      </LinkedWrapper>
    );
  } else {
    centerContent = (
      <React.Fragment >
        {title ? <Title text={title} weight="bold" /> : null}
        {description ? (<Text text={description} weight="bold" />
        ) : null}
      </React.Fragment>);
  }

  let headerSection;
  if (title || description) {
    headerSection = (
      <CardSection variant={variant} >
        <Bar
          contentAlign="center"
          left={label || icon ? {
            content: <Avatar label={label} icon={icon} />,
            width: "max-content",
          } : null}
          center={{
            content: centerContent,
            align: "left",
          }}
        />
      </CardSection>
    );
    if (more && more.content) {
      headerSection = (
        <CardSection variant={variant} disableTransition={disableTransition}>
          <ExpandingSection
            description={description}
            icon={icon}
            label={label}
            onClick={(e) => {
              toggleDropdown(e);
              if (more.onToggle) more.onToggle(e);
            }}
            open={open}
            title={title}
          >
            {more.content}
          </ExpandingSection>
        </CardSection>
      );
    }
  }

  const mimeType = mime.getType(media);
  let mediaSection;
  if (mimeType) {
    if (mimeType.startsWith("image")) {
      mediaSection = (
        <Media image>
          <CardImage
            src={media}
            alt={mediaDesc || `Image: ${media}`}
            width="100%"
          />
        </Media>
      );
    } else if (mimeType.startsWith("video")) {
      mediaSection = (
        <Media>
          <video width="100%" title={mediaDesc || `Video: ${media}`} controls>
            <source
              src={media}
              type="video/mp4"
            />
            <source
              src={media}
              type="video/webm"
            />
            <source
              src={media}
              type="video/ogg"
            />
            Your browser does not support the video element.
          </video>
        </Media>
      );
    } else if (mimeType.startsWith("audio")) {
      mediaSection = (
        <CardSection>
          <CardAudio title={mediaDesc || `Audio: ${media}`} controls>
            <source
              src={media}
              type="audio/mp3"
            />
            <source
              src={media}
              type="audio/ogg"
            />
            <source
              src={media}
              type="audio/wav"
            />
            Your browser does not support the audio element.
          </CardAudio>
        </CardSection>
      );
      // Currently redundant to the 'else' case
      // but captured should we need to handle
      // supported mime-types in a specific way
    } else if (mimeType.startsWith("text")
      || mimeType.startsWith("application")) {
      mediaSection = (
        <Media>
          <iframe src={media} title={mediaDesc || `Media: ${media}`} width="100%" frameBorder="0" allow="fullscreen" allowFullScreen />
        </Media>
      );
    }
    // Fallback for Youtube, Vimeo and other unsupported mime-types
  } else {
    mediaSection = (
      <Media>
        <iframe src={media} title={mediaDesc || `Media: ${media}`} width="100%" frameBorder="0" allow="fullscreen" allowFullScreen />
      </Media>
    );
  }

  let commandElements = null;
  if (commands) {
    // 2 Commands
    if (commands.length >= 2) {
      commandElements = (
        <Bar
          contentAlign="bottom"
          left={{
            content: (
              <Grid>
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
            ),
            width: "90%",
          }}
          right={{
            // More than 2 Commands sends overflow to Menu
            content: commands.length > 2 ? <Menu data={commands.slice(2)} position="topLeft" /> : <Spacer />,
            width: "10%",
          }}
        />
      );
      // Single Command
    } else if (commands.length === 1) {
      commandElements = (
        <Bar
          contentAlign="bottom"
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
      cardPadding={cardPadding}
      cardShadow={cardShadow}
      className={className}
      onClick={onClick}
      id={id}
      href={href}
      inverse={inverse}
      media={media}
      shadow={shadow}
    >
      {media ? mediaSection : null}
      {headerSection}
      {body ? (
        <CardSection onClick={onClick}>
          <Text text={body} />
        </CardSection>
      ) : null}
      {children}
      {commandElements ? <CardSection footer>{commandElements}</CardSection> : null}
    </CardWrapper>
  );
}

Card.propTypes = {
  body: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.node,
  commands: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
  })),
  description: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  inverse: PropTypes.bool,
  label: PropTypes.string,
  mediaDesc: PropTypes.string,
  media: PropTypes.string,
  more: PropTypes.shape({
    content: PropTypes.node,
    onToggle: PropTypes.func,
  }),
  onClick: PropTypes.func,
  padding: PropTypes.oneOf(["0", "1x", "2x", "3x", "4x"]),
  shadow: PropTypes.oneOf(["none", "1x", "2x"]),
  title: PropTypes.string,
  variant: PropTypes.oneOf(["info", "success", "warning", "alert"]),
};
Card.defaultProps = {
  body: null,
  children: null,
  className: null,
  commands: null,
  description: null,
  href: null,
  icon: null,
  id: null,
  inverse: null,
  label: null,
  mediaDesc: null,
  media: null,
  more: null,
  onClick: null,
  padding: null,
  shadow: null,
  title: null,
  variant: null,
};

function CardGrid({
  children, className, columns, data, gap, id, inverse, rows,
}) {
  return (
    <CardGridWrapper
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
              body={item.body}
              commands={item.commands}
              description={item.description}
              icon={item.icon}
              id={item.id}
              mediaDesc={item.mediaDesc}
              inverse={inverse}
              key={item.id}
              label={item.label}
              media={item.media}
              more={item.more}
              onClick={item.onClick}
              title={item.title}
              variant={item.variant}
            />
          );
        })}
    </CardGridWrapper>
  );
}

CardGrid.propTypes = {
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
    "[grid-template-columns]",
  ]),
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
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
      "[grid-template-rows]",
    ]),
  ]),
  id: PropTypes.string,
  inverse: PropTypes.bool,
  /** Defines the heights of grid rows
   *
   * Options: Any switch case or any standard value accepted by the CSS Grid property, 'grid-template-rows'.
   */
  rows: PropTypes.oneOf(["default (auto)", "[grid-template-rows]"]),
};
CardGrid.defaultProps = {
  children: null,
  className: null,
  columns: null,
  data: null,
  gap: null,
  id: null,
  inverse: false,
  rows: null,
};

export { Card as default, CardSection, CardGrid };
