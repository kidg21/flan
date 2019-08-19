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

const Wrapper = styled.div`
  padding: 1em;
`;

function DialogueBox({
  id,
  header,
  type,
  title,
  message,
  buttonLabel,
  buttonLabel2,
  content,
  buttonColor,
  onClickButton,
  onClickButton2,
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
              buttonLabel={buttonLabel}
              onClick={onClickButton}
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
                buttonLabel={buttonLabel}
                type="solid"
                onClick={onClickButton}
                color={buttonColor}
              />
              <Button
                buttonLabel={buttonLabel2}
                onClick={onClickButton2}
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
    <Card id={id} action={action} title={title}>
      <Wrapper>
        {header ? <Piece>{header}</Piece> : null}
        <Piece>
          <Bar left={<Title title={title} />} />
        </Piece>
        {message ? (
          <Bar left={<Title title={message} weight="light" />} />
        ) : null}
        {type ? (
          <Piece>
            <Bar left={<div>{inputContent}</div>} />
          </Piece>
        ) : null}
        {content ? (
          <Piece>
            <Bar left={<div>{content}</div>} />
          </Piece>
        ) : null}
        {action ? <Piece>{buttonType}</Piece> : null}
      </Wrapper>
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
  buttonLabel: PropTypes.string,
  buttonLabel2: PropTypes.string,
  onClickButton: PropTypes.func,
  onClickButton2: PropTypes.func,
  action: PropTypes.node,
};

export default DialogueBox;
