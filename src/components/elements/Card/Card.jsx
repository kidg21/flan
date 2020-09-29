/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable complexity */
import React, { useState, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useId } from "utils/hooks";
import { PlaceholderText } from "helpers/Skeleton";
import { Spacer } from "helpers/Display";
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
import { backgroundColors } from "Variables";
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
    return props.theme.text[props.sectionColor] || props.theme.text.secondary;
  }};
  background-color: ${(props) => {
    return props.theme.background[props.sectionBackground] || "";
  }};
  padding: ${(props) => {
    return props.sectionPadding || "0.75em 1em";
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
  a,
  + a,
  a > * {
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
  margin-bottom: 0.25em;
  * {
    border-radius: ${(props) => {
    return `${props.theme.borders.radiusMin} ${props.theme.borders.radiusMin} 0 0`;
  }};
    }
`;

// needed for className passing
// gets rid of component-selector warning
const StyledCardWrapper = styled(CardWrapper)``;

const CardGridWrapper = styled(Grid)`
  grid-template-columns: ${(props) => {
    return props.columns ? `repeat(${props.columns}, minmax(0, 1fr))` : "repeat(auto-fill, minmax(20rem, 1fr))";
  }};
  padding: ${(props) => {
    return props.padding;
  }};
  ${StyledCardWrapper} {
    height: 100%;
    border-radius: ${(props) => {
    return props.theme.borders.radiusMed;
  }};
    transition: all 0.25s ease-in-out;
    &:hover {
    box-shadow: ${(props) => {
    return props.theme.shadows.dropShadow2;
  }};
    }
    ${CardSectionWrapper}:not(${CardMedia}) {
      /* Keeping this around as it may come back */
      /* &:first-of-type {
        padding: 0.75em 1em 0.5em;
      }
      &:last-of-type {
        padding: 0.5em 1em 0.75em;
      }
      &:only-of-type {
        padding: 0.75em 1em;
      } */
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
      content: "${(props) => { return props.placeholder || ""; }}";
    }
  }
`;

function ExpandingSection({
  children, description, icon, id, label, onClick, open, title,
}) {
  let iconContent;
  if (open) {
    iconContent = "minus";
  } else {
    iconContent = "plus";
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
                  {title ? <Title size="xl" text={title} weight="bold" /> : null}
                  {description ? <Text size="sm" text={description} /> : null}
                </React.Fragment>
              ),
              align: "left",
            }}
            right={children ? {
              content: <Icon icon={iconContent} />,
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
  children, className, footer, header, id, isInverse, onClick, padding, variant,
}) {
  let sectionColor;
  let sectionColorHover;
  let sectionBackground;
  if (isInverse) {
    sectionBackground = "alt";
    sectionColor = "inverse";
    sectionColorHover = "neutral100";
  }
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
  isInverse: PropTypes.bool,
  padding: PropTypes.oneOf(["0", "1x", "2x", "3x", "4x"]),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([""].concat(backgroundColors)),
};
CardSection.defaultProps = {
  children: null,
  className: null,
  footer: null,
  header: null,
  id: null,
  isInverse: false,
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
  placeholder,
  shadow,
  title,
  variant,
}) {
  const uId = useId(id);
  const disableTransition = useContext(DisableTransitionContext);
  const [open, setOpen] = useState(more && more.initVisible);
  const toggleDropdown = useCallback(() => {
    setOpen((show) => { return !show; });
  }, []);

  let centerContent;

  if (onClick) {
    centerContent = (
      <LinkedWrapper>
        <React.Fragment>
          {title ? <Title size="lg" text={title} /> : null}
          {description ? (<Text text={description} />
          ) : null}
        </React.Fragment>
      </LinkedWrapper>
    );
  } else {
    centerContent = (
      <React.Fragment>
        {title ? <Title size="lg" text={title} /> : null}
        {description ? (<Text text={description} />
        ) : null}
      </React.Fragment>
    );
  }

  let headerSection;
  if (title || description) {
    if (more && more.content) {
      // controlled by parent component, passes in more.visible
      const isControlled = more && typeof more.visible === "boolean";
      headerSection = (
        <CardSection id={`${uId}-Header`} variant={variant} disableTransition={disableTransition}>
          <ExpandingSection
            description={description}
            icon={icon}
            label={label}
            onClick={(e) => {
              if (!isControlled) toggleDropdown(e);
              if (more.onToggle) more.onToggle(e); // deprecated, use onClick
              if (more.onClick) more.onClick(e);
            }}
            open={isControlled ? more.visible : open}
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
              <Grid columns="1">
                {commands.slice(0, 2).map((command) => { return <Command {...command} />; })}
              </Grid>
            ),
            width: "90%",
          }}
          right={{
            // More than 2 Commands sends overflow to Menu
            content: commands.length > 2 ? <Menu id={`${uId}-Menu`} data={commands.slice(2)} position="topLeft"><Icon icon="options" /></Menu> : <Spacer />,
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
          left={{
            content: (
              <Grid columns="1">
                {commands.map((command) => { return <Command {...command} />; })}
              </Grid>
            ),
          }}
        />
      );
    }
  }

  const bodyContent = typeof body === "string" ? <Text>{body}</Text> : body;
  return (
    <StyledCardWrapper
      className={className}
      id={uId}
      isInverse={isInverse}
      href={href}
      media={media}
      onClick={onClick}
      padding={padding}
      shadow={shadow}
      placeholder={placeholder}
    >
      {media ? <CardMedia id={`${uId}-Media`} media={media} mediaDesc={mediaDesc} /> : null}
      {headerSection}
      {bodyContent ? (
        <CardSection id={`${uId}-Body`}>
          {bodyContent}
        </CardSection>
      ) : null}
      {children}
      {commandElements ? <CardSection id={`${uId}-Footer`} footer={<React.Fragment />}>{commandElements}</CardSection> : null}
    </StyledCardWrapper>
  );
}

Card.propTypes = {
  badgeLabel: PropTypes.string,
  body: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.node,
  commands: PropTypes.arrayOf(PropTypes.shape({
    command: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    labelVisible: PropTypes.bool,
    onClick: PropTypes.func,
  })),
  description: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  isInverse: PropTypes.bool,
  label: PropTypes.string,
  mediaDesc: PropTypes.string,
  media: PropTypes.string,
  more: PropTypes.shape({
    /** content to render */
    content: PropTypes.node,
    /** initialize open/close state of (uncontrolled) more */
    initVisible: PropTypes.bool,
    /** callback when clicking header/expanding section to open */
    onClick: PropTypes.func,
    /** deprecated, use onClick */
    onToggle: PropTypes.func,
    /** expand card & show (controlled) more */
    visible: PropTypes.bool,
  }),
  onClick: PropTypes.func,
  padding: PropTypes.oneOf(["0", "1x", "2x", "3x", "4x"]),
  /** placeholder text when card is empty */
  placeholder: PropTypes.string,
  shadow: PropTypes.oneOf(["0", "2x"]),
  title: PropTypes.string,
  variant: PropTypes.oneOf(["info", "success", "warning", "alert"]),
};
Card.defaultProps = {
  badgeLabel: "",
  body: null,
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
  padding: "0",
  placeholder: "{ Card }",
  shadow: null,
  title: "",
  variant: null,
};

function CardGrid({
  children, className, columns, data, gap, id, isInverse, padding, placeholder, rows,
}) {
  return (
    <CardGridWrapper
      className={className}
      columns={columns}
      padding={padding}
      gap={gap || "lg"}
      id={id}
      rows={rows}
      placeholder={placeholder}
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
  padding: PropTypes.string,
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
  /** placeholder text when card grid is empty */
  placeholder: PropTypes.string,
  /** Defines the heights of grid rows
   *
   * Options: Any switch case or any standard value accepted by the CSS Grid property, 'grid-template-rows'.
   */
  rows: PropTypes.oneOf(["default (auto)", "[grid-template-rows]"]),
};
CardGrid.defaultProps = {
  children: null,
  className: null,
  padding: "1rem",
  columns: null,
  data: null,
  gap: null,
  id: null,
  isInverse: false,
  placeholder: "{ CardGrid }",
  rows: null,
};

export { Card as default, CardSection, CardGrid };
