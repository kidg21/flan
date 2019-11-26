/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import Icon from "atoms/Icon";
import MediaBlock from "blocks/MediaBlock";
import Card, { CardSection } from "layout/Card";
import Title, { Description, Body } from "base/Typography";


function CardComponent({
  id, title, icon, media, description,
}) {
  let content;
  let rightContent;
  const titleBlock =
        (<React.Fragment>
          <Title text={title} />
          <Description text={description} />
         </React.Fragment>);
  const mainContent =
        (<Bar
            contentAlign="center"
            left={titleBlock}
            right={rightContent} />);

  if (icon) {
    rightContent = <Icon icon={icon} size="lg" />;
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
      <Card id={id}>
          {content}
        </Card>
  );
}
CardComponent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,

};

CardComponent.defaultProps = {
  id: null,
  title: null,
  icon: null,

};

export default CardComponent;
