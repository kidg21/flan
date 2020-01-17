// /* eslint-disable indent */
// /* eslint-disable react/jsx-indent */
// /* eslint-disable react/jsx-indent-props */
// /* eslint-disable linebreak-style */
// /* eslint-disable security/detect-object-injection */
// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
// import Bar from "blocks/Bar";
// import Panel from "layout/Panel";
// import TextInput from "atoms/TextInput";
// import Icon from "atoms/Icon";
// import Title from "base/Typography";
// import Button from "atoms/Button";
// import Grid from "layout/Grid";
// import Sidebar from "./Sidebar.jsx";
// import IconBlock from "blocks/IconBlock";
// import Parent from "./ParentWrapper.jsx";
// import Header from "./Header.jsx";
// import Rightbar from "./Rightbar.jsx";
// import LayoutWrapper from "./LayoutWrapper.jsx";

// const Exit = styled(Icon)`
// align-self: right;
// float: right;
// padding: 1em;
// z-index: 100;
// `;

// function StaticLayout({
//     leftContent,
//     rightContent,
//     mainContent,
// }) {
//     const [rightVisible, setRightVisible] = useState(false);
//     function seeRightbar() {
//         setRightVisible(!rightVisible);
//     }
//     return (
//         <Parent >
//             <Sidebar visible ><Panel> {leftContent} </Panel> </Sidebar>
//             <LayoutWrapper>
//                 <Panel>
//                     <Header
//                         right={
//                             <Icon
//                                 icon="settings"
//                                 onClick={seeRightbar}
//                             />}
//                     />
//                     {mainContent}
//                 </Panel>
//             </LayoutWrapper>
//             {rightVisible ?
//                 (
//                     <Rightbar visible={rightVisible} >
//                         <Panel>
//                             <Exit icon="close" onClick={seeRightbar} />
//                             {rightContent}
//                         </Panel>
//                     </Rightbar>) : null
//             }
//         </Parent >
//     );
// }

// StaticLayout.propTypes = {
//     leftContent: PropTypes.node,
//     rightContent: PropTypes.node,
//     mainContent: PropTypes.node,


// };

// StaticLayout.defaultProps = {
//     leftContent: null,
//     rightContent: null,
//     mainContent: null,


// };


// export default StaticLayout;
