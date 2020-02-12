/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Grid from "layout/Grid";
import Icon from "atoms/Icon";
import Text, {Title, Link} from "base/Typography";
import Button from "atoms/Button";
import Bar from "blocks/Bar";
import Card from "elements/Card";


function Download({
}) {

  return (
    <Card
    >
      <Bar padding="2x" 
      centerAlign="center"
      center={
      <Grid columns="1">
        <Title weight="bold" text="Import Files"/>
        <Bar center={
        <Icon size="6x" icon="report" disabled/>}/>
        <Text text="Import files from your computer. Browse to begin."/>
      </Grid>
      }/>
      <Bar padding="2x"  center ={<Button label="Import"/>}/>
      </Card>

  );
}


Download.propTypes = {
};
Download.defaultProps = {

};

export default Download;
