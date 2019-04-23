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
  position: relative;
  display: flex;
  flex-direction: column;
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
          <h5
            style={{
              paddingTop: "1em",
              textAlign: "center"
            }}
          >
            {" "}
            {message}
          </h5>
        </Message>
        <Actions>
          <Button label={action} />
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
