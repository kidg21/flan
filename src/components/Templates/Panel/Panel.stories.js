// import React, { useReact } from "react";
// import { storiesOf } from "@storybook/react";
// import Header from "blocks/Panel/Header";
// import Table from "blocks/Table";
// import Card from "blocks/Card/Card";
// import Accordion from "blocks/Accordion/Accordion";
// import Panel, { PanelSection, PanelBody } from "layout/Panel";

// storiesOf("Templates|Panel", module).add("Property Info Panel", () =>
//   React.createElement(() => {
//     const [activeAccordion, setActiveAccordion] = useState("");
//     return (
//       <Panel>
//         <PanelSection>
//           <Header
//             title="5201 California Ave. Irvine, California"
//             property={true}
//           />
//         </PanelSection>
//         <PanelBody>
//           <Table />
//           <Accordion
//             header={<Card title="Ownership" info={true} />}
//             visibility={activeAccordion === "accordion1"}
//             onClick={() => {
//               setActiveAccordion("accordion1");
//             }}
//           >
//             {<Table />}
//           </Accordion>
//         </PanelBody>
//         <PanelSection />
//       </Panel>
//     );
//   })
// );
