import React from "react";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Button from "atoms/Button";
import Title from "base/Typography";
import Card, { Piece } from "layout/Card";
import Bar from "blocks/Bar";

function DialogueBox({
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
          right={
            <Grid columns={buttons.length}>
              {buttons.map((button, index) => {
                return (<Button
                  label={button.label}
                  type={button.type || index === 0 ? "solid" : null}
                  onClick={button.onClick}
                  color={button.color || buttonColor}
                  disabled={button.disabled}
                />);
              })}
            </Grid>
          }
        />
      );
    } else {
      // Single button
      buttonElements = (
        <Bar
          left={
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
      {header ? <Piece>{header}</Piece> : null}
      <Bar left={<Title text={title} />} />
      {message ? <Bar left={<Title text={message} weight="light" />} /> : null}
      {children ? <Bar left={children} /> : null}
      {buttonElements ? <Piece>{buttonElements}</Piece> : null}
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

DialogueBox.propTypes = {
  ...dialogProps,
  header: PropTypes.node,
  children: PropTypes.node,
  buttons: PropTypes.arrayOf(buttonType),
};

DialogueBox.defaultProps = {
  id: null,
  header: null,
  children: null,
  title: null,
  message: null,
  buttonColor: null,
  buttons: null,
};

function Prompt({
  accept,
  cancel,
  buttons,
  children,
  ...props
}) {
  const promptButtons = cancel ? [accept, cancel] : accept;
  return <DialogueBox buttons={promptButtons} {...props}>{children}</DialogueBox>;
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
  id,
  title,
  message,
  buttonColor,
  accept,
  cancel,
}) {
  const buttons = cancel ? [accept, cancel] : accept;
  return (<DialogueBox
    id={id}
    title={title}
    message={message}
    buttonColor={buttonColor}
    buttons={buttons}
  />);
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
  id,
  title,
  message,
  buttonColor,
  accept,
}) {
  return (<DialogueBox
    id={id}
    title={title}
    message={message}
    buttonColor={buttonColor}
    buttons={[accept]}
  />);
}

Alert.propTypes = {
  ...dialogProps,
  accept: buttonType,
};

Alert.defaultProps = {
  accept: { label: "OK", color: "alert" },
};

export { DialogueBox as default, Alert, Confirm, Prompt };
