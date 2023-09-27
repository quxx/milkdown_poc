/* Copyright 2021, Milkdown by Mirone. */
import type { MilkdownPlugin } from "@milkdown/ctx";
import { emphasisKeymap, strongKeymap } from "@milkdown/preset-commonmark";
import {
  bulletListKeymap,
  listItemKeymap,
  orderedListKeymap,
  paragraphKeymap,
} from "@milkdown/preset-commonmark";
import { PepperMilkdownFunc } from "..";

/// @internal
export const keymap: MilkdownPlugin[] = [
  listItemKeymap,
  orderedListKeymap,
  bulletListKeymap,
  paragraphKeymap,

  emphasisKeymap,
  strongKeymap,
].flat();

export function buildKeyMap(
  config: PepperMilkdownFunc[]
): MilkdownPlugin | MilkdownPlugin[] {
  let ret: MilkdownPlugin[] = [];
  config.forEach((f) => {
    switch (f) {
      case PepperMilkdownFunc.Bold:
        ret.push(...strongKeymap);
        break;
      case PepperMilkdownFunc.Italic:
        ret.push(...emphasisKeymap);
        break;
    }
  });
  return ret.flat();
}
