// /* eslint-disable linebreak-style */
// /* eslint-disable react/jsx-filename-extension */
// import React from "react";
// import { Padding, IconGrid } from "helpers/Display";
// import Grid from "layout/Grid";
// import Text, { Title } from "base/Typography";
// import { CardGrid } from "elements/Card";
// import Icon from "atoms/Icon";
// import { iconsType, iconsSize } from "atoms/Icon/libraryIcon.data";

// storiesOf("Atoms|Icon", module)
//   .addDecorator(Padding)
//   .addDecorator(withKnobs)
//   .add(
//     "Documentation",
//     () => {
//       return <Icon icon="user_circle" size="lg" />;
//     })
//   .add("Knobs", () => {
//     return (
//       <Icon
//         icon={select(
//           "icon",
//           {
//             user_circle: "user_circle",
//             down: "down",
//             bookmark: "bookmark_solid",
//             plus: "plus",
//             print: "print",
//           },
//           "user_circle",
//           "Icon",
//         )}
//         variant={select(
//           "variant",
//           {
//             info: "info",
//             standard: "default",
//             success: "success",
//             warning: "warning",
//             action: "action",
//             alert: "alert",
//           },
//           "default",
//           "Icon",
//         )}
//         size={select(
//           "size",
//           {
//             "xs": "xs",
//             "sm": "sm",
//             "standard": "default",
//             "lg": "lg",
//             "xl": "xl",
//             "xxl": "xxl",
//             "xxxl": "xxxl",
//             "xtreme": "xtreme",
//           },
//           "default",
//           "Icon",
//         )}
//         onClick={select("interactive", {
//           false: null,
//           true: function onClick() { },
//         }, null, "Icon")}
//         disabled={boolean("disabled", false, "Icon")}
//       />
//     );
//   })

//   .add("Type", () => {
//     return (
//       <Grid columns="1">
//         <Title text="Icon Types" size="lg" styling="underline" />
//         <Text text="Icons inherit the 'color' of the parent container but can be overridden." />
//         <Text text="Available Props: default (no prop)', 'info', 'success', 'warning', 'alert'" />
//         <CardGrid>
//           <IconGrid data={iconsType} />
//         </CardGrid>
//       </Grid>
//     );
//   })
//   .add("Size", () => {
//     return (
//       <Grid columns="1">
//         <Title text="Icon Sizes" size="lg" styling="underline" />
//         <Text text="Icons inherit the 'font-size' of the parent container and are relatively sized." />
//         <Text text="Available Props: 'xs', 'sm', 'standard (no prop)', 'lg', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'" />
//         <CardGrid>
//           <IconGrid data={iconsSize} />
//         </CardGrid>
//       </Grid>
//     );
//   });
