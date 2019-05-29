import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';

const BoxContainer = styled.div`
  overflow: hidden;
  padding: 5px 5px 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .08);
  border-radius: 5px;
`

function Container() {
  return (
    <BoxContainer/>
  );
  }
export default Container;