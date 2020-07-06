/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Card, { CardGrid } from "elements/Card";
import Icon from "atoms/Icon";
import Bar from "layout/Bar";
import Text, { Title } from "base/Typography";
import {
  iconsApp,
  iconsBrand,
  iconsNavigation,
} from "atoms/Icon/libraryIcon.data";

export default {
  title: "Work|Docs/Iconography (CSF)",
  parameters: {},
  includeStories: [],
};

function IconGrid({ data }) {
  return data.map((item) => {
    return (
      <Card
        key={item.icon}
        id={item.icon}
        hover
      >
        <Bar
          contentAlign="center"
          left={{
            content: <Icon
              icon={item.icon}
              variant={item.variant}
              size={item.size || "xl"}
              spin={item.spin}
              pulse={item.pulse}
              fixedWidth
            />,
            width: "min-content",
          }}
          center={{
            content: (
              <React.Fragment>
                <Title text={item.name || item.icon} size="lg" select="all" />
                <Text text={item.desc} />
              </React.Fragment>
            ),
            align: "left",
          }}
        />
      </Card>
    );
  });
}

// /** TODO: Break 'App' icon set into subcategories */
export const Standard = () => {
  return (
    <CardGrid columns="3">
      <IconGrid data={iconsApp} />
    </CardGrid>
  );
};

export const Navigation = () => {
  return (
    <CardGrid columns="3">
      <IconGrid data={iconsNavigation} />
    </CardGrid>
  );
};

export const Brand = () => {
  return (
    <CardGrid columns="3">
      <IconGrid data={iconsBrand} />
    </CardGrid>
  );
};
