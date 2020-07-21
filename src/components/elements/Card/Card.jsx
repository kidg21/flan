/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable complexity */
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaceholderText, Spacer, useId } from "helpers";
import Grid from "layout/Grid";
import Bar from "layout/Bar";
import Text, { Title } from "base/Typography";
import Icon from "atoms/Icon";
import Command from "atoms/Command";
import Media from "atoms/Media";
import Avatar from "atoms/Avatar";
import Menu from "blocks/Menu";
import Badge from "atoms/Badge";
import Expander from "utils/Expander";
import { DisableTransitionContext } from "States";
import CardWrapper from "./CardWrapper.jsx";

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
  + a {
  color: ${(props) => {
    return props.theme.text[props.sectionColor] || "";
  }};
    &:hover {
      color: ${(props) => {
    return props.theme.text[props.sectionColorHover] || "";
  }};
    }
  }
`;

const CardMedia = styled(Media)`
  display: inherit;
  align-items: center;
  * {
    border-radius: ${(props) => {
    return `${props.theme.borders.radiusMin} ${props.theme.borders.radiusMin} 0 0`;
  }};
    }
`;

const CardGridWrapper = styled(Grid)`
  grid-template-columns: ${(props) => {
    return props.columns || "repeat(auto-fill, minmax(14rem, 1fr))";
  }};
  padding: 1rem;
  ${CardWrapper} {
    height: 100%;
    border-radius: ${(props) => {
    return props.theme.borders.radiusMin;
  }};
    box-shadow: ${(props) => {
    return props.theme.shadows.dropShadow;
  }};
    transition: all 0.25s ease-in-out;
    &:hover {
    box-shadow: ${(props) => {
    return props.theme.shadows.dropShadow2;
  }};
    }
    ${CardSectionWrapper}:not(${CardMedia}) {
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
            padding="0"
            contentAlign="center"
            left={label || icon ? {
              content: <Avatar label={label} icon={icon} size="sm" />,
              width: "max-content",
            } : null}
            center={{
              content: (
                <React.Fragment>
                  {title ? <Title size="lg" text={title} weight="bold" /> : null}
                  {description ? <Text text={description} /> : null}
                </React.Fragment>
              ),
              align: "left",
            }}
            right={children ? {
              content: <Icon icon="down" size="lg" rotation={rotation} />,
              width: "max-content",
            } : null}
          />
        ) : null
      }
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
  let sectionColorHover;
  let sectionBackground;
  if (variant) {
    sectionColor = "inverse";
    sectionColorHover = "inverseHover";
    sectionBackground = variant.toLowerCase();
    if (variant === "light") {
      sectionColor = "";
      sectionColorHover = "";
    }
  }
  let sectionPadding;
  const numPadding = padding ? parseInt(padding, 10) : NaN;
  if (padding && padding.toLowerCase() === "0") {
    sectionPadding = "0";
  } else if (!isNaN(numPadding) && numPadding < 5) {
    sectionPadding = `${0.5 * numPadding}em 1em`;
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
      sectionColorHover={sectionColorHover}
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
  padding: PropTypes.oneOf(["0", "2x", "3x", "4x"]),
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
  badgeLabel,
  body,
  children,
  className,
  commands,
  description,
  icon,
  id,
  mediaDesc,
  isInverse,
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
  const uId = useId(id);
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
      <LinkedWrapper>
        <Grid columns="1" gap="xs">
          {title ? <Title size="lg" text={title} weight="bold" /> : null}
          {description ? (<Text text={description} />
          ) : null}
        </Grid>
      </LinkedWrapper>
    );
  } else {
    centerContent = (
      <Grid columns="1" gap="xs">
        {title ? <Title size="lg" text={title} weight="bold" /> : null}
        {description ? (<Text text={description} />
        ) : null}
      </Grid>
    );
  }

  let headerSection;
  if (title || description) {
    if (more && more.content) {
      headerSection = (
        <CardSection id={`${uId}-Header`} variant={variant} disableTransition={disableTransition}>
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
    } else {
      headerSection = (
        <CardSection id={`${uId}-Header`} variant={variant}>
          {badgeLabel ? <Badge label={badgeLabel} /> : null}
          <Bar
            padding="0"
            contentAlign="center"
            left={label || icon ? {
              content: <Avatar label={label} icon={icon} size="sm" />,
              width: "max-content",
            } : null}
            center={{
              content: centerContent,
              align: "left",
            }}
          />
        </CardSection>
      );
    }
  }

  let commandElements = null;
  if (commands) {
    // 2 Commands
    if (commands.length >= 2) {
      commandElements = (
        <Bar
          padding="0"
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
            content: commands.length > 2 ? <Menu id={`${uId}-Menu`} data={commands.slice(2)} position="topLeft" /> : <Spacer />,
            width: "10%",
          }}
        />
      );
      // Single Command
    } else if (commands.length === 1) {
      commandElements = (
        <Bar
          padding="0"
          contentAlign="bottom"
          left={(
            <Command
              label={commands[0].label}
              onClick={commands[0].onClick}
              disabled={commands[0].disabled}
            />
          )}
        />
      );
    }
  }

  return (
    <CardWrapper
      className={className}
      id={uId}
      isInverse={isInverse}
      href={href}
      media={media}
      onClick={onClick}
      padding={padding}
      shadow={shadow}
    >
      {media ? <CardMedia id={`${uId}-Media`} media={media} mediaDesc={mediaDesc} /> : null}
      {headerSection}
      {body ? (
        <CardSection id={`${uId}-Body`}>
          <Text>{body}</Text>
        </CardSection>
      ) : null}
      {children}
      {commandElements ? <CardSection id={`${uId}-Footer`} footer={<React.Fragment />}>{commandElements}</CardSection> : null}
    </CardWrapper>
  );
}

