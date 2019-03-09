import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardHeaderPanel from './AccordionSection';

class Accordion extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);
    const openSections = {};
    this.state = { openSections };
  }

  onClick = label => {
    const {
      state: { openSections },
    } = this;

    const isOpen = !!openSections[label];

    this.setState({
      openSections: {
        [label]: !isOpen
      }
    });
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <div 
      style={{
        boxShadow: '0 0 20px rgba(0, 0, 0, .08)',
        borderRadius: '5px',
      }}
      >
        {children.map(child => (
          <CardHeaderPanel
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </CardHeaderPanel>
        ))}
      </div>
    );
  }
}

export default Accordion;