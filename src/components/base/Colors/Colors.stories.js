/* eslint-disable linebreak-style */
/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Grid from "layout/Grid";
import ThemeColors, { Colors } from "./Colors";

storiesOf("Application|Style Guides/Colors/", module)
  .add("Theme", () => {
    return (
      <Grid>
        <ThemeColors color="primaryTint" />
        <ThemeColors color="primaryLight" />
        <ThemeColors color="primary" />
        <ThemeColors color="primaryDark" />

        <ThemeColors color="secondaryTint" />
        <ThemeColors color="secondaryLight" />
        <ThemeColors color="secondary" />
        <ThemeColors color="secondaryDark" />
      </Grid>
    );
  })
  .add("Platform", () => {
    return (
      <Grid>
        <Colors color="grey0" />
        <Colors color="grey1" />
        <Colors color="grey2" />
        <Colors color="grey3" />
        <Colors color="grey4" />
        <Colors color="grey5" />
        <Colors color="grey6" />
        <Colors color="grey7" />
        <Colors color="grey8" />
        <Colors color="grey9" />
        <Colors color="grey10" />
      </Grid>
    );
  })
  .add("Notification", () => {
    return (
      <Grid>
        <ThemeColors color="infoTint" />
        <ThemeColors color="infoLight" />
        <ThemeColors color="info" />
        <ThemeColors color="infoDark" />
        <ThemeColors color="successTint" />
        <ThemeColors color="successLight" />
        <ThemeColors color="success" />
        <ThemeColors color="successDark" />
        <ThemeColors color="warningTint" />
        <ThemeColors color="warningLight" />
        <ThemeColors color="warning" />
        <ThemeColors color="warningDark" />
        <ThemeColors color="alertTint" />
        <ThemeColors color="alertLight" />
        <ThemeColors color="alertBright" />
        <ThemeColors color="alert" />
        <ThemeColors color="alertDark" />
      </Grid>
    );
  })
  .add("Brand", () => {
    return (
      <Grid>
        <Colors color="lightBoxNavy" />
        <Colors color="lightBoxCyan" />
        <Colors color="lightBoxGold" />
        <Colors color="lightBoxGrey" />
      </Grid>
    );
  })
  .add("Accent", () => {
    return (
      <Grid>
        <Colors color="bloodorange0" />
        <Colors color="bloodorange1" />
        <Colors color="bloodorange2" />
        <Colors color="bloodorange3" />
        <Colors color="bloodorange4" />
        <Colors color="bloodorange5" />
        <Colors color="bloodorange6" />
        <Colors color="bloodorange7" />
        <Colors color="bloodorange8" />
        <Colors color="bloodorange9" />
        <Colors color="bloodorange10" />

        <Colors color="cyan0" />
        <Colors color="cyan1" />
        <Colors color="cyan2" />
        <Colors color="cyan3" />
        <Colors color="cyan4" />
        <Colors color="cyan5" />
        <Colors color="cyan6" />
        <Colors color="cyan7" />
        <Colors color="cyan8" />
        <Colors color="cyan9" />
        <Colors color="cyan10" />

        <Colors color="moss0" />
        <Colors color="moss1" />
        <Colors color="moss2" />
        <Colors color="moss3" />
        <Colors color="moss4" />
        <Colors color="moss5" />
        <Colors color="moss6" />
        <Colors color="moss7" />
        <Colors color="moss8" />
        <Colors color="moss9" />
        <Colors color="moss10" />

        <Colors color="gold0" />
        <Colors color="gold1" />
        <Colors color="gold2" />
        <Colors color="gold3" />
        <Colors color="gold4" />
        <Colors color="gold5" />
        <Colors color="gold6" />
        <Colors color="gold7" />
        <Colors color="gold8" />
        <Colors color="gold9" />
        <Colors color="gold10" />

        <Colors color="navy0" />
        <Colors color="navy1" />
        <Colors color="navy2" />
        <Colors color="navy3" />
        <Colors color="navy4" />
        <Colors color="navy5" />
        <Colors color="navy6" />
        <Colors color="navy7" />
        <Colors color="navy8" />
        <Colors color="navy9" />
        <Colors color="navy10" />

        <Colors color="smoke0" />
        <Colors color="smoke1" />
        <Colors color="smoke2" />
        <Colors color="smoke3" />
        <Colors color="smoke4" />
        <Colors color="smoke5" />
        <Colors color="smoke6" />
        <Colors color="smoke7" />
        <Colors color="smoke8" />
        <Colors color="smoke9" />
        <Colors color="smoke10" />
      </Grid>
    );
  });

// .add("Color Palette", () => {
//   return (
//     <ThemeProvider
//       theme={options(
//         "Theme",
//         {
//           Light: DMPTheme,
//           Dark: darkTheme,
//         },
//         DMPTheme,
//         { display: "select" },
//         "Theme",
//       )}
//     >
//       <ColorPalette />
//     </ThemeProvider>
//   );
// });
