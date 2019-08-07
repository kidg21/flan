import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Title, {Body} from "base/Typography";
import Button from "atoms/Button";
import Card, { Piece } from "layout/Card";
import Bar from "blocks/Bar";

function DialogueBox({ id, title, message, buttonLabel1, buttonLabel2 }) {
  return (
    <Card id={id}>
      <Piece>
        <Title title="Title"/>
      </Piece>
      <Piece>
      <Title title="Supporting Text"/>
      </Piece>
    </Card>
  );
}
DialogueBox.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.func,
};

export default PopCard;
