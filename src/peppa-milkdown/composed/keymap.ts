/* Copyright 2021, Milkdown by Mirone. */
import type { MilkdownPlugin } from '@milkdown/ctx'
import { emphasisKeymap, strongKeymap } from '@milkdown/preset-commonmark'
import { bulletListKeymap, listItemKeymap, orderedListKeymap, paragraphKeymap } from '@milkdown/preset-commonmark'

/// @internal
export const keymap: MilkdownPlugin[] = [
  listItemKeymap,
  orderedListKeymap,
  bulletListKeymap,
  paragraphKeymap,

  emphasisKeymap,
  strongKeymap,
].flat()