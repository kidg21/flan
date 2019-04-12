import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon from "base/Icons";

const HeaderSection = styled.div`
  overflow: hidden;
  padding: 0.8em 1em 0.8em;
  cursor: pointer;
  line-height: normal;
  justify-content: space-between;
  display: flex;
`;

const H4 = styled.h5`
  margin: 0;
`;

const infoSectionProps = {
  nameProp: ["far", "angle-up"],
  colorProp: "dimgray"
};

const infoOpenProps = {
  nameProp: ["far", "angle-down"],
  colorProp: "#60aad2"
};

const AccordionSection = styled.div`
  line-height: normal;
  background: white;
  cursor: pointer;
`;

const Container = styled.div`
  overflow: hidden;
  padding: 10px 5px 20px 10px;
  background: #f5f7f9;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
`;

const GroupTitle = styled.div`
  display: flex;
  margin: 0;
  line-height: normal;
`;

const LayerGroup = ({ title, number, children, onToggle }) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <Container>
      <Fragment>
        <AccordionSection
          onClick={() => {
            setVisibility(!visibility);
            if (onToggle) onToggle(!visibility);
          }}
        >
          <HeaderSection>
            <GroupTitle>
              <H4> {title} </H4>{" "}
              <span style={{ paddingLeft: "5px", paddingRight: "5px" }}>|</span>
              <H4 style={{ color: "#75ab3f" }}> {number} </H4>
            </GroupTitle>
            {visibility ? (
              <Icon {...infoOpenProps} />
            ) : (
              <Icon {...infoSectionProps} />
            )}
          </HeaderSection>
        </AccordionSection>
        {visibility ? <Fragment>{children}</Fragment> : null}
      </Fragment>
    </Container>
  );
};

LayerGroup.propTypes = {
  children: PropTypes.any.isRequired,
  onToggle: PropTypes.func,
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};

export default LayerGroup;
