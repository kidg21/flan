/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Bar from "blocks/Bar";
import Button from "atoms/Button";
import Form from "layout/Form";
import styled from "styled-components";
import Grid from "layout/Grid";
import TextInput from "atoms/TextInput";
import Container from "atoms/Container";
import { Link } from "base/Typography";
import List, { ListItem } from "blocks/List";

const DropContainer = styled(Container)`
position: fixed;
`;


function AdvancedSearch({ id, inputs }) {
  return (
    <Grid columns="9fr .5fr .5fr" id={id}>
      <DropContainer maxHeight="25rem" >
        <Form
          subtitle="Advanced Search"
          description="Choose to search by one of the following options."
        >
          <React.Fragment>
            { inputs.map((item) => {
            return (
              <Grid columns="9fr .5fr">
                <TextInput
                  id={item.id}
                  label={item.label}
                  placeholder={item.placeholder}
                  type="search"
                />
                <Button
                  icon="search"
                  solid
                  onClick={item.onClick}
                  href={item.href}
                />
              </Grid>
            );
          })}
          </React.Fragment>
           
          <Link size="2x" text="Reset"  />
        </Form>
      </DropContainer>
    </Grid>
  );
}

AdvancedSearch.propTypes = {
  id: PropTypes.string,
  inputs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    href: PropTypes.node,
    onClick: PropTypes.func,
  })),
};

AdvancedSearch.defaultProps = {
  id: null,
  inputs: null,

};

export default AdvancedSearch;
