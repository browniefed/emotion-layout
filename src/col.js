import Box from "./box";
import styled from "react-emotion";

const Column = styled(Box)`
  flex-basis: ${props => props.flexBasis || props.width};
  max-width: ${props => props.maxWidth || props.width};
`;
Column.displayName = "Column";

export default Column;
