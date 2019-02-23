import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';


const CommandLine = styled.a`
  display: inline-block;
  margin: 20px 20px 0px 0px;
  font-size: 14px;
  font-family: muli;
  font-weight: bold;
  text-decoration: none;
  color: ${props => (props.primary ? 'forestgreen' : 'dodgerBlue')};
  cursor: pointer;
  transition: color .25s ease-in;

  &:hover {
    border-bottom: 1px solid dodgerBlue;
  }
`;





const propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  label: 'Command Label',
  disabled: false,
};

function Command() {
  return (
    <Command/>
  );
  }

Command.propTypes = propTypes;
Command.defaultProps = defaultProps;
export default CommandLine;