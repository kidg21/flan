/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Title from "base/Typography";
import PropTypes from "prop-types";
import Card from "layout/Card";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import Command from "atoms/Command";
import styled from "styled-components";

const Titles = styled.div`
display: inline-block'
`;

function ContactListCard({
  id, name, ownerAddress, onClickCall, onClickShare, onClickCopy,
}) {
  return (
    <Card id={id}>
      <Bar
        left={
          <Titles>
            <Title text={name} weight="bold" />
            <Title text={ownerAddress} size="small" />
            <Command label="Owner Portfolio" align="right" />
          </Titles>
        }
      />
      <Bar left={
        <IconBlock>
          <Icon icon="call" type="primary" onClick={onClickCall} />
          <Icon icon="share" type="primary" onClick={onClickShare} />
          <Icon icon="clone" type="primary" onClick={onClickCopy} />
        </IconBlock>
      }
      />
    </Card>
  );
}

ContactListCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  ownerAddress: PropTypes.string,
};

export default ContactListCard;
