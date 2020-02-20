import React from "react";
import Text, { Title } from "base/Typography";
import Bar from "blocks/Bar";
import Card, { CardSection } from "elements/Card";
import Grid from "layout/Grid";
import Icon from "atoms/Icon";
import Command from "atoms/Command";

const fullscreen = {
  width: "100%",
  height: "100vh"
};
const FullScreen = (storyFn) => { return (<div style={fullscreen}>{storyFn()}</div>); };

const centerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
};
const Center = ({ children }) => {
  return (<div style={centerStyles}>{children}</div>);
};

const padding = {
  padding: "2rem"
};
const Padding = (storyFn) => { return (<div style={padding}>{storyFn()}</div>); };

const container = {
  height: "250px"
};
const Container = (storyFn) => { return (<div style={container}>{storyFn()}</div>); };

function Spacer() {
  return <span>&nbsp;</span>;
}

const DisplayGrid = (storyFn) => {
  return (<Grid>{storyFn()}</Grid>);
};

function IconGrid({ data }) {
  return data.map(item => (
    <Card
      key={item.icon}
      id={item.icon}
      hover={true}
    // TODO: Add background props to Card
    // type={item.background}
    >
      <CardSection>
        <Bar
          contentAlign="center"
          left={
            <Icon
              icon={item.icon}
              type={item.type}
              size={item.size || "2x"}
              fixedWidth={true}
              spin={item.spin}
              pulse={item.pulse}
            />
          }
          leftWidth="min-content"
          center={
            <>
              <Title text={item.name || item.icon} size="lg" select="all" />
              <Text text={item.desc} />
            </>
          }
          centerAlign="left"
        />
      </CardSection>
    </Card>
  ));
}

function CommandGrid({ data }) {
  return data.map(item => (
    <Grid gap="tiny">
      <Command command={item.command} />
      <Text text={item.desc} />
    </Grid>
  ));
}

export { FullScreen, Center, Padding, Container, Spacer, DisplayGrid, IconGrid, CommandGrid };
