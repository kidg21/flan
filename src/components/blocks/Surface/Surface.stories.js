import React from "react";
import { Padding } from "helpers/Display";
import Surface from "./Surface.jsx";
import { mockContent, mockStringTemplate } from "./Surface.mocks";
import SummaryPanelTemplate from "./SurfaceTemplates/SummaryPanelTemplate.jsx";
import AnotherTemplate from "./SurfaceTemplates/AnotherTemplate.jsx";

storiesOf("Blocks|Surface", module)
  .addDecorator(Padding)
  .add("Summary Panel", () => {
    return (
      <Surface template={SummaryPanelTemplate} content={mockContent} />
    );
  })
  .add("Another Template", () => {
    return (
      <Surface template={AnotherTemplate} content={mockContent} />
    );
  })
  .add("Template from string", () => {
    return (<Surface template={mockStringTemplate} content={mockContent} />);
  });
