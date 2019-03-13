import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from '../../atoms/Icon/Icon';
import CardHeader from '../Card/CardHeader';




const AccordionSection = styled.div`
font-family: arial;
overflow: hidden;
border-bottom: 0.25px solid #EAEDED;
padding: .8em 10px .8em;
cursor: pointer;
`

// const commandProps = {
//   nameProp: ["fal", "times"],
//   colorProp: "dimgray",
// };

const openProps = {
  nameProp: ["far", "angle-up"],
  colorProp: "dimgray",
};


const closedProps = {
  nameProp: ["far", "angle-down"],
  colorProp: "dimgray",
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
      <AccordionSection>
        <div onClick={onClick}>   
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
      </AccordionSection>
    );
  }
}

export default CardHeaderPanel;