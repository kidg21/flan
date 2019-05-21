import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Button from "atoms/Button";

const HeaderSection = styled.div`
  overflow: normal;
  padding: 5px 5px 25px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  align-items: center;

  @media (max-width: 1000px) {
    width: 80%;
  }
`;

const Container = styled.div`
  display: flex;
  line-height: 2;
  justify-content: flex-end;
  padding-right: 0.7em;
  padding-top: 5px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const Aligner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: center;
  height: 100vh;
`;


const Space =styled.div`
padding: 10px;
`

const MessageContainer = styled.div`
  padding: 4em;
`;

const MessageBody = styled.p`
padding-top: 1em;
font-family: arial;
text-align: center;
`
const MessageTitle = styled.h4`
text-align: center;
`


function PopCard({ id, title, message, action }) {
  return (
    <Aligner>
      <HeaderSection
      id={id}>
        <Container>
          <Icon icon={["fal", "times"]} />
        </Container>
        <MessageContainer>
        <MessageTitle> {title} </MessageTitle>
  <MessageBody>{message}</MessageBody>
        </MessageContainer>
        <Actions>
          <Button buttonLabel={action} isRound={true} isExtraSmall={true} />
          <Space />
          <Button
            buttonLabel="No thanks"
            isSecondStandard={true}
            isRound={true}
            isExtraSmall={true}
          />
        </Actions>
      </HeaderSection>
    </Aligner>
  );
}
PopCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired
};

export default PopCard;
