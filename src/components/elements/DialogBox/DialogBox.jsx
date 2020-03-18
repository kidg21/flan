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

const ChildSection = styled(CardSection)`
  z-index: 2;
`;

const PrimaryButton = styled(Button)`
  grid-area: one;
`;

const SecondaryButton = styled(Button)`
  grid-area: two;
`;

function DialogBox({
  body,
  buttons,
  children,
  id,
  title,
  width,
}) {
  const screenSmall = window.matchMedia(screen.small);
  const screenMedium = window.matchMedia(screen.medium);
  const screenLarge = window.matchMedia(screen.large);
  let dialogWidth = width;
  let buttonElements = null;

  if (!dialogWidth) {
    if (screenLarge.matches || screenMedium.matches) {
      dialogWidth = "40vw";
    } else if (screenSmall.matches) {
      dialogWidth = "90vw";
    }
  }

  if (buttons) {
    if (buttons.length === 2) {
      // Multiple buttons
      buttonElements = (
        <ButtonGrid columns="3">
          <PrimaryButton
            disabled={buttons[0].disabled}
            id={buttons[0].id}
            label={buttons[0].label}
            onClick={buttons[0].onClick}
            type={buttons[0].type}
          />
          <SecondaryButton
            disabled={buttons[1].disabled}
            id={buttons[1].id}
            label={buttons[1].label}
            onClick={buttons[1].onClick}
            solid
            type={buttons[1].type}
          />
        </ButtonGrid >);
    } else if (buttons.length === 1) {
      buttonElements = (
        <SecondaryButton
          disabled={buttons[0].disabled}
          id={buttons[0].id}
          label={buttons[0].label}
          onClick={buttons[0].onClick}
          type={buttons[0].type}
        />
      );
    } else {
      buttonElements = (
        <Grid columns={buttons.length.toString()}>
          {buttons.forEach((button, index) => {
            if (index === 0) {
              return (<PrimaryButton
                disabled={button.disabled}
                id={button.id}
                label={button.label}
                onClick={button.onClick}
                type={button.type}
              />);
            }
            return (<SecondaryButton
              disabled={button.disabled}
              id={button.id}
              label={button.label}
              onClick={button.onClick}
              type={button.type}
            />);
          })}
        </Grid>
      );
    }
  }

  return (
    <DialogCard
      body={body}
      id={id}
      title={title}
      width={dialogWidth}
    >
      {children ? <ChildSection>{children}</ChildSection> : null}
      {buttonElements ? <CardSection>{buttonElements}</CardSection> : null}
    </DialogCard>
  );
}


DialogBox.propTypes = {
  body: PropTypes.node,
  buttons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.string,
  })),
  children: PropTypes.node,
  id: PropTypes.string,
  title: PropTypes.node,
  width: PropTypes.string,
};
DialogBox.defaultProps = {
  body: null,
  buttons: null,
  children: null,
  id: null,
  title: null,
  width: null,
};

export default DialogBox;
