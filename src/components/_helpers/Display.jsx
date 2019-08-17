import React from "react";
import Title, { Description } from "base/Typography";
import Bar from "blocks/Bar";
import { Piece } from "layout/Card";
import Icon from "atoms/Icon";

const centerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};
const Center = ({ children }) => <div style={centerStyles}>{children}</div>;

const padding = {
  padding: "2rem",
};
const Padding = storyFn => <div style={padding}>{storyFn()}</div>;

function IconGrid({ data }) {
  return [
    data.map(item => (
      <Piece
        key={item.icon}
        id={item.icon}
        hover={true}
        // TODO: Add background props to Card
        // type={item.background}
      >
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
              {item.name ? (
                <Title text={item.name} size="large" select="all" />
              ) : (
                <Title text={item.icon} size="large" select="all" />
              )}
              <Description text={item.desc} />
            </>
          }
          centerAlign="left"
        />
      </Piece>
    )),
  ];
}

export { Center, Padding, IconGrid };
