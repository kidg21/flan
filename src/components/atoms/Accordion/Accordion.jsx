/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import Icon from "atoms/Icon";
import Expander from "utils/Expander";
import Text, { Title } from "base/Typography";

function AccordionHeader({ title, description }) {
  return (
    <React.Fragment>
      {title ? <Title text={title} /> : null}
      {description ? <Text text={description} /> : null}
    </React.Fragment>
  );
}

AccordionHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

AccordionHeader.defaultProps = {
  title: "",
  description: "",
};

function Accordion({
  children, header, id, onClick, open,
}) {
  let rotation;
  if (open) {
    rotation = 180;
  } else {
    rotation = 0;
  }

  const _header = (header.title || header.description) ? <AccordionHeader {...header} /> : header;

  return (
    <Expander
      id={id}
      onClick={onClick}
      open={open}
      header={
        _header ? (
          <Bar
            contentAlign="center"
            centerAlign="left"
            left={_header}
            rightWidth="max-content"
            right={children ? <Icon icon="up" rotation={rotation} /> : null}
          />
        ) : null}
    >
      {children}
    </Expander>
  );
}

Accordion.propTypes = {
  children: PropTypes.node,
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.shape(AccordionHeader.propTypes)]),
  id: PropTypes.string,
  onClick: PropTypes.func,
  open: PropTypes.bool,
};
Accordion.defaultProps = {
  children: null,
  header: null,
  id: null,
  onClick: null,
  open: false,
};

export default Accordion;
