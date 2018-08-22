import { style, util } from "styled-system";

export const getSize = n =>
  !util.num(n) || n > 1 ? util.px(n) : n * 100 + "%";

export const maxWidth = style({
  prop: "maxWidth",
  key: "maxWidths",
  transformValue: getSize
});

export const minWidth = style({
  prop: "minWidth",
  key: "minWidths",
  transformValue: getSize
});

export const height = style({
  prop: "height",
  key: "heights",
  transformValue: getSize
});

export const minHeight = style({
  prop: "minHeight",
  key: "minHeights",
  transformValue: getSize
});

export const maxHeight = style({
  prop: "maxHeight",
  key: "maxHeights",
  transformValue: getSize
});

export const borderLeftColor = style({
  prop: "borderLeftColor",
  key: "colors"
});

export const borderRightColor = style({
  prop: "borderRightColor",
  key: "colors"
});
export const borderTopColor = style({
  prop: "borderTopColor",
  key: "colors"
});

export const borderBottomColor = style({
  prop: "borderBottomColor",
  key: "colors"
});
