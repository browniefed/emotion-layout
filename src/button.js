import {
  fontSize,
  color,
  space,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  borders,
  buttonStyle,
  textStyle,
  colorStyle,
  propTypes,
  bgColor,
} from "styled-system";
import cleanElement from "clean-element";
import styled from "react-emotion";

const CleanButton = cleanElement("button");
CleanButton.propTypes = {
  ...propTypes.fontSize,
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.textAlign,
  ...propTypes.lineHeight,
  ...propTypes.fontWeight,
  ...propTypes.letterSpacing,
  ...propTypes.borders,
  ...propTypes.buttonStyle,
  ...propTypes.textStyle,
  ...propTypes.colorStyle,
  ...propTypes.bgColor,
};
export const Button = styled(CleanButton)(
  [],
  fontSize,
  color,
  space,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  borders,
  buttonStyle,
  textStyle,
  colorStyle,
  bgColor,
);