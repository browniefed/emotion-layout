import {
  fontSize,
  color,
  space,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  borders,
  textStyle,
  colorStyle
} from "styled-system";
import cleanElement from "clean-element";
import styled from "react-emotion";

const CleanSpan = cleanElement("span");
const CleanParagraph = cleanElement("p");

const Text = styled(CleanSpan)(
  [],
  fontSize,
  color,
  space,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  borders,
  textStyle,
  colorStyle
);

export const Paragraph = styled(CleanParagraph)(
  [],
  fontSize,
  color,
  space,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  borders,
  textStyle,
  colorStyle
);

export default Text;
