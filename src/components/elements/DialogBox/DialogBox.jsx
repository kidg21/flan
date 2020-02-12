/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { screen } from "Variables";
import Grid from "layout/Grid";
import Button from "atoms/Button";
import Card, { CardSection } from "elements/Card";

const ButtonGrid = styled(Grid)`
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas: 'blank one two';

`;

const DialogCard = styled(Card)`
width: ${(props) => {
  return props.width || "100%";
}};
`;

const PrimaryButton = styled(Button)`
grid-area: one;
`;

const SecondaryButton = styled(Button)`
grid-area: two;
`;

function DialogBox({
  id,
  title,
  body,
  children,
  buttons,
}) {
  const screenSmall = window.matchMedia(screen.small);
  const screenMedium = window.matchMedia(screen.medium);
  const screenLarge = window.matchMedia(screen.large);
  let width;
  let buttonElements = null;

  if (screenLarge.matches) {
    width = "40vw";
  } if (screenMedium.matches) {
    width = "40vw";
  } else if (screenSmall.matches) {
    width = "90vw";
  }

  if (buttons) {
    if (buttons.length === 2) {
      // Multiple buttons
      buttonElements = (
        <ButtonGrid columns="3">
          <PrimaryButton
            id={buttons[0].id}
            label={buttons[0].label}
            onClick={buttons[0].onClick}
            disabled={buttons[0].disabled}
            type={buttons[0].type}
          />
          <SecondaryButton
            id={buttons[0].id}
            label={buttons[1].label}
            onClick={buttons[1].onClick}
            disabled={buttons[1].disabled}
            type={buttons[1].type}
            solid
          />
        </ButtonGrid >);
    } else if (buttons.length === 1) {
      buttonElements = (
        <SecondaryButton
          id={buttons[0].id}
          label={buttons[0].label}
          onClick={buttons[0].onClick}
          disabled={buttons[0].disabled}
          type={buttons[0].type}
        />
      );
    }
  }

  return (
    <DialogCard
      id={id}
      title={title}
      body={body}
      width={width}
    >
      {children ? <CardSection>{children}</CardSection> : null}
      {buttonElements ? <CardSection>{buttonElements}</CardSection> : null}
    </DialogCard>
  );
}


DialogBox.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node,
  body: PropTypes.node,
  children: PropTypes.node,
  buttons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.string,
  })),
};
DialogBox.defaultProps = {
  id: null,
  title: null,
  body: null,
  children: null,
  buttons: PropTypes.arrayOf(PropTypes.shape({
    id: null,
    label: null,
    onClick: null,
    disabled: null,
    type: null,
  })),
};

export default DialogBox;
