/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Button from "atoms/Button";
import Card from "elements/Card";
import Bar from "blocks/Bar";

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
        <Bar
          padding="2x"
          rightWidth="50%"
          right={
            <Grid columns="2">
              <Button
                label={buttons[0].label}
                onClick={buttons[0].onClick}
                disabled={buttons[0].disabled}
                type={buttons[0].type}
              />
              <Button
                label={buttons[1].label}
                onClick={buttons[1].onClick}
                disabled={buttons[1].disabled}
                type={buttons[1].type}
                solid
              />
            </Grid>}
        />);
    } else if (buttons.length === 1) {
      buttonElements = (
        <Bar
          padding="2x"
          center={
            <Button
              label={buttons[0].label}
              onClick={buttons[0].onClick}
              disabled={buttons[0].disabled}
              type={buttons[0].type}
            />
          }
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
      {children}
      {buttonElements ? <React.Fragment>{buttonElements}</React.Fragment> : null}
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
