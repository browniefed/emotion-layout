import React from "react";
import Box from "./box";
import styled from "react-emotion";

const Column = ({ shrink, ...props}) => {
  return <Box
    {...props}
    flexBasis={props.flexBasis || props.width}
    maxWidth={props.maxWidth || props.width}
    flex={props => (shrink ? "1 1 auto" : "1 0 auto")}
  />
}

Column.defaultProps = {
  shrink: true,
};
Column.displayName = "Column";

export default Column;
