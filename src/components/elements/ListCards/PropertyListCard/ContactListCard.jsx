import React from "react";
import Title from "base/Typography";
import PropTypes from "prop-types";
import Card from "layout/Card";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import styled, { css } from "styled-components";

const Titles = styled.div`
display: inline-block'
`;

function ContactListCard({ id, name, ownerAddress }) {
  return (
    <Card id={id}>
      <Bar
        left={
          <Titles>
            <Title text={name} />
            <p>
              {ownerAddress} <br />
              <a>Owner Portfolio</a>
            </p>
            <IconBlock>
              <a>
                <Icon icon="phone" />
              </a>
              <a>
                <Icon icon={["far", "share"]} />
              </a>
              <a>
                <Icon icon={["fal", "clone"]} />
              </a>
            </IconBlock>
          </Titles>
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
