import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';


const Hello = () => {
  const [isOpen, toggleIsOpen] = React.useState(false);
  return (
    <div>
      <button onClick={(prevValue) => toggleIsOpen(!prevValue)}>click me</button>
      {isOpen ? <p>I'm open!</p> : <p>I'm closed!</p>}
    </div>
  );
};

export default Hello;