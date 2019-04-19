import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import styled, { css } from "styled-components";
import { Padding } from "helpers/Display";
import Grid from "helpers/Grid";
import Icon from "base/Icons";
import PlusIcon from "base/Icons";
import IconBlock from "blocks/IconBlock";

const downProps = {
  nameProp: ["far", "angle-down"],
  colorProp: "dimgray"
};

const upProps = {
  nameProp: ["far", "angle-up"],
  colorProp: "dimgray"
};

const leftProps = {
  nameProp: ["far", "angle-left"],
  colorProp: "dimgray"
};

const rightProps = {
  nameProp: ["far", "angle-right"],
  colorProp: "dimgray"
};

const mapMarkerProps = {
  nameProp: ["far", "map-marker"],
  colorProp: "dimgray"
};

const locatorProps = {
  nameProp: ["far", "map"],
  colorProp: "dimgray"
};

const worldProps = {
  nameProp: ["far", "globe"],
  colorProp: "dimgray"
};

const gotoProps = {
  nameProp: ["far", "location-arrow"],
  colorProp: "dimgray"
};

const plusProps = {
  nameProp: ["far", "plus"],
  colorProp: "dimgray"
};

const minusProps = {
  nameProp: ["far", "minus"],
  colorProp: "dimgray"
};

// const copyProps = {
//     nameProp: ["far", "copy"],
//     colorProp: "#99958f",
// };

const directionsProps = {
  nameProp: ["fal", "directions"],
  colorProp: "#60aad2"
};

const cloneProps = {
  nameProp: ["fal", "clone"],
  colorProp: "#99958f"
};

const addProps = {
  nameProp: ["fal", "plus-circle"],
  colorProp: "#60aad2"
};

const questionProps = {
  nameProp: ["far", "question-circle"],
  colorProp: "#99958f"
};

// const FlexGrid = styled.section`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: flex-start;
// `

const storyIcons = {
  fontSize: "2em",
  padding: "1rem 0"
};

storiesOf("Style Guidelines|Icon Library", module)
  .addDecorator(Padding)
  .add("Icon Library", () => (
    <Grid col_12 style={storyIcons}>
      <Icon icon="chevron-up" />
      <Icon icon="chevron-down" />
      <Icon icon="chevron-left" />
      <Icon icon="chevron-right" />
      <Icon icon="times" />
      <Icon icon="coffee" />
      <Icon icon="check" />
      <Icon icon="key" />
      <Icon icon="exclamation" />
      <Icon icon="flag" />
      <Icon icon="map-marker" />
      <Icon icon="user" />
    </Grid>
  ))
  .add("Icon Colors", () => (
    <>
      <h3>
        <u>Icon Colors</u>
      </h3>
      <h5>
        Icons inherit the 'color' of the parent container but can be overridden.
      </h5>
      <h6>
        Available Props: default (no prop)', 'anchor', 'success', 'warning',
        'alert'
      </h6>
      <Grid col_12 style={storyIcons}>
        <Icon icon="coffee" />
        <Icon icon="coffee" anchor />
        <Icon icon="coffee" success />
        <Icon icon="coffee" warning />
        <Icon icon="coffee" alert />
      </Grid>
    </>
  ))
  .add("Icon Sizes", () => (
    <>
      <h3>
        <u>Icon Sizes</u>
      </h3>
      <h5>
        Icons inherit the 'font-size' of the parent container and are relatively
        sized.
      </h5>
      <h6>
        Available Props: 'xs', 'sm', 'default (no prop)', 'lg', '2x', '3x',
        '4x', '5x', '6x', '7x', '8x', '9x', '10x'
      </h6>
      <Grid col_3 style={{ padding: "1rem 0" }}>
        <Icon icon="coffee" size="xs" />
        <Icon icon="coffee" size="sm" />
        <Icon icon="coffee" />
        <Icon icon="coffee" size="lg" />
        <Icon icon="coffee" size="2x" />
        <Icon icon="coffee" size="3x" />
        <Icon icon="coffee" size="4x" />
        <Icon icon="coffee" size="5x" />
        <Icon icon="coffee" size="6x" />
        <Icon icon="coffee" size="7x" />
        <Icon icon="coffee" size="8x" />
        <Icon icon="coffee" size="9x" />
        <Icon icon="coffee" size="10x" />
      </Grid>
    </>
  ))
  .add("Bordered Icons", () => (
    <>
      <Icon
        icon="coffee"
        // fixedWidth
        // nameProp="coffee"
        // mask={["far", "circle"]}
        success={true}
        // style={{ background: "MistyRose" }}
      />
      <Icon
        icon="coffee"
        // fixedWidth
        // nameProp="coffee"
        // mask={["far", "circle"]}
        warning={true}
        // style={{ background: "MistyRose" }}
      />
      <Icon
        icon="circle"
        // fixedWidth
        // nameProp="coffee"
        // mask={["far", "circle"]}
        alert={true}
        // style={{ background: "MistyRose" }}
      />
    </>
  ))
  .add("Stacked Icons", () => (
    <Icon icon="circle" stacked={true}>
      <Icon icon="check" inverse={true} success stacked={true}>
        <Icon icon="coffee" inverse={false} alert stacked={true} size="2x" />
      </Icon>
    </Icon>
  ))
  .add("Navigation Icons", () => (
    <Group>
      {" "}
      <Icon {...downProps} /> <Icon {...upProps} /> <Icon {...leftProps} />{" "}
      <Icon {...rightProps} />{" "}
    </Group>
  ))
  .add("Map Icons", () => (
    <Group>
      {" "}
      <Icon {...mapMarkerProps} /> <Icon {...locatorProps} />{" "}
      <Icon {...worldProps} /> <Icon {...gotoProps} /> <Icon {...plusProps} />{" "}
      <Icon {...minusProps} />{" "}
    </Group>
  ))
  .add("Property Icons", () => (
    <Group>
      {" "}
      <PlusIcon {...directionsProps} /> <Icon {...cloneProps} />{" "}
      <Icon {...questionProps} />{" "}
    </Group>
  ))
  .add("Plus Icon", () => <PlusIcon {...addProps} />)
  .add("Icon Groups", () => <IconBlock />);
