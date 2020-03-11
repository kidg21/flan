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
  id,
  title,
  body,
  children,
  buttons,
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
            id={buttons[0].id}
            label={buttons[0].label}
            onClick={buttons[0].onClick}
            disabled={buttons[0].disabled}
            type={buttons[0].type}
          />
          <SecondaryButton
            id={buttons[1].id}
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
    } else {
      buttonElements = (
        <Grid columns={buttons.length.toString()}>
          {buttons.forEach((button, index) => {
            if (index === 0) {
              return (<PrimaryButton
                id={button.id}
                label={button.label}
                onClick={button.onClick}
                disabled={button.disabled}
                type={button.type}
              />);
            }
            return (<SecondaryButton
              id={button.id}
              label={button.label}
              onClick={button.onClick}
              disabled={button.disabled}
              type={button.type}
            />);
          })}
        </Grid>
      );
    }
  }

  return (
    <DialogCard
      id={id}
      title={title}
      body={body}
      width={dialogWidth}
    >
      {children ? <ChildSection>{children}</ChildSection> : null}
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
  width: PropTypes.string,
};
DialogBox.defaultProps = {
  id: null,
  title: null,
  body: null,
  children: null,
  buttons: null,
  width: null,
};

export default DialogBox;
