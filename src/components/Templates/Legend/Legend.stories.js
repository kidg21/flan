import React from "react";
import { storiesOf } from "@storybook/react";
import Panel, { PanelSection, PanelBody } from "../../layout/Panel/Panel";
import PanelHeader from '../../blocks/PanelPieces/PanelHeader';
import PanelPiece from "../../blocks/PanelPieces/PanelPiece";
import FilterDetailHeader from "../../blocks/PanelPieces/FilterDetailHeader";
import LayerCard from '../../blocks/Card/TrialCard';
import Accordion from '../../blocks/Accordion/Accordion';
import Checkbox from "../../atoms/Checkbox/Checkbox";

storiesOf("Templates|Panel", module)
.add("Data Overlay Panel", () => (
  <Panel>
    <PanelSection>
		<PanelHeader style={{fontFamily: "arial"}} title="Data Overlays"/>
      </PanelSection>
    <PanelBody>
      
        <Accordion
			    title="Demographics"
		    	onToggle={visibility => {
			  	console.log('visibility -->', visibility);
		    	}}>
			      <LayerCard/>
		     </Accordion>


         <Accordion
			    title="Floodzones"
		    	onToggle={visibility => {
			  	console.log('visibility -->', visibility);
		    	}}>
			      <LayerCard/>
		     </Accordion>


         <Accordion
			    title="Crime Rates"
		    	onToggle={visibility => {
			  	console.log('visibility -->', visibility);
		    	}}>
			      <LayerCard/>
		     </Accordion>

      </PanelBody>
  </Panel>
))

.add("Filter Panel", () => (
  <Panel>
    <PanelSection>
		<PanelHeader title="Filters"/>
      </PanelSection>
    <PanelBody>
		<PanelPiece title="Property"/>
		<PanelPiece title="Point of Interest"/>
		<PanelPiece title="Foreclosure"/>
		<PanelPiece title="Zoning"/>
		<PanelPiece title="Builder Sites"/>
		<PanelPiece title="Traffic"/>
		<PanelPiece title="Demographics"/>
		<PanelPiece title="Education"/>
		<PanelPiece title="Flipper"/>
		<PanelPiece title="Transaction"/>
		  </PanelBody>
  </Panel>
))


.add("Select Filter Panel", () => (
  <Panel>
    <PanelSection>
		<FilterDetailHeader title="Filter Detail"/>
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
  </Panel>
))


;



;

