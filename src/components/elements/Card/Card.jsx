/* eslint-disable complexity */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Bar from "blocks/Bar";
import Icon from "atoms/Icon";
import Image from "atoms/Image";
import MediaBlock from "blocks/MediaBlock";
import Tag from "atoms/Tag";
import Command from "atoms/Command";
import Card, { CardSection } from "layout/Card";
import Title, { Headline, SubTitle, Description, Body } from "base/Typography";
import ExpandingSection from "./ExpandingSection.jsx";

function CardComponent({
  id,
  title,
  type,
  icon,
  tag,
  tagType,
  media,
  body,
  expands,
  commands,
  description,
}) {
  let excess;
  let content;
  let commandElements = null;
  let rightContent;

  if (commands) {
    if (commands.length > 1) {
      // Multiple commands
      commandElements = (
        <Bar
          leftWidth="50%"
          left={
            <Grid columns={commands.length}>
              {commands.map((command) => {
                return (
                  <Command
                    label={command.label}
                    onClick={command.onClick}
                    disabled={command.disabled}
                  />
                );
              })}
            </Grid>
          }
        />
      );
    } else {
      // Single command
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

  if (icon) {
    rightContent = <Icon icon={icon} size="lg" />;
  }

  if (tag) {
    rightContent = <Tag label={tag} type={tagType} />;
  }

  return (
    <Card id={id} type={type}>
      {media ? (
        <Image
          src={media}
          alt={`${"Card Image:" + " "}${media}`}
          width="100%"
        />
      ) : null}
      {title || description ? (
        <CardSection>
          <Headline text={title} />
          <SubTitle text={description} />
        </CardSection>
      ) : null}
      {body ? (
        <CardSection>
          <Body text={body} />
        </CardSection>
      ) : null}
      {excess ? <CardSection>{excess}</CardSection> : null}
      {commandElements ? <CardSection>{commandElements}</CardSection> : null}
    </Card>
  );
}
CardComponent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  tag: PropTypes.string,
  tagType: PropTypes.string,
  media: PropTypes.node,
  body: PropTypes.node,
  expands: PropTypes.node,
  commands: PropTypes.node,
  description: PropTypes.string,
};

CardComponent.defaultProps = {
  id: null,
  title: null,
  type: null,
  icon: null,
  tag: null,
  tagType: null,
  media: null,
  body: null,
  expands: null,
  commands: null,
  description: null,
};

export default CardComponent;
