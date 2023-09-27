/* Copyright 2021, Milkdown by Mirone. */
import type { MilkdownPlugin } from "@milkdown/ctx";
import {
  toggleEmphasisCommand,
  toggleLinkCommand,
  toggleStrongCommand,
  updateLinkCommand,
  liftFirstListItemCommand,
  liftListItemCommand,
  sinkListItemCommand,
  splitListItemCommand,
  turnIntoTextCommand,
  wrapInBulletListCommand,
  wrapInOrderedListCommand,
} from "@milkdown/preset-commonmark";
import { PepperMilkdownFunc } from "..";

/// @internal
export const commands: MilkdownPlugin[] = [
  turnIntoTextCommand,

  wrapInOrderedListCommand,
  wrapInBulletListCommand,
  sinkListItemCommand,
  splitListItemCommand,
  liftListItemCommand,
  liftFirstListItemCommand,

  toggleEmphasisCommand,
  toggleStrongCommand,

  toggleLinkCommand,
  updateLinkCommand,
];

export function buildCommands(
  config: PepperMilkdownFunc[]
): MilkdownPlugin | MilkdownPlugin[] {
  let ret: MilkdownPlugin[] = [];
  config.forEach((f) => {
    switch (f) {
      case PepperMilkdownFunc.Bold:
        ret.push(toggleStrongCommand);
        break;
      case PepperMilkdownFunc.Italic:
        ret.push(toggleEmphasisCommand);
        break;
    }
  });
  return ret.flat();
}
