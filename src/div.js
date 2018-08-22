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
  borderLeft,
  borderColor
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
