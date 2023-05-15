import { Box } from "@mui/material";
import styled from "styled-components";

export const DeckListDropdownDetails = styled(Box)`
  position: absolute;
  width: 370px;
  left: 12px;
  top: 120px;
  z-index: 10;
  height: 496px;
  opacity: 1;
  pointer-events: auto;
  background: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt2d1c272f81522e28/60413bd5415d5f4e8032542b/deckbuilder_dropdown_withbutton.png)
    no-repeat;
  transition: all 0.05s ease-out 0s;
  display: flex;
  justify-content: center;
`;