Card.propTypes = {
  badgeLabel: PropTypes.string,
  body: PropTypes.node,
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
  isInverse: PropTypes.bool,
  label: PropTypes.string,
  mediaDesc: PropTypes.string,
  media: PropTypes.string,
  more: PropTypes.shape({
    content: PropTypes.node,
    onToggle: PropTypes.func,
  }),
  onClick: PropTypes.func,
  padding: PropTypes.oneOf(["0", "2x", "3x", "4x"]),
  shadow: PropTypes.oneOf(["0", "2x"]),
  title: PropTypes.string,
  variant: PropTypes.oneOf(["info", "success", "warning", "alert"]),
};
Card.defaultProps = {
  badgeLabel: "",
  body: "",
  children: null,
  className: null,
  commands: null,
  description: "",
  href: null,
  icon: "",
  id: "",
  isInverse: false,
  label: "",
  mediaDesc: "",
  media: "",
  more: null,
  onClick: null,
  padding: null,
  shadow: null,
  title: "",
  variant: null,
};

function CardGrid({
  children, className, columns, data, gap, id, isInverse, rows,
}) {
  return (
    <CardGridWrapper
      className={className}
      columns={columns}
      gap={gap || "lg"}
      id={id}
      rows={rows}
    >
      {children
        || data.map((item) => {
          return (
            <Card
              body={item.body}
              commands={item.commands}
              description={item.description}
              icon={item.icon}
              id={item.id}
              mediaDesc={item.mediaDesc}
              isInverse={isInverse}
              key={item.id}
              label={item.label}
              media={item.media}
              more={item.more}
              onClick={item.onClick}
              title={item.title}
              variant={item.variant}
            >
              {item.children}
            </Card>
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
      "0",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl",
    ]),
  ]),
  id: PropTypes.string,
  isInverse: PropTypes.bool,
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
  isInverse: false,
  rows: null,
};

export { Card as default, CardSection, CardGrid };
