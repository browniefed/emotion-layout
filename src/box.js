import React from "react";
import styled from "@emotion/styled";
import {
  space,
  width,
  flex,
  color,
  fontSize,
  order,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  display,
  flexBasis,
  position,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor
} from "styled-system";
import tag from "clean-tag";
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

const Div = styled(tag)(
  [],
  display,
  flexWrap,
  flexDirection,
  flexBasis,
  alignItems,
  justifyContent,
  width,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  height,
  space,
  fontSize,
  color,
  flex,
  order,
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

const Box = props => <Div {...props} />;

Box.defaultProps = { display: "flex" };
Box.displayName = "Box";

export default Box;
