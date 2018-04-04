import { space, display, propTypes } from "styled-system";
import cleanElement from "clean-element";
import styled from "react-emotion";

const CleanDiv = cleanElement("div");
CleanDiv.propTypes = {
  ...propTypes.space,
  ...propTypes.display,
};
export const Div = styled(CleanDiv)([], space, display);
