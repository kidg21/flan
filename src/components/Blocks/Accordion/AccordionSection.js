import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from '../../atoms/Icon/Icon';




const openProps = {
  nameProp: ["fal", "times"],
  colorProp: "dimgray",
};


const closedProps = {
  nameProp: ["fal", "times"],
  colorProp: "blue",
};

class CardHeaderPanel extends Component {
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
          fontFamily: 'arial',
          overflow: 'hidden',
          borderBottom: '0.25px solid #EAEDED',
          padding: '.8em 10px .8em',
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
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default CardHeaderPanel;