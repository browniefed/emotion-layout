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
  colorStyle,
  propTypes,
} from "styled-system";
import cleanElement from "clean-element";
import styled from "react-emotion";

const CleanSpan = cleanElement("span");
CleanSpan.propTypes = {
  ...propTypes.fontSize,
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.textAlign,
  ...propTypes.lineHeight,
  ...propTypes.fontWeight,
  ...propTypes.letterSpacing,
  ...propTypes.borders,
  ...propTypes.textStyle,
  ...propTypes.colorStyle,
};
export const Text = styled(CleanSpan)(
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
  colorStyle,
);
