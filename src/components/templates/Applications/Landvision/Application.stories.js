/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { FullScreen } from "helpers/Display";
import Panel from "layout/Panel";
import Icon from "atoms/Icon";
import Loader from "atoms/Loader";
import Button, {ButtonGroup} from "atoms/Button";
import Bar from "layout/Bar";
import Layout from "layout/Layout";
import Template from "layout/Template";
import Tabs, { TabItem } from "blocks/Tabs";
import List, { ListItem } from "blocks/List";
import Grid from "layout/Grid";
import Form from "layout/Form";
import Divider from "atoms/Divider";
import MapBox from "layout/Map";
import TextInput from "atoms/TextInput";
import Media from "atoms/Media";
import Field, { FieldGroup } from "atoms/Field";
import Text, { Title, Link } from "base/Typography";
import Card, { CardSection, CardGrid } from "elements/Card";
import Modal from "layout/Modal";
import ParcelMap from "images/maps/parcel-map.png";
import ReportTemp from "images/rural.jpg";
import {
  MockData,
  MockDetails,
  MockFooter,
  MockForm,
  MockHeader,
  MockHeaderGlobal,
  MockMenu,
  MockTabs,
  MockWorkflow,
} from "helpers/Mocks";

function doNothing() {
  // do nothing
}

// storiesOf("Templates|Applications/Appraisal/Project Details", module)
//   .addDecorator(FullScreen)
//   .add(
//     "Overview",
//     () => {
//       return React.createElement(() => {
//         const [leftOpen, setLeftOpen] = useState(true);
//         const toggleLeft = () => { setLeftOpen(!leftOpen); };

//         const menuDetails = [
//           {
//             id: "Overview",
//             title: "Overview",
//             isSelected: true,
//           },
//           {
//             id: "Define Site",
//             title: "Define Site",
//           },
//           {
//             id: "Assessment",
//             title: "Assessment",
//             disabled: true,
//           },
//           {
//             id: "Transactions",
//             title: "Transactions",
//             disabled: true,
//           },
//           {
//             id: "Zoning",
//             title: "Zoning",
//             disabled: true,
//           },
//           {
//             id: "Maps",
//             title: "Maps",
//             disabled: true,
//           },
//           {
//             id: "Review",
//             title: "Review",
//             disabled: true,
//           },
//           {
//             id: "Export",
//             title: "Export",
//             disabled: true,
//           },
//         ];

//         return (
//           <Layout
//             header={{
//               id: "Header",
//               content: <MockHeaderGlobal menuClick={toggleLeft} />,
//             }}
//             left={{
//               id: "Left",
//               content: <MockMenu />,
//               visible: leftOpen,
//             }}
//             main={{
//               id: "Main",
//               content: (
//                 <Panel
//                   padding="0"
//                   header={
//                     <MockHeader />
//                   }
//                 >
//                   <Template
//                     id="Overview"
//                     template="C_02"

//                     A={{
//                       id: "A",
//                       content: (
//                         <MockWorkflow
//                           title="Project Menu"
//                           data={menuDetails}
//                         />
//                       ),
//                     }}
//                     B={{
//                       id: "B",
//                       content: <MockTabs />,
//                     }}
//                     C={{
//                       id: "C",
//                       content: (
//                         <Template
//                           id="Details"
//                           template="B_01"
//                           A={{
//                             id: "A",
//                             content: <MockData />,
//                           }}
//                           B={{
//                             id: "B",
//                             content: (
//                               <MockDetails
//                                 footer={<Button label="View on Map" fullWidth />}
//                               />
//                             ),
//                           }}
//                         />
//                       ),
//                     }}
//                   />
//                 </Panel>
//               ),
//             }}
//           />
//         );
//       });
//     },
//   );

