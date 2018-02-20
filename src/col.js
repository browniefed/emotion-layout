import Box from "./box";
import styled from "react-emotion";

const Column = styled(Box)`
  flex-basis: ${props => props.flexBasis || props.width};
  max-width: ${props => props.maxWidth || props.width};
  flex: ${props => (props.shrink ? "1 1 auto" : "1 0 auto")};
`;

Column.defaultProps = {
  shrink: true,
};
Column.displayName = "Column";

export default Column;
