import React from "react";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Button from "atoms/Button";
import Title from "base/Typography";
import Card, { Piece } from "layout/Card";
import Bar from "blocks/Bar";

function DialogueBox({
  id,
  header,
  type,
  title,
  message,
  primaryLabel,
  secondaryLabel,
  content,
  buttonColor,
  onClickPrimary,
  onClickSecondary,
  action,
}) {
  let buttonType;
  let inputContent;
  switch (action) {
    case "one":
      buttonType = (
        <Bar
          left={
            <Button
              buttonLabel={primaryLabel}
              onClick={onClickPrimary}
              color={buttonColor}
            />
          }
        />
      );
      break;
    case "two":
      buttonType = (
        <Bar
          right={
            <Grid columns="2">
              <Button
                buttonLabel={primaryLabel}
                type="solid"
                onClick={onClickPrimary}
                color={buttonColor}
              />
              <Button
                buttonLabel={secondaryLabel}
                onClick={onClickSecondary}
                color={buttonColor}
              />
            </Grid>
          }
        />
      );
      break;
    default:
      break;
  }
  return (
    <Card id={id} action={action} text={title} padding="1em">
      {header ? <Piece>{header}</Piece> : null}
      <Bar left={<Title text={title} />} />
      {message ? <Bar left={<Title text={message} weight="light" />} /> : null}
      {type ? <Bar left={inputContent} /> : null}
      {content ? <Bar left={content} /> : null}
      {action ? <Piece>{buttonType}</Piece> : null}
    </Card>
  );
}
DialogueBox.propTypes = {
  id: PropTypes.string,
  header: PropTypes.node,
  content: PropTypes.node,
  title: PropTypes.node,
  footer: PropTypes.node,
  message: PropTypes.string,
  buttonColor: PropTypes.node,
  primaryLabel: PropTypes.string,
  secondaryLabel: PropTypes.string,
  onClickPrimary: PropTypes.func,
  onClickSecondary: PropTypes.func,
  action: PropTypes.node,
};

export default DialogueBox;
