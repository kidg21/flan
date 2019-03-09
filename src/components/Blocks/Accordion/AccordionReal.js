import React from 'react';
import { render } from 'react-dom';
import Accordion from './Accordion';
import CardHeader from "../Card/CardHeader";
import CardOptions from "../Card/CardOptionsSection";
import Divider from '../Card/CardDivider';
import Table from '../Card/SimpleDataTable';
import floodzoneFile from '../Card/floodzone.png';

const image = {
    src: floodzoneFile,
    alt: 'Flood'
};


function AccordionReal() {
  return (
      <Accordion>
        <div label='Data Overlay 1'>
            <Divider/>
            <img src={image.src} alt={image.alt}/>
            <CardOptions/>
        </div>
        <div label='Data Overlay 2'>
            <Divider/>
            <img src={image.src} alt={image.alt}/>
            <CardOptions/>
        </div>
        <div label='Data Overlay 3'>
            <Divider/>
            <img src={image.src} alt={image.alt}/>
            <CardOptions/>
        </div>
        <div label='Data Overlay 4'>
            <Divider/>
            <img src={image.src} alt={image.alt}/>
            <CardOptions/>
        </div>
        <div label='Data Overlay 5'>
            <Divider/>
            <img src={image.src} alt={image.alt}/>
            <CardOptions/>
        </div>
      </Accordion>
  );
}

const container = document.createElement('div');
render(<AccordionReal />, container);

export default AccordionReal;