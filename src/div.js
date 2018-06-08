import {
  space,
  width,
  color,
  fontSize,
  display,
  position,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderTop,
  borderColor,
  borderLeft
} from "styled-system";
import cleanElement from "clean-element";
import styled from "react-emotion";
import {
  maxWidth,
  maxHeight,
  minHeight,
  minWidth,
  height,
  borderBottomColor,
  borderTopColor,
  borderRightColor,
  borderLeftColor
} from "./utils";

const CleanDiv = cleanElement("div");
CleanDiv.propTypes = {
  ...width.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...position.propTypes,
  ...border.propTypes,
  ...borderTop.propTypes,
  ...borderLeft.propTypes,
  ...borderRight.propTypes,
  ...borderBottom.propTypes,
  ...borderColor.propTypes,
  ...borderBottomColor.propTypes,
  ...borderTopColor.propTypes,
  ...borderRightColor.propTypes,
  ...borderLeftColor.propTypes,
  ...borderColor.propTypes
};
const Div = styled(CleanDiv)(
  [],
  space,
  display,
  width,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  height,
  fontSize,
  color,
  position,
  border,
  borderTop,
  borderLeft,
  borderRight,
  borderBottom,
  borderColor,
  borderBottomColor,
  borderTopColor,
  borderRightColor,
  borderLeftColor
);

export default Div;
