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

const Message = styled.div`
  padding: 4em;
`;

function PopCard({ title, message, action }) {
  return (
    <Aligner>
      <HeaderSection>
        <Container>
          <Icon icon={["fal", "times"]} />
        </Container>
        <Message>
          <h4 style={{ textAlign: "center" }}> {title} </h4>
          <p
            style={{
              paddingTop: "1em",
              fontFamily: "arial",
              textAlign: "center"
            }}
          >
            {message}
          </p>
        </Message>
        <Actions>
          <Button label="Yes, lets!" isRound={true} isExtraSmall={true} />
          <div style={{ padding: "10px" }} />
          <Button
            label="No thanks"
            isSecondStandard={true}
            isRound={true}
            isExtraSmall={true}
          />
        </Actions>
      </HeaderSection>
    </Aligner>
  );
}

PopCard.defaultProps = {
  title: "Pop Up Alert",
  message: "default",
  action: "Apply",
  exitProps: { nameProp: ["fal", "times"], colorProp: "dimgray" }
};

PopCard.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired
};

export default PopCard;
