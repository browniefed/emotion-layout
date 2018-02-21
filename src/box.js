import React from "react";
import styled from "react-emotion";
import {
  space,
  width,
  flex,
  color,
  fontSize,
  order,
  responsiveStyle,
  util,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  display,
} from "styled-system";
import tag from "clean-tag";

const getWidth = n => (!util.num(n) || n > 1 ? util.px(n) : n * 100 + "%");

const maxWidth = responsiveStyle({
  prop: "maxWidth",
  key: "maxWidths",
  getter: getWidth,
});

const minWidth = responsiveStyle({
  prop: "minWidth",
  key: "minWidths",
  getter: getWidth,
});

const Div = styled(tag)(
  [],
  display,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  width,
  minWidth,
  maxWidth,
  space,
  fontSize,
  color,
  flex,
  order,
);

const Box = props => <Div {...props} />;

Box.defaultProps = { display: "flex", width: 1 };
Box.displayName = "Box";

Box.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...width.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...display.propTypes,
};

export default Box;
