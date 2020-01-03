/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Grid from "layout/Grid";
import Title, {
  Headline,
  SubTitle,
  Description,
  Body,
  Link,
  Number,
  Code
} from "base/Typography";

/** TODO: Add 'Documentation' and 'Knobs' stories */
storiesOf("Application|Style Guides/", module).addDecorator(withInfo);
// .add("Typography", () => {
//   return (
//     <Grid columns="1">
//       <Headline text="Headline" />
//       <Title text="Title" />
//       <SubTitle text="Subtitle" />
//       <Body text="Body Text" />
//       <Number text="1234567890" />
//       <Description text="This is a Description" />
//       <Link
//         text="This is a standard Link"
//         title="Stuff about anchor tags"
//         href="https://www.w3.org/MarkUp/1995-archive/Elements/A.html"
//         target="_blank"
//       />
//       <Code text="<Command command='search' />" />

//       <Title text="Title with count" count="1" />
//       <Title text="Results" count="235" bold />
//       <Title>
//         This is a Title that wraps a text string and an inline
//         <Link
//           text="link"
//           title="Stuff about anchor tags"
//           href="https://www.w3.org/MarkUp/1995-archive/Elements/A.html"
//           target="_blank"
//         />
//         component as a child.
//       </Title>
//       <Title text="This is 'info' text" type="info" />
//       <Title text="This is 'success' text" type="success" />
//       <Title text="This is 'warning' text" type="warning" />
//       <Title text="This is 'alert' text" type="alert" />

//       <Title text="This is a 'xs' Title" size="xs" />
//       <Title text="This is a 'sm' Title" size="sm" />
//       <Title text="This is a standard 'm' Title" />
//       <Title text="This is a 'lg' Title" size="lg" />
//       <Title text="This is an '2x' Title" size="2x" />
//       <Title text="This is an '3x' Title" size="3x" />

//       <Title text="This is an 'italic' Title" styling="italic" />
//       <Title text="This is an 'underline' Title" styling="underline" />
//     </Grid>
//   );
// });
