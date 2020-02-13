/* eslint-disable linebreak-style */
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import Icon from "atoms/Icon";
import Expander from "utils/Expander";
import Text, {Title} from "base/Typography";


function Accordion({
    children, text, id,  onClick, open, title,
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
          title || text ? (
            <Bar
              contentAlign="center"
              centerAlign="left"
              left={
                <React.Fragment>
                  {title ? <Title text={title} /> : null}
                  {text ? <Text text={text} /> : null}
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
    text: PropTypes.string,
    icon: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    open: PropTypes.bool,
    title: PropTypes.string,
  };
  Accordion.defaultProps = {
    children: null,
    text: null,
    icon: null,
    id: null,
    label: null,
    onClick: null,
    open: false,
    title: null,
  };

  export default Accordion;