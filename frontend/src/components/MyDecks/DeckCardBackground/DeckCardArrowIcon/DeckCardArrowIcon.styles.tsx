import { Box } from "@mui/material";
import styled from "styled-components";

export const ArrowIcon = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/dropdown_deckbuilder_arrow-73ebc9dae00f9b9fbdcf608d93293cafca12e115b2c87cb229477115d4f157098c4ee154b25cd763ed8df6f5b9e1f19b18224f9480fc943c0b3af34faf090ffb.png)
    50% 50% / 75% no-repeat;
  max-width: 21px;
  height: 100%;
  cursor: pointer;
  position: relative;
  left: 280px;
  bottom: 40px;
  z-index: 2;
  padding: 0px 3%;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  transform: translateY(-50%);
  @media only screen and (max-width: 660px) {
    left: 139px;
    top: -25px;
  }
`;
