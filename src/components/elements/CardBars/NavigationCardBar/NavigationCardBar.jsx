import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card";
import Title from "base/Typography";


import Switch from "atoms/Switch";


{/* <Title title="Count Title" number="4" /> */}


function NavigationCardBar({ id, title, number, disabled, onClick }) {
  return (
    <Piece id={id} title={title} number={number} disabled={disabled}>
      <Bar
        left= {<Title title={title} number={number} />} 
        right={<Icon icon={["far", "angle-right"]} />}
        onClick={onClick}
      />
    </Piece>
  );
}

NavigationCardBar.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  number: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default NavigationCardBar;
