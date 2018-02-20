import Box from "./box";
import styled from "react-emotion";

const Container = styled(Box)`
  max-width: ${props => props.maxWidth};
`;
Container.defaultProps = {
  mx: "auto",
};

export default Container;
