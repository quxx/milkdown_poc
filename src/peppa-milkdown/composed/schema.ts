/* Copyright 2021, Milkdown by Mirone. */

import type { MilkdownPlugin } from "@milkdown/ctx";
import {
  emphasisAttr,
  emphasisSchema,
  linkAttr,
  linkSchema,
  strongAttr,
  strongSchema,
} from "@milkdown/preset-commonmark";
import {
  bulletListAttr,
  bulletListSchema,
  docSchema,
  hardbreakAttr,
  hardbreakSchema,
  hrAttr,
  hrSchema,
  htmlAttr,
  htmlSchema,
  imageAttr,
  imageSchema,
  listItemAttr,
  listItemSchema,
  orderedListAttr,
  orderedListSchema,
  paragraphAttr,
  paragraphSchema,
  textSchema,
} from "@milkdown/preset-commonmark";
import { PepperMilkdownFunc } from "..";

/// @internal
export const schema: MilkdownPlugin[] = [
  docSchema,

  paragraphAttr,
  paragraphSchema,

  hardbreakAttr,
  hardbreakSchema,

  hrAttr,
  hrSchema,

  imageAttr,
  imageSchema,

  bulletListAttr,
  bulletListSchema,

  orderedListAttr,
  orderedListSchema,

  listItemAttr,
  listItemSchema,

  emphasisAttr,
  emphasisSchema,

  strongAttr,
  strongSchema,

  linkAttr,
  linkSchema,

  htmlAttr,
  htmlSchema,

  textSchema,
].flat();

export function buildShema(
  config: PepperMilkdownFunc[]
): MilkdownPlugin | MilkdownPlugin[] {
  let ret: MilkdownPlugin[] = [
    docSchema,
    textSchema,
    paragraphAttr,
    paragraphSchema,
  ].flat();
  config.forEach((f) => {
    switch (f) {
      case PepperMilkdownFunc.Bold:
        ret.push(strongAttr, ...strongSchema);
        break;
      case PepperMilkdownFunc.Italic:
        ret.push(emphasisAttr, ...emphasisSchema);
        break;
    }
  });
  return ret.flat();
}
