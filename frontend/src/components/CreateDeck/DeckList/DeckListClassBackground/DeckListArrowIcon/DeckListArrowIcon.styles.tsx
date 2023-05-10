import { Box } from "@mui/material";
import styled from "styled-components";
import * as Types from "./DeckListArrowIcon.types";

export const ArrowIcon = styled(Box)<Types.Props>`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/dropdown_deckbuilder_arrow-73ebc9dae00f9b9fbdcf608d93293cafca12e115b2c87cb229477115d4f157098c4ee154b25cd763ed8df6f5b9e1f19b18224f9480fc943c0b3af34faf090ffb.png)
    50% 50% / 75% no-repeat;
  max-width: 21px;
  width: 5.5%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  top: 53%;
  right: 10px;
  padding: 0px 3%;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  ${(props) =>
    props.$isclicked
      ? "transform: translateY(-50%) rotate(180deg)"
      : "transform: translateY(-50%)"}
`;
