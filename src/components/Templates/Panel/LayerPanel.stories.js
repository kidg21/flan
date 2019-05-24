// import React, { useState } from "react";
// import { storiesOf } from "@storybook/react";
// import PanelHeader from "elements/PanelHeader/PanelHeader";
// import LayerCard from "elements/LayerCard";
// import CardBar from "elements/CardBar";
// import MapLegend from "blocks/MapLegend";
// import Panel, { PanelSection } from "layout/Panel";

// storiesOf("Templates|Panel", module).add("Layer Panel", () =>
//   React.createElement(() => {
//     const [checked, setChecked] = useState(false);
//     const [checked2, setChecked2] = useState(false);
//     const [checked3, setChecked3] = useState(false);
//     const [checked4, setChecked4] = useState(false);
//     const [checked5, setChecked5] = useState(false);
//     return (
//       <Panel>
//         <PanelSection>
//           <PanelHeader main="true" title="Main Header" />
//         </PanelSection>
//         <PanelSection body>
//           <LayerCard
//             layer={
//               <CardBar
//                 layer="true"
//                 title="Demographics"
//                 switchProps={{
//                   checked: checked,
//                   onChange: () => {
//                     setChecked(!checked);
//                   }
//                 }}
//               />
//             }
//             legend={<MapLegend />}
//           />
//           <LayerCard
//             layer={
//               <CardBar
//                 layer="true"
//                 title="Qualified Opportunities"
//                 switchProps={{
//                   checked: checked2,
//                   onChange: () => {
//                     setChecked2(!checked2);
//                   }
//                 }}
//               />
//             }
//             legend={<MapLegend />}
//           />
//           <LayerCard
//             layer={
//               <CardBar
//                 layer="true"
//                 title="Parcels"
//                 switchProps={{
//                   checked: checked3,
//                   onChange: () => {
//                     setChecked3(!checked3);
//                   }
//                 }}
//               />
//             }
//             legend={<MapLegend />}
//           />
//           <LayerCard
//             layer={
//               <CardBar
//                 layer="true"
//                 title="Major Brands"
//                 switchProps={{
//                   checked: checked4,
//                   onChange: () => {
//                     setChecked4(!checked4);
//                   }
//                 }}
//               />
//             }
//             legend={<MapLegend />}
//           />
//           <LayerCard
//             layer={
//               <CardBar
//                 layer="true"
//                 title="DFIRM"
//                 switchProps={{
//                   checked: checked5,
//                   onChange: () => {
//                     setChecked5(!checked5);
//                   }
//                 }}
//               />
//             }
//             legend={<MapLegend />}
//           />
//         </PanelSection>
//       </Panel>
//     );
//   })
// );
