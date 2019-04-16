import React, { useState, Fragment } from "react";
import styled, { css } from "styled-components";
import Icon from "base/Icons";
import PropTypes from "prop-types";

const H4 = styled.h4`
  margin: 0;
`;

/////original accordion info section
const HeaderSection = styled.div`
  overflow: hidden;
  padding: 0.8em 1em 0.8em;
  cursor: pointer;
  line-height: normal;
  justify-content: space-between;
  display: flex;
`;

const infoSectionProps = {
  nameProp: ["far", "angle-up"],
  colorProp: "dimgray"
};

const infoOpenProps = {
  nameProp: ["far", "angle-down"],
  colorProp: "#60aad2"
};

const InfoCard = ({ title }) => {
  const [close, open] = useState(false);
  return (
    <HeaderSection
      onClick={() => {
        open(!close);
      }}
    >
      <H4 style={{ margin: 0 }}>{title}</H4>
      {close ? <Icon {...infoOpenProps} /> : <Icon {...infoSectionProps} />}
    </HeaderSection>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired
};

export default InfoCard;
