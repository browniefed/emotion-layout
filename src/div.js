import {
  space,
  width,
  color,
  fontSize,
  responsiveStyle,
  util,
  display,
  position
} from "styled-system";
import cleanElement from "clean-element";
import styled from "react-emotion";

const getWidth = n => (!util.num(n) || n > 1 ? util.px(n) : n * 100 + "%");

const maxWidth = responsiveStyle({
  prop: "maxWidth",
  key: "maxWidths",
  getter: getWidth
});

const minWidth = responsiveStyle({
  prop: "minWidth",
  key: "minWidths",
  getter: getWidth
});

const CleanDiv = cleanElement("div");
CleanDiv.propTypes = {
  ...width.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...position.propTypes
};
const Div = styled(CleanDiv)(
  [],
  space,
  display,
  width,
  minWidth,
  maxWidth,
  fontSize,
  color,
  position
);

export default Div;
