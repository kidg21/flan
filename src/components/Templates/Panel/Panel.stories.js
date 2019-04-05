import React from "react";
import { storiesOf } from "@storybook/react";
import Panel, { PanelSection, PanelBody, PanelFooter } from "../../layout/Panel/Panel";
import FilterHeader from '../../cards/Filter/FilterHeader';
import InfoHeader from '../../cards/Property/InfoHeader';
import LayerPanelHeader from '../../cards/Layer/LayerHeader';
import NavCard from "../../cards/Filter/NavCard";
import MapLegend from "../../blocks/Map/MapLegend.js";
// import LayerCard from '../../blocks/Card/TrialCard';
import Accordion from '../../blocks/Accordion/Accordion';
import PropertyInfo from '../../cards/Property/PropertyInfo';
import Checkbox from "../../atoms/Checkbox/Checkbox";
import AddIcon from "../../atoms/Icon/PlusIcon";
import Button from "../../atoms/Button/Button";
import Table from "../../blocks/Table/Table";
import Container from "../../atoms/Container/Container";


storiesOf("Templates|Panel", module)

////Property

.add("Property Info Panel", () => (
  <Panel>
    <PanelSection>
		<InfoHeader street="5201 California Ave" city="Irvine, CA 92614"/>
      </PanelSection>
    <PanelBody>
		<Container>
    			<Table/>
    		</Container>
		<PropertyInfo
			title="Property Info Section"
			onToggle={visibility => {
    	console.log('visibility -->', visibility);
			}}>
				<Container>
    			<Table/>
    		</Container>
		</PropertyInfo>
		  </PanelBody>
  </Panel>
))

///DataOverlays

.add("Data Overlay Panel", () => (
  <Panel>
    <PanelSection>
		<LayerPanelHeader title="Data Overlays"/>
      </PanelSection>
    <PanelBody>
      
        <Accordion
			    title="Demographics"
		    	onToggle={visibility => {
			  	console.log('visibility -->', visibility);
		    	}}>
					<MapLegend/>
		     </Accordion>


         <Accordion
			    title="Floodzones"
		    	onToggle={visibility => {
			  	console.log('visibility -->', visibility);
		    	}}>
					<MapLegend/>
		     </Accordion>


         <Accordion
			    title="Crime Rates"
		    	onToggle={visibility => {
			  	console.log('visibility -->', visibility);
		    	}}>
					<MapLegend/>
		     </Accordion>

      </PanelBody>
  </Panel>
))



////Filters

.add("Empty Filter Panel", () => (
  <Panel>
    <PanelSection>
		<FilterHeader layer="Data Overlay" title="Filters"/>
      </PanelSection>
    <PanelBody>
		  </PanelBody>
			<PanelFooter>
		<Button>Apply</Button>
				</PanelFooter>
  </Panel>
))

.add("Filter Panel", () => (
  <Panel>
    <PanelSection>
		<FilterHeader layer="" title="Filters"/>
      </PanelSection>
    <PanelBody>
		<NavCard title="Property"/>
		<NavCard title="Point of Interest"/>
		<NavCard title="Foreclosure"/>
		<NavCard title="Zoning"/>
		<NavCard title="Builder Sites"/>
		<NavCard title="Traffic"/>
		<NavCard title="Demographics"/>
		<NavCard title="Education"/>
		<NavCard title="Flipper"/>
		<NavCard title="Transaction"/>
		  </PanelBody>
			<PanelFooter>
				</PanelFooter>
  </Panel>
))


.add("Select Filter Panel", () => (
  <Panel>
    <PanelSection>
		<FilterHeader layer="Data Overlay" title="Filter Detail"/>
      </PanelSection>
    <PanelBody>
		<Checkbox/>
		<Checkbox/>
		<Checkbox/>
				  </PanelBody>
					<PanelFooter>
		<Button>Apply</Button>
				</PanelFooter>
  </Panel>
))


;



;