storiesOf("Templates|Applications/Appraisal", module)
  .addDecorator(FullScreen)
  .add(
    "Overview",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        const [activeSingleTab, setActiveSingleTab] = useState("tab1");

        const fieldData = [
          {
            label: "Project Name",
            value: "22902 Trabuco Rd",
            
          },
          {
            label: "Job Number",
            value: "1402-20-12345",
          },
          {
            label: "Property Type",
            value: "Shopping Center",
          },
          {
            label: "Lat/Long",
            value: "33.629211/-117.663988",
          },
          {
            label: "Street Address",
            value: "22902 Trabuco Road",
          },
          {
            label: "City, State, Zip",
            value: "Mission Viejo, CA 92691",
          },
        ];

        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={
                    <MockHeader percentage="0" />
                  }
                >
                  <Template
                    id="Assessment"
                   
                    template="B_02"
                    A={{
                      id: "A",
                      content: (
                        <List title="Project Menu" isInteractive isLight >
                          <ListItem title="Overview" isSelected/>
                          <ListItem title="Define Site" />
                          <Divider/>
                          <ListItem title="Assessment" disabled/>
                          <ListItem title="Transactions" disabled/>
                          <ListItem title="Zoning" disabled/>
                          <ListItem title="Maps" disabled/>
                          <ListItem title="Review" disabled/>
                          <ListItem title="Export" disabled/>
                          </List>
                          
                      ),
                    }}
                    B={{
                      id: "B",
                      content: (
                        <Template
                          id="Details"
                          template="A_01"
                 
                          A={{
                            id: "A",
                            content: (
                              <Panel header={<Bar padding="2x" contentAlign="center" left={<Title size="lg" text="Project Overview" weight="bold"/>} right={<Button icon="share_content" isRound isPlain/>}/>}>
                              <Grid columns="60% 40%">
                              <Bar
                                  padding="2x"
                                  center={{
                                    content: (
                                      <Form >
                                      <Grid columns="1">
                                        <FieldGroup
                                          columns="1"
                                          id="General Information"
                                          data={fieldData}
                                        />
                                        <Bar center={<Button label="Start Research"  isSolid />}/>
                                      </Grid>
                                      </Form>),
                                    align: "center",
                                  }}
                                />
              
                                <MockDetails />
                                
                                </Grid>
                              </Panel>)
                            ,
                          }}
                          
                        />
                      ),
                    }}
                  />
                </Panel>
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Define Site",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        const [activeSingleTab, setActiveSingleTab] = useState("tab1");

        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={
                    <MockHeader  percentage="0" />
                  }
                >
                  <Template
                    id="Define"
                    template="B_02"
                    A={{
                      id: "A",
                      content: (
                        <List title="Project Menu" isInteractive isLight >
                          <ListItem title="Overview"/>
                          <ListItem title="Define Site" isSelected/>
                          <Divider/>
                          <ListItem title="Assessment" disabled/>
                          <ListItem title="Transactions" disabled/>
                          <ListItem title="Zoning" disabled/>
                          <ListItem title="Maps" disabled/>
                          <ListItem title="Review" disabled/>
                          <ListItem title="Export" disabled/>
                          </List>
                          
                      ),
                    }}
                    B={{
                      id: "B",
                      content: (
                        <Template
                          id="Details"
                          template="B_01"
                        
                          A={{
                            id: "A",
                            content: <Panel
                            header={
                              <Bar 
                              padding="2x"
                              contentAlign="center" left={{
                                content: (<Text text="Select Parcels on Map to Define Site" size="lg"/>)}}
                              right={{
                                content: (
                                <Button label="Show Related Parcels" variant="success" />),
                                align: "right",
                                width: "fit-content",
                              }}/>
                            }
                            padding="0"
                            footer={<Bar 
                              contentAlign="bottom" 
                              left={{
                              content: (
                            <Icon icon="database" size="sm" />),
                          width: "fit-content",
                        }}
                            center={{
                              content:(<Text text="Data Source: EASI, Last Updated: 01/01/2020"/>),
                            align: "left",}}
                            />}>
                              <Template
                                  template="A_01"
                                  isOverlay
                                  A={{
                                    id: "A",
                                    content:(
                                      <Bar 
                                      padding="0"
                                      contentAlign="center" 
                         
                                      right={
                                        <Card ><ButtonGroup columns="4"><Button alignCenter isPlain icon="draw" /><Button alignCenter isPlain icon="measure" /><Button alignCenter isPlain icon="layers" /><Button alignCenter isPlain icon="list" /></ButtonGroup></Card>
                                      }/>
                                    )
                                  }}/>
                              <MapBox />
                              </Panel>,
                          }}
                          B={{
                            id: "B",
                            content: (
                              <Panel
                              padding="0"
                              footer={
                                <Bar right={{
                                  content:( <Button label="Save & Next" isSolid/>),
                                }}/>
                              }
                              >
                              <Form title="Site Parcels" >
                                
                                  <Card
        title="42 Wallaby Way, Sydney, Australia"
        description="APN: 93423438492038"
        commands={[
          {
            id: "Command One",
            label: "View Details",
            onClick: action("Command One Clicked"),
          }]}
          body={
       <FieldGroup
        id="Group1"
        columns="1"
      >
        <Field
          id="Field 1"
          label="Owner"
          value="Forrest Gump"
        />
        <Field
          id="Field 3"
          label="Last Sale"
          value="10/23/86"
        />
        <Field
          id="Field 3"
          label="Doc #"
          value="837489274927"
        />
      </FieldGroup>}/>
      <Card
        title="42 Wallaby Way, Sydney, Australia"
        description="APN: 93423438492038"
        commands={[
          {
            id: "Command One",
            label: "View Details",
            onClick: action("Command One Clicked"),
          }]}
          body={
       <FieldGroup
        id="Group1"
        columns="1"
      >
        <Field
          id="Field 1"
          label="Owner"
          value="Forrest Gump"
        />
        <Field
          id="Field 3"
          label="Last Sale"
          value="10/23/86"
        />
        <Field
          id="Field 3"
          label="Doc #"
          value="837489274927"
        />
      </FieldGroup>}/>
      <Card
        title="42 Wallaby Way, Sydney, Australia"
        description="APN: 93423438492038"
        commands={[
          {
            id: "Command One",
            label: "View Details",
            onClick: action("Command One Clicked"),
          }]}
          body={
       <FieldGroup
        id="Group1"
        columns="1"
      >
        <Field
          id="Field 1"
          label="Owner"
          value="Forrest Gump"
        />
        <Field
          id="Field 3"
          label="Last Sale"
          value="10/23/86"
        />
        <Field
          id="Field 3"
          label="Doc #"
          value="837489274927"
        />
      </FieldGroup>}/>
                                
                              </Form>
                              </Panel>
                            ),
                          }}
                        />
                      ),
                    }}
                  />
                </Panel>
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Assessment",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        const [activeSingleTab, setActiveSingleTab] = useState("tab1");
        const tabsAssessment = [
          {
            id: "Parcel 1",
            label: "Parcel 1",
            isSelected: activeSingleTab === "tab1",
            onClick: () => { setActiveSingleTab("tab1"); },
          },
          {
            id: "Parcel 2",
            label: "Parcel 2",
            isSelected: activeSingleTab === "tab2",
            onClick: () => { setActiveSingleTab("tab2"); },
          },
        ];

        const fieldData = [
          {
            label: "Tax Authority Link",
            value: "Orange County Assessor's Office",
            onClick: true,
          },
          {
            label: "Site Land Assessment",
            value: "$7,216,214",
          },
          {
            label: "Site Assessment Improvement",
            value: "$4,829,284",
          },
          {
            label: "Site Other Assessment",
            value: "$0",
          },
          {
            label: "Site Total Assessment",
            value: "$12,045,498",
          },
          {
            label: "Site Total Assessment",
            value: "$121,926",
          },
        ];

        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={
                    <MockHeader  percentage="25" />
                  }
                >
                  <Template
                    id="Assessment"
                    template="B_02"
                    A={{
                      id: "A",
                      content: (
                        <List title="Project Menu" isInteractive isLight >
                          <ListItem title="Overview"/>
                          <ListItem title="Define Site" post={{type: "icon", icon: "check", variant: "success"}} />
                          <Divider/>
                          <ListItem title="Assessment" isSelected/>
                          <ListItem title="Transactions" />
                          <ListItem title="Zoning" />
                          <ListItem title="Maps" />
                          <ListItem title="Review" />
                          <ListItem title="Export" />
                          </List>
                          
                      ),
                    }}
                    B={{
                      id: "B",
                      content: (
                        <Template
                          id="Details"
                          template="B_01"
                          A={{
                            id: "A",
                            content: <Panel
                            header={<Bar passing="0" 
                            left={{
                                content: (
                                  <Tabs>
                                    <TabItem label="Parcel 1" isSelected/>
                                    <TabItem label="Parcel 2"/>
                                  </Tabs>

                                ),
                                width: "fit-content",
                              }}
                              />}
                            padding="0"
                            footer={<Bar 
                              
                              contentAlign="bottom" 
                              left={{
                              content: (
                            <Icon icon="database" size="sm"/>),
                          width: "fit-content",
                        }}
                            center={{
                              content:(<Text text="Data Source: EASI, Last Updated: 01/01/2020 " size="sm"/>),
                            align: "left",}}
                            />}>
                              
                              <Form>
                              <Field label="Parcel Link" value={<Link text="808-23093"/>}/>
                              
                                <TextInput label="Assessment Year(s)"/>
                                <TextInput label="Land Assessment"/>
                                <TextInput label="Improvement Assessment"/>
                                <TextInput label="Other Assessment"/>
                                <TextInput label="Total Assessment"/>
                                <TextInput label="Total Taxes"/>
                                <Bar 
                                contentAlign="bottom" 
                                left={{
                                  content:(
                                  <Button label="Attachments" />),}}
                              right={{
                                content:(
                                <Button label="Save & Next" isSolid/>),}}
                              />
                                </Form>
                              </Panel>,
                          }}
                          B={{
                            id: "B",
                            content: (
                              <MockDetails />
                            ),
                          }}
                        />
                      ),
                    }}
                  />
                </Panel>
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Zoning",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };
        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={
                    <MockHeader  percentage="50" />
                  }
                >
                  <Template
                    id="Zoning"
                    template="B_02"
                    
                    A={{
                      id: "A",
                      content: (
                        <List title="Project Menu" isInteractive isLight >
                          <ListItem title="Overview"/>
                          <ListItem title="Define Site" post={{type: "icon", icon: "check", variant: "success"}} />
                          <Divider/>
                          <ListItem title="Assessment" post={{type: "icon", icon: "check", variant: "success"}}/>
                          <ListItem title="Transactions" post={{type: "icon", icon: "check", variant: "success"}}/>
                          <ListItem title="Zoning" isSelected/>
                          <ListItem title="Maps" />
                          <ListItem title="Review" />
                          <ListItem title="Export" />
                          </List>
                          
                      ),
                    }}
                    B={{
                      id: "B",
                      content: (
                        
                        <Template
                          id="Details"
                          template="B_01"
                          A={{
                            id: "A",
                            content: <Panel
                            padding="0"
                            header={
                              <Bar 
                              padding="2x"
                              contentAlign="center" left={{
                                content: (<Button label="Request Data" isSolid />)}}
                              right={
                                <Button icon="photos" label="Map Image"/>
                              }/>
                            }
                            footer={<Bar 
                              contentAlign="bottom" left={{
                              content: (
                            <Icon icon="database" size="sm"/>),
                          width: "fit-content",
                        }}
                            center={{
                              content:(<Text text="Data Source: EASI, Last Updated: 01/01/2020 " size="sm"/>),
                            align: "left",}}
                            />}
                            
                            >
                              <Template
                                  template="A_01"
                                  isOverlay
                                  A={{
                                    id: "A",
                                    content:(
                                      <Bar 
                                      padding="0"
                                      contentAlign="center" 
                         
                                      right={
                                        <Card ><ButtonGroup columns="4"><Button alignCenter isPlain icon="draw" /><Button alignCenter isPlain icon="measure" /><Button alignCenter isPlain icon="layers" /><Button alignCenter isPlain icon="list" /></ButtonGroup></Card>
                                      }/>
                                    )
                                  }}/>
                              <MapBox />
                              </Panel>,
                          }}
                          B={{
                            id: "B",
                            content: (
                              <Panel padding="0" 
                              footer={<Bar 
                                contentAlign="bottom" 
                              right={{
                                content:(
                                <Button label="Save & Next" isSolid/>),}}
                              />}
                              header={
                                <Bar left={{
                                  content: (
                              <Tabs>
                                <TabItem label="Zone 1" isSelected/>
                                <TabItem label="Zone 2"/>
                              </Tabs>),
                              width: "fit-content"}}
                              right={{
                                content: (<ButtonGroup columns="2"><Button icon="plus" isRound/><Button icon="photos" isPlain/></ButtonGroup>),
                                width: "fit-content",
                              }}/>}
                              >
                              <Form >
                              <Field label="Zoning Authority" value={<Link text="City of Mission Viejo"/>}/>
                                <TextInput label="Zoning District"/>
                                <TextInput label="Zoning"/>
                                <TextInput label="Zoning Type"/>
                                <TextInput label="Zoned Density"/>
                                <TextInput label="Zoning Summary"/>
                                <TextInput label="Maximum Site Coverage"/>
                                
                                </Form>
                              </Panel>
                            ),
                          }}
                        />
                      
                      ),
                    }}
                  />
                </Panel>
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Maps",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };


        const [activeSingleTab, setActiveSingleTab] = useState("tab1");
      

        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={
                    <MockHeader  percentage="75" />
                  }
                >
                  <Template
                    id="Maps"
                    template="B_02"
                    
                    A={{
                      id: "A",
                      content: (
                        <List title="Project Menu" isInteractive isLight >
                          <ListItem title="Overview"/>
                          <ListItem title="Define Site" post={{type: "icon", icon: "check", variant: "success"}} />
                          <Divider/>
                          <ListItem title="Assessment" post={{type: "icon", icon: "check", variant: "success"}}/>
                          <ListItem title="Transactions" post={{type: "icon", icon: "check", variant: "success"}}/>
                          <ListItem title="Zoning" post={{type: "icon", icon: "check", variant: "success"}}/>
                          <ListItem title="Maps" isSelected />
                          <ListItem title="Review" />
                          <ListItem title="Export" />
                          </List>
                          
                      ),
                    }}
                    B={{
                      id: "B",
                      content: (
                        <Panel
                        padding="0"
                        header={<Bar
                          padding="0"
                          left={{
                            content: (
                              <Tabs>
                                <TabItem label="Subject Map" isSelected />
                                <TabItem label="Flood" />
                                <TabItem label="Wetlands" />
                                <TabItem label="Traffic & Transit" />
                                <TabItem label="Market Boundaries" />
                                <TabItem label="Crime" />
                                <TabItem label="Schools" />
                              </Tabs>),
                            width: "fit-content",
                          }}
                        />}
                        >
                        <Template
                          id="Details"
                          template="B_01"
                          A={{
                            id: "A",
                              content: (
                                <Panel
                                padding="0"
                                header={<Bar
                                  contentAlign="center" left={{
                                  content: (
                                <Text text="Capture Map Image to add to Report"/>),
                              width: "fit-content",
                            }}
                            right={{
                              content: (<Button label="Map Capture" icon="photos"/>),
                            }}/>}
                                footer={<Bar
                                  contentAlign="bottom" left={{
                                  content: (
                                <Icon icon="database" size="sm"/>),
                              width: "fit-content",
                            }}
                                center={{
                                  content:(<Text text="Data Source: EASI, Last Updated: 01/01/2020 " size="sm"/>),
                                align: "left",}}
                                />}>
                                  <Template
                                  template="A_01"
                                  isOverlay
                                  A={{
                                    id: "A",
                                    content:(
                                      <Bar 
                                      padding="0"
                                      contentAlign="center" 
                         
                                      right={
                                        <Card ><ButtonGroup columns="4"><Button alignCenter isPlain icon="draw" /><Button alignCenter isPlain icon="measure" /><Button alignCenter isPlain icon="layers" /><Button alignCenter isPlain icon="list" /></ButtonGroup></Card>
                                      }/>
                                    )
                                  }}/>
                                <MapBox/>
                                </Panel>
                              ),
                            }}
                          B={{
                            id: "B",
                            content: (  
                              <Panel
                              padding="0"
                              footer={<Bar 
                                contentAlign="bottom" 
                              right={{
                                content:(
                                <Button label="Save & Next" isSolid/>),}}
                              />}
                              >                                
                              <Form title="Subject Map" >
                                <TextInput label="Dimensions"/>
                                <TextInput label="Primary Frontage Street"/>
                                <TextInput label="Primary Frontage Feet"/>
                                <TextInput label="Secondary Frontage Street"/>
                                <TextInput label="Secondary Frontage Feet"/>
                                <Bar padding="1x" center={<ButtonGroup columns="2">
                                <Button label="Map Images"/>
                                <Button label="Save" isSolid/>
                                
                              </ButtonGroup>}/>
                              </Form>
                              </Panel>
                             ),
                          }}
                        />
                        </Panel>
                      ),
                    }}
                  />
                </Panel>
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Review",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        
        const [sectionState, setSectionState] = useState(true);

        const reportSections = [
          {
            id: "Define Site",
            label: "Define Site",
            value: "Review",
            onClick: () => { },
            disabled: sectionState,
          },
          {
            id: "Data Extraction",
            label: "Data Extraction",
            value: "Review",
            onClick: () => { },
            disabled: sectionState,
          },
          {
            id: "Assessment Data",
            label: "Assessment Data",
            value: "Review",
            onClick: () => { },
            disabled: sectionState,
          },
          {
            id: "Zoning",
            label: "Zoning",
            value: "Review",
            onClick: () => { },
            disabled: sectionState,
          },
          {
            id: "Demographics",
            label: "Demographics",
            value: "Review",
            onClick: () => { },
            disabled: sectionState,
          },
          {
            id: "Maps",
            label: "Maps",
            value: "Review",
            onClick: () => { },
            disabled: sectionState,
          },
          {
            id: "Appendices",
            label: "Appendices",
            value: "Review",
            onClick: () => { },
            disabled: sectionState,
          },
        ];

        const buttonLabelOne = (
          "Create Report"
        );
        const buttonLabelTwo = (
          "Update Report"
        );

        const empty = (
          <Template>
            <Media
              media={ReportTemp}
            />
            <Title
              text="We'll lay all these little funky little things in there. The least little bit can do so much. Let's go up in here, and start having some fun."
              weight="bold"
            />
            <Text
              text="The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. You can bend rivers. But when I get home, the only thing I have power over is the garbage. We touch the canvas, the canvas takes what it wants. We don't have anything but happy trees here. Don't fiddle with it all day."
            />
          </Template>
        );

        const report = (
          <Media
            id="Web Site"
            media="https://www.lightboxre.com/"
          />
        );

        const [firstReport, setButtonState] = useState(true);
        const [buttonLabel, setButtonLabel] = useState(buttonLabelOne);
        const [reportWindow, setWindow] = useState(empty);

        const [visible, setVisible] = useState(false);
        const handleOpen = () => {
          setVisible(true);
          setSectionState(true);
          setWindow(empty);
          setButtonState(false);
          setTimeout(() => {
            setVisible(false);
            setSectionState(false);
            setButtonState(true);
            setButtonLabel(buttonLabelTwo);
            setTimeout(() => {
              setWindow(report);
            }, 300);
          }, 5000);
        };

        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={
                    <MockHeader  percentage="100" />
                  }
                >
                  <Template
                    id="Report"
                    template="C_03"
                    
                    A={{
                      id: "A",
                      content: (
                        <List title="Project Menu" isInteractive isLight >
                          <ListItem title="Overview"/>
                          <ListItem title="Define Site" post={{type: "icon", icon: "check", variant: "success"}} />
                          <Divider/>
                          <ListItem title="Assessment" post={{type: "icon", icon: "check", variant: "success"}}/>
                          <ListItem title="Transactions" post={{type: "icon", icon: "check", variant: "success"}}/>
                          <ListItem title="Zoning" post={{type: "icon", icon: "check", variant: "success"}}/>
                          <ListItem title="Maps" post={{type: "icon", icon: "check", variant: "success"}}/>
                          <ListItem title="Review" isSelected/>
                          <ListItem title="Export" />
                          </List>
                          
                      ),
                    }}
                    B={{
                      id: "B",
                      content: (
                        <Template>
                          <FieldGroup
                            id="Report Review"
                            title="Report Review"
                            data={reportSections}
                            align="edge"
                          />
                          <Button
                            label={buttonLabel}
                            onClick={handleOpen}
                            variant="success"
                            isSolid
                            fullWidth
                            disabled={!firstReport}
                          />
                        </Template>
                      ),
                    }}
                    C={{
                      id: "C",
                      content: (
                        <React.Fragment>
                          <Modal
                            id="Modal_Text"
                            visible={visible}
                            animationDuration={0.5}
                          >
                            <Card>
                              <CardSection>
                                <Bar
                                  padding="2x"
                                  center={(
                                    <Icon
                                      icon="file"
                                      size="4xl"
                                      fixedWidth
                                      disabled
                                    />
                                  )}
                                />
                                <Text text="Please wait 5 seconds while we build your report..." />
                                <Loader />
                              </CardSection>
                            </Card>
                          </Modal>
                          {reportWindow}
                        </React.Fragment>
                      ),
                    }}
                  />
                </Panel>
              ),
            }}
          />
        );
      });
    },
  )
  .add(
    "Export",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };
        return (
          <Layout
            header={{
              id: "Header",
              content: <MockHeaderGlobal menuClick={toggleLeft} />,
            }}
            left={{
              id: "Left",
              content: <MockMenu />,
              visible: leftOpen,
            }}
            main={{
              id: "Main",
              content: (
                <Panel
                  padding="0"
                  header={
                    <MockHeader percentage="100" />
                  }
                >
                  <Template
                    id="Report"
                    template="B_02"
                   
                    A={{
                      id: "A",
                      content: (
                        <List title="Project Menu" isInteractive isLight >
                          <ListItem title="Overview"/>
                          <ListItem title="Define Site" post={{type: "icon", icon: "check", variant: "success"}} />
                          <Divider/>
                          <ListItem title="Assessment" post={{type: "icon", icon: "check", variant: "success"}}/>
                          <ListItem title="Transactions" post={{type: "icon", icon: "check", variant: "success"}}/>
                          <ListItem title="Zoning" post={{type: "icon", icon: "check", variant: "success"}}/>
                          <ListItem title="Maps" post={{type: "icon", icon: "check", variant: "success"}}/>
                          <ListItem title="Review" post={{type: "icon", icon: "check", variant: "success"}}/>
                          <ListItem title="Export" isSelected/>
                          </List>
                          
                      ),
                    }}
                    B={{
                      id: "B",
                      content: (
                        <Template
                          template="A_02"
                          A={{
                            id: "A",
                            content: (
                              <Grid columns="1">
                                <Title
                                  text="You have completed your research for this project. Download and Publish your work."
                                  size="2xl"
                                  weight="bold"
                                />
                                <Bar
                                  contentAlign="center"
                                  padding="2x"
                                  left={<Title text="Report" />}
                                  center={{
                                    content: <Link text="1402-20-12345_Research_Report.pdf" />,
                                    width: "50%",
                                    align: "left",
                                  }}
                                  right={(
                                    <Button
                                      label="Download"
                                      fullWidth
                                      onClick={doNothing}
                                    />
                                  )}
                                />
                                <Bar
                                  contentAlign="center"
                                  padding="2x"
                                  left={<Title text="Attachments" />}
                                  center={{
                                    content: <Text text="1402-20-12345_Attachments.zip" />,
                                    width: "50%",
                                    align: "left",
                                  }}
                                  right={(
                                    <Button
                                      label="Download"
                                      fullWidth
                                      onClick={doNothing}
                                    />
                                  )}
                                />
                                <Bar
                                  contentAlign="center"
                                  padding="2x"
                                  left={<Title text="All Files" />}
                                  center={{
                                    content: <Text text="1402-20-12345_All.zip" />,
                                    width: "50%",
                                    align: "left",
                                  }}
                                  right={(
                                    <Button
                                      label="Download"
                                      fullWidth
                                      onClick={doNothing}
                                    />
                                  )}
                                />
                                <Button
                                  label="Complete Project and Publish"
                                  onClick={doNothing}
                                  variant="success"
                                  isSolid
                                  fullWidth
                                />
                              </Grid>
                            ),
                          }}
                        />
                      ),
                    }}
                  />
                </Panel>
              ),
            }}
          />
        );
      });
    },
  );
