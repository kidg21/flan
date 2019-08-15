// import React from "react";
// import styled from "styled-components";
// import {
//   MultiGrid,
//   ScrollSync,
//   AutoSizer,
//   Grid,
//   CellMeasurer,
//   CellMeasurerCache,
// } from "react-virtualized";

// // import styles from './ScrollSync.example.css';
// import scrollbarSize from "dom-helpers/util/scrollbarSize";

// const ContentBox = styled.div``;

// const LEFT_COLOR_FROM = hexToRgb("#471061");
// const LEFT_COLOR_TO = hexToRgb("#BC3959");
// const TOP_COLOR_FROM = hexToRgb("#000000");
// const TOP_COLOR_TO = hexToRgb("#333333");

// export default class GridExample extends React.PureComponent {
//   constructor(props, context) {
//     super(props, context);

//     this.state = {
//       columnWidth: 75,
//       columnCount: 50,
//       height: 300,
//       overscanColumnCount: 0,
//       overscanRowCount: 5,
//       rowHeight: 40,
//       rowCount: 100,
//     };

//     this._renderBodyCell = this._renderBodyCell.bind(this);
//     this._renderHeaderCell = this._renderHeaderCell.bind(this);
//     this._renderLeftSideCell = this._renderLeftSideCell.bind(this);
//   }

//   render() {
//     const {
//       columnCount,
//       columnWidth,
//       height,
//       overscanColumnCount,
//       overscanRowCount,
//       rowHeight,
//       rowCount,
//     } = this.state;

//     return (
//       <ContentBox>
//         <ScrollSync>
//           {({
//             clientHeight,
//             clientWidth,
//             onScroll,
//             scrollHeight,
//             scrollLeft,
//             scrollTop,
//             scrollWidth,
//           }) => {
//             const x = scrollLeft / (scrollWidth - clientWidth);
//             const y = scrollTop / (scrollHeight - clientHeight);

//             return (
//               //   <div>
//               //     <div
//               //       style={{
//               //         position: "absolute",
//               //         left: 0,
//               //         top: 0,
//               //         color: leftColor,
//               //         backgroundColor: `rgb(${topBackgroundColor.r},${topBackgroundColor.g},${topBackgroundColor.b})`,
//               //       }}
//               //     >
//               //       <Grid
//               //         cellRenderer={this._renderLeftHeaderCell}
//               //         width={columnWidth}
//               //         height={rowHeight}
//               //         rowHeight={rowHeight}
//               //         columnWidth={columnWidth}
//               //         rowCount={1}
//               //         columnCount={1}
//               //       />
//               //     </div>
//               //     <div
//               //       style={{
//               //         position: "absolute",
//               //         left: 0,
//               //         top: rowHeight,
//               //         color: leftColor,
//               //         backgroundColor: `rgb(${leftBackgroundColor.r},${leftBackgroundColor.g},${leftBackgroundColor.b})`,
//               //       }}
//               //     >
//               //       <Grid
//               //         overscanColumnCount={overscanColumnCount}
//               //         overscanRowCount={overscanRowCount}
//               //         cellRenderer={this._renderLeftSideCell}
//               //         columnWidth={columnWidth}
//               //         columnCount={1}
//               //         className={styles.LeftSideGrid}
//               //         height={height - scrollbarSize()}
//               //         rowHeight={rowHeight}
//               //         rowCount={rowCount}
//               //         scrollTop={scrollTop}
//               //         width={columnWidth}
//               //       />
//               //     </div>
//               <div>
//                 <AutoSizer disableHeight>
//                   {({ width }) => (
//                     <div>
//                       <div
//                         style={{
//                           backgroundColor: `rgb(${topBackgroundColor.r},${topBackgroundColor.g},${topBackgroundColor.b})`,
//                           color: topColor,
//                           height: rowHeight,
//                           width: width - scrollbarSize(),
//                         }}
//                       >
//                         <Grid
//                           columnWidth={columnWidth}
//                           columnCount={columnCount}
//                           height={rowHeight}
//                           overscanColumnCount={overscanColumnCount}
//                           cellRenderer={this._renderHeaderCell}
//                           rowHeight={rowHeight}
//                           rowCount={1}
//                           scrollLeft={scrollLeft}
//                           width={width - scrollbarSize()}
//                         />
//                       </div>
//                       <div
//                         style={{
//                           backgroundColor: `rgb(${middleBackgroundColor.r},${middleBackgroundColor.g},${middleBackgroundColor.b})`,
//                           color: middleColor,
//                           height,
//                           width,
//                         }}
//                       >
//                         <Grid
//                           columnWidth={columnWidth}
//                           columnCount={columnCount}
//                           height={height}
//                           onScroll={onScroll}
//                           overscanColumnCount={overscanColumnCount}
//                           overscanRowCount={overscanRowCount}
//                           cellRenderer={this._renderBodyCell}
//                           rowHeight={rowHeight}
//                           rowCount={rowCount}
//                           width={width}
//                         />
//                       </div>
//                     </div>
//                   )}
//                 </AutoSizer>
//               </div>
//             );
//           }}
//         </ScrollSync>
//       </ContentBox>
//     );
//   }
// }
