import { Box, Typography } from "@mui/material";
import * as Types from "./DeckCardBackground.types";
import styled from "styled-components";

export const DeckCardBackground = styled(Box)<Types.IBackgroundProps>`
  background-image: url(${(props) => props.backgroundimg});
  background-size: 100%;
  width: 493px;
  height: 92px;
  z-index: 2;
  background-repeat: no-repeat;
  background-position: left top;
  position: relative;
  top: 32px;
  right: 30px;
  @media only screen and (max-width: 660px) {
    background-size: 245px 45px;
    width: 245px;
    height: 45px;
    top: 17px;
    right: 15px;
  }
`;

export const DeckCardTitle = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweBoldBT;
    color: rgb(255, 255, 255);
    text-align: center;
    font-size: 35px;
    color: white;
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
      rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
      rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
      rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
      rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
      rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
      rgb(0 0 0) 1.92034px -0.55883px 0px;
    @media only screen and (max-width: 660px) {
      font-size: 15px;
    }
  }
`;

export const DeckCardDetails = styled(Typography)`
  &.MuiTypography-root {
    text-align: center;
    font-family: BelweBoldBT;
    color: rgb(255, 255, 255);
    margin-right: 20px;
    font-size: 13px;
    color: white;
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
      rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
      rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
      rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
      rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
      rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
      rgb(0 0 0) 1.92034px -0.55883px 0px;
    @media only screen and (max-width: 660px) {
      font-size: 8px;
      margin-right: 0px;
    }
  }
`;

export const DeckCardsAmount = styled(Typography)`
  &.MuiTypography-root {
    text-align: center;
    font-family: BelweBoldBT;
    color: rgb(255, 255, 255);
    margin-right: 20px;
    font-size: 15px;
    color: rgb(252, 209, 68);
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
      rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
      rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
      rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
      rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
      rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
      rgb(0 0 0) 1.92034px -0.55883px 0px;
    @media only screen and (max-width: 660px) {
      font-size: 8px;
      margin-right: 0px;
    }
  }
`;

export const DetailsContainer = styled(Box)``;
