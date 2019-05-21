import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";

// const Container = styled.div`
//   display: flex;
//   line-height: 2;
//   justify-content: flex-end;
//   padding-right: 0.2em;
//   padding-top: 5px;
// `;

/////Navigation consts
const HeaderLayout = styled.div`
  vertical-align: baseline;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  padding: 1.2em 0.3em 0.8em 0.2em;
  border-bottom: 0.25px solid #eaeded;
  box-shadow: 0 0 0px rgba(0, 0, 0, 0.08);
`;

const TitleContainer = styled.div`
  overflow-wrap: break-word;
  display: flex;
  justify-content: flex-start;
  // align-text: center;
  flex-wrap: wrap;
  // width: 12rem;
`;

const TwoPartContainer = styled(TitleContainer)`
padding-left: 0.5em;
`

const PropertyContainer = styled(TitleContainer)`
padding-left: 0.5em;
width: 12rem;
`

const H4 = styled.h4`
`

const Slot = styled.div`
`
const PropertySlot = styled.div`
display: flex;
`

function Header({ id, title, twoParts, threeParts, property }) {
  return (
      <HeaderLayout
        twoParts={twoParts}
        threeParts={threeParts}
        property={property}
        id={id}
      >
        <Slot>
          {twoParts ? (
            <TwoPartContainer>
              <H4>{title}</H4>
            </TwoPartContainer>
          ) : threeParts ? (
            <Icon icon={["far", "angle-left"]} />
          ) : property ? (
            <PropertySlot>
              <PropertyContainer>
                <H4>{title}</H4>
              </PropertyContainer>
              <Icon icon={["fal", "directions"]} size="lg" anchor />
            </PropertySlot>
          ) : null}
        </Slot>
        {twoParts ? (
          ""
        ) : threeParts ? (
          <TitleContainer>
            <H4>{title}</H4>
          </TitleContainer>
        ) : property ? (
          ""
        ) : null}
        <Icon icon={["far", "ellipsis-v"]} />
      </HeaderLayout>
  );
}


Header.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  twoParts: PropTypes.bool,
  threeParts: PropTypes.bool,
  property: PropTypes.bool
};

export default Header;
