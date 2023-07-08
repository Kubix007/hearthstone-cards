import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import * as Types from "./MobileDeckButton.types";

export const Container = styled(Box)`
  position: -webkit-sticky;
  position: sticky;
  top: 10.1%;
  width: 74px;
  height: 105px;
  z-index: 100;
  cursor: pointer;
`;

export const MobileDeckBackground = styled(Box)`
  background-image: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/icon_cardpack-ce20a047e859e03a832ea7072fc194b157d4340b2c3069660f47a750c6e6ec19463575e1cf58d8b5643c8270761f424ce783041af33a5cfd2002386c7e1e187b.png);
  width: 74px;
  height: 105px;
  filter: drop-shadow(rgb(255, 150, 0) 0px 0px 5px);
  animation: 1.5s ease-in-out 0s infinite alternate none running pulse;
`;

export const CardCount = styled(Typography)`
  &.MuiTypography-root {
    position: relative;
    bottom: 93px;
    font-family: BelweBoldBT;
    font-size: 20px;
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

export const ClassImage = styled(Box)<Types.ImageProps>`
  background: url(${(props) => props.$backgroundImg});
  width: 35px;
  height: 35px;
  background-size: contain;
  background-color: transparent;
  position: relative;
  bottom: 99px;
  right: 0.009px;
  cursor: pointer;
`;
