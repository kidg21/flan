import { storiesOf as storiesOfReal } from "@storybook/react";
import { ThemeProvider as ThemeProviderReal } from "styled-components";
import { DMPTheme as DMPThemeReal } from "Variables";
import { Padding as PaddingReal } from "helpers/Display";
import { withInfo as withInfoReal } from "@storybook/addon-info";
import {
  withKnobs as withKnobsReal,
  text as textReal,
  boolean as booleanReal,
  select as selectReal,
  object as objectReal,
  optionsKnob as optionsReal,
  number as numberReal,
  array as arrayReal,
} from "@storybook/addon-knobs";
import { action as actionReal } from "@storybook/addon-actions";
import { expect as expectReal } from "chai";
import { mount as mountReal } from "enzyme";
import { specs as specsReal, describe as describeReal, it as itReal, before as beforeReal, beforeEach as beforeEachReal, after as afterReal, afterEach as afterEachReal } from "storybook-addon-specifications";
import { checkA11y as checkA11yReal } from "@storybook/addon-a11y";
import MapboxReal from "layout/Map";

export const storiesOf = storiesOfReal;
export const ThemeProvider = ThemeProviderReal;
export const DMPTheme = DMPThemeReal;
export const Padding = PaddingReal;
export const withInfo = withInfoReal;
export const withKnobs = withKnobsReal;
export const action = actionReal;
export const checkA11y = checkA11yReal;
export const text = textReal;
export const boolean = booleanReal;
export const select = selectReal;
export const object = objectReal;
export const options = optionsReal;
export const number = numberReal;
export const array = arrayReal;
export const expect = expectReal;
export const mount = mountReal;
export const specs = function (func) {
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