import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import PropertyListCard from "./PropertyListCard.jsx";
import PropCard from "./PropCard.jsx";
import ContactListCard from "./ContactListCard.jsx";

const newlotData = [
  { id: "a", name: "Land Use", value: "Commercial" },
  { id: "b", name: "Land Description", value: "" },
  { id: "c", name: "Lot Area", value: "62,344 SF | 1.43 Acres" },
];

const lotData = [
  { id: "a", name: "Land Use", value: "Commercial" },
  { id: "b", name: "Land Description", value: "Miscellaneous Commercial" },
  { id: "c", name: "Lot Area", value: "62,344 SF | 1.43 Acres" },
];

const newownerData = [
  { id: "a", name: "Owner", value: "1830 LA CIENEGA LLC" },
  { id: "b", name: "Last Transfer", value: "" },
  { id: "c", name: "Last Market Sale", value: "10/31/13 for $11,000,110" },
  { id: "d", name: "Opportunity Zone ", value: "No" },
];

const ownerData = [
  { id: "a", name: "Owner", value: "1830 LA CIENEGA LLC" },
  { id: "b", name: "Last Transfer", value: "12/31/14" },
  { id: "c", name: "Last Market Sale", value: "10/31/13 for $11,000,110" },
  { id: "d", name: "Opportunity Zone ", value: "No" },
];

const newbuildingData = [
  { id: "a", name: "Value", value: "$11,851,071" },
  { id: "b", name: "Square Feet", value: null },
  { id: "c", name: "# of Units", value: "" },
  { id: "d", name: "Year Built", value: "1950" },
];

const buildingData = [
  { id: "a", name: "Value", value: "$11,851,071" },
  { id: "b", name: "Square Feet", value: "34,529 SF" },
  { id: "c", name: "# of Units", value: "1" },
  { id: "d", name: "Year Built", value: "1950" },
];

storiesOf("Elements|ListCards", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Property List Card", () => {
    return React.createElement(() => {
      return (
        <PropertyListCard
          lotData={lotData}
          ownerData={ownerData}
          buildingData={buildingData}
          address="2801 Kelvin Avenue, Irvine, CA 92614"
          APN="374-342-8957"
        />
      );
    });
  })
  .add("Incomplete List Card", () => {
    return React.createElement(() => {
      return (
        <PropertyListCard
          lotData={newlotData}
          ownerData={newownerData}
          buildingData={newbuildingData}
          address="2801 Kelvin Avenue, Irvine, CA 92614"
          APN="374-342-8957"
        />
      );
    });
  })
  .add("PropCard", () => {
    return React.createElement(() => {
      return (
        <PropCard
          address="2801 Kelvin Avenue, Irvine, CA 92614"
          landUse="Commercial"
          price="$11,209,340"
        />
      );
    });
  })
  .add("ContactListCard", () => {
    return React.createElement(() => {
      return (
        <ContactListCard
          name="Annabelle Granger"
          ownerAddress="2801 Kelvin Avenue, Irvine, CA 92614"
        />
      );
    });
  });
