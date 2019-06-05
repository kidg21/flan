import React, {useState} from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar/Bar";
import Card, { Piece } from "layout/Card"



function InformationCardBar({ id, title, disabled }) {
  return (
      <Piece
      id={id}
      title={title}
      disabled={disabled}> 
            <Bar type='two' firstSlot={title} secondSlot={<Icon icon={["far", "angle-up"]}/>}/>
        </Piece>
    );
  }
      InformationCardBar.propTypes = {
          id: PropTypes.string,
          title: PropTypes.any.isRequired,
          disabled: PropTypes.bool
        };
      export default InformationCardBar;
