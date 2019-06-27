import React, {useState} from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Card, {Piece} from "layout/Card/Card";
import Accordion from "blocks/Accordion";




function CardAccordion({id, header, body, options, hasOptions, initial}) {
  const [activeAccordion, setActiveAccordion] = useState(initial);
  return (
    <Accordion
    id={id}
    header={header}
    visibility={activeAccordion}
    onClick={() => {
      setActiveAccordion(!activeAccordion);}}
  >
    <Piece>
    {body}
    </Piece>
    { hasOptions ? (<Piece>{options}</Piece>) : null}
  </Accordion>
    );
  }

  CardAccordion.propTypes = {
    id: PropTypes.string,
    header: PropTypes.any,
    body: PropTypes.any,
    hasOptions: PropTypes.bool,
    options: PropTypes.any,
    initial: PropTypes.bool
  };
      export default CardAccordion;