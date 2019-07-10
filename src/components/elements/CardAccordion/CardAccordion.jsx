import React, { useState } from "react";
import PropTypes from "prop-types";
import { Piece } from "layout/Card";
import Accordion from "blocks/Accordion";

function CardAccordion({
  id,
  header,
  children,
  options,
  hasOptions,
  initial,
}) {
  const [activeAccordion, setActiveAccordion] = useState(initial);
  return (
    <Accordion
      id={id}
      header={header}
      visibility={activeAccordion}
      onClick={() => {
        setActiveAccordion(!activeAccordion);
      }}
    >
      <Piece>{children}</Piece>
      {hasOptions ? (<Piece>{options}</Piece>) : null}
    </Accordion>
  );
}

CardAccordion.defaultProps = {
  children: null,
  hasOptions: false,
  header: null,
  id: "",
  initial: false,
  options: null,
};

CardAccordion.propTypes = {
  children: PropTypes.node,
  hasOptions: PropTypes.bool,
  header: PropTypes.node,
  id: PropTypes.string,
  initial: PropTypes.bool,
  options: PropTypes.node,
};

export default CardAccordion;
