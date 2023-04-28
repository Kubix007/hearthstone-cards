import { Box, Typography } from "@mui/material";
import * as Types from "./DeckListClassBackground.types";
import styled from "styled-components";

export const DeckListBackground = styled(Box)<Types.Props>`
  background-image: url(${(props) => props.backgroundImg});
  position: absolute;
  top: 21%;
  left: 4.5%;
  background-size: 100%;
  width: 82%;
  height: 62%;
  z-index: 1;
  background-repeat: no-repeat;
  background-position: left top;
  display: flex;
`;

export const DeckListTitle = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweBoldBT;
    color: rgb(255, 255, 255);
    text-align: left;
    margin-left: 4px;
    font-size: 15px;
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

export const DeckListCardsAmount = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweBoldBT;
    color: rgb(255, 255, 255);
    text-align: left;
    margin-left: 4px;
    font-size: 18px;
    color: rgb(252, 209, 68);
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
      rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
      rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
      rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
      rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
      rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
      rgb(0 0 0) 1.92034px -0.55883px 0px;
  }
`;

export const DetailsContainer = styled(Box)``;
