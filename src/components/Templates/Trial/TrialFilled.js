// import React, { useContext, useState } from "react";
// import { storiesOf } from "@storybook/react";
// import Trial from "./Trial";
// import Header from "elements/PanelHeader/Header";
// import Card from "blocks/Card/Card";
// import Table from "blocks/Table";
// import Panel, { PanelSection } from "layout/Panel";
// import Button from "atoms/Button";
// import { I18nContext } from "../../../locales/index";
// import LanguageSelect from "../../base/LanguageSelect";
// import Container from "atoms/Container";
// import Accordion from "blocks/Accordion/Accordion";
// import Tabs, { Tab } from "blocks/Tabs";

// function TrialApp() {
//   const { translate } = useContext(I18nContext);
//   return (
//     <Trial
//       leftchild={
//         <Panel>
//           <PanelSection>
//             <Header
//               title="5201 California Ave. Irvine, California"
//               property={true}
//             />
//           </PanelSection>
//           <PanelSection body>
//             <Container>
//               <Table />
//             </Container>
//             <Accordion header={<Card title="Ownership" info={true} />}>
//               <Container>
//                 <Table />
//               </Container>
//             </Accordion>
//             <Accordion header={<Card title="Site Information" info={true} />}>
//               <Container>
//                 <Table />
//               </Container>
//             </Accordion>

//             <Accordion
//               header={<Card title="Property Characteristics" info={true} />}
//             >
//               <Container>
//                 <Table />
//               </Container>
//             </Accordion>

//             <Accordion header={<Card title="Value and Tax" info={true} />}>
//               <Container>
//                 <Table />
//               </Container>
//             </Accordion>

//             <Accordion header={<Card title="Last Market Sale" info={true} />}>
//               <Container>
//                 <Table />
//               </Container>
//             </Accordion>

//             <Accordion header={<Card title="Site Views" info={true} />}>
//               <Container>
//                 <Table />
//               </Container>
//             </Accordion>
//           </PanelSection>
//         </Panel>
//       }
//       rightchild={
//         <Panel>
//           <PanelSection>
//             <Header title={translate("Filters")} twoParts={true} />
//           </PanelSection>
//           <PanelSection body>
//             <Card title={translate("Property_Search")} navigation={true} />
//             <Card title={translate("Builder_Sites")} navigation={true} />
//             <Card title={translate("Demographics")} navigation={true} />
//             <Card title={translate("Foreclosures")} navigation={true} />
//             <Card title={translate("Points_Of_Interest")} navigation={true} />
//             <Card title={translate("Public_Schools")} navigation={true} />
//             <Card
//               title={translate("Qualified_Opportunity_Zones")}
//               navigation={true}
//             />
//             <Card
//               title={translate("School_District_Rating")}
//               navigation={true}
//             />
//             <Card title={translate("Traffic")} navigation={true} />
//             <Card title={translate("Transaction")} navigation={true} />
//             <Card title={translate("Zones")} navigation={true} />
//           </PanelSection>
//           <LanguageSelect />
//           <Button buttonLabel={translate("Apply")} isRound="true" />
//         </Panel>
//       }
//     />
//   );
// }

// export default TrialApp;
