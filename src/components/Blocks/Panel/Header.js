import React from "react";
import styled, { css } from "styled-components";
import propTypes from "prop-types";
import Icon from "base/Icons";
import Results from "../../atoms/Label/Results";

const Container = styled.div`
  display: flex;
  line-height: 2;
  justify-content: flex-end;
  padding-right: 0.7em;
  padding-top: 5px;
`;

/////Navigation consts
const NavHeaderLayout = styled.div`
  align-items: flex-end;
  font-size: 20px;
  display: grid;
  padding: .25em .6em .8em .8em;
  border-bottom: 0.25px solid #EAEDED;
  grid-template-columns: 10% 70% 20%;

  grid-template-rows: 2rem;
  grid-template-areas: "left center right";
  box-shadow: 0 0 0px rgba(0, 0, 0, .08);
}
 `;

const NavLeft = styled.div`
  justify-content: flex-start;
  grid-area: left;
  display: flex;
  cursor: pointer;
`;

const NavCardTitle = styled.div`
  justify-content: left;
  align-self: text-bottom;
  grid-area: center;
  display: inline;
`;

const NavRight = styled.div`
  justify-content: flex-end;
  line-height: normal;
  vertial-align: bottom;
  grid-area: right;
  display: flex;
  cursor: pointer;
`;

/////Normal consts

const HeaderLayout = styled.div`
  align-items: flex-end;
  font-size: 20px;
  display: grid;
  padding: .25em .6em .8em .8em;
  border-bottom: 0.25px solid #EAEDED;
  grid-template-columns: 80% 20%;

  grid-template-rows: 2rem;
  grid-template-areas: "left right";
  box-shadow: 0 0 0px rgba(0, 0, 0, .08);
}
 `;

const Left = styled.div`
  justify-content: left;
  align-self: center;
  grid-area: left;
  display: inline;
`;

const Right = styled.div`
  justify-content: flex-end;
  line-height: normal;
  vertial-align: bottom;
  grid-area: right;
  display: flex;
  cursor: pointer;
`;

const DoubleCardTitle = styled.div`
  justify-content: left;
  align-self: center;
  grid-area: center;
  display: inline;
`;

const Layer = styled.a`
  font-size: 12px;
  font-weight: bold;
`;

const TopText = styled.div``;

const BottomText = styled.div`
  display: flex;
`;

const defaultProps = {
  navProps: { nameProp: ["far", "angle-left"], colorProp: "dimgray" },
  iconProps: { nameProp: ["far", "ellipsis-v"], colorProp: "dimgray" },
  exitProps: { nameProp: ["fal", "times"], colorProp: "dimgray" },
  directionsProps: { nameProp: ["fal", "directions"], colorProp: "#60aad2" }
};

function NavigationLayerHeader({ title, layer, ...props }) {
  return (
    <div>
      <Container>
        <Icon {...props.exitProps} />
      </Container>
      <NavHeaderLayout>
        <NavLeft>
          <Icon {...props.navProps} />
        </NavLeft>
        <NavCardTitle>
          <h4 style={{ margin: 0 }}>{title}</h4>
        </NavCardTitle>
        <NavRight>
          <Icon {...props.iconProps} />
        </NavRight>
      </NavHeaderLayout>
    </div>
  );
}

function LayerHeader({ title, layer, ...props }) {
  return (
    <div>
      <Container>
        <Icon {...props.exitProps} />
      </Container>
      <HeaderLayout>
        <Left>
          <h4 style={{ margin: 0 }}>{title}</h4>
        </Left>
        <Right>
          <Icon {...props.iconProps} />
        </Right>
      </HeaderLayout>
    </div>
  );
}

function NavigationFilterHeader({ title, layer, ...props }) {
  return (
    <div>
      <Container>
        <Icon {...props.exitProps} />
      </Container>
      <NavHeaderLayout>
        <NavLeft>
          <Icon {...props.navProps} />
        </NavLeft>
        <DoubleCardTitle>
          <div>
            {" "}
            <Layer> {layer} </Layer>
          </div>
          <div>
            <h4>{title}</h4>
          </div>
        </DoubleCardTitle>
        <NavRight>
          <Icon {...props.iconProps} />
        </NavRight>
      </NavHeaderLayout>
    </div>
  );
}

function FilterHeader({ title, layer, ...props }) {
  return (
    <div>
      <Container>
        <Icon {...props.exitProps} />
      </Container>
      <HeaderLayout>
        <Left>
          <div>
            {" "}
            <Layer> {layer} </Layer>
          </div>
          <div>
            <h4>{title}</h4>
          </div>
        </Left>

        <Right>
          <Icon {...props.iconProps} />
        </Right>
      </HeaderLayout>
    </div>
  );
}

function PropertyHeader({ street, city, ...props }) {
  return (
    <div>
      <Container>
        <Icon {...props.exitProps} />
      </Container>
      <HeaderLayout>
        <Left>
          <TopText>
            <h4 style={{ margin: 0, lineHeight: 1 }}>{street}</h4>
          </TopText>
          <BottomText>
            <h4 style={{ paddingRight: "10px" }}>{city}</h4>{" "}
            <Icon {...props.directionsProps} />{" "}
          </BottomText>
        </Left>
        <Right>
          <Icon {...props.iconProps} />
        </Right>
      </HeaderLayout>
    </div>
  );
}

PropertyHeader.defaultProps = defaultProps;
LayerHeader.defaultProps = defaultProps;
FilterHeader.defaultProps = defaultProps;
NavigationLayerHeader.defaultProps = defaultProps;
NavigationFilterHeader.defaultProps = defaultProps;

export {
  LayerHeader as default,
  FilterHeader,
  PropertyHeader,
  NavigationFilterHeader,
  NavigationLayerHeader
};
