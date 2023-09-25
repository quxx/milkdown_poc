/* Copyright 2021, Milkdown by Mirone. */
import type { MilkdownPlugin } from '@milkdown/ctx'
import {wrapInBulletListInputRule, wrapInOrderedListInputRule } from '@milkdown/preset-commonmark'

/// @internal
export const inputrules: MilkdownPlugin[] = [
  wrapInBulletListInputRule,
  wrapInOrderedListInputRule,
].flat()