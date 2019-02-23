import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';

const Container = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 30%;
  box-shadow: 0 0 20px rgba(0, 0, 0, .08);
  border-radius: 5px;
`

function BoxContainer() {
  return (
    <BoxContainer/>
  );
  }

BoxContainer.propTypes = propTypes;
export default Container;