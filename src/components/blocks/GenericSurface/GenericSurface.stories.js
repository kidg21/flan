import React from "react";
import { Padding } from "helpers/Display";
import GenericSurface from "./GenericSurface.jsx";
import { mockContent, mockJSXString } from "./surface.mocks";
import SummaryPanelTemplate from "./SurfaceTemplates/SummaryPanelTemplate.jsx";
import AnotherTemplate from "./SurfaceTemplates/AnotherTemplate.jsx";

storiesOf("Blocks|Generic Surface", module)
  .addDecorator(Padding)
  .add("Summary Panel", () => {
    return (
      <GenericSurface template={SummaryPanelTemplate} content={mockContent} />
    );
  })
  .add("Another Template", () => {
    return (
      <GenericSurface template={AnotherTemplate} content={mockContent} />
    );
  })
  .add("Template from string", () => {
    return (<GenericSurface template={mockJSXString} content={mockContent} />);
  });
