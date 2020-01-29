/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Button from "atoms/Button";
import Card, { CardSection } from "elements/Card";

const ButtonGrid = styled(Grid)`
grid-template-columns: auto auto auto;
grid-template-areas: 'blank one two';

`;


const FirstButton = styled(Button)`
grid-area: one;
`;

const SecondButton = styled(Button)`
grid-area: two;
`;

function DialogBox({
  id,
  title,
  body,
  children,
  buttons,
}) {
  let buttonElements = null;
  if (buttons) {
    if (buttons.length === 2) {
      // Multiple buttons
      buttonElements = (
        <ButtonGrid columns="3">
          <FirstButton
            label={buttons[0].label}
            onClick={buttons[0].onClick}
            disabled={buttons[0].disabled}
            type={buttons[0].type}
          />
          <SecondButton
            label={buttons[1].label}
            onClick={buttons[1].onClick}
            disabled={buttons[1].disabled}
            type={buttons[1].type}
            solid
          />
        </ButtonGrid >);
    } else if (buttons.length === 1) {
      buttonElements = (
        <FirstButton
          label={buttons[0].label}
          onClick={buttons[0].onClick}
          disabled={buttons[0].disabled}
          type={buttons[0].type}
        />
      );
    }
  }

  return (
    <Card
      id={id}
      title={title}
      body={body}
    >
      {children ? <CardSection>{children}</CardSection> : null}
      {buttonElements ? <CardSection>{buttonElements}</CardSection> : null}
    </Card>
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
