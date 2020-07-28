/* eslint-disable linebreak-style */
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Bar from "layout/Bar";
import Icon from "atoms/Icon";
import Avatar from "atoms/Avatar";
import Expander from "utils/Expander";
import Text, { Title } from "base/Typography";


function Accordion({
  children, description, id, title,
}) {

 

  const [open, setOpen] = useState(null);
  function toggleDropdown() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  let rotation;
  let iconContent;

  if (open) {
    rotation = 180;
    iconContent = "minus";
  } else {
    rotation = 0;
    iconContent = "plus";
  }

  return (
    <Expander
      id={id}
      onClick={(e) => {
        toggleDropdown(e);
      }}
      open={open}
      header={
        title || description ? (
          <Bar
            padding="1x"
            contentAlign="center"
            left={{
              content: (
                <React.Fragment>
                  {title ? <Title text={title} /> : null}
                  {description ? <Text text={description} /> : null}
                </React.Fragment>
              ),
              align: "left",
            }}
            right={children ? {
              content: <Icon icon={iconContent} rotation={rotation} />,
              width: "max-content",
            } : null}
          />
        ) : null
      }
    >
      {children}
    </Expander>
  );
}

Accordion.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};
Accordion.defaultProps = {
  children: null,
  description: null,
  id: null,
  title: null,
};

export default Accordion;
