import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "base/Icons";

const Container = styled.div`
  display: flex;
  line-height: 2;
  justify-content: flex-end;
  padding-right: 0.7em;
  padding-top: 5px;
`;

/////Navigation consts
const HeaderLayout = styled.div`
  align-items: flex;
  font-size: 20px;
  display: flex;
  justify-content: space-between; 
  padding: .8em .6em .25em .8em;
  border-bottom: 0.25px solid #EAEDED;
  box-shadow: 0 0 0px rgba(0, 0, 0, .08);
}
 `;

const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Header({ title, ...props }) {
  return (
    <div>
      <Container>
        <Icon {...props.exitProps} />
      </Container>
      <HeaderLayout twoParts={props.twoParts} threeParts={props.threeParts}>
        <div>
          {props.twoParts ? (
            <TitleContainer>
              <h4>{title}</h4>
            </TitleContainer>
          ) : props.threeParts ? (
            <Icon {...props.navProps} />
          ) : null}
        </div>
        {props.twoParts ? (
          ""
        ) : props.threeParts ? (
          <TitleContainer>
            <div>
              <h4>{title}</h4>
            </div>
          </TitleContainer>
        ) : null}
        <div>
          <Icon {...props.iconProps} />
        </div>
      </HeaderLayout>
    </div>
  );
}

Header.defaultProps = {
  title: "Information Header",
  twoParts: false,
  threeParts: false,
  navProps: { nameProp: ["far", "angle-left"], colorProp: "dimgray" },
  iconProps: { nameProp: ["far", "ellipsis-v"], colorProp: "dimgray" },
  exitProps: { nameProp: ["fal", "times"], colorProp: "dimgray" },
  directionsProps: { nameProp: ["fal", "directions"], colorProp: "#60aad2" }
};

Header.PropTypes = {
  title: PropTypes.string.isRequired,
  twoParts: PropTypes.bool,
  threeParts: PropTypes.bool
};

export default Header;
