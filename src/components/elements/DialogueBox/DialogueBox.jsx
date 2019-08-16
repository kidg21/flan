import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Grid from "layout/Grid";
import Button from "atoms/Button";
import { colors } from "Variables";
import Title, { Body } from "base/Typography";
import Card, { Piece } from "layout/Card";
import Bar from "blocks/Bar";
import TextInput from "atoms/TextInput";
import { clearDecorators } from "@storybook/react/dist/client/preview";

const Wrapper = styled.div`
  padding: 1em;
`;

function DialogueBox({
  id,
  header,
  footer,
  title,
  buttonLabel,
  buttonLabel2,
  content,
  buttonColor,
  onClickButton,
  onClickButton2,
  action,
}) {
  let buttonType;
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
        {content ? <Piece>{content}</Piece> : null}
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
  footer: PropTypes.node,
  buttonColor: PropTypes.node,
  buttonLabel: PropTypes.string,
  buttonLabel2: PropTypes.string,
  onClickButton: PropTypes.func,
  onClickButton2: PropTypes.func,
  action: PropTypes.node,
};

export default DialogueBox;
