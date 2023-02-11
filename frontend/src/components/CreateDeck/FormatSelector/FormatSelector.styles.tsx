import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button/Button";
import { ReactComponent as StandardFormatImage } from "./../../../img/CreateDeck/StandardFormat.svg";
import { Typography } from "@mui/material";
import * as Types from "./FormatSelector.types";

export const FormatSelectorContainer = styled(Grid)``;

export const GridItem = styled(Grid)`
  &.MuiGrid-root {
    display: flex;
    flex-direction: column;
  }
`;

export const FormatName = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweBoldBT;
    color: rgb(255, 255, 255);
    font-size: 16px;
    color: white;
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
      rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
      rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
      rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
      rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
      rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
      rgb(0 0 0) 1.92034px -0.55883px 0px;
  }
`;

export const StandardFormatSVG = styled(StandardFormatImage)<Types.SVGProps>`
  width: 70%;
  fill: rgb(134, 105, 60);
  z-index: 2;
`;

export const StandardFormatButton = styled(Button)`
  &.MuiButton-root {
    z-index: 0;
    width: 75px;
    height: 85px;
    background: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt63ce92e33c79ee7f/622902fe04503350d255bca6/YotH_SVG-01-01.svg)
        no-repeat center/65%,
      url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt43b47368ca583e7d/6037d7d8c6713d4e7a4d4eb5/deckbuilder_tab_standard.png);
    &:hover {
      background: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt851e1166ca161eb3/6036baec415d5f4e803250b1/deckbuilder_tab_hover.webp)
          center,
        url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt63ce92e33c79ee7f/622902fe04503350d255bca6/YotH_SVG-01-01.svg)
          no-repeat center/65%,
        url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt43b47368ca583e7d/6037d7d8c6713d4e7a4d4eb5/deckbuilder_tab_standard.png);
    }
    &.selected-format {
      background: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt851e1166ca161eb3/6036baec415d5f4e803250b1/deckbuilder_tab_hover.webp)
          center,
        url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt63ce92e33c79ee7f/622902fe04503350d255bca6/YotH_SVG-01-01.svg)
          no-repeat center/65%,
        url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt43b47368ca583e7d/6037d7d8c6713d4e7a4d4eb5/deckbuilder_tab_standard.png);
    }
  }
`;

export const ClassicFormatButton = styled(Button)`
  &.MuiButton-root {
    width: 75px;
    height: 85px;
    transition: all 0.15s ease-out 0s;
    background-image: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/bltcaa946e4f9e0b273/6036baec0b1d853be8ad56ea/deckbuilder_tab_classic.webp);
    &:hover {
      background: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt851e1166ca161eb3/6036baec415d5f4e803250b1/deckbuilder_tab_hover.webp)
          center,
        url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/bltcaa946e4f9e0b273/6036baec0b1d853be8ad56ea/deckbuilder_tab_classic.webp);
    }
    &.selected-format {
      background: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt851e1166ca161eb3/6036baec415d5f4e803250b1/deckbuilder_tab_hover.webp)
          center,
        url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/bltcaa946e4f9e0b273/6036baec0b1d853be8ad56ea/deckbuilder_tab_classic.webp);
    }
  }
`;

export const WildFormatButton = styled(Button)`
  &.MuiButton-root {
    width: 75px;
    height: 85px;
    transition: all 0.15s ease-out 0s;
    background-image: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blta03fd5ddc70cc2d9/6036baec02ccfb4d0f67236d/deckbuilder_tab_wild.webp);
    &:hover {
      background: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt851e1166ca161eb3/6036baec415d5f4e803250b1/deckbuilder_tab_hover.webp)
          center,
        url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blta03fd5ddc70cc2d9/6036baec02ccfb4d0f67236d/deckbuilder_tab_wild.webp);
    }
    &.selected-format {
      background: url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt851e1166ca161eb3/6036baec415d5f4e803250b1/deckbuilder_tab_hover.webp)
          center,
        url(https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blta03fd5ddc70cc2d9/6036baec02ccfb4d0f67236d/deckbuilder_tab_wild.webp);
    }
  }
`;
