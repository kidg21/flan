import React from "react";
import styled, { css } from "styled-components";
import propTypes from "prop-types";
import Container from "atoms/Container";
import IconBlock from "blocks/IconBlock";
import Switch from "atoms/Switch";

const HeaderSection = styled.div`
  overflow: hidden;
  cursor: pointer;
  justify-content: space-between;
  display: flex;
`;

const Card = styled.div`
  border-bottom: 0.25px solid #eaeded;
  padding: 0.8em 1em 0.8em;
`;

function LayerCard({ title }) {
  return (
    <Card>
      <HeaderSection>
        <Switch />
        <h5 style={{ margin: 0, flex: "auto", paddingLeft: "1.5em" }}>
          {title}
        </h5>
        <IconBlock />
      </HeaderSection>
    </Card>
  );
}

export default LayerCard;
