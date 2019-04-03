import React, {useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from '../../atoms/Icon/Icon';
import Accordion from './AccordionPiece';
import MapLegend from "../Map/MapLegend";




const Example = () => {
	return (
    <div>
		<Accordion
			title="Accordion Title"
			onToggle={visibility => {
				console.log('visibility -->', visibility);
      }}
		>
    <MapLegend/>
		</Accordion>
    		<Accordion
        title="Second Title"
        onToggle={visibility => {
          console.log('visibility -->', visibility);
        }}
      >
      <MapLegend/>
      </Accordion>
      		<Accordion
          title="Third Title"
          onToggle={visibility => {
            console.log('visibility -->', visibility);
          }}
        >
        <MapLegend/>
        </Accordion>
        </div>
	);
};

export default Example;