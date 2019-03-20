import React from "react";
import { storiesOf } from "@storybook/react";
import Panel, { PanelSection, PanelBody } from "../../layout/Panel/Panel";
import LegendHeader from "./LegendHeader";
import LayerCard from '../../blocks/Card/TrialCard';
import Accordion from '../../blocks/Accordion/Accordion';

storiesOf("Templates|Panel", module)
.add("Data Overlay Panel", () => (
  <Panel>
    <PanelSection>
      <LegendHeader/>
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
;

