import React from "react"
import styled, { css, keyframes } from "styled-components"
import { fonts, colors, shadows } from "Variables"
import { storiesOf } from "@storybook/react"
import LayoutMain, {
  OuterWrapper,
  InnerWrapper,
  LeftWrapper,
  CenterWrapper,
  CenterWrapperTop,
  CenterWrapperMiddle,
  CenterWrapperBottom,
  RightWrapper,
  BarWrapper
} from "layout/Layout"
import Panel, { PanelSection } from "layout/Panel"
// import Card, { CardList } from "layout/Card"
import Header from "blocks/Panel/Header"
import Card from "blocks/Card/Card"

const Layout = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${colors.grey_light};
`

const LeftPane = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex: none;
  height: 100%;
  overflow: hidden;
  width: 60%;
  background-color: ${colors.grey_40};
`

const RightPane = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex: none;
  right: 0;
  width: 40%;
  height: 100%;
  overflow: hidden;
  filter: drop-shadow(0 0 1px black) drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5));
  background-color: ${colors.grey_20};
`

storiesOf("Application|Layout/", module)
  .add("Layout - Main", () => <LayoutMain />)
  .add("Layout - 2 Pane", () => (
    <Layout>
      <LeftPane>
        {/* Property Search */}
        <Panel>
          <PanelSection>
            <Header title="Property Search" threeParts={true} />
          </PanelSection>
          <PanelSection body>
            <Card title="Property Type" navigation={true} />
            <Card title="Characteristics" navigation={true} />
            <Card title="Last Market Sale" navigation={true} />
            <Card title="Ownership" navigation={true} />
            <Card title="Property Value" navigation={true} />
            <Card title="Location" navigation={true} />
          </PanelSection>
        </Panel>
        {/* Filters */}
        {/* <Panel>
          <PanelSection>
            <Header title="Filters" twoParts={true} />
          </PanelSection>
          <PanelSection body>
            <Card title="Property Search" navigation={true} />
            <Card title="Builder Sites" navigation={true} />
            <Card title="Demographics" navigation={true} />
            <Card title="Foreclosures" navigation={true} />
            <Card title="Points of Interest" navigation={true} />
            <Card title="Public Schools" navigation={true} />
            <Card title="Qualified Opportunity Zones" navigation={true} />
            <Card title="School District Rating" navigation={true} />
            <Card title="Traffic" navigation={true} />
            <Card title="Transaction" navigation={true} />
            <Card title="Zones" navigation={true} />
          </PanelSection>
        </Panel> */}
      </LeftPane>
      <RightPane>
        {/* Property Search */}
        {/* <Panel>
          <PanelSection>
            <Header title="Property Search" threeParts={true} />
          </PanelSection>
          <PanelSection body>
            <Card title="Property Type" navigation={true} />
            <Card title="Characteristics" navigation={true} />
            <Card title="Last Market Sale" navigation={true} />
            <Card title="Ownership" navigation={true} />
            <Card title="Property Value" navigation={true} />
            <Card title="Location" navigation={true} />
          </PanelSection>
        </Panel> */}
        {/* Filters */}
        <Panel>
          <PanelSection>
            <Header title="Filters" twoParts={true} />
          </PanelSection>
          <PanelSection body>
            <Card title="Property Search" navigation={true} />
            <Card title="Builder Sites" navigation={true} />
            <Card title="Demographics" navigation={true} />
            <Card title="Foreclosures" navigation={true} />
            <Card title="Points of Interest" navigation={true} />
            <Card title="Public Schools" navigation={true} />
            <Card title="Qualified Opportunity Zones" navigation={true} />
            <Card title="School District Rating" navigation={true} />
            <Card title="Traffic" navigation={true} />
            <Card title="Transaction" navigation={true} />
            <Card title="Zones" navigation={true} />
          </PanelSection>
        </Panel>
      </RightPane>
    </Layout>
  ))
