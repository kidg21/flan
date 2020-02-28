/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import Icon from "atoms/Icon";
import Expander from "utils/Expander";
import Text, { Title } from "base/Typography";


function Accordion({
  children, description, id, onClick, open, title, icon, disableIcon, header
}) {
  let rotation;
  if (open) {
    rotation = 180;
  } else {
    rotation = 0;
  }

  let _icon = <Icon icon="up" rotation={rotation} />;
  if (icon) {
    _icon = icon;
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
            right={!disableIcon ? _icon : null}
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
