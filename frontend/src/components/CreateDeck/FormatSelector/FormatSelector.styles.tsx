import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button/Button";
import { ReactComponent as StandardFormatImage } from "./../../../img/CreateDeck/StandardFormat.svg";

export const FormatSelectorContainer = styled(Grid)``;

export const GridItem = styled(Grid)`
  &.MuiGrid-root {
    width: 75px;
    height: 85px;
    background-image: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt43b47368ca583e7d/6037d7d8c6713d4e7a4d4eb5/deckbuilder_tab_standard.png);
  }
`;

export const StandardFormatSVG = styled(StandardFormatImage)`
  width: 70%;
  fill: rgb(134, 105, 60);
`;

export const StandardFormatButton = styled(Button)`
  &.MuiButton-root {
    width: 75px;
    height: 85px;
    background-image: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt43b47368ca583e7d/6037d7d8c6713d4e7a4d4eb5/deckbuilder_tab_standard.png);
  }
`;

export const ClassicFormatButton = styled(Button)`
  &.MuiButton-root {
    width: 75px;
    height: 85px;
    transition: all 0.15s ease-out 0s;
    background-image: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/bltcaa946e4f9e0b273/6036baec0b1d853be8ad56ea/deckbuilder_tab_classic.webp);
  }
`;

export const WildFormatButton = styled(Button)`
  &.MuiButton-root {
    width: 75px;
    height: 85px;
    transition: all 0.15s ease-out 0s;
    background-image: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blta03fd5ddc70cc2d9/6036baec02ccfb4d0f67236d/deckbuilder_tab_wild.webp);
  }
`;
