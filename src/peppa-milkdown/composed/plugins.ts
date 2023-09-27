/* Copyright 2021, Milkdown by Mirone. */

import type { MilkdownPlugin } from "@milkdown/ctx";
import {
  inlineNodesCursorPlugin,
  inlineSyncConfig,
  inlineSyncPlugin,
  remarkAddOrderInListPlugin,
  remarkHtmlTransformer,
  remarkInlineLinkPlugin,
  remarkLineBreak,
  remarkMarker,
  syncListOrderPlugin,
} from "@milkdown/preset-commonmark";
import { PepperMilkdownFunc } from "..";

/// @internal
export const plugins: MilkdownPlugin[] = [
  inlineSyncConfig,
  inlineSyncPlugin,

  inlineNodesCursorPlugin,

  remarkAddOrderInListPlugin,
  remarkInlineLinkPlugin,
  remarkLineBreak,
  remarkHtmlTransformer,
  remarkMarker,

  syncListOrderPlugin,
].flat();

export function buildPlugins(
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
