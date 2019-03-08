import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from '../../atoms/Icon/Icon';



const openProps = {
  nameProp: ["fal", "times"],
  colorProp: "red",
};


const closedProps = {
  nameProp: ["fal", "times"],
  colorProp: "blue",
};

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div
        style={{
          background: isOpen ? 'white' : 'white',
          border: '0.25px solid #EAEDED',
          padding: '15px 10px 15px',
          transition: '1s ease-in', 
        }}
      >
        <div onClick={onClick} style={{ cursor: 'pointer'}}>
          {label}
          <div style={{ float: 'right' }}>
            {!isOpen && <Icon {...openProps}/>}
            {isOpen && <Icon {...closedProps}/>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: 'white',
              marginTop: 10,
              transition: '1s ease-in', 
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;