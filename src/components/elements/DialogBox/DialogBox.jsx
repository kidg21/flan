/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Button from "atoms/Button";
import Text, { Title } from "base/Typography";
import Card from "elements/Card";
import Bar from "blocks/Bar";

function DialogBox({
  id,
  header,
  title,
  message,
  children,
  buttonColor,
  buttons,
}) {
  let buttonElements = null;
  if (buttons) {
    if (buttons.length > 1) {
      // Multiple buttons
      buttonElements = (
        <Bar
          rightWidth="50%"
          right={
            <Grid columns={buttons.length}>
              {buttons.map((button, index) => {
                return (
                  <Button
                    label={button.label}
                    onClick={button.onClick}
                    type={button.type || button.type}
                    disabled={button.disabled}
                  />
                );
              })}
            </Grid>
          }
        />
      );
    } else {
      // Single button
      buttonElements = (
        <Bar
          center={
            <Button
              label={buttons[0].label}
              type={buttons[0].type}
              onClick={buttons[0].onClick}
              color={buttons[0].color || buttonColor}
              disabled={buttons[0].disabled}
            />
          }
        />
      );
    }
  }

  return (
    <Card id={id} padding="1em">
      {header ? <React.Fragment>{header}</React.Fragment> : null}
      <Bar left={<Title text={title} />} />
      {message ? <Bar left={<Text text={message} weight="light" />} /> : null}
      {children ? <Bar left={children} /> : null}
      {buttonElements ? <React.Fragment>{buttonElements}</React.Fragment> : null}
    </Card>
  );
}

const buttonType = PropTypes.shape({
  label: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
});

const dialogProps = {
  id: PropTypes.string,
  title: PropTypes.node,
  message: PropTypes.node,
  buttonColor: PropTypes.string,
};

DialogBox.propTypes = {
  ...dialogProps,
  id: PropTypes.string,
  header: PropTypes.node,
  children: PropTypes.node,
  title: PropTypes.node,
  message: PropTypes.node,
  buttonColor: PropTypes.string,
  buttons: PropTypes.arrayOf(buttonType),
};

DialogBox.defaultProps = {
  id: null,
  header: null,
  children: null,
  title: null,
  message: null,
  buttonColor: null,
  buttons: null,
};

function Prompt({
  accept, cancel, buttons, children, ...props
}) {
  const promptButtons = cancel ? [accept, cancel] : accept;
  return (
    <DialogBox buttons={promptButtons} {...props}>
      {children}
    </DialogBox>
  );
}

Prompt.propTypes = {
  ...dialogProps,
  accept: buttonType,
  cancel: buttonType,
  children: PropTypes.node,
};

Prompt.defaultProps = {
  children: null,
  accept: { label: "OK" },
  cancel: null,
};

function Confirm({
  id, title, message, buttonColor, accept, cancel,
}) {
  const buttons = cancel ? [accept, cancel] : accept;
  return (
    <DialogBox
      id={id}
      title={title}
      message={message}
      buttonColor={buttonColor}
      buttons={buttons}
    />
  );
}

Confirm.propTypes = {
  ...dialogProps,
  accept: buttonType,
  cancel: buttonType,
};

Confirm.defaultProps = {
  accept: { label: "OK" },
  cancel: { label: "Cancel" },
};

function Alert({
  id, title, message, buttonColor, accept,
}) {
  return (
    <DialogBox
      id={id}
      title={title}
      message={message}
      buttonColor={buttonColor}
      buttons={[accept]}
    />
  );
}

Alert.propTypes = {
  ...dialogProps,
  accept: buttonType,
};

Alert.defaultProps = {
  accept: { label: "OK", color: "alert" },
};

export { DialogBox as default, Alert, Confirm, Prompt };
