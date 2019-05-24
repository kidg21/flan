import React, {useState} from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import CardBar from "elements/CardBar/CardBar";
import Card, {Piece} from "layout/Card/Card";
import Accordion from "blocks/Accordion";



function LayerCard({layer, legend, options, hasOptions}) {
  const [activeAccordion, setActiveAccordion] = useState('');
  return (
    <Accordion
    hasOptions={hasOptions}
    header={layer}
    visibility={activeAccordion === 'accordion1'}
    onClick={() => {
      if (activeAccordion === 'accordion1') {
        setActiveAccordion('');
      } else {
        setActiveAccordion('accordion1');
      }
      return false;
    }}
  >
    <Piece>
    {legend}
    </Piece>
    { hasOptions ? (<Piece>{options}</Piece>) : null}
  </Accordion>



    );
  }

  LayerCard.propTypes = {
    layer: PropTypes.any,
    legend: PropTypes.any,
    hasOptions: PropTypes.bool,
    options: PropTypes.any
  };
      export default LayerCard;
