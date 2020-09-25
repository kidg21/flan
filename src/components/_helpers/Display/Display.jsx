/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import { colors } from "Variables";
import Text from "base/Typography";
import Grid from "layout/Grid";
import CardWrapper from "elements/Card/CardWrapper.jsx";
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
  height: "100%",
};
const Center = ({ children }) => {
  return (<div style={centerStyles}>{children}</div>);
};

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

const containerSmall = {
  height: "150px",
};
const ContainerSmall = (storyFn) => { return (<div style={containerSmall}>{storyFn()}</div>); };

const container = {
  height: "250px",
};
const Container = (storyFn) => { return (<div style={container}>{storyFn()}</div>); };

const containerLarge = {
  height: "400px",
};
const ContainerLarge = (storyFn) => { return (<div style={containerLarge}>{storyFn()}</div>); };

const screenLarge = {
  height: "600px",
  border: `1px solid ${colors.grey30}`,
};
const ScreenLarge = (storyFn) => { return (<div style={screenLarge}>{storyFn()}</div>); };

function Spacer() {
  return <span>&nbsp;</span>;
}

const DisplayCard = (storyFn) => {
  return (<CardWrapper padding="4x">{storyFn()}</CardWrapper>);
};

const DisplayGrid = (storyFn) => {
  return (<Grid>{storyFn()}</Grid>);
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

const centerDecoratorStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "inherit",
};

const CenterDecorator = (storyFn) => {
  return (<div style={centerDecoratorStyles}>{storyFn()}</div>);
};

const CenterDisplayGrid = (storyFn) => {
  return (
    <Grid columns={3}>
      <div />
      {storyFn()}
      <div />
    </Grid>
  );
};

export {
  FullScreen,
  Center,
  CenterDecorator,
  CenterDisplayGrid,
  Padding,
  ContainerSmall,
  Container,
  ContainerLarge,
  ScreenLarge,
  Spacer,
  DisplayCard,
  DisplayGrid,
  CommandGrid,
};
