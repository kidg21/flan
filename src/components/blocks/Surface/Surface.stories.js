import React from "react";
import { Padding } from "helpers/Display";
import Surface from "./Surface.jsx";
import { mockContent, mockStringTemplate, mockContentNoDisplayFields } from "./Surface.mocks";
import { SummaryPanelTemplate } from "./SurfaceTemplates";

storiesOf("Blocks|Surface", module)
  .addDecorator(Padding)
  .add("Summary Panel", () => {
    return (
      <Surface surfaceTemplate={SummaryPanelTemplate} content={mockContent} />
    );
  })
  .add("Template from string", () => {
    return (<Surface surfaceTemplate={mockStringTemplate} content={mockContent} />);
  })
  .add("Content with no displayFields", () => {
    return (<Surface surfaceTemplate={SummaryPanelTemplate} content={mockContentNoDisplayFields} />);
  });
