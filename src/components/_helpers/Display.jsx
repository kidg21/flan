/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import Text from "base/Typography";
import Grid from "layout/Grid";
import Command from "atoms/Command";

const fullscreen = {
  width: "100%",
  height: "100vh",
};
const FullScreen = (storyFn) => { return (<div style={fullscreen}>{storyFn()}</div>); };

const centerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};
const Center = ({ children }) => {
  return (<div style={centerStyles}>{children}</div>);
};

const centerDecoratorStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "inherit",
};
const CenterDecorator = (storyFn) => { return (<div style={centerDecoratorStyles}>{storyFn()}</div>); };

Center.propTypes = {
  children: PropTypes.node,
};

Center.defaultProps = {
  children: null,
};

const padding = {
  padding: "2rem",
};
const Padding = (storyFn) => { return (<div style={padding}>{storyFn()}</div>); };

const container = {
  height: "250px",
};
const Container = (storyFn) => { return (<div style={container}>{storyFn()}</div>); };

function Spacer() {
  return <span>&nbsp;</span>;
}

const DisplayGrid = (storyFn) => {
  return (<Grid>{storyFn()}</Grid>);
};

const CenterDisplayGrid = (storyFn) => {
  return (<Grid columns={3}><div />{storyFn()}<div /></Grid>);
};

function CommandGrid({ data }) {
  return data.map((item) => {
    return (
      <Grid gap="xs" key={item.command}>
        <Command command={item.command} />
        <Text text={item.desc} />
      </Grid>
    );
  });
}

export {
  FullScreen,
  Center,
  CenterDecorator,
  CenterDisplayGrid,
  Padding,
  Container,
  Spacer,
  DisplayGrid,
  CommandGrid,
};
