import React, {useState} from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar";
import Card, { Piece } from "layout/Card"

import Switch from "atoms/Switch"




function NavigationCardBar({ id, title, disabled, onClick }) {
  return (
      <Piece
      id={id}
      title={title}
      disabled={disabled}> 
            <Bar type='two' left={title} right={<Icon icon={["fal", "chevron-right"]}/>} onClick={onClick} />
        </Piece>
    );
  }
      NavigationCardBar.propTypes = {
          id: PropTypes.string,
          title: PropTypes.any.isRequired,
          disabled: PropTypes.bool,
          onClick: PropTypes.func
        };
      export default NavigationCardBar;
