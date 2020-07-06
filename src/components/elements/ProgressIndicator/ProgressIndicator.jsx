/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Text from "base/Typography";


const ProgressSection = styled(Grid)`
color: ${(props) => {
  return props.theme.text.primary;
}};
`;

const BarItem = styled.div`
  align-items: center;
  align-self: center;
  vertical-align: center;
  justify-content: center;
  display: flex;
  height: 5px;
  border-radius: ${(props) => {
    return props.borderRadius || "4px";
  }};
  align-items: baseline;
  background-color: ${(props) => { return props.theme.palette.selected; }};
`;

const Container = styled.div`
  display: flex;
  list-style: none;
  min-width: 10rem;
  counter-reset: step;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
  border-radius: ${(props) => {
    return props.borderRadius || "4px";
  }};
  background-color: ${(props) => { return props.theme.palette.neutral40; }};
`;



function ProgressIndicator({
  percentage, id,
}) {

  return (
      <ProgressSection columns = "1fr auto" align="center" >
        <Container>
        <BarItem id={id} style={{width: `${percentage}%`}} />
        </Container>
        <Text text={`${percentage}%`}/>
      </ProgressSection>
  );
}

ProgressIndicator.propTypes = {
  percentage: PropTypes.number,
  id: PropTypes.string,
};
ProgressIndicator.defaultProps = {
  percentage: 0,
  id: null,
};

export default ProgressIndicator;
