import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import * as Types from "./DeckDetailsManaCosts.types";

export const ManaContainer = styled(Box)`
  position: absolute;
  height: 110px;
  width: 277px;
  right: 40px;
  bottom: 80px;
`;

export const ManaColumn0 = styled(Box)<Types.IManaValues>`
  left: 4px;
  width: 5%;
  height: ${(props) => (props.$manaValue / props.$highestManaValue) * 100}%;
  max-height: 100%;
  bottom: 0px;
  position: absolute;
  background: rgb(252, 209, 68);
  transition: all 0.15s ease-out 0s;
  border: 1px solid rgb(249, 235, 99);
  border-radius: 2px;
`;

export const ManaColumn1 = styled(Box)<Types.IManaValues>`
  left: 40px;
  width: 5%;
  height: ${(props) => (props.$manaValue / props.$highestManaValue) * 100}%;
  max-height: 100%;
  bottom: 0px;
  position: absolute;
  background: rgb(252, 209, 68);
  transition: all 0.15s ease-out 0s;
  border: 1px solid rgb(249, 235, 99);
  border-radius: 2px;
`;

export const ManaColumn2 = styled(Box)<Types.IManaValues>`
  left: 76px;
  width: 5%;
  height: ${(props) => (props.$manaValue / props.$highestManaValue) * 100}%;
  max-height: 100%;
  bottom: 0px;
  position: absolute;
  background: rgb(252, 209, 68);
  transition: all 0.15s ease-out 0s;
  border: 1px solid rgb(249, 235, 99);
  border-radius: 2px;
`;

export const ManaColumn3 = styled(Box)<Types.IManaValues>`
  left: 112px;
  width: 5%;
  height: ${(props) => (props.$manaValue / props.$highestManaValue) * 100}%;
  max-height: 100%;
  bottom: 0px;
  position: absolute;
  background: rgb(252, 209, 68);
  transition: all 0.15s ease-out 0s;
  border: 1px solid rgb(249, 235, 99);
  border-radius: 2px;
`;

export const ManaColumn4 = styled(Box)<Types.IManaValues>`
  left: 148px;
  width: 5%;
  height: ${(props) => (props.$manaValue / props.$highestManaValue) * 100}%;
  max-height: 100%;
  bottom: 0px;
  position: absolute;
  background: rgb(252, 209, 68);
  transition: all 0.15s ease-out 0s;
  border: 1px solid rgb(249, 235, 99);
  border-radius: 2px;
`;

export const ManaColumn5 = styled(Box)<Types.IManaValues>`
  left: 184px;
  width: 5%;
  height: ${(props) => (props.$manaValue / props.$highestManaValue) * 100}%;
  max-height: 100%;
  bottom: 0px;
  position: absolute;
  background: rgb(252, 209, 68);
  transition: all 0.15s ease-out 0s;
  border: 1px solid rgb(249, 235, 99);
  border-radius: 2px;
`;

export const ManaColumn6 = styled(Box)<Types.IManaValues>`
  left: 220px;
  width: 5%;
  height: ${(props) => (props.$manaValue / props.$highestManaValue) * 100}%;
  max-height: 100%;
  bottom: 0px;
  position: absolute;
  background: rgb(252, 209, 68);
  transition: all 0.15s ease-out 0s;
  border: 1px solid rgb(249, 235, 99);
  border-radius: 2px;
`;

export const ManaColumn7 = styled(Box)<Types.IManaValues>`
  left: 256px;
  width: 5%;
  height: ${(props) => (props.$manaValue / props.$highestManaValue) * 100}%;
  max-height: 100%;
  bottom: 0px;
  position: absolute;
  background: rgb(252, 209, 68);
  transition: all 0.15s ease-out 0s;
  border: 1px solid rgb(249, 235, 99);
  border-radius: 2px;
`;

export const ManaValue = styled(Typography)`
  &.MuiTypography-root {
    position: relative;
    top: -25px;
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
