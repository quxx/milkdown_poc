/* Copyright 2021, Milkdown by Mirone. */

import type { MilkdownPlugin } from '@milkdown/ctx'
import {
  inlineNodesCursorPlugin,
  inlineSyncConfig,
  inlineSyncPlugin,
  remarkAddOrderInListPlugin,
  remarkHtmlTransformer,
  remarkInlineLinkPlugin,
  remarkLineBreak, remarkMarker,
  syncListOrderPlugin,
} from '@milkdown/preset-commonmark'

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
].flat()