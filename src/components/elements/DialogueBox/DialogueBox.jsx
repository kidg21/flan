import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Button from "atoms/Button";
import SelectMenu from "atoms/SelectMenu";
import { Section } from "layout/Form";
import Title from "base/Typography";
import Card, { Piece } from "layout/Card";
import Bar from "blocks/Bar";
import TextInput from "atoms/TextInput";

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
  }
  switch (type) {
    case "saving":
      inputContent = (
        <Section>
          <TextInput inputLabel="Name" placeholder="Type Name" />
          <SelectMenu
            inputLabel="Location"
            options={[
              { value: "1", label: "my folder" },
              { value: "2", label: "our folder" },
              { value: "3", label: "dmp" },
              { value: "4", label: "lightbox" },
            ]}
          />
          <SelectMenu
            inputLabel="File Type"
            options={[
              { value: "jpg", label: ".jpg" },
              { value: "png", label: ".png" },
            ]}
          />{" "}
        </Section>
      );
      break;
    default:
      break;
  }
  return (
    <Card id={id} action={action} title={title} padding="1em">
      {header ? <Piece>{header}</Piece> : null}
      <Piece>
        <Bar left={<Title title={title} />} />
      </Piece>
      {message ? <Bar left={<Title title={message} weight="light" />} /> : null}
      {type ? (
        <Piece>
          <Bar left={inputContent} />
        </Piece>
      ) : null}
      {content ? (
        <Piece>
          <Bar left={content} />
        </Piece>
      ) : null}
      {action ? <Piece>{buttonType}</Piece> : null}
    </Card>
  );
}
DialogueBox.propTypes = {
  id: PropTypes.string,
  header: PropTypes.node,
  content: PropTypes.node,
  title: PropTypes.node,
  type: PropTypes.node,
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
