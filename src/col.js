import React from "react";
import Box from "./box";

const Column = ({ shrink, ...props }) => {
  return (
    <Box
      {...props}
      flexBasis={props.flexBasis || props.width || props.w}
      maxWidth={props.maxWidth || props.width || props.w}
      flex={shrink ? "1 1 auto" : "1 0 auto"}
    />
  );
};

Column.defaultProps = {
  shrink: true,
};

Column.displayName = "Column";

export default Column;
