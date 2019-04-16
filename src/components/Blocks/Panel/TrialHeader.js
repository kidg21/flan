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
  display: grid;
  padding: .8em .6em .25em .8em;
  border-bottom: 0.25px solid #EAEDED;
  grid-template-columns: ${
    props =>
      props.threeParts /*3 Inputs*/
        ? "10% 70% 20%"
        : props.twoParts /*2 Inputs*/
        ? "80% 20%"
        : "" /*default*/
  }; 
  grid-template-areas: ${
    props =>
      props.threeParts /*3 Inputs*/
        ? "left center right"
        : props.twoParts /*2 Inputs*/
        ? "left right"
        : "" /*default*/
  };
  box-shadow: 0 0 0px rgba(0, 0, 0, .08);
}
 `;

const NavLeft = styled.div`
  justify-content: flex-start;
  grid-template-area: left;
  display: flex;
  cursor: pointer;
`;

const CardTitle = styled.div`
  grid-template-area: center;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const NavRight = styled.div`
  grid-template-area: right;
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;

function Header({ title, ...props }) {
  return (
    <div>
      <Container>
        <Icon {...props.exitProps} />
      </Container>
      <HeaderLayout twoParts={props.twoParts} threeParts={props.threeParts}>
        <NavLeft>
          {props.twoParts ? (
            <h4>{title}</h4>
          ) : props.threeParts ? (
            <Icon {...props.navProps} />
          ) : null}
        </NavLeft>
        {props.twoParts ? (
          ""
        ) : props.threeParts ? (
          <CardTitle>
            <h4>{title}</h4>
          </CardTitle>
        ) : null}
        <NavRight>
          <Icon {...props.iconProps} />
        </NavRight>
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

// function LayerHeader({ title, layer, ...props }) {
//   return (
//     <div>
//       <Container>
//         <Icon {...props.exitProps} />
//       </Container>
//       <HeaderLayout>
//         <Left>
//           <h4 style={{ margin: 0 }}>{title}</h4>
//         </Left>
//         <Right>
//           <Icon {...props.iconProps} />
//         </Right>
//       </HeaderLayout>
//     </div>
//   );
// }

// function NavigationFilterHeader({ title, layer, ...props }) {
//   return (
//     <div>
//       <Container>
//         <Icon {...props.exitProps} />
//       </Container>
//       <NavHeaderLayout>
//         <NavLeft>
//           <Icon {...props.navProps} />
//         </NavLeft>
//         <DoubleCardTitle>
//           <div>
//             {" "}
//             <Layer> {layer} </Layer>
//           </div>
//           <div>
//             <h4>{title}</h4>
//           </div>
//         </DoubleCardTitle>
//         <NavRight>
//           <Icon {...props.iconProps} />
//         </NavRight>
//       </NavHeaderLayout>
//     </div>
//   );
// }

// function FilterHeader({ title, layer, ...props }) {
//   return (
//     <div>
//       <Container>
//         <Icon {...props.exitProps} />
//       </Container>
//       <HeaderLayout>
//         <Left>
//           <div>
//             {" "}
//             <Layer> {layer} </Layer>
//           </div>
//           <div>
//             <h4>{title}</h4>
//           </div>
//         </Left>

//         <Right>
//           <Icon {...props.iconProps} />
//         </Right>
//       </HeaderLayout>
//     </div>
//   );
// }

// function PropertyHeader({ street, city, ...props }) {
//   return (
//     <div>
//       <Container>
//         <Icon {...props.exitProps} />
//       </Container>
//       <HeaderLayout>
//         <Left>
//           <TopText>
//             <h4 style={{ margin: 0, lineHeight: 1 }}>{street}</h4>
//           </TopText>
//           <BottomText>
//             <h4 style={{ paddingRight: "10px" }}>{city}</h4>{" "}
//             <Icon {...props.directionsProps} />{" "}
//           </BottomText>
//         </Left>
//         <Right>
//           <Icon {...props.iconProps} />
//         </Right>
//       </HeaderLayout>
//     </div>
//   );
// }

// PropertyHeader.defaultProps = defaultProps;
// LayerHeader.defaultProps = defaultProps;
// FilterHeader.defaultProps = defaultProps;
// NavigationLayerHeader.defaultProps = defaultProps;
// NavigationFilterHeader.defaultProps = defaultProps;

// export {
//   LayerHeader as default,
//   FilterHeader,
//   PropertyHeader,
//   NavigationFilterHeader,
//   NavigationLayerHeader
// };
