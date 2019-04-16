// import React from "react";
// import styled, { css } from "styled-components";
// import Icon from "base/Icons";
// import propTypes from "prop-types";
// import Container from "atoms/Container";
// import IconBlock from "blocks/IconBlock";
// import Switch from "atoms/Switch";

// const HeaderSection = styled.div`
//   overflow: hidden;
//   background: white;
//   border-bottom: 0.25px solid #eaeded;
//   padding: 0.8em 1em 0.8em;
//   cursor: pointer;
//   line-height: normal;
//   justify-content: space-between;
//   display: flex;
// `;

// const LayerSection = styled.div`
//   overflow: hidden;
//   cursor: pointer;
//   justify-content: space-between;
//   display: flex;
// `;

// const Card = styled.div`
//   border-bottom: 0.25px solid #eaeded;
//   padding: 0.8em 1em 0.8em;
// `;

// const H4 = styled.h4`
//   margin: 0;
// `;

// const navProps = {
//   nameProp: ["far", "angle-right"],
//   colorProp: "dimgray"
// };

// const NavCard = ({ title, ...props }) => {
//   return (
//     <HeaderSection>
//       <H4>{title}</H4>
//       <Icon {...navProps} />
//     </HeaderSection>
//   );
// };

// function LayerCard({ title }) {
//   return (
//     <Card>
//       <LayerSection>
//         <Switch />
//         <h5 style={{ margin: 0, flex: "auto", paddingLeft: "1.5em" }}>
//           {title}
//         </h5>
//         <IconBlock />
//       </LayerSection>
//     </Card>
//   );
// }

// export { NavCard as default, LayerCard };
