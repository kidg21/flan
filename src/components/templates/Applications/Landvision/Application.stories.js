/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { FullScreen } from "helpers/Display";
import Panel from "layout/Panel";
import Icon from "atoms/Icon";
import Loader from "atoms/Loader";
import Button from "atoms/Button";
import Bar from "layout/Bar";
import Layout from "layout/Layout";
import Template from "layout/Template";
import Media from "atoms/Media";
import { FieldGroup } from "atoms/Field";
import Text, { Title, Link } from "base/Typography";
import Card, { CardSection } from "elements/Card";
import Modal from "layout/Modal";
import ParcelMap from "images/maps/map-parcel.png";
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

storiesOf("Templates|Applications/Appraisal/Project Details", module)
  .addDecorator(FullScreen)
  .add(
    "Overview",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        const menuDetails = [
          {
            id: "Project Details",
            title: "Project Details",
            isSelected: true,
          },
          {
            id: "Define Site",
            title: "Define Site",
          },
          {
            id: "Assessment",
            title: "Assessment",
            disabled: true,
          },
          {
            id: "Zoning",
            title: "Zoning",
            disabled: true,
          },
          {
            id: "Demographics",
            title: "Demographics",
            disabled: true,
          },
          {
            id: "Maps",
            title: "Maps",
            disabled: true,
          },
          {
            id: "Report",
            title: "Report",
            disabled: true,
          },
          {
            id: "Export",
            title: "Export",
            disabled: true,
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
                    <MockHeader />
                  }
                >
                  <Template
                    id="Overview"
                    template="C_02"
                    hasBorders
                    A={{
                      id: "A",
                      content: (
                        <MockWorkflow
                          title="Project Menu"
                          data={menuDetails}
                        />
                      ),
                    }}
                    B={{
                      id: "B",
                      content: <MockTabs />,
                    }}
                    C={{
                      id: "C",
                      content: (
                        <Template
                          id="Details"
                          template="B_01"
                          A={{
                            id: "A",
                            content: <MockData />,
                          }}
                          B={{
                            id: "B",
                            content: (
                              <MockDetails
                                footer={<Button label="View on Map" fullWidth />}
                              />
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

storiesOf("Templates|Applications/Appraisal", module)
  .addDecorator(FullScreen)
  .add(
    "Assessment",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        const menuAssessment = [
          {
            id: "Project Details",
            title: "Project Details",
          },
          {
            id: "Define Site",
            title: "Define Site",
            post: {
              type: "icon", icon: "check", variant: "success", size: "lg",
            },
          },
          {
            id: "Assessment",
            title: "Assessment",
            isSelected: true,
          },
          {
            id: "Zoning",
            title: "Zoning",
          },
          {
            id: "Demographics",
            title: "Demographics",
          },
          {
            id: "Maps",
            title: "Maps",
          },
          {
            id: "Report",
            title: "Report",
          },
          {
            id: "Export",
            title: "Export",
          },
        ];

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
                    <MockHeader />
                  }
                >
                  <Template
                    id="Assessment"
                    template="D_02"
                    hasBorders
                    A={{
                      id: "A",
                      content: (
                        <MockWorkflow
                          title="Project Menu"
                          data={menuAssessment}
                        />
                      ),
                    }}
                    B={{
                      id: "B",
                      content: (
                        <MockTabs
                          data={tabsAssessment}
                        />
                      ),
                    }}
                    C={{
                      id: "C",
                      content: <MockForm />,
                    }}
                    D={{
                      id: "D",
                      content: (
                        <MockDetails
                          title="Site Assessment Totals"
                          image={ParcelMap}
                          data={fieldData}
                          footer={<MockFooter />}
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
    "Report",
    () => {
      return React.createElement(() => {
        const [leftOpen, setLeftOpen] = useState(true);
        const toggleLeft = () => { setLeftOpen(!leftOpen); };

        const menuReport = [
          {
            id: "Project Details",
            title: "Project Details",
          },
          {
            id: "Define Site",
            title: "Define Site",
            post: {
              type: "icon", icon: "check", variant: "success",
            },
          },
          {
            id: "Assessment",
            title: "Assessment",
            post: {
              type: "icon", icon: "check", variant: "success",
            },
          },
          {
            id: "Zoning",
            title: "Zoning",
            post: {
              type: "icon", icon: "check", variant: "success",
            },
          },
          {
            id: "Demographics",
            title: "Demographics",
            post: {
              type: "icon", icon: "check", variant: "success",
            },
          },
          {
            id: "Maps",
            title: "Maps",
            post: {
              type: "icon", icon: "check", variant: "success",
            },
          },
          {
            id: "Report",
            title: "Report",
            isSelected: true,
          },
          {
            id: "Export",
            title: "Export",
          },
        ];

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
                    <MockHeader />
                  }
                >
                  <Template
                    id="Report"
                    template="C_03"
                    hasBorders
                    A={{
                      id: "A",
                      content: (
                        <MockWorkflow
                          title="Project Menu"
                          data={menuReport}
                        />
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

        const menuExport = [
          {
            id: "Project Details",
            title: "Project Details",
          },
          {
            id: "Define Site",
            title: "Define Site",
            post: {
              type: "icon", icon: "check", variant: "success",
            },
          },
          {
            id: "Assessment",
            title: "Assessment",
            post: {
              type: "icon", icon: "check", variant: "success",
            },
          },
          {
            id: "Zoning",
            title: "Zoning",
            post: {
              type: "icon", icon: "check", variant: "success",
            },
          },
          {
            id: "Demographics",
            title: "Demographics",
            post: {
              type: "icon", icon: "check", variant: "success",
            },
          },
          {
            id: "Maps",
            title: "Maps",
            post: {
              type: "icon", icon: "check", variant: "success",
            },
          },
          {
            id: "Report",
            title: "Report",
            post: {
              type: "icon", icon: "check", variant: "success",
            },
          },
          {
            id: "Export",
            title: "Export",
            isSelected: true,
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
                    <MockHeader />
                  }
                >
                  <Template
                    id="Report"
                    template="B_02"
                    hasBorders
                    A={{
                      id: "A",
                      content: (
                        <MockWorkflow
                          title="Project Menu"
                          data={menuExport}
                        />
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
                              <Template>
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
                              </Template>
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
