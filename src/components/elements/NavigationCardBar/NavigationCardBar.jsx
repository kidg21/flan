import React, {useState} from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar/Bar";
import Card, { Piece } from "layout/Card"

import Switch from "atoms/Switch"




function NavigationCardBar({ id, title, disabled }) {
  return (
      <Piece
      id={id}
      title={title}
      disabled={disabled}> 
            <Bar type='two' firstSlot={title} secondSlot={<Icon icon={["fal", "chevron-right"]}/>}/>
        </Piece>
    );
  }
      NavigationCardBar.propTypes = {
          id: PropTypes.string,
          title: PropTypes.any.isRequired,
          disabled: PropTypes.bool
        };
      export default NavigationCardBar;
