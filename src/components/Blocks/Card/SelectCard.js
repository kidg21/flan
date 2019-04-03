import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Container from '../../atoms/Container/Container';
import Label from  '../../atoms/Label/Label';
import IconGroup from '../../atoms/Icon/IconGroup';
import Icon from '../../atoms/Icon/Icon';
import Checkbox from '../../atoms/Checkbox/Checkbox';


const HeaderSection = styled.div`
overflow: hidden;
border-bottom: 0.25px solid #EAEDED;
padding: .8em 1em .8em;
cursor: pointer;
justify-content: space-between;
display: flex;
`


const SelectBox = {
    id: "cbox_1",
    label: "Selection Card"
  };


function SelectCard() {
    return (
        <HeaderSection>
          <Checkbox {...SelectBox}/>
        </HeaderSection>
    )
  }


export default SelectCard;