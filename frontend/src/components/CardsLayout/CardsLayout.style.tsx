import styled from "styled-components";
import { Box, Paper, Typography } from "@mui/material";
import * as Types from "./CardsLayout.types";

export const Container = styled.div`
  transition: transform 0.4s;
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(rgb(255, 255, 255) 0px 0px 15px);
  }
`;

export const Card = styled(Paper)<Types.ImageProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background-color: transparent;
  box-shadow: none;
  &.MuiPaper-root {
    box-shadow: none;
    background: none;
  }
  ${(props) => {
    if (props.value !== 0 && props.value % props.max === 0) {
      return "filter: brightness(0.6);";
    } else {
      return null;
    }
  }}
`;

export const Cover = styled.img`
  height: 320px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  filter: drop-shadow(rgba(0, 0, 0, 0.6) 0px 3px 3px);
`;

export const CardCount = styled(Box)<Types.ImageProps>`
  @keyframes shake {
    0% {
      transform: translate(0, 0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translate(-10px, 0);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translate(10px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  &.shake {
    animation: shake 0.8s;
  }

  ${(props) => {
    if (props.value !== 0 && props.value % props.max === 0) {
      return "background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_card_number_max-55567773ec915905aab635e21dedcff661c2466ab2d7b38825b1d9240e3e44b2b5e42ee8b051691edf1b90ea7f2b178f27ad946bcf9ed238cdf92397065ea637.png) right top no-repeat; width: 96px; height: 54px;";
    } else {
      return "background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_card_number-f7bb8f56159432f61d3cddb73eaf73766895cfad9d3a6622dccb04ec8dff614e7593f14bd73333370edbf408d5ecf3115f70d9937aed56e766325f5491c809b2.png) center top no-repeat; width: 75px; height: 54px;";
    }
  }}
`;

export const CardCountText = styled(Typography)<Types.ImageProps>`
  &.MuiTypography-root {
    position: relative;
    top: 9px;
    font-family: BelweBoldBT;
    color: rgb(255, 255, 255);
    font-size: 20px;
    color: white;
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
      rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
      rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
      rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
      rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
      rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
      rgb(0 0 0) 1.92034px -0.55883px 0px;
    ${(props) => {
      if (props.value !== 0 && props.value % props.max === 0) {
        return "left: 5px";
      } else {
        return null;
      }
    }}
  }
`;
