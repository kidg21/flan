/* eslint-disable linebreak-style */
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Bar from "layout/Bar";
import Icon from "atoms/Icon";
import Expander from "utils/Expander";
import Text, { Title } from "base/Typography";

const ContentWrapper = styled.section`
padding-top: 1rem;
`;

function Accordion({
  children, description, id, onClick, open, title, header,
}) {
  let expanded = open;
  let setExpanded = onClick;
  if (!setExpanded) [expanded, setExpanded] = useState(open);
  function toggleDropdown() {
    setExpanded(!expanded);
  }

  let iconContent;

  if (expanded) {
    iconContent = "minus";
  } else {
    iconContent = "plus";
  }

  return (
    <Expander
      id={id}
      onClick={(e) => {
        toggleDropdown(e);
      }}
      open={expanded}
      header={(
        <Bar
          padding="0"
          contentAlign="center"
          left={{
            content: (
              header
              || (
                <React.Fragment>
                  {title ? <Title text={title} /> : null}
                  {description ? <Text text={description} /> : null}
                </React.Fragment>
              )
            ),
            align: "left",
          }}
          right={children ? {
            content: <Icon icon={iconContent} size="sm" />,
            width: "max-content",
          } : null}
        />
      )}
    >
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Expander>
  );
}

Accordion.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  header: PropTypes.node,
  id: PropTypes.string,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
};
Accordion.defaultProps = {
  children: null,
  description: null,
  header: null,
  id: null,
  onClick: null,
  open: false,
  title: null,
};

export default Accordion;
