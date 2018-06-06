import { responsiveStyle, util } from "styled-system";

export const getSize = n =>
  !util.num(n) || n > 1 ? util.px(n) : n * 100 + "%";

export const maxWidth = responsiveStyle({
  prop: "maxWidth",
  key: "maxWidths",
  getter: getSize
});

export const minWidth = responsiveStyle({
  prop: "minWidth",
  key: "minWidths",
  getter: getSize
});

export const height = responsiveStyle({
  prop: "height",
  key: "heights",
  getter: getSize
});

export const minHeight = responsiveStyle({
  prop: "minHeight",
  key: "minHeights",
  getter: getSize
});

export const maxHeight = responsiveStyle({
  prop: "maxHeight",
  key: "maxHeights",
  getter: getSize
});
