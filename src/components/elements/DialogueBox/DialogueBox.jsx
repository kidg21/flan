import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Grid from "layout/Grid";
import Button from "atoms/Button";
import Title, { Body } from "base/Typography";
import Card, { Piece } from "layout/Card";
import Bar from "blocks/Bar";
import TextInput from "atoms/TextInput";

const Wrapper = styled.div`
  padding: 1em;
`;

function DialogueBox({ id, header, content, footer }) {
  return (
    <Card id={id}>
      <Wrapper>
        {header ? <Piece>{header}</Piece> : null}
        {content ? <Piece>{content}</Piece> : null}
        {footer ? <Piece>{footer}</Piece> : null}
      </Wrapper>
    </Card>
  );
}
DialogueBox.propTypes = {
  id: PropTypes.string,
  header: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node,
};

export default DialogueBox;
