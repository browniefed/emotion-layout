import {
  space,
  width,
  color,
  fontSize,
  display,
  position,
  borders,
  borderColor
} from "styled-system";
import cleanElement from "clean-element";
import styled from "react-emotion";
import { maxWidth, maxHeight, minHeight, minWidth, height } from "./utils";

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
  ...borders.propTypes,
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
  borders,
  borderColor
);

export default Div;
