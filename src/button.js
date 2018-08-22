import {
  fontSize,
  color,
  space,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  borders,
  variant,
  textStyle,
  colorStyle,
  propTypes,
  bgColor,
} from "styled-system";
import cleanElement from "clean-element";
import styled from "react-emotion";

const buttonStyle = variant({
  key: 'buttons'
})

const CleanButton = cleanElement("button");

const Button = styled(CleanButton)(
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

export default Button;
