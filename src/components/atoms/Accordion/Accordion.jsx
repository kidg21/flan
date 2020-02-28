/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import Icon from "atoms/Icon";
import Expander from "utils/Expander";
import Text, { Title } from "base/Typography";


function Accordion({
  children, description, id, onClick, open, title, hideIcon, header
}) {
  let rotation;
  if (open) {
    rotation = 180;
  } else {
    rotation = 0;
  }

  let _header = null;
  if (header) {
    _header = header;
  } else if (title || description) {
    _header = (
      <React.Fragment>
        {title ? <Title text={title} /> : null}
        {description ? <Text text={description} /> : null}
      </React.Fragment>
    );
  }

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
            right={!hideIcon ? <Icon icon="up" rotation={rotation} /> : null}
          />
        ) : null}
    >
      {children}
    </Expander>
  );
}

Accordion.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  header: PropTypes.node,
  hideIcon: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
};
Accordion.defaultProps = {
  children: null,
  description: null,
  header: null,
  hideIcon: false,
  id: null,
  onClick: null,
  open: false,
  title: null,
};

export default Accordion;
