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
import ExpandingSection from "./ExpandingSection";
import MediaBlock from "blocks/MediaBlock";
import Tag from "atoms/Tag";
import Command from "atoms/Command";
import Card, { CardSection } from "layout/Card";
import Title, { Description, Body } from "base/Typography";


function CardComponent({
  id, title, type, icon, tag, media, line1, line2, body, expands, commands, description,
}) {
  let excess;
  let content;
  let commandElements = null;
  let rightContent;
  const titleBlock =
    (<React.Fragment>
      {title ? <Title text={title} /> : null}
      {description ? <Description text={description} /> : null}
      {line1 ? <Body text={line1} /> : null}
      {line2 ? <Body text={line2} /> : null}
     </React.Fragment>);
  const mainContent =
    (<Bar
      contentAlign="center"
      left={titleBlock}
      right={rightContent} />);

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
    excess = (<React.Fragment>
      <ExpandingSection title="Expand Me" />
              </React.Fragment>);
  }

  if (icon) {
    rightContent = <Icon icon={icon} size="lg" />;
  }
  if (tag) {
    rightContent = (<Tag label={tag} />);
  }
  if (media) {
    content = (<MediaBlock media={media} body={mainContent} />);
  } else {
    content =
      (<Bar
        contentAlign="center"
        left={mainContent}
        right={rightContent} />);
  }
  return (
    <Card id={id} type={type}>
      {content ? <CardSection>{content} </CardSection> : null}
      {body ? (
        <CardSection>
          {body}
        </CardSection>) : null}
      {excess ? (<CardSection>
        {excess}
                 </CardSection>) : null}
      {commandElements ? <CardSection>{commandElements}</CardSection> : null}
    </Card>
  );
}
CardComponent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.string,
  icon: PropTypes.string,

};

CardComponent.defaultProps = {
  id: null,
  title: null,
  avatar: null,
  icon: null,

};

export default CardComponent;