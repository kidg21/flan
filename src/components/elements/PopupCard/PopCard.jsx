import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Button from "atoms/Button";
import Card, { Piece } from "layout/Card";
import Bar from "blocks/Bar";

function PopCard({ id, title, message, buttonLabel1, buttonLabel2 }) {
  return (
    <Card id={id}>
      <Bar type="one" right={<Icon icon={["fal", "times"]} />} />
      <Bar type="three" center={title} />
      <Bar type="three" center={message} />
      <Button buttonLabel={buttonLabel1} isRound={true} />
      <Button
        buttonLabel={buttonLabel2}
        isSecondStandard={true}
        isRound={true}
      />
    </Card>
  );
}
PopCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  buttonLabel1: PropTypes.string,
  buttonLabel2: PropTypes.string,
};

export default PopCard;
