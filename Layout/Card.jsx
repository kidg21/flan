import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  width: 100%;
  height: auto;
  overflow: hidden;
  color: #605c57;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: #4b4844 0rem 0rem 1px, rgba(75, 72, 68, 0.333333) 0.25rem 0.25rem 0.5rem;
  z-index: 1;
  transition: all .3s ease;
`;

class Card extends PureComponent {
  render() {
    const { children, ...cardProps } = this.props;

    return (
      <CardStyle {...cardProps}>
        {children}
      </CardStyle>
    );
  }
}

export default Card;
