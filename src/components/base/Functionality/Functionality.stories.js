import React from "react";
import { storiesOf } from "@storybook/react";
import { addDecorator } from "@storybook/react";

addDecorator(story => <div style={{ padding: 20 }}>{story()}</div>);

const decorator = story => (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        display: 'inline-block',
        padding: '10px',
      }}
    >
      {story()}
    </div>
  );
  
storiesOf("Base")
.addWithChapters("Functionality", {
  useTheme: false,
  subtitle: "Rules and Guidlines for UI/UX",
  info: `
  • Do **NOT** include multiple steps in dialog boxes

  • Use Active words like "Apply" and "Import" to show what action will be achieved; do NOT use passive, generic words like "Okay" or "Yes"

  • All components already account for padding and spaces; padding should never be added to a component unless approved by the Design Team. 

  • Overlay is used for every Dialog and Popup box: to draw attention to the overlay and shows that the rest  of the area isn't active

  • Allow users to click (or tap) away to close the dialog box (except modal dialogs)

  • Never have a dialog box launch another dialog box.
      `,
  chapters: [
    // List of Chapters
    {
      title: "This is a Chapter's Title",
      subtitle: "And this is a chapter's subtitle",
      info: `
          Chapters can be used to group related components together, or show varying states of a component.
          Each chapter comes with a **Chapter Title**, **Chapter Subtitle**, **Chapter Info** and a list of **Sections**.
          Simply omit any of them to hide them from rendering.
        `}
      ]
})