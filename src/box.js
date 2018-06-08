import React from "react";
import styled from "react-emotion";
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
  borderTop,
  borderColor,
  borderLeft
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

Box.propTypes = {
  ...flexBasis.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...width.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
  ...height.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
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

export default Box;
