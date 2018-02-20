import Box from "./box";

const Container = styled(Box)`
  max-width: ${props => props.maxWidth};
`;
Container.defaultProps = {
  mx: "auto",
};

export default Container;
