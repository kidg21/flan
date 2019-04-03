import React from "react";
import { storiesOf } from "@storybook/react";
import Panel, { PanelSection, PanelBody, PanelFooter } from "../../layout/Panel/Panel";
import PanelHeader from '../../blocks/PanelPieces/PanelHeader';
import LayerPanelHeader from '../../blocks/PanelPieces/LayerHeader';
import NavCard from "../../blocks/Card/NavCard";
import MapLegend from "../../blocks/Map/MapLegend.js";
// import LayerCard from '../../blocks/Card/TrialCard';
import Accordion from '../../blocks/Accordion/Accordion';
import Checkbox from "../../atoms/Checkbox/Checkbox";
import AddIcon from "../../atoms/Icon/PlusIcon";
import Button from "../../atoms/Button/Button";
import Table from "../../blocks/Table/Table";

storiesOf("Templates|Panel", module)
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
		     </Accordion>


         <Accordion
			    title="Crime Rates"
		    	onToggle={visibility => {
			  	console.log('visibility -->', visibility);
		    	}}>
		     </Accordion>

      </PanelBody>
  </Panel>
))


.add("Empty Filter Panel", () => (
  <Panel>
    <PanelSection>
		<PanelHeader layer="Data Overlay" title="Filters"/>
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
		<PanelHeader layer="Data Overlay" title="Filters"/>
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
		<Button>Apply</Button>
				</PanelFooter>
  </Panel>
))


.add("Second Filter Panel", () => (
  <Panel>
    <PanelSection>
		<PanelHeader layer="Data Overlay" title="Property"/>
      </PanelSection>
    <PanelBody>
		<NavCard title="Property Type"/>
		<NavCard title="Characteristics"/>
		<NavCard title="Last Market Sale"/>
		<NavCard title="Ownership"/>
		<NavCard title="Property Value"/>
		<NavCard title="Location"/>
		  </PanelBody>
			<PanelFooter>
	<Button>Apply</Button>
				</PanelFooter>
  </Panel>
))


.add("Select Filter Panel", () => (
  <Panel>
    <PanelSection>
		<PanelHeader layer="Data Overlay" title="Filter Detail"/>
      </PanelSection>
    <PanelBody>
		<Checkbox/>
		<Checkbox/>
		<Checkbox/>
		<Checkbox/>
		<Checkbox/>
		<Checkbox/>
		<Checkbox/>
		<Checkbox/>
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

