/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Button from "atoms/Button";
import Card, { CardSection } from "elements/Card";

const ButtonGrid = styled(Grid)`
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'blank one two';
`;

const DialogCard = styled(Card)`
  width: 100%;
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
}) {
  let buttonElements = null;

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
            variant={buttons[0].variant}
          />
          <SecondaryButton
            disabled={buttons[1].disabled}
            id={buttons[1].id}
            label={buttons[1].label}
            onClick={buttons[1].onClick}
            isSolid
            variant={buttons[1].variant}
          />
        </ButtonGrid >);
    } else if (buttons.length === 1) {
      buttonElements = (
        <SecondaryButton
          disabled={buttons[0].disabled}
          id={buttons[0].id}
          label={buttons[0].label}
          onClick={buttons[0].onClick}
          variant={buttons[0].variant}
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
                variant={button.variant}
              />);
            }
            return (<SecondaryButton
              disabled={button.disabled}
              id={button.id}
              label={button.label}
              onClick={button.onClick}
              variant={button.variant}
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
    type: PropTypes.oneOf(["button", "reset", "submit"]),
    disabled: PropTypes.bool,
    variant: PropTypes.string,
  })),
  children: PropTypes.node,
  id: PropTypes.string,
  title: PropTypes.node,
};
DialogBox.defaultProps = {
  body: null,
  buttons: null,
  children: null,
  id: null,
  title: null,
};

export default DialogBox;
