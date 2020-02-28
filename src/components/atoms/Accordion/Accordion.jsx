/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import Icon from "atoms/Icon";
import Expander from "utils/Expander";
import Text, { Title } from "base/Typography";


function Accordion({
  children, description, id, onClick, open, title,
}) {
  let rotation;
  if (open) {
    rotation = 180;
  } else {
    rotation = 0;
  }
  return (
    <Expander
      id={id}
      onClick={onClick}
      open={open}
      header={
          title || description ? (
            <Bar
              contentAlign="center"
              centerAlign="left"
              left={
                <React.Fragment>
                  {title ? <Title text={title} /> : null}
                  {description ? <Text text={description} /> : null}
                </React.Fragment>
              }
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
  description: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
};
Accordion.defaultProps = {
  children: null,
  description: null,
  id: null,
  onClick: null,
  open: false,
  title: null,
};

export default Accordion;
