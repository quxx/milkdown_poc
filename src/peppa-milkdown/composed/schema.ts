/* Copyright 2021, Milkdown by Mirone. */

import type { MilkdownPlugin } from '@milkdown/ctx'
import { emphasisAttr, emphasisSchema, linkAttr, linkSchema, strongAttr, strongSchema } from '@milkdown/preset-commonmark'
import {
  bulletListAttr,
  bulletListSchema,
  docSchema,
  hardbreakAttr,
  hardbreakSchema,
  hrAttr,
  hrSchema, htmlAttr,
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
} from '@milkdown/preset-commonmark'

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
].flat()