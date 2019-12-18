import { storiesOf as storiesOfReal } from "@storybook/react";
import { withInfo as withInfoReal } from "@storybook/addon-info";
import {
    withKnobs as withKnobsReal,
    text as textReal,
    boolean as booleanReal,
    select as selectReal,
    object as objectReal,
    optionsKnob as optionsReal,
  } from "@storybook/addon-knobs";
import { specs as specsReal, describe as describeReal, it as itReal, before as beforeReal, beforeEach as beforeEachReal, after as afterReal, afterEach as afterEachReal } from "storybook-addon-specifications";
import { checkA11y as checkA11yReal } from "@storybook/addon-a11y";
import MapboxReal from "layout/Map";

export const storiesOf = storiesOfReal;
export const withInfo = withInfoReal;
export const withKnobs = withKnobsReal;
export const checkA11y = checkA11yReal;
export const text = textReal;
export const boolean = booleanReal;
export const select = selectReal;
export const object = objectReal;
export const options = optionsReal;
export const specs = function(func) {
  setTimeout(() => {
    specsReal(func);
  }, 0);
};
export const describe = describeReal;
export const it = itReal;
export const before = beforeReal;
export const beforeEach = beforeEachReal;
export const after = afterReal;
export const afterEach = afterEachReal;
export const Mapbox = MapboxReal;