import { space, display, propTypes } from "styled-system";
import cleanElement from "clean-element";
import styled from "react-emotion";

const CleanDiv = cleanElement("div");
CleanDiv.propTypes = {
  ...propTypes.space,
  ...width.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...display.propTypes
};
const Div = styled(CleanDiv)(
  [],
  space,
  display,
  width,
  minWidth,
  maxWidth,
  fontSize,
  color
);

export default Div;
