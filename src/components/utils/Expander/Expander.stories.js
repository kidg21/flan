/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
// import React, { useState } from "react";
// 
// import Expander from "./Expander";
// 
// import { Padding } from "helpers/Display";
// import Table from "blocks/Table";
// import Title from "base/Typography";
// import Card from "elements/Card";

// const data = [
//   { id: "a", color: "Owners/Units", name: "Multiple Owners (2 Units)" },
//   { id: "b", color: "Master Parcel No.", name: "387483675638" },
//   { id: "c", color: "Zoning", name: "No Zone" },
// ];

// storiesOf("Utils|Expander", module)
//   .addDecorator(Padding)
//   .addDecorator(withInfo)
//   .add("Default ", () => {
//     return React.createElement(() => {
//       return (
//         <Card title="Title" description="Card Description" icon="settings">
//           <Expander header={<Title text="Expanding Title" />}>
//             <Table data={data} />
//           </Expander>
//         </Card>
//       );
//     });
//   });

// .add("Layer ", () => {
//   return React.createElement(() => {
//     const [switchChecked, setSwitchChecked] = useState("");
//     return (
//       <CardAccordion
//         header={
//           <LayerCardBar
//             text="Demographics"
//             switchProps={{
//               checked: switchChecked,
//               onChange: () => {
//                 setSwitchChecked(!switchChecked);
//               },
//             }}
//           />
//         }
//       />
//     );
//   });
// });
