import React, {useState} from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import IconBlock from "blocks/IconBlock";
import Bar from "blocks/Bar/Bar";
import Card, { Piece } from "layout/Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Arrow = styled(FontAwesomeIcon)`
  transform: ${props => (props.leftOnscreen ? 'rotate(180deg)' :  'rotate(0deg)')};
`;



function InformationCardBar({ id, title, onClick}) {
  const [leftOnscreen, setLeftOnscreen] = useState(false)
  function toggleLeft() {
    setLeftOnscreen(!leftOnscreen)};

  // const toggleBar = event => {setState(event.state)};
  return (
      <Piece
      id={id}
      title={title} >
            <Bar 
            onClick={toggleLeft}
            type='two' left={title} right={<Arrow leftOnscreen={leftOnscreen} icon={["far", "angle-up"]}/> } />
        </Piece>
    );
  }
      InformationCardBar.propTypes = {
          id: PropTypes.string,
          title: PropTypes.any.isRequired,
          disabled: PropTypes.bool,
        };
      export default InformationCardBar;
