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

function Header({ title, ...props }) {
  return (
    <div>
      {/* <Container>
        <Icon icon={["fal", "times"]} style={{ filter: "brightness(200%)" }} />
      </Container> */}
      <HeaderLayout
        twoParts={props.twoParts}
        threeParts={props.threeParts}
        property={props.property}
      >
        <div>
          {props.twoParts ? (
            <TitleContainer style={{ paddingLeft: "0.5em" }}>
              <h4>{title}</h4>
            </TitleContainer>
          ) : props.threeParts ? (
            <Icon icon={["far", "angle-left"]} />
          ) : props.property ? (
            <div style={{ display: "flex" }}>
              <TitleContainer style={{ paddingLeft: "0.5em", width: "12rem" }}>
                <h4>{title}</h4>
              </TitleContainer>
              <Icon icon={["fal", "directions"]} size="lg" anchor />
            </div>
          ) : null}
        </div>
        {props.twoParts ? (
          ""
        ) : props.threeParts ? (
          <TitleContainer>
            <h4>{title}</h4>
          </TitleContainer>
        ) : props.property ? (
          ""
        ) : null}
        <Icon icon={["far", "ellipsis-v"]} />
      </HeaderLayout>
    </div>
  );
}

Header.defaultProps = {
  title: "Panel Header",
  twoParts: false,
  threeParts: false,
  property: false
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  twoParts: PropTypes.bool,
  threeParts: PropTypes.bool,
  property: PropTypes.bool
};

export default Header;
