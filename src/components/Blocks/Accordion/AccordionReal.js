import React from 'react';
import { render } from 'react-dom';

import Accordion from './Accordion';
import TrialCard from '../Card/TrialCard';



function AccordionReal() {
  return (
    <div>
      <Accordion>
        <div label='Data Overlay 1'>
<TrialCard/>
        </div>
        <div label='Data Overlay 2'>
<TrialCard/>
        </div>
      </Accordion>
    </div>
  );
}

const container = document.createElement('div');
render(<AccordionReal />, container);

export default AccordionReal;