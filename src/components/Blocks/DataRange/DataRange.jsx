import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, shadows } from "Variables";
import { InputLabel } from "layout/Form";
import SelectMenu from "atoms/SelectMenu";

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  width: 100%;
  align-content: flex-start;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 2fr) minmax(auto, auto) minmax(auto, 2fr);
  grid-gap: 1rem;
  align-items: center;
`;

const Dash = styled.h1`
  color: ${colors.grey_60};
  margin: auto;
  ::before {
    content: "-";
    vertical-align: sub;
    vertical-align: -webkit-baseline-middle;
  }
`;

function DataRange({ id, label, labelMin, optionsMin, labelMax, optionsMax }) {
  return (
    <Container id={id}>
      <InputLabel inputLabel={label} />
      <InputContainer>
        <SelectMenu inputLabel={labelMin} options={optionsMin} />
        <Dash />
        <SelectMenu inputLabel={labelMax} options={optionsMax} />
      </InputContainer>
    </Container>
  );
}

DataRange.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  labelMin: PropTypes.string,
  optionsMin: PropTypes.any,
  labelMax: PropTypes.string,
  optionsMax: PropTypes.any
};

export default DataRange;
