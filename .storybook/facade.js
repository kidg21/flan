import { storiesOf as storiesOfReal } from "@storybook/react";
import { withInfo as withInfoReal } from "@storybook/addon-info";
import {
    withKnobs as withKnobsReal,
    text as textReal,
    boolean as booleanReal,
    select as selectReal,
    optionsKnob as optionsReal,
  } from "@storybook/addon-knobs";
import { specs as specsReal, describe as describeReal, it as itReal, before as beforeReal, after as afterReal } from "storybook-addon-specifications";
import { expect as expectReal } from "chai";

export const storiesOf = storiesOfReal;
export const withInfo = withInfoReal;
export const withKnobs = withKnobsReal;
export const text = textReal;
export const boolean = booleanReal;
export const select = selectReal;
export const options = optionsReal;
export const specs = specsReal;
export const describe = describeReal;
export const it = itReal;
export const before = beforeReal;
export const after = afterReal;
export const expect = expectReal;