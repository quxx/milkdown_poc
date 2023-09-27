/* Copyright 2021, Milkdown by Mirone. */
import type { MilkdownPlugin } from "@milkdown/ctx";
import {
  wrapInBulletListInputRule,
  wrapInOrderedListInputRule,
} from "@milkdown/preset-commonmark";
import { PepperMilkdownFunc } from "..";

/// @internal
export const inputrules: MilkdownPlugin[] = [
  wrapInBulletListInputRule,
  wrapInOrderedListInputRule,
].flat();

export function buildInputrules(
  config: PepperMilkdownFunc[]
): MilkdownPlugin | MilkdownPlugin[] {
  let ret: MilkdownPlugin[] = [];
  config.forEach((f) => {
    switch (f) {
      case PepperMilkdownFunc.Bold:
        break;
      case PepperMilkdownFunc.Italic:
        break;
    }
  });
  return ret.flat();
}
