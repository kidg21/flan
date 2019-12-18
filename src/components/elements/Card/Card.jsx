/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Bar from "blocks/Bar";
import Image from "atoms/Image";
import Command from "atoms/Command";
import Card, { CardSection } from "layout/Card";
import { Headline, SubTitle, Body } from "base/Typography";
import ExpandingSection from "./ExpandingSection.jsx";

function CardComponent({
  id,
  title,
  type,
  icon,
  tag,
  image,
  body,
  expands,
  commands,
  description,
}) {
  let excess;
  let commandElements = null;

  // const titleBlock = (
  //   <React.Fragment>
  //     {title ? <Title text={title} /> : null}
  //     {description ? <Description text={description} /> : null}
  //     {line1 ? <Body text={line1} /> : null}
  //     {line2 ? <Body text={line2} /> : null}
  //   </React.Fragment>
  // );

  // const mainContent = (
  //   <Bar
  //     contentAlign="center"
  //     left={titleBlock}
  //     right={rightContent}
  //   />
  // );

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
    // do something
  }

  if (tag) {
    // do something
  }

  // if (media) {
  //   content = <MediaBlock media={media} align="vertical" body={mainContent} />;
  // } else {
  //   content = (
  //     <Bar contentAlign="center" left={mainContent} right={rightContent} />
  //   );
  // }

  return (
    <Card id={id} type={type}>
      {image ? (
        <Image
          src={image}
          alt={`Card Image: ${image}`}
          width="100%"
        />
      ) : null}
      {title || description ? (
        <CardSection>
          <Headline text={title} />
          <SubTitle text={description} />
        </CardSection>
      ) : null}
      {/* {content ? <CardSection>{content}</CardSection> : null} */}
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
  image: PropTypes.string,
  tag: PropTypes.string,
  /* tagType: PropTypes.string,
  media: PropTypes.node,
  line1: PropTypes.string,
  line2: PropTypes.string, */
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
  image: null,
  tag: null,
  /* tagType: null,
  media: null,
  line1: null,
  line2: null, */
  body: null,
  expands: null,
  commands: null,
  description: null,
};

export default CardComponent;
