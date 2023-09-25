/* Copyright 2021, Milkdown by Mirone. */
import type { MilkdownPlugin } from '@milkdown/ctx'
import { toggleEmphasisCommand, toggleLinkCommand, toggleStrongCommand, updateLinkCommand } from '@milkdown/preset-commonmark'
import {
  liftFirstListItemCommand,
  liftListItemCommand,
  sinkListItemCommand,
  splitListItemCommand,
  turnIntoTextCommand,
  wrapInBulletListCommand,
  wrapInOrderedListCommand,
} from '@milkdown/preset-commonmark'

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
]